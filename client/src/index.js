import React from 'react';
import ReactDOM from 'react-dom';

import EurekaMediaBrowser from './EurekaMediaBrowser';

import lazyLoadScript from 'lazyload-script';

import ReactIntl, {ReactIntlLocaleData, addLocaleData} from 'react-intl';

const language = document.documentElement.lang || ((navigator.languages && navigator.languages[0]) || navigator.language || navigator.userLanguage);
const languageWithoutRegionCode = language.toLowerCase().split(/[_-]+/)[0];
const languageKey = languageWithoutRegionCode.toLowerCase();

if(languageKey != 'en') {
  Promise.all([
    lazyLoadScript(`https://unpkg.com/react-intl@latest/locale-data/${languageKey}.js`, `react-intl-${languageKey.toLowerCase()}.js`)
  ]).then((data) => {
    console.log('YloLo!')
    console.log(data);
    console.log('window.ReactIntlLocaleData[languageKey]',window.ReactIntlLocaleData[languageKey]);
    addLocaleData(window.ReactIntlLocaleData[languageKey]);
  }).then(() => (
    render()
  ));
} else {
  render();
}


function render() {
  ReactDOM.render(
    <EurekaMediaBrowser
      basePath="/core/components/eureka/"
      allowUploads={true}
      lang={languageKey}
      useLocalStorage={false}
      allowRename={true}
      allowDelete={true}
      confirmBeforeDelete={true}
      allowFullscreen={true}
      enlargeFocusedRows={false}
      allowFullscreen={true}
      emphasisFocusedMediaItem={true}
      storagePrefix={'eureka__'}
      lang="en-US"
      callbacks={{
        choose: function(item) {
          alert('yolo')
        }
      }}
      endpoints={{
        i18n: './assets/js/i18n/locales/'
      }}
    />,
    document.getElementById('root')
  );
}
