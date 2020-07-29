(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{147:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(2),c=n(6),o=(n(0),n(155)),a={id:"ios_options",title:"iOS",sidebar_label:"iOS"},i={id:"version-5.x/ios_options",isDocsHomePage:!1,title:"iOS",description:"keychainService",source:"@site/versioned_docs/version-5.x/ios_options.md",permalink:"/react-native-sensitive-info/docs/5.x/ios_options",editUrl:"https://github.com/mCodex/react-native-sensitive-info/tree/master/website/versioned_docs/version-5.x/ios_options.md",version:"5.x",lastUpdatedBy:"Mateus Andrade",lastUpdatedAt:1596029033,sidebar_label:"iOS",sidebar:"version-5.x/someSidebar",previous:{title:"Android",permalink:"/react-native-sensitive-info/docs/5.x/android_options"},next:{title:"Fingerprint Protection",permalink:"/react-native-sensitive-info/docs/5.x/protectingWithFingerprint"},latestVersionMainDocPermalink:"/react-native-sensitive-info/docs"},l=[{value:"keychainService",id:"keychainservice",children:[]},{value:"touchID",id:"touchid",children:[]},{value:"kSecAccessControl",id:"ksecaccesscontrol",children:[]},{value:"kSecAttrSynchronizable",id:"ksecattrsynchronizable",children:[]},{value:"kLocalizedFallbackTitle",id:"klocalizedfallbacktitle",children:[]},{value:"kSecUseOperationPrompt",id:"ksecuseoperationprompt",children:[]},{value:"Enable Face ID",id:"enable-face-id",children:[]}],s={rightToc:l};function p(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"keychainservice"},"keychainService"),Object(o.b)("p",null,"You can choose the keychain's service which you want to use. Otherwise, the default is ",Object(o.b)("strong",{parentName:"p"},"app")),Object(o.b)("h2",{id:"touchid"},"touchID"),Object(o.b)("p",null,"Enable TouchID for iOS and fingerprint authentication for Android"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"SInfo.setItem('key1', 'value1', {\n  ...\n  touchID: true,\n});\n")),Object(o.b)("h2",{id:"ksecaccesscontrol"},"kSecAccessControl"),Object(o.b)("p",null,"When passing in the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"#touchID"}),"touchID")," option as ",Object(o.b)("inlineCode",{parentName:"p"},"true"),", you can also set ",Object(o.b)("inlineCode",{parentName:"p"},"kSecAccessControl"),". For example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"SInfo.setItem('key1', 'value1', {\n  keychainService: 'myKeychain',\n  kSecAccessControl: 'kSecAccessControlTouchIDCurrentSet',\n  sharedPreferencesName: 'mySharedPrefs',\n  touchID: true,\n});\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Note:")," By default ",Object(o.b)("inlineCode",{parentName:"p"},"kSecAccessControl")," will get set to ",Object(o.b)("inlineCode",{parentName:"p"},"kSecAccessControlUserPresence"),"."),Object(o.b)("h2",{id:"ksecattrsynchronizable"},"kSecAttrSynchronizable"),Object(o.b)("p",null,"You can set this to ",Object(o.b)("inlineCode",{parentName:"p"},"true")," in order to sync the keychain items with iCloud."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Note:")," By default ",Object(o.b)("inlineCode",{parentName:"p"},"kSecAttrSynchronizable")," will get set to ",Object(o.b)("inlineCode",{parentName:"p"},"false"),"."),Object(o.b)("h2",{id:"klocalizedfallbacktitle"},"kLocalizedFallbackTitle"),Object(o.b)("p",null,"You can set this to a string and fallback to pin code authentication."),Object(o.b)("h2",{id:"ksecuseoperationprompt"},"kSecUseOperationPrompt"),Object(o.b)("p",null,"When ",Object(o.b)("inlineCode",{parentName:"p"},"touchID")," is ",Object(o.b)("inlineCode",{parentName:"p"},"true")," you must pass ",Object(o.b)("inlineCode",{parentName:"p"},"kSecUseOperationPrompt")," to inform users why are you prompting TouchID or FaceID."),Object(o.b)("h2",{id:"enable-face-id"},"Enable Face ID"),Object(o.b)("p",null,"To enable Face ID, for iOS X and above or iPad Pro, set ",Object(o.b)("inlineCode",{parentName:"p"},"kSecAccessControl")," to ",Object(o.b)("inlineCode",{parentName:"p"},"kSecAccessControlBiometryAny"),". For example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"SInfo.setItem('key1', 'value1', {\n  keychainService: 'myKeychain',\n  kSecAccessControl: 'kSecAccessControlBiometryAny',\n  ...\n});\n")))}p.isMDXComponent=!0},155:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),c=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var s=c.a.createContext({}),p=function(e){var t=c.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=p(e.components);return c.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},d=c.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(n),d=r,m=b["".concat(a,".").concat(d)]||b[d]||u[d]||o;return n?c.a.createElement(m,i(i({ref:t},s),{},{components:n})):c.a.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var s=2;s<o;s++)a[s]=n[s];return c.a.createElement.apply(null,a)}return c.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);