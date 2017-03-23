# Eureka 🌲

Eureka is a progressively enhanced flexible media browser. Connected to your media sources through a REST API, this accessible web component allows users to browse media sources, upload files, and choose media items.

[Try the demo](https://reacteureka.herokuapp.com/) by waking the heroku dino.
As to be found in [Redactor 3.0](https://www.modmore.com/extras/redactor) by modmore. Contributions&nbsp;welcomed.

> With `eureka.js` users will be saying "I found it!" in no time.
&emsp;&emsp;&mdash; [@mrktps](https://twitter.com/mrktps)

## 💬 Discuss
Join the conversation in our public Gitter chat room.

[![Join the chat at https://gitter.im/jpdevries/eureka](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/jpdevries/eureka?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

## 📚 Wiki
Don't forget to [browse the Wiki](https://github.com/jpdevries/eureka/wiki) for [more information on the REST API](https://github.com/jpdevries/eureka/wiki/REST-API), [patterns](https://github.com/jpdevries/eureka/wiki/Patterns), [screenshots](https://github.com/jpdevries/eureka/wiki/Screenshots) and&nbsp;more.

## 🍻 Support
The Eureka Media Browser is provided free as in beer.  
[Gratuities are accepted through Square&nbsp;Cash](https://cash.me/$MarkupTips).

## Powered By 🚀
 - Progressively Enhanced from HTML components
 - All&ndash;new Virtual DOM powered by React/Redux
 - Node Server Side Rendering
 - Node testing server

## Highlights 🖋
 - Configurable Rest API endpoints
 - Browse multiple media sources for images
 - Drag and Drop Upload Support
 - Flexible Layout
 - Responsive Design
 - Configurable Styles via CSS Variables
 - Accessible
   - supports mobile and touch devices
   - supports `.no-js` via server side rendering
   - ARIA & Keyboard Support
   - high contrast themes

## Features
The level of isomorphism between the client and server side one can achieve with Node is unmatched. Eureka takes advantage of this unique strength of Node by, through an isomorphic server and standard synchronous forms, achieving full support for critical&nbsp;features.

No features rely solely on sight or the use of a mouse. Keyboard use is supported. Accommodations are taken for users that benefit from high contrast themes. Visually hidden text is used to convey aspects of the interface that are otherwise visually implied to screen readers and assistive&nbsp;technology.

The semantic HTML layer remains usable even absent of style as pure&nbsp;HTML.

<table>
  <caption style="text-align:center">Support of features against browser environments</caption>
  <thead>
    <tr>
      <th>Feature</th>
      <th><code>.no-js</code></th>
      <th><code>< IE 9</code></th>
      <th>Chrome</th>
      <th>Safari</th>
      <th>Firefox</th>
      <th>IE 11</th>
      <th>Edge</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Upload multiple files</td>
      <td align="center"><span aria-label="supported">✅</span></td>
      <td align="center"><span aria-label="supported">✅</span></td>
      <td align="center"><span aria-label="supported">✅</span></td>
      <td align="center"><span aria-label="supported">✅</span></td>
      <td align="center"><span aria-label="supported">✅</span></td>
      <td align="center"><span aria-label="supported">✅</span></td>
      <td align="center"><span aria-label="supported">✅</span></td>
    </tr>
    <tr>
      <td>Browse directories</td>
      <td align="center"><span aria-label="supported">✅</span></td>
      <td align="center"><span aria-label="supported">✅</span></td>
      <td align="center"><span aria-label="supported">✅</span></td>
      <td align="center"><span aria-label="supported">✅</span></td>
      <td align="center"><span aria-label="supported">✅</span></td>
      <td align="center"><span aria-label="supported">✅</span></td>
      <td align="center"><span aria-label="supported">✅</span></td>
    </tr>
    <tr>
      <td>Choose a media item</td>
      <td align="center"><span aria-label="supported">✅</span></td>
      <td align="center"><span aria-label="supported">✅</span></td>
      <td align="center"><span aria-label="supported">✅</span></td>
      <td align="center"><span aria-label="supported">✅</span></td>
      <td align="center"><span aria-label="supported">✅</span></td>
      <td align="center"><span aria-label="supported">✅</span></td>
      <td align="center"><span aria-label="supported">✅</span></td>
    </tr>
    <tr>
      <td>Media Source panel</td>
      <td align="center"><span aria-label="not supported">❌</span></td>
      <td align="center"><span aria-label="not supported">❌</span></td>
      <td align="center"><span aria-label="supported">✅</span></td>
      <td align="center"><span aria-label="supported">✅</span></td>
      <td align="center"><span aria-label="supported">✅</span></td>
      <td align="center"><span aria-label="supported">✅</span></td>
      <td align="center"><span aria-label="supported">✅</span></td>
    </tr>
    <tr>
      <td>Async UX</td>
      <td align="center"><span aria-label="not supported">❌</span></td>
      <td align="center"><span aria-label="not supported">❌</span></td>
      <td align="center"><span aria-label="supported">✅</span></td>
      <td align="center"><span aria-label="supported">✅</span></td>
      <td align="center"><span aria-label="supported">✅</span></td>
      <td align="center"><span aria-label="supported">✅</span></td>
      <td align="center"><span aria-label="supported">✅</span></td>
    </tr>
    <tr>
      <td>Filterable Data Table</td>
      <td align="center"><span aria-label="not supported">❌</span></td>
      <td align="center"><span aria-label="not supported">❌</span></td>
      <td align="center"><span aria-label="supported">✅</span></td>
      <td align="center"><span aria-label="supported">✅</span></td>
      <td align="center"><span aria-label="supported">✅</span></td>
      <td align="center"><span aria-label="supported">✅</span></td>
      <td align="center"><span aria-label="supported">✅</span></td>
    </tr>
    <tr>
      <td>Sortable Data Table</td>
      <td align="center"><span aria-label="not supported">❌</span></td>
      <td align="center"><span aria-label="not supported">❌</span></td>
      <td align="center"><span aria-label="supported">✅</span></td>
      <td align="center"><span aria-label="supported">✅</span></td>
      <td align="center"><span aria-label="supported">✅</span></td>
      <td align="center"><span aria-label="supported">✅</span></td>
      <td align="center"><span aria-label="supported">✅</span></td>
    </tr>
    <tr>
      <td>Drag 'n drop uploads</td>
      <td align="center"><span aria-label="not supported">❌</span></td>
      <td align="center"><span aria-label="not supported">❌</span></td>
      <td align="center"><span aria-label="supported">✅</span></td>
      <td align="center"><span aria-label="supported">✅</span></td>
      <td align="center"><span aria-label="supported">✅</span></td>
      <td align="center"><span aria-label="supported">✅</span></td>
      <td align="center"><span aria-label="supported">✅</span></td>
    </tr>
    <tr>
      <td>Grid Layout</td>
      <td align="center"><span aria-label="supported">✅</span></td>
      <td align="center"><span aria-label="not supported">❌</span></td>
      <td align="center"><span aria-label="supported">✅</span></td>
      <td align="center"><span aria-label="supported">✅</span></td>
      <td align="center"><span aria-label="supported">✅</span></td>
      <td align="center"><span aria-label="not supported">❌</span></td>
      <td align="center"><span aria-label="not supported">❌</span></td>
    </tr>
    <tr>
      <td>Flexible Layout</td>
      <td align="center"><span aria-label="supported">✅</span></td>
      <td align="center"><span aria-label="not supported">❌</span></td>
      <td align="center"><span aria-label="supported">✅</span></td>
      <td align="center"><span aria-label="supported">✅</span></td>
      <td align="center"><span aria-label="supported">✅</span></td>
      <td align="center"><span aria-label="supported">✅</span></td>
      <td align="center"><span aria-label="supported">✅</span></td>
    </tr>
    <tr>
      <td>View Chooser</td>
      <td align="center"><span aria-label="not supported">❌</span></td>
      <td align="center"><span aria-label="not supported">❌</span></td>
      <td align="center"><span aria-label="supported">✅</span></td>
      <td align="center"><span aria-label="supported">✅</span></td>
      <td align="center"><span aria-label="supported">✅</span></td>
      <td align="center"><span aria-label="supported">✅</span></td>
      <td align="center"><span aria-label="supported">✅</span></td>
    </tr>
    <tr>
      <td>Pathbar</td>
      <td align="center"><span aria-label="not supported">❌</span></td>
      <td align="center"><span aria-label="not supported">❌</span></td>
      <td align="center"><span aria-label="supported">✅</span></td>
      <td align="center"><span aria-label="supported">✅</span></td>
      <td align="center"><span aria-label="supported">✅</span></td>
      <td align="center"><span aria-label="supported">✅</span></td>
      <td align="center"><span aria-label="supported">✅</span></td>
    </tr>
    <tr>
      <td>Rename Item</td>
      <td align="center"><span aria-label="not supported">❌</span></td>
      <td align="center"><span aria-label="not supported">❌</span></td>
      <td align="center"><span aria-label="supported">✅</span></td>
      <td align="center"><span aria-label="supported">✅</span></td>
      <td align="center"><span aria-label="supported">✅</span></td>
      <td align="center"><span aria-label="supported">✅</span></td>
      <td align="center"><span aria-label="supported">✅</span></td>
    </tr>
    <tr>
      <td>Delete Item</td>
      <td align="center"><span aria-label="not supported">❌</span></td>
      <td align="center"><span aria-label="not supported">❌</span></td>
      <td align="center"><span aria-label="supported">✅</span></td>
      <td align="center"><span aria-label="supported">✅</span></td>
      <td align="center"><span aria-label="supported">✅</span></td>
      <td align="center"><span aria-label="supported">✅</span></td>
      <td align="center"><span aria-label="supported">✅</span></td>
    </tr>
    <tr>
      <td>Local Storage</td>
      <td align="center"><span aria-label="not supported">❌</span></td>
      <td align="center"><span aria-label="not supported">❌</span></td>
      <td align="center"><span aria-label="supported">✅</span></td>
      <td align="center"><span aria-label="supported">✅</span></td>
      <td align="center"><span aria-label="supported">✅</span></td>
      <td align="center"><span aria-label="supported">✅</span></td>
      <td align="center"><span aria-label="supported">✅</span></td>
    </tr>
    <tr>
      <td>Variable Styles</td>
      <td align="center"><span aria-label="supported">✅</span></td>
      <td align="center"><span aria-label="not supported">❌</span></td>
      <td align="center"><span aria-label="supported">✅</span></td>
      <td align="center"><span aria-label="supported">✅</span></td>
      <td align="center"><span aria-label="supported">✅</span></td>
      <td align="center"><span aria-label="not supported">❌</span></td>
      <td align="center"><span aria-label="supported">✅</span></td>
    </tr>
    <tr>
      <td>Accessible Themes</td>
      <td align="center"><span aria-label="supported">✅</span></td>
      <td align="center"><span aria-label="not supported">❌</span></td>
      <td align="center"><span aria-label="supported">✅</span></td>
      <td align="center"><span aria-label="supported">✅</span></td>
      <td align="center"><span aria-label="supported">✅</span></td>
      <td align="center"><span aria-label="not supported">❌</span></td>
      <td align="center"><span aria-label="supported">✅</span></td>
    </tr>
    <tr>
      <td>Mobile First Layout</td>
      <td align="center"><span aria-label="supported">✅</span></td>
      <td align="center"><span aria-label="supported">✅</span></td>
      <td align="center"><span aria-label="supported">✅</span></td>
      <td align="center"><span aria-label="supported">✅</span></td>
      <td align="center"><span aria-label="supported">✅</span></td>
      <td align="center"><span aria-label="supported">✅</span></td>
      <td align="center"><span aria-label="supported">✅</span></td>
    </tr>
    <tr>
      <td>Keyboard Support</td>
      <td align="center"><span aria-label="supported">✅</span></td>
      <td align="center"><span aria-label="supported">✅</span></td>
      <td align="center"><span aria-label="supported">✅</span></td>
      <td align="center"><span aria-label="supported">✅</span></td>
      <td align="center"><span aria-label="supported">✅</span></td>
      <td align="center"><span aria-label="supported">✅</span></td>
      <td align="center"><span aria-label="supported">✅</span></td>
    </tr>
    <tr>
      <td>ARIA Support</td>
      <td align="center"><span aria-label="supported">✅</span></td>
      <td align="center"><span aria-label="partial supported">✳️</span></td>
      <td align="center"><span aria-label="supported">✅</span></td>
      <td align="center"><span aria-label="supported">✅</span></td>
      <td align="center"><span aria-label="supported">✅</span></td>
      <td align="center"><span aria-label="supported">✅</span></td>
      <td align="center"><span aria-label="supported">✅</span></td>
    </tr>
    <tr>
      <td>WCAG Level AA</td>
      <td align="center"><span aria-label="supported">✅</span></td>
      <td align="center"><span aria-label="supported">✅</span></td>
      <td align="center"><span aria-label="supported">✅</span></td>
      <td align="center"><span aria-label="supported">✅</span></td>
      <td align="center"><span aria-label="supported">✅</span></td>
      <td align="center"><span aria-label="supported">✅</span></td>
      <td align="center"><span aria-label="supported">✅</span></td>
    </tr>
    <tr>
      <td>HTML5 Context Menus</td>
      <td align="center"><span aria-label="not supported">❌</span></td>
      <td align="center"><span aria-label="not supported">❌</span></td>
      <td align="center"><span aria-label="can be enabled">🔧</span></td>
      <td align="center"><span aria-label="not supported">❌</span></td>
      <td align="center"><span aria-label="supported">✅</span></td>
      <td align="center"><span aria-label="not supported">❌</span></td>
      <td align="center"><span aria-label="not supported">❌</span></td>
    </tr>
    <tr>
      <td>HTML5 Details</td>
      <td align="center"><span aria-label="supported via polyfills">✳️</span></td>
      <td align="center"><span aria-label="not supported">❌</span></td>
      <td align="center"><span aria-label="supported">✅</span></td>
      <td align="center"><span aria-label="supported">✅</span></td>
      <td align="center"><span aria-label="supported">✅</span></td>
      <td align="center"><span aria-label="partial supported">✳️</span></td>
      <td align="center"><span aria-label="supported">✅</span></td>
    </tr>
    <tr>
      <td>HTML5 Datalist</td>
      <td align="center"><span aria-label="supported via polyfills">✳️</span></td>
      <td align="center"><span aria-label="not supported">❌</span></td>
      <td align="center"><span aria-label="supported">✅</span></td>
      <td align="center"><span aria-label="not supported">❌</span></td>
      <td align="center"><span aria-label="supported">✅</span></td>
      <td align="center"><span aria-label="partial supported">✳️</span></td>
      <td align="center"><span aria-label="supported via polyfills">✳️</span></td>
    </tr>
  </tbody>
</table>

## 🌐 Browser Support
The server side rendering and HTML&ndash;first design patterns begin progressively enhancing a universally supported HTML layer. So basic features are supported in any browser. JavaScript support begins at IE9. Desired CSS layout requires Flexbox and is further enhanced with Grid Layout.

## ♿️ Accessibility Proclaimer
Eureka strives for WCAG Level AA success criteria in all scenarios with some accessibility preference features leaning towards Level AAA. Please [log *any* a11y issues here](https://github.com/jpdevries/eureka/issues).

## ✅ Getting Started
We're going to use `yarn` so make sure that is installed.

```bash
npm install yarn -g
```

To fire up a testing server run the following:

```bash
git clone -b release-2.0 git://github.com/jpdevries/eureka.git
cd eureka
yarn prestart
yarn build
yarn serve # start the  development server
# open http://localhost:3001 # Node server
```

To host the compiled production server run
```bash
yarn start # install, fetch sources, build
```

or
```bash
yarn prod # fire up the production server
```

The testing server hosts the `sources` and `client/build` directories along with a REST API to `GET`, `POST`, `PUT`, `DELETE` media items.

![](http://j4p.us/22241J1A3N06/Screen%20Shot%202017-03-13%20at%2012.56.51%20AM.png)

## ⚒ Development
The Eureka component is created with `create-react-app` and found in the `client` directory. There you can run React tests, build the React component, and start the development server.

Firstly, you'll need the testing server running for the REST API:
```bash
cd eureka
yarn server
```

Now, in another terminal tab:

```bash
cd client
yarn build
yarn test
yarn start
# open http://localhost:3000 # development server
```

The development server, like any other React app created with `create-react-app`, will automatically inject changes as you save changes to your source files.

## 🛠 Usage

**HTML**
```html
<div id="eureka-root">
  <!-- for performance, optimization, and accessibility it best to support server-side rendering by initially delivering a base HTML layer
  see server-side rendering below -->
</div>

```

**JS**
```js
import React from 'react';
import ReactDOM from 'react-dom';
import { EurekaMediaBrowser } from 'eureka-browser';

ReactDOM.render(
  <EurekaMediaBrowser />,
  document.getElementById('eureka-root')
);
```

Eureka will then be injected into the DOM and eagerly reach out to the REST API for the JSON data it needs to offer the&nbsp;interface.

Configure the `EurekaMediaBrowser` via the optional attributes found in the default configuration&nbsp;below:
```xml
  <EurekaMediaBrowser
    basePath="/"
    allowUploads={true}
    treeHidden={true}
    useLocalStorage={true}
    storagePrefix="eureka__"
    allowRename={true}
    allowDelete={true}
    confirmBeforeDelete={false}
    locale="en-US"
    mediaSource="0"
    currentDirectory="/"
    headers={{
        'Powered-By': 'Eureka by Markup.tips'
    }}
    intervals={{
      searchBarPlaceholder: false,
      fetchDirectoryContents: 18000,
      updateSourceTree: false
    }}
  />
```
## ⚙️ Options

| Option        | Default           | Description  |
| ------------- |:-------------:| -----|
| `basePath`      | `"/"` | Prepended to URLs for XHR requests to the Rest API.<br>Set to the absolute path of your Rest API. |
| `allowUploads`      | `true`      |   Whether or not to allow uploading of media items |
| `treeHidden` | `true`      |    Whether or not the Media Source tree "sidebar" should be initially closed |
| `useLocalStorage` | `true`      |    Whether or not to use the JavaScript `localStorage` API to remember session data such as the last visited directory and view mode preference |
| `storagePrefix` | `"eureka__"`      |    Prepended to `localStorage` keys |
| `allowRename` | `true`      |    Whether or not to offer users the ability to rename directories and media items |
| `allowDelete` | `true`      |    Whether or not to offer users the ability to delete directories and media items |
| `confirmBeforeDelete` | `false`      |    Whether or not to confirm intent before users delete directories and media items |
| `locale` | `"en-US"`      |    The localization to use. See Lexicons. |
| `mediaSource` | `undefined`      |    The default initial media source id to use |
| `currentDirectory` | `"/"`      |    The default initial directory to use |
| `headers` | `{'Powered-By': 'Eureka by Markup.tips'}`      |    Additional request headers sent with XHR requests |
| `intervals` | `{searchBarPlaceholder: false,fetchDirectoryContents: 18000,updateSourceTree: false}`      |    Intervals for whether or not and how often to update the  |
| `enlargeFocusedRows` | `false`      |    Whether or not to enlarge thumbnails of focused rows |
| `mode` | `"table"`      |    Initial view mode (table, thumb, grid, list) |
| `sort` | `"name"`      |    Initial column to sort media items on |
| `allowFullscreen` | `true`      |    Whether or not the interface should offer a fullscreen button |
| `emphasisFocusedMediaItem` | `true`      |    Whether or not to emphasis selected media items (defaults to emphasizing the filename, only applies to table and list view modes) |

## 🗄 REST API
Eureka is hungry. It needs a REST API to feed it JSON data.  
Find docs at the [REST API wiki page](https://github.com/jpdevries/eureka/wiki/REST-API).

## 📠 Server Side Rendering
Eureka is progressively enhanced with React to be asynchronous and a richer experience in capable browsers successfully that successfully execute scripts. But Eureka's support doesn't end at modern browsers because its design process doesn't start there. Eureka is a semantic and synchronous HTML form before it is an enhanced Virtual&nbsp;DOM.  

Reference the [Server Side Rendering Wiki page](https://github.com/jpdevries/eureka/wiki/Server-Side-Rendering) for documentations and examples on achieving world wide&nbsp;support.


## 🎨 Theming
Request additional theming options and share your themes by [opening an issue](https://github.com/jpdevries/eureka/issues/new) or [joining the discussion on&nbsp;Gitter](https://gitter.im/jpdevries/eureka?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge).

| Variable        | Description  |
| ------------- | -----|
| `--active` | Color used to highlight activated components such as the drop area |
| `--border-width` | Generic border width for panels, components, inputs |
| `--border-style` | Generic border style for panels, components, inputs |
| `--border-color` | Generic border color for panels, components, inputs |
| `--button-bg` | Background color of button elements |
| `--button-color` | Color of button text |
| `--color` | Default text color |
| `--dangerous` | Color to use for warnings and errors |
| `--light-bg` | Generic light background color, used for panels |
| `--link-color` | Default anchor text color |
| `--panel-border-color` | Border color of panel components |
| `--subtle` | Subtle color, used for media source tree |
| `--very-subtle` | Very subtle color, used for drop zone area |
| `--very-subtle-icon-opacity` | Opacity for very subtle icons |


## 👀 Accessible Themes
Eureka is empowered by themes which make it more accessible to users with particular physical or contextual disabilities or preferences.

### Black on White
![](http://j4p.us/091n1d1z3y1F/Screen%20Shot%202017-03-16%20at%203.33.14%20AM.png)

### White on Black
![](http://j4p.us/3O163v400P30/Screen%20Shot%202017-03-16%20at%203.33.45%20AM.png)
