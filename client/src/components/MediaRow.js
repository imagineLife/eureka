import React, { PureComponent } from 'react';

import filesize from 'filesize';

import ContextMenu from './ContextMenu';


import utility from './../utility/utility';

import path from 'path';

var pathParse = require('path-parse');

import classNames from 'classnames';
import Icon from './Icon';

import { FormattedMessage } from 'react-intl';

import definedMessages from '../i18n/definedMessages';

class MediaRow extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      focusWithin: false
    };
  }


  shouldComponentUpdate(nextProps, nextState) {
    //console.log('MediaRow shouldComponentUpdate', this.props, nextProps);
    if(this.props.item !== nextProps.item) return true;
    try {
      console.log((nextProps.focusedMediaItem !== undefined));
      return (nextProps.focusedMediaItem !== undefined);
    } catch(e) {}
    console.log('MediaRow should not update');
    return false;
  }

  onBlur(event) {
    //console.log('onBlur');
  }

  removeFocusedMediaItems(target) { // super #janky but haven't been able to optimize another way
    //console.log(`tr[role="row"]:not(#${target.getAttribute('id')})`);
    const focusedMediaItems = target.closest('tbody').querySelectorAll(`tr[role="row"]`); // :not(#${target.getAttribute('id')})
    for(let i = 0; i < focusedMediaItems.length; i++) {
      if(focusedMediaItems[i].getAttribute('id') !== target.getAttribute('id')) {
        focusedMediaItems[i].classList.remove('eureka__focused-media-item');
        focusedMediaItems[i].querySelector('.eureka__context-row').setAttribute('hidden', 'true');
      }
    }
  }

  onFocus(event) {
    if(!event.target.matches('tr')) return;

    this.removeFocusedMediaItems(event.target);
    event.target.classList.add('eureka__focused-media-item');
    event.target.querySelector('.eureka__context-row').removeAttribute('hidden');
    this.props.onFocus();
  }

  render() {
    const props = this.props,
    item = props.item,
    index = props.index,
    formatMessage = props.intl.formatMessage,
    ariaLabel = `${props.item.filename} displays at ${props.item.dimensions.join('x')}, weighs ${filesize(props.item.fileSize, {round: 0})}, and was edited on ${new Date(props.item.editedOn).toLocaleString(props.view.locale,{ weekday:'long', year: 'numeric', month: 'long', day: '2-digit', timeZoneName: 'long' })}`;

    function shouldHide(item) {
      //console.log('shouldHide', item);
      try {
        //console.log('shouldHide',props.focusedMediaItem.path,item.path,props.focusedMediaItem.path !== item.path);
        return props.focusedMediaItem.path !== item.path
      } catch(e) {
        //console.log('shouldHide',true);
        return true;
      }
    }

    const contentEditable = false;

    let media = (function(ext){ // consider abstracting this to its own module
      //console.log(pathParse(props.item.filename).ext,'props.item',props.item);

      switch(ext.toLowerCase()) {
        case '.jpg':
        case '.jpeg':
        case '.gif':
        case '.png':
        case '.png8':
        case '.png24':
        case '.svg':
        case '.bmp':
        case '.tiff':
        return (<img src={props.item.absoluteURL}  alt="" />);
        break;

        case '.mp4':
        case '.mov':
        return (
          <video width="320" height="240" controls={props.view.mode !== 'list'}>
            <source src={props.item.absoluteURL} type="video/mp4" />
            <FormattedMessage id="support.noVideo" defaultMessage="Your browser does not support the video tag." />
          </video>
        );
        break;

        case '.ogv':
        return (
          <video width="320" height="240"  controls={props.view.mode !== 'list'}>
            <source src={props.item.absoluteURL} type="video/ogg" />
            <FormattedMessage id="support.noVideo" defaultMessage="Your browser does not support the video tag." />
          </video>
        );
        break;

        case '.webm':
        case '.wbm':
        return (
          <video width="320" height="240"  controls={props.view.mode !== 'list'}>
            <source src={props.item.absoluteURL} type="video/webm" />
            <FormattedMessage id="support.noVideo" defaultMessage="Your browser does not support the video tag." />
          </video>
        );
        break;

        case '.pdf':
        return (
          <embed src={props.item.absoluteURL} width="320" height="240" />
        );
        break;

        case '.ogg':
        return (
          <audio controls>
            <source src={props.item.absoluteURL} type="audio/ogg" />
            <FormattedMessage id="support.noAudio" defaultMessage="Your browser does not support the audio tag." />
          </audio>
        );
        break;

        case '.mp3':
        return (
          <audio controls>
            <source src={props.item.absoluteURL} type="audio/mpeg" />
            <FormattedMessage id="support.noAudio" defaultMessage="Your browser does not support the audio tag." />
          </audio>
        );
        break;

        case '.wav':
        return (
          <audio controls>
            <source src={props.item.absoluteURL} type="audio/wav" />
            <FormattedMessage id="support.noAudio" defaultMessage="Your browser does not support the audio tag." />
          </audio>
        );
        break;

        case '.flac':
        return (
          <audio controls>
            <source src={props.item.absoluteURL} type="audio/flac" />
            <FormattedMessage id="support.noAudio" defaultMessage="Your browser does not support the audio tag." />
          </audio>
        );
        break;

        default:
        const icon = utility.getIconByExtension(pathParse(props.item.filename).ext);
        return (<p><Icon {...props} icon={icon} />&ensp;{props.item.absoluteURL}</p>);
      }
    })(pathParse(props.item.filename).ext);

    if((props.item == props.focusedMediaItem)) console.log(props.item == props.focusedMediaItem, props.item, props.focusedMediaItem);


    const mediaId = `${props.config.storagePrefix || 'eureka__'}__media__${utility.cssSafe(props.item.filename)}`,
    mediaSelectId = `${props.config.storagePrefix || 'eureka__'}__radio_${utility.cssSafe(props.item.filename)}`,
    mediaSelect = (utility.serverSideRendering) ? <td><input id={mediaSelectId} value={props.item.filename} name="eureka__chosen_item" type="radio" aria-labelledby={`${props.config.storagePrefix !== undefined ? props.config.storagePrefix : 'eureka__' }choose-button`} aria-describedby={`${mediaId} ${utility.cssSafe(props.item.filename)}`} /><span className="visually-hidden">&ensp;<FormattedMessage id="select" defaultMessage="Select" /> {props.item.filename}</span></td> : undefined,
    className = (props.item == props.focusedMediaItem) ? {'eureka__focused-media-item':true} : {},
    tabIndex = (utility.serverSideRendering) ? undefined : "0",
    ext = pathParse(props.item.absoluteURL).ext,
    isLinkableFileType = ((ext) => {
      switch(ext.toLowerCase()) {
        case '.jpg':
        case '.jpeg':
        case '.gif':
        case '.png':
        case '.png8':
        case '.png24':
        case '.svg':
        case '.bmp':
        case '.tiff':
        return true;
        break;

        default:
        return false;
      }
    })(ext);

    const openInANewTabMessage = formatMessage(definedMessages.openFileInNewTab, {
      filename: props.item.fileName
    });

    if(utility.serverSideRendering && isLinkableFileType) {
      //media = <label style={{display:'block'}} htmlFor={mediaSelectId} aria-labelledby={`${props.config.storagePrefix !== undefined ? props.config.storagePrefix : 'eureka__' }filename__${utility.cssSafe(props.item.filename)}`}>{media}</label>;
      media = <a href={props.item.absoluteURL} target={`_${mediaSelectId}`} aria-label={openInANewTabMessage} role="presentation">{media}</a>;
    }

    let fileName = utility.wordBreaksEvery(props.item.filename);
    if(utility.serverSideRendering) {
      //fileName = <a href={`#${mediaSelectId}`} role="presentation" tabIndex="-1" id={`${props.config.storagePrefix !== undefined ? props.config.storagePrefix : 'eureka__' }filename__${utility.cssSafe(props.item.filename)}`}>{fileName}</a>
      fileName = (<label htmlFor={mediaSelectId}>{fileName}</label>);
    }
    return (

      <tr role="row" className={classNames(className)} id={utility.cssSafe(props.item.filename)} aria-label={ariaLabel} role="row" tabIndex={tabIndex} onFocus={this.onFocus.bind(this)} onBlur={this.onBlur.bind(this)} contextMenu={`context_menu__tbody-${props.index}`}>
        {mediaSelect}
        <td role="gridcell" id={mediaId} title={ariaLabel} className="eureka__td-media" onDoubleClick={(event) => {
          document.dispatchEvent(new CustomEvent('EurekaFoundIt', {
            detail: props.item
          }));
        }}>
          <span className="visually-hidden"><FormattedMessage id="media.contents" defaultMessage="Media Contents" /></span>
          {media}
        </td>
        <td role="gridcell" id={`${props.config.storagePrefix !== undefined ? props.config.storagePrefix : 'eureka__' }filename__${utility.cssSafe(props.item.filename)}`} role="gridcell" className="eureka__td-filename" contentEditable={contentEditable} onBlur={(event) => {
            try {
              if(!(event.target.innerHTML).trim()) {
                event.target.innerHTML = props.item.filename;
                //alert('file name cannot be empty'); // i mostly hate alerts
                throw new Error('file name cannot be empty');
              }

              //console.log(event.target.innerHTML, event.target.innerHTML.trim());
              props.onRenameItemModalSubmit((event.target.innerHTML.trim()), props.item);
            } catch (e) {
              console.log(e);
            }
          }}
          onKeyUp={(event) => {
             //console.log('onKeyUp', event);
           }}
           onKeyDown={(event) => {
              //console.log('onKeyDown', event, event.keyCode);
              if(event.keyCode === 13) {
                event.preventDefault();
                event.target.blur();
              }
           }}
           onPaste={(event) => {
              console.log('onPaste', event);
           }}
           onCopy={(event) => {
              console.log('onCopy', event);
           }}
           onCut={(event) => {
              console.log('onCut', event);
           }}
           >
          {fileName}
        </td>
        <ContextMenu className="eureka__context-row" {...props} item={item}  hidden={shouldHide(item)} key={`cm__${index}`} />
        <td role="gridcell">
          {`${props.item.dimensions[0]}x${props.item.dimensions[1]}`}
        </td>
        <td role="gridcell">
          {filesize(props.item.fileSize)}
        </td>
        <td role="gridcell" title={new Date(props.item.editedOn).toLocaleString(props.view.locale, { weekday:'long', year: 'numeric', month: 'long', day: '2-digit', timeZoneName: 'long' })}>
          {new Date(props.item.editedOn).toLocaleString(props.view.locale, { year: '2-digit', month: '2-digit', day: '2-digit' })}
        </td>
      </tr>
    );
  }
}

export default MediaRow;
