/*! (C) WebReflection Mit Style License */
(function(e){"use strict";function t(e){return typeof e=="string"?a.createTextNode(e):e}function n(e){if(e.length===1)return t(e[0]);for(var n=a.createDocumentFragment(),r=x.call(e),i=0;i<e.length;i++)n.appendChild(t(r[i]));return n}for(var r,i,s,o,u,a=e.document,f=Object.defineProperty||function(e,t,n){e.__defineGetter__(t,n.get)},l=[].indexOf||function(t){var n=this.length;while(n--)if(this[n]===t)break;return n},c=function(e){if(!e)throw"SyntaxError";if(m.test(e))throw"InvalidCharacterError";return e},h=function(e){var t=e.className,n=typeof t=="object",r=(n?t.baseVal:t).replace(v,"");r.length&&S.push.apply(this,r.split(m)),this._isSVG=n,this._=e},p={get:function(){return new h(this)},set:function(){}},d="dom4-tmp-".concat(Math.random()*+(new Date)).replace(".","-"),v=/^\s+|\s+$/g,m=/\s+/,g=" ",y="classList",b=function(t,n){if(this.contains(t))n||this.remove(t);else if(n===undefined||n)n=!0,this.add(t);return!!n},w=(e.Element||e.Node||e.HTMLElement).prototype,E=e.SVGElement,S=["matches",w.matchesSelector||w.webkitMatchesSelector||w.khtmlMatchesSelector||w.mozMatchesSelector||w.msMatchesSelector||w.oMatchesSelector||function(t){var n=this.parentNode;return!!n&&-1<l.call(n.querySelectorAll(t),this)},"closest",function(t){var n=this,r;while((r=n&&n.matches)&&!n.matches(t))n=n.parentNode;return r?n:null},"prepend",function(){var t=this.firstChild,r=n(arguments);t?this.insertBefore(r,t):this.appendChild(r)},"append",function(){this.appendChild(n(arguments))},"before",function(){var t=this.parentNode;t&&t.insertBefore(n(arguments),this)},"after",function(){var t=this.parentNode,r=this.nextSibling,i=n(arguments);t&&(r?t.insertBefore(i,r):t.appendChild(i))},"replace",function(){this.replaceWith.apply(this,arguments)},"replaceWith",function(){var t=this.parentNode;t&&t.replaceChild(n(arguments),this)},"remove",function(){var t=this.parentNode;t&&t.removeChild(this)},"query",function(t){return this.queryAll(t)[0]||null},"queryAll",function(t){var n,r,i,s,o,u=this.parentNode;if(u){for(i=this.getAttribute("id")||d,o=t.split(","),r=0;r<o.length;r++)o[r]="#"+i+" "+o[r];t=o.join(",")}i===d&&this.setAttribute("id",i),s=(u||this).querySelectorAll(t),i===d&&this.removeAttribute("id"),r=s.length,n=new Array(r);while(r--)n[r]=s[r];return n}],x=S.slice,T=S.length;T;T-=2)i=S[T-2],i in w||(w[i]=S[T-1]);"query"in a||(a.query=w.query),"queryAll"in a||(a.queryAll=w.queryAll),a.createElement("a").matches("a")||(w[i]=function(e){return function(t){return e.call(this.parentNode?this:a.createDocumentFragment().appendChild(this),t)}}(w[i])),h.prototype={length:0,add:function(){for(var t=0,n;t<arguments.length;t++)n=arguments[t],this.contains(n)||S.push.call(this,i);this._isSVG?this._.setAttribute("class",""+this):this._.className=""+this},contains:function(e){return function(n){return T=e.call(this,i=c(n)),-1<T}}([].indexOf||function(e){T=this.length;while(T--&&this[T]!==e);return T}),item:function(t){return this[t]||null},remove:function(){for(var t=0,n;t<arguments.length;t++)n=arguments[t],this.contains(n)&&S.splice.call(this,T,1);this._isSVG?this._.setAttribute("class",""+this):this._.className=""+this},toggle:b,toString:function C(){return S.join.call(this,g)}},E&&!(y in E.prototype)&&f(E.prototype,y,p),y in a.documentElement?(o=a.createElement("div")[y],o.add("a","b","a"),"a b"!=o&&(s=o.constructor.prototype,"add"in s||(s=e.TemporaryTokenList.prototype),u=function(e){return function(){var t=0;while(t<arguments.length)e.call(this,arguments[t++])}},s.add=u(s.add),s.remove=u(s.remove),s.toggle=b)):f(w,y,p),"head"in a||f(a,"head",{get:function(){return r||(r=a.getElementsByTagName("head")[0])}});try{new e.CustomEvent("?")}catch(N){e.CustomEvent=function(e,t){function n(n,i){var s=a.createEvent(e);if(typeof n!="string")throw new Error("An event name must be provided");return e=="Event"&&(s.initCustomEvent=r),i==null&&(i=t),s.initCustomEvent(n,i.bubbles,i.cancelable,i.detail),s}function r(e,t,n,r){this.initEvent(e,t,n),this.detail=r}return n}(e.CustomEvent?"CustomEvent":"Event",{bubbles:!1,cancelable:!1,detail:null})}})(window);