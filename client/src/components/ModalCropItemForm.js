import React, { Component } from 'react';

import path from 'path';

import classNames from 'classnames';

import Icon from './Icon';

import { FormattedMessage, FormattedPlural, FormattedNumber, FormattedRelative, injectIntl } from 'react-intl';

import definedMessages from '../i18n/definedMessages';

const pathParse = require('path-parse');

const CropperJS = (() => {
  try {
    return require('react-cropperjs')
  } catch (e) {
    return undefined;
  }
})();

import utility from '../utility/utility';

import store from '../model/store';
import actions from '../model/actions';

class ModalCropItemForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: false,
      crop: {},
      guides: true,
      dragMode: 'crop',
      cropData: undefined,
      showFormControls: props.view.showAdvControls
    };

    this.decoratedActions = props.decoratedActions ? Object.assign({}, actions, props.decoratedActions) : actions;

  }

  componentDidMount() {
    //this.refs.input.focus(); // simulate HTML5 autofocus
    this.img = document.querySelector(`tr[id="${utility.cssSafe(this.props.item.filename)}"]`).querySelector('img');
    this.modal = document.querySelector('.eureka__crop-modal');
  }

  componentWillUpdate() {
    //this.setDownloadDataURL();
  }


  componentWillUnmount() {
    //this.cropper.destroy();
  }

  _crop(event) {
    // image in dataUrl
    console.log(event.detail);

    this.setState({
      crop: event.detail,
      cropData: this.cropper.getData()
    })
    //this.img.setAttribute('src', this.cropper.getCroppedCanvas().toDataURL());


    //ctx.filter = 'blur(5px)';
    //console.log(this.cropper.getCroppedCanvas().toDataURL());
  }

  setDownloadDataURL() {
    const canvas = this.cropper.getCroppedCanvas();
    let mimeType = undefined;

    switch(pathParse(this.props.item.filename).ext) {
      case '.jpg':
      case '.jpeg':
      mimeType = 'image/jpeg';
      break;
    }
    canvas.toBlob((blob) => {
      this.setState({
        //dataURL: this.cropper.getCroppedCanvas().toDataURL(mimeType).toString()
        dataURL: window.URL.createObjectURL(blob),
        cropData: this.cropper.getData()
      })
    })
  }

  cropend = (event) => {
    console.log('cropend');
    this.setDownloadDataURL();
    //document.querySelector('.eureka__crop-modal a[download]').setAttribute('href', this.cropper.getCroppedCanvas().toDataURL());
  }

  ready = (event) => {
    //console.log('ready');
    this.setDownloadDataURL();

    if(this.state.uploadedImageURL) {
      URL.revokeObjectURL(this.state.uploadedImageURL);
      this.setState({
        uploadedImageURL: undefined,
        cropData: this.cropper.getData()
      })
    }
  }

  onSubmit = (event) => {
    const props = this.props;
      event.preventDefault();

      store.dispatch(actions.updateView({
        isCropping: true
      }));
      this.setState({disabled: true});

      const canvas = this.cropper.getCroppedCanvas();
      //this.img.setAttribute('src', this.cropper.getCroppedCanvas().toDataURL());
      //store.dispatch(decoratedActions.uploadFiles(props.source.currentSource, props.content.cd, formData, props.config.headers))

      canvas.toBlob((blob) => {
        const formData = new FormData();
        formData.append('eureka__uploadFiles', blob, this.props.item.filename);

        store.dispatch(this.decoratedActions.uploadFiles(props.source.currentSource, props.content.cd, formData, props.config.headers)).then(() => {
          this.img.setAttribute('src', this.cropper.getCroppedCanvas().toDataURL());
          store.dispatch(actions.updateContent({ // fetch new stuff from server, will trigger a re-render if needed
            cd: props.content.cd
          }));
          props.onCancel(); // all done, close the model
        }).catch((err) => (console.log(err)))
      });

  }

  render() {
    //console.log('ModalCropitemForm render')
    const state = this.state;
    const props = this.props;

    const formatMessage = props.intl.formatMessage;
    /*
    <label htmlFor="eureka__crop-scaleX">scaleX <input id="eureka__crop-scaleX" name="scaleX" type="number" size="5" min="0" step=".25" value={(this.state.crop.scaleX)} onChange={(event) => {
      this.cropper.setData(Object.assign({}, this.state.crop, {
        scaleX: parseFloat(event.target.value)
      }));
    }} /> </label>
    <label htmlFor="eureka__crop-scaleY">scaleY <input id="eureka__crop-scaleY" name="scaleY" type="number" size="5" min="0" step=".25" value={(this.state.crop.scaleY)} onChange={(event) => {
      this.cropper.setData(Object.assign({}, this.state.crop, {
        scaleY: parseFloat(event.target.value)
      }));
    }} /> </label>
    */

    return (
      <div onChange={(event) => {
        this.setDownloadDataURL();
      }}>
      <label htmlFor="eureka__crop_show-adv-controls">
        <input id="eureka__crop_show-adv-controls" name="eureka__crop_show-adv-controls" type="checkbox" onChange={(event) => {
          this.setState({
            showFormControls: event.target.checked
          });
          store.dispatch(actions.updateView({
            showAdvControls: event.target.checked
          }))
        }} checked={this.state.showFormControls} value="yes" />&ensp;
        <FormattedMessage id="showAdvControls" defaultMessage="Show Advanced Controls" />

      </label>
        <div>
          <CropperJS
            data={this.state.cropData}
            key={`cropper_${this.state.guides ? 'guides' : ''}_${this.state.dragMode}`}
            ref={(cropper) => { this.cropper = cropper; }}
            src={props.view.focusedMediaItem.absoluteURL}
            style={{height: window.innerHeight - 300, width: '100%'}}
            // Cropper.js options
            //aspectRatio={16 / 9}
            guides={this.state.guides}
            dragMode={this.state.dragMode}
            crop={this._crop.bind(this)}
            cropend={this.cropend}
            ready={this.ready}
            zoomOnWheel={props.config.zoomOnWheel}
          />
        </div>

        <div className="balanced flex-bar" hidden={!this.state.showFormControls}>
          <form>

            <fieldset>
              <legend className="visually-hidden"><FormattedMessage id="dragMode" defaultMessage="Drag Mode" /></legend>
              <div className="icon-bar flex-bar">
                <input onChange={(event) => {
                  this.setState({
                    dragMode: event.target.value,
                    cropData: this.cropper.getData()
                  });
                }} id="eureka__crop-drag-mode-move" name="eureka__crop-drag-mode" className="visually-hidden" type="radio" value="move" checked={this.state.dragMode == 'move'} />
                <label htmlFor="eureka__crop-drag-mode-move" className="button" title={formatMessage(definedMessages['cropMove'])}>
                  <span className="visually-hidden"><FormattedMessage id="crop.move" defaultMessage="Move" /></span>
                  <Icon {...props} icon="arrows" />
                </label>

                <input onChange={(event) => {
                  this.setState({
                    dragMode: event.target.value,
                    cropData: this.cropper.getData()
                  });
                }} id="eureka__crop-drag-mode-crop" name="eureka__crop-drag-mode" className="visually-hidden" type="radio" value="crop" checked={this.state.dragMode == 'crop'} />
                <label htmlFor="eureka__crop-drag-mode-crop" className="button"  title={formatMessage(definedMessages['crop'])}>
                  <span className="visually-hidden"><FormattedMessage id="crop" defaultMessage="Crop" /></span>
                  <Icon {...props} icon="crop" />
                </label>
              </div>
            </fieldset>

          </form>

          <div className="icon-bar flex-bar">
            <button aria-pressed={this.state.guides} onClick={(event) => {
              this.setState({
                guides: !this.state.guides,
                cropData: this.cropper.getData()
              })
            }} title={formatMessage(definedMessages['cropToggleGuides'])}>
              <span className="visually-hidden"><FormattedMessage id="crop.showGuides" defaultMessage="Show Guides" /></span>
              <Icon {...props} icon="table" />
            </button>
          </div>
          <div className="icon-bar flex-bar">
            <button onClick={(event) => {
              this.cropper.zoom(.1)
            }} title={formatMessage(definedMessages['cropZoomIn'])}>
              <span className="visually-hidden"><FormattedMessage id="crop.zoomIn" defaultMessage="Zoom In" /></span>
              <Icon {...props} icon="search-plus" />
            </button>
            <button onClick={(event) => {
              this.cropper.zoom(-.1)
            }} title={formatMessage(definedMessages['cropZoomOut'])}>
              <span className="visually-hidden"><FormattedMessage id="crop.zoomOut" defaultMessage="Zoom Out" /></span>
              <Icon {...props} icon="search-minus" />
            </button>
          </div>
          <div className="icon-bar flex-bar">
            <button onClick={(event) => {
              this.cropper.move(-1,0)
            }} title={formatMessage(definedMessages['cropMoveLeft'])}>
              <span className="visually-hidden"><FormattedMessage id="crop.moveLeft" defaultMessage="Move Left" /></span>
              <Icon {...props} icon="arrow-left" />
            </button>
            <button onClick={(event) => {
              this.cropper.move(1,0)
            }} title={formatMessage(definedMessages['cropMoveRight'])}>
              <span className="visually-hidden"><FormattedMessage id="crop.moveRight" defaultMessage="Move Right" /></span>
              <Icon {...props} icon="arrow-right" />
            </button>
            <button onClick={(event) => {
              this.cropper.move(0,1)
            }} title={formatMessage(definedMessages['cropMoveUp'])}>
              <span className="visually-hidden"><FormattedMessage id="crop.moveUp" defaultMessage="Move Up" /></span>
              <Icon {...props} icon="arrow-up" />
            </button>
            <button onClick={(event) => {
              this.cropper.move(0,-1)
            }} title={formatMessage(definedMessages['cropMoveDown'])}>
              <span className="visually-hidden"><FormattedMessage id="crop.moveDown" defaultMessage="Move Down" /></span>
              <Icon {...props} icon="arrow-down" />
            </button>
          </div>
          <div className="icon-bar flex-bar">
            <a href={this.state.dataURL} className="button" download={props.item.filename} title={formatMessage(definedMessages['cropDownload'])}>
              <span className="visually-hidden"><FormattedMessage id="crop.download" defaultMessage="Download Cropped Image" /></span>
              <Icon {...props} icon="download" />
            </a>
            <form className="button" ref={(imageUploadForm) => { this.imageUploadForm = imageUploadForm; }} onSubmit={(event) => {
              event.preventDefault();

              const files = this.uploadFile.files;
              let file;
              let uploadedImageURL;

              const URL = window.URL || window.webkitURL;

              if (files && files.length) {
                file = files[0];
                uploadedImageURL = URL.createObjectURL(file);
                this.cropper.replace(uploadedImageURL);
                //URL.revokeObjectURL(uploadedImageURL);
              }

              this.setState({
                uploadedImageURL: uploadedImageURL,
                cropData: this.cropper.getData()
              })
            }}>
              <label htmlFor="eureka__crop-upload-file" title={formatMessage(definedMessages['cropUploadImage'])}>
                <Icon {...props} icon="upload" />
                <span className="visually-hidden"><FormattedMessage id="crop.uploadImage" defaultMessage="Upload Image" /></span>
              </label>
              <input required className={classNames({
                'visually-hidden': props.config.autoSubmitForms
              })} onChange={props.config.autoSubmitForms ? (event) => {
                this.submitButton.click()
              } : undefined} ref={(uploadFile) => { this.uploadFile = uploadFile; }} type="file" multiple="multiple" name="eureka__crop-upload-file" id="eureka__crop-upload-file" />
              <button hidden={props.config.autoSubmitForms} ref={(submitButton) => { this.submitButton = submitButton; }} type="submit">
                <span className="visually-hidden"><FormattedMessage id="crop.uploadImage" defaultMessage="Upload Image" /></span>
              </button>
            </form>
          </div>
        </div>

        <form onReset={(event) => {
          this.setDownloadDataURL();
        }} onSubmit={this.onSubmit}>
        <div hidden={!this.state.showFormControls} className="wrappable flex-bar">
        <fieldset className="eureka__crop-bounding-box">
          <details open>
            <summary><legend>
              <FormattedMessage id="crop.boundingBox" defaultMessage="Bounding Box (px)" />
            </legend></summary>
            <div>
              <label htmlFor="eureka__crop-x"><span className="visually-hidden"><FormattedMessage id="crop.X" defaultMessage="X" /></span> <input id="eureka__crop-x" name="x" type="number" size="5" value={Math.round(this.state.crop.x)} onChange={(event) => {
                //this.cropper.moveTo(this.state.crop.x, this.state.crop.y)
                this.cropper.setData(Object.assign({}, this.state.crop, {
                  x: parseInt(event.target.value)
                }));
              }} /> </label>
              <label htmlFor="eureka__crop-y"><span className="visually-hidden"><FormattedMessage id="crop.Y" defaultMessage="Y" /></span> <input id="eureka__crop-y" name="y" type="number" size="5" value={Math.round(this.state.crop.y)} onChange={(event) => {
                this.cropper.setData(Object.assign({}, this.state.crop, {
                  y: parseInt(event.target.value)
                }));
              }} /> </label>
              <label htmlFor="eureka__crop-width"><span className="visually-hidden"><FormattedMessage id="crop.width" defaultMessage="Width" /></span> <input id="eureka__crop-width" name="width" type="number" size="5" value={Math.round(this.state.crop.width)} onChange={(event) => {
                this.cropper.setData(Object.assign({}, this.state.crop, {
                  width: parseInt(event.target.value)
                }));
              }} /> </label>
              <label htmlFor="eureka__crop-height"><span className="visually-hidden"><FormattedMessage id="crop.height" defaultMessage="Height" /></span> <input id="eureka__crop-height" name="height" type="number" size="5" value={Math.round(this.state.crop.height)} onChange={(event) => {
                this.cropper.setData(Object.assign({}, this.state.crop, {
                  height: parseInt(event.target.value)
                }));
              }} /> </label>
            </div>
          </details>
        </fieldset>


        <fieldset className="eureka__crop-bounding-box">
          <details open>
            <summary><legend>
              <FormattedMessage id="crop.aspectRatio" defaultMessage="Aspect Ratio" />
            </legend></summary>
            <div>
              <label htmlFor="eureka__crop-aspect-ratio"><FormattedMessage id="crop.aspectRatio" defaultMessage="Aspect Ratio" /></label>
              <select name="eureka__crop-aspect-ratio" id="eureka__crop-aspect-ratio" onChange={(event) => {
                if(event.target.value) {
                  this.cropper.setAspectRatio(parseFloat(event.target.value))
                } else {
                  this.cropper.setAspectRatio(NaN)
                }
              }}>
                <option value=""><FormattedMessage id="crop.free" defaultMessage="Free" /></option>
                <option value={16/9}>16:9</option>
                <option value={4/3}>4:3</option>
                <option value={1}>1:1</option>
                <option value={2/3}>2:3</option>
              </select>
            </div>
          </details>
        </fieldset>

        <fieldset className="eureka__crop-bounding-box">
          <details open>
            <summary><legend>
              <FormattedMessage id="crop.scaleRotate" defaultMessage="Scale &amp; Rotate" />
            </legend></summary>
            <div>
              <label htmlFor="eureka__crop-rotate"><FormattedMessage id="crop.rotate" defaultMessage="Rotate" /></label>
              <input list="eureka__crop-rotate-list" id="eureka__crop-rotate" name="rotate" type="range" min="-180" max="180" step="1" value="0" value={Math.round(this.state.crop.rotate)} onChange={(event) => {
                this.cropper.setData(Object.assign({}, this.state.crop, {
                  rotate: parseInt(event.target.value)
                }));
              }} />
              <label htmlFor="eureka__crop-scale"><FormattedMessage id="crop.scale" defaultMessage="Scale" /> <input id="eureka__crop-scale" name="scale" type="number" size="5" min="0" step=".125" value={(this.state.crop.scaleX)} onChange={(event) => {
                this.cropper.setData(Object.assign({}, this.state.crop, {
                  scaleX: parseFloat(event.target.value),
                  scaleY: parseFloat(event.target.value)
                }));
              }} /> </label>


              <datalist id="eureka__crop-rotate-list">
                <option value="-180" />
                <option value="-90" />
                <option value="0" />
                <option value="90" />
                <option value="180" />
              </datalist>
            </div>
          </details>
        </fieldset>
        </div>

        <div className="eureka__button-bar flex-bar">
          <button onBlur={(event) => {
              if(state.createDirectory) return;
              this.refs.input.focus();
            }} onClick={props.onCancel}><FormattedMessage id="cancel" defaultMessage="Cancel" /> <span className="visually-hidden"> <FormattedMessage id="directory.cancelCreating" defaultMessage={'Cancel creating directory {cd}'} value={{
              cd: state.createDirectory
            }} values={{
              state: state
            }} /></span></button>
            <button className="dangerous" hidden={!this.state.showFormControls} type="reset" onClick={(event) => {
              this.cropper.reset();
            }}><FormattedMessage id="reset" defaultMessage="Reset" /> </button>
          <button type="submit" onBlur={(event) => { // <span className="spinner"><Icon {...props} icon="circle-o-notch" /></span>
              //this.refs.input.focus();
            }} disabled={false}><FormattedMessage id="crop" defaultMessage="Crop" /></button>
        </div>
        </form>


      </div>

    );
  }


}


export default ModalCropItemForm;
