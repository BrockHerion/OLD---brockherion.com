(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{166:function(n,e,t){var content=t(249);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,t(50).default)("06637eb2",content,!0,{sourceMap:!1})},186:function(n,e,t){"use strict";t.r(e);var r=t(2),o=t(27),l=r.a.extend({components:{TerminalIcon:o.f}}),d=t(12),component=Object(d.a)(l,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("header",{staticClass:"bg-blue-50"},[t("div",{staticClass:"2xl:px-96 xl:px-80 lg:px-36 md:px-16 px-4 py-7 flex items-center justify-between"},[t("a",{staticClass:"flex text-lg items-center",attrs:{href:"/"}},[t("terminal-icon"),n._v("\n      Brock Herion\n    ")],1),n._v(" "),t("NavLinks",{staticClass:"hidden md:flex"}),n._v(" "),t("MobileNavLinks",{staticClass:"flex md:hidden"})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{NavLinks:t(278).default,MobileNavLinks:t(276).default,Header:t(186).default})},187:function(n,e,t){"use strict";t.r(e);var r=t(12),component=Object(r.a)({},(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("footer",[n._m(0),n._v(" "),t("section",{staticClass:"2xl:px-96 xl:px-80 lg:px-36 md:px-16 px-4 py-4 bg-gray-800 flex flex-col-reverse md:flex-row items-center md:justify-between"},[n._m(1),n._v(" "),t("FooterSocialIcons")],1)])}),[function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("section",{staticClass:"2xl:px-96 xl:px-80 lg:px-36 px-4 pt-4 pb-8 bg-blue-50"},[t("h3",{staticClass:"text-lg mb-2"},[n._v("The Weekly Retrospective 📨")]),n._v(" "),t("div",{staticClass:"md:grid md:grid-cols-2"},[t("p",{staticClass:"text-md mb-4"},[n._v("\n        The Weekly Retrospective is a newsletter that relfects on the previous week.\n        In it, we look at what went well, what could have gone better, and what we\n        can learn from it. I also share any interesting content I found during the week, including\n        things like Twitter Threads, other blog posts, and videos. Sign up to join\n        a growing community of friendly readers!\n      ")]),n._v(" "),t("form",{staticClass:"flex flex-col pl-6"},[t("input",{staticClass:"py-2 px-3 mb-2 mr-1 rounded-md border border-gray-200",attrs:{id:"footerNewsletter",type:"email",placeholder:"Email address"}}),n._v(" "),t("button",{staticClass:"bg-blue-500 text-white py-2 px-3 rounded-md",attrs:{type:"submit"}},[n._v("Subscribe")])])])])},function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"text-gray-50"},[t("small",[n._v("© Brock Herion 2021.")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{FooterSocialIcons:t(277).default,Footer:t(187).default})},196:function(n,e,t){"use strict";var r=t(12),component=Object(r.a)({},(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("Header"),n._v(" "),t("main",[t("Nuxt")],1),n._v(" "),t("Footer")],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{Header:t(186).default,Footer:t(187).default})},199:function(n,e,t){t(200),n.exports=t(201)},244:function(n,e,t){var content=t(245);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,t(50).default)("701f0ef2",content,!0,{sourceMap:!1})},245:function(n,e,t){var r=t(49)((function(i){return i[1]}));r.push([n.i,"/*! tailwindcss v2.2.9 | MIT License | https://tailwindcss.com*/\n\n/*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */\n\n/*\nDocument\n========\n*/\n\n/**\nUse a better box model (opinionated).\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box;\n}\n\n/**\nUse a more readable tab size (opinionated).\n*/\n\nhtml {\n  -moz-tab-size: 4;\n  -o-tab-size: 4;\n     tab-size: 4;\n}\n\n/**\n1. Correct the line height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n*/\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/*\nSections\n========\n*/\n\n/**\nRemove the margin in all browsers.\n*/\n\nbody {\n  margin: 0;\n}\n\n/**\nImprove consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n*/\n\nbody {\n  font-family:\n\t\tsystem-ui,\n\t\t-apple-system, /* Firefox supports this but not yet `system-ui` */\n\t\t'Segoe UI',\n\t\tRoboto,\n\t\tHelvetica,\n\t\tArial,\n\t\tsans-serif,\n\t\t'Apple Color Emoji',\n\t\t'Segoe UI Emoji';\n}\n\n/*\nGrouping content\n================\n*/\n\n/**\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n}\n\n/*\nText-level semantics\n====================\n*/\n\n/**\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr[title] {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/**\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n2. Correct the odd 'em' font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family:\n\t\tui-monospace,\n\t\tSFMono-Regular,\n\t\tConsolas,\n\t\t'Liberation Mono',\n\t\tMenlo,\n\t\tmonospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/**\nPrevent 'sub' and 'sup' elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\nTabular data\n============\n*/\n\n/**\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n}\n\n/*\nForms\n=====\n*/\n\n/**\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\nRemove the inheritance of text transform in Edge and Firefox.\n1. Remove the inheritance of text transform in Firefox.\n*/\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\nCorrect the inability to style clickable types in iOS and Safari.\n*/\n\nbutton,\n[type='button'],\n[type='submit'] {\n  -webkit-appearance: button;\n}\n\n/**\nRemove the inner border and padding in Firefox.\n*/\n\n/**\nRestore the focus styles unset by the previous rule.\n*/\n\n/**\nRemove the additional ':invalid' styles in Firefox.\nSee: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737\n*/\n\n/**\nRemove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.\n*/\n\nlegend {\n  padding: 0;\n}\n\n/**\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n/**\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n/**\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n/**\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to 'inherit' in Safari.\n*/\n\n/*\nInteractive\n===========\n*/\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/**\n * Manually forked from SUIT CSS Base: https://github.com/suitcss/base\n * A thin layer on top of normalize.css that provides a starting point more\n * suitable for web applications.\n */\n\n/**\n * Removes the default spacing and border for appropriate elements.\n */\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nbutton {\n  background-color: transparent;\n  background-image: none;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nol,\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/**\n * Tailwind custom reset styles\n */\n\n/**\n * 1. Use the user's configured `sans` font-family (with Tailwind's default\n *    sans-serif font stack as a fallback) as a sane default.\n * 2. Use Tailwind's default \"normal\" line-height so the user isn't forced\n *    to override it to ensure consistency even when using the default theme.\n */\n\nhtml {\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 1 */\n  line-height: 1.5; /* 2 */\n}\n\n/**\n * Inherit font-family and line-height from `html` so users can set them as\n * a class directly on the `html` element.\n */\n\nbody {\n  font-family: inherit;\n  line-height: inherit;\n}\n\n/**\n * 1. Prevent padding and border from affecting element width.\n *\n *    We used to set this in the html element and inherit from\n *    the parent element for everything else. This caused issues\n *    in shadow-dom-enhanced elements like <details> where the content\n *    is wrapped by a div with box-sizing set to `content-box`.\n *\n *    https://github.com/mozdevs/cssremedy/issues/4\n *\n *\n * 2. Allow adding a border to an element by just adding a border-width.\n *\n *    By default, the way the browser specifies that an element should have no\n *    border is by setting it's border-style to `none` in the user-agent\n *    stylesheet.\n *\n *    In order to easily add borders to elements by just setting the `border-width`\n *    property, we change the default border-style for all elements to `solid`, and\n *    use border-width to hide them instead. This way our `border` utilities only\n *    need to set the `border-width` property instead of the entire `border`\n *    shorthand, making our border utilities much more straightforward to compose.\n *\n *    https://github.com/tailwindcss/tailwindcss/pull/116\n */\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: currentColor; /* 2 */\n}\n\n/*\n * Ensure horizontal rules are visible by default\n */\n\nhr {\n  border-top-width: 1px;\n}\n\n/**\n * Undo the `border-style: none` reset that Normalize applies to images so that\n * our `border-{width}` utilities have the expected effect.\n *\n * The Normalize reset is unnecessary for us since we default the border-width\n * to 0 on all elements.\n *\n * https://github.com/tailwindcss/tailwindcss/issues/362\n */\n\nimg {\n  border-style: solid;\n}\n\ntextarea {\n  resize: vertical;\n}\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\n\ninput:-ms-input-placeholder, textarea:-ms-input-placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\n\nbutton {\n  cursor: pointer;\n}\n\n/**\n * Override legacy focus reset from Normalize with modern Firefox focus styles.\n *\n * This is actually an improvement over the new defaults in Firefox in our testing,\n * as it triggers the better focus styles even for links, which still use a dotted\n * outline in Firefox by default.\n */\n\ntable {\n  border-collapse: collapse;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/**\n * Reset links to optimize for opt-in styling instead of\n * opt-out.\n */\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/**\n * Reset form element properties that are easy to forget to\n * style explicitly so you don't inadvertently introduce\n * styles that deviate from your design system. These styles\n * supplement a partial reset that is already applied by\n * normalize.css.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  padding: 0;\n  line-height: inherit;\n  color: inherit;\n}\n\n/**\n * Use the configured 'mono' font family for elements that\n * are expected to be rendered with a monospace font, falling\n * back to the system monospace stack if there is no configured\n * 'mono' font family.\n */\n\npre,\ncode,\nkbd,\nsamp {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n}\n\n/**\n * 1. Make replaced elements `display: block` by default as that's\n *    the behavior you want almost all of the time. Inspired by\n *    CSS Remedy, with `svg` added as well.\n *\n *    https://github.com/mozdevs/cssremedy/issues/14\n * \n * 2. Add `vertical-align: middle` to align replaced elements more\n *    sensibly by default when overriding `display` by adding a\n *    utility like `inline`.\n *\n *    This can trigger a poorly considered linting error in some\n *    tools but is included by design.\n * \n *    https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210\n */\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/**\n * Constrain images and videos to the parent width and preserve\n * their intrinsic aspect ratio.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/**\n * Ensure the default browser behavior of the `hidden` attribute.\n */\n\n[hidden] {\n  display: none;\n}\n\n*, ::before, ::after{\n  --tw-border-opacity:1;\n  border-color:rgba(229, 231, 235, var(--tw-border-opacity));\n}\n\n.static{\n  position:static;\n}\n\n.my-3{\n  margin-top:0.75rem;\n  margin-bottom:0.75rem;\n}\n\n.my-6{\n  margin-top:1.5rem;\n  margin-bottom:1.5rem;\n}\n\n.mr-1{\n  margin-right:0.25rem;\n}\n\n.mr-2{\n  margin-right:0.5rem;\n}\n\n.mr-6{\n  margin-right:1.5rem;\n}\n\n.mb-2{\n  margin-bottom:0.5rem;\n}\n\n.mb-3{\n  margin-bottom:0.75rem;\n}\n\n.mb-4{\n  margin-bottom:1rem;\n}\n\n.mb-6{\n  margin-bottom:1.5rem;\n}\n\n.flex{\n  display:flex;\n}\n\n.table{\n  display:table;\n}\n\n.hidden{\n  display:none;\n}\n\n.h-64{\n  height:16rem;\n}\n\n.w-64{\n  width:16rem;\n}\n\n@-webkit-keyframes spin{\n  to{\n    transform:rotate(360deg);\n  }\n}\n\n@keyframes spin{\n  to{\n    transform:rotate(360deg);\n  }\n}\n\n@-webkit-keyframes ping{\n  75%, 100%{\n    transform:scale(2);\n    opacity:0;\n  }\n}\n\n@keyframes ping{\n  75%, 100%{\n    transform:scale(2);\n    opacity:0;\n  }\n}\n\n@-webkit-keyframes pulse{\n  50%{\n    opacity:.5;\n  }\n}\n\n@keyframes pulse{\n  50%{\n    opacity:.5;\n  }\n}\n\n@-webkit-keyframes bounce{\n  0%, 100%{\n    transform:translateY(-25%);\n    -webkit-animation-timing-function:cubic-bezier(0.8,0,1,1);\n            animation-timing-function:cubic-bezier(0.8,0,1,1);\n  }\n\n  50%{\n    transform:none;\n    -webkit-animation-timing-function:cubic-bezier(0,0,0.2,1);\n            animation-timing-function:cubic-bezier(0,0,0.2,1);\n  }\n}\n\n@keyframes bounce{\n  0%, 100%{\n    transform:translateY(-25%);\n    -webkit-animation-timing-function:cubic-bezier(0.8,0,1,1);\n            animation-timing-function:cubic-bezier(0.8,0,1,1);\n  }\n\n  50%{\n    transform:none;\n    -webkit-animation-timing-function:cubic-bezier(0,0,0.2,1);\n            animation-timing-function:cubic-bezier(0,0,0.2,1);\n  }\n}\n\n.flex-col{\n  flex-direction:column;\n}\n\n.flex-col-reverse{\n  flex-direction:column-reverse;\n}\n\n.items-center{\n  align-items:center;\n}\n\n.justify-start{\n  justify-content:flex-start;\n}\n\n.justify-center{\n  justify-content:center;\n}\n\n.justify-between{\n  justify-content:space-between;\n}\n\n.rounded-md{\n  border-radius:0.375rem;\n}\n\n.rounded-full{\n  border-radius:9999px;\n}\n\n.border{\n  border-width:1px;\n}\n\n.border-gray-200{\n  --tw-border-opacity:1;\n  border-color:rgba(229, 231, 235, var(--tw-border-opacity));\n}\n\n.border-gray-300{\n  --tw-border-opacity:1;\n  border-color:rgba(209, 213, 219, var(--tw-border-opacity));\n}\n\n.bg-gray-50{\n  --tw-bg-opacity:1;\n  background-color:rgba(249, 250, 251, var(--tw-bg-opacity));\n}\n\n.bg-gray-800{\n  --tw-bg-opacity:1;\n  background-color:rgba(31, 41, 55, var(--tw-bg-opacity));\n}\n\n.bg-blue-50{\n  --tw-bg-opacity:1;\n  background-color:rgba(239, 246, 255, var(--tw-bg-opacity));\n}\n\n.bg-blue-500{\n  --tw-bg-opacity:1;\n  background-color:rgba(59, 130, 246, var(--tw-bg-opacity));\n}\n\n.px-3{\n  padding-left:0.75rem;\n  padding-right:0.75rem;\n}\n\n.px-4{\n  padding-left:1rem;\n  padding-right:1rem;\n}\n\n.py-2{\n  padding-top:0.5rem;\n  padding-bottom:0.5rem;\n}\n\n.py-4{\n  padding-top:1rem;\n  padding-bottom:1rem;\n}\n\n.py-7{\n  padding-top:1.75rem;\n  padding-bottom:1.75rem;\n}\n\n.pt-4{\n  padding-top:1rem;\n}\n\n.pb-6{\n  padding-bottom:1.5rem;\n}\n\n.pb-8{\n  padding-bottom:2rem;\n}\n\n.pl-6{\n  padding-left:1.5rem;\n}\n\n.text-center{\n  text-align:center;\n}\n\n.text-lg{\n  font-size:1.125rem;\n  line-height:1.75rem;\n}\n\n.text-xl{\n  font-size:1.25rem;\n  line-height:1.75rem;\n}\n\n.text-2xl{\n  font-size:1.5rem;\n  line-height:2rem;\n}\n\n.text-3xl{\n  font-size:1.875rem;\n  line-height:2.25rem;\n}\n\n.text-5xl{\n  font-size:3rem;\n  line-height:1;\n}\n\n.font-bold{\n  font-weight:700;\n}\n\n.text-white{\n  --tw-text-opacity:1;\n  color:rgba(255, 255, 255, var(--tw-text-opacity));\n}\n\n.text-gray-50{\n  --tw-text-opacity:1;\n  color:rgba(249, 250, 251, var(--tw-text-opacity));\n}\n\n*, ::before, ::after{\n  --tw-shadow:0 0 #0000;\n}\n\n*, ::before, ::after{\n  --tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);\n  --tw-ring-offset-width:0px;\n  --tw-ring-offset-color:#fff;\n  --tw-ring-color:rgba(59, 130, 246, 0.5);\n  --tw-ring-offset-shadow:0 0 #0000;\n  --tw-ring-shadow:0 0 #0000;\n}\n\n:root{\n  --font-header:\"JetBrains Mono\";\n  --font-body:\"Open Sans\"\n}\n\n*{\n  padding:0;\n  margin:0;\n  box-sizing:border-box\n}\n\nbody{\n  --tw-bg-opacity:1;\n  background-color:rgba(249, 250, 251, var(--tw-bg-opacity));\n  font-family:\"Open Sans\";\n  font-family:var(--font-body)\n}\n\nh1,h2,h3,h4,h5,h6{\n  font-family:\"JetBrains Mono\";\n  font-family:var(--font-header)\n}\n\n@media (min-width: 640px){\n}\n\n@media (min-width: 768px){\n  .md\\:flex{\n    display:flex;\n  }\n\n  .md\\:grid{\n    display:grid;\n  }\n\n  .md\\:hidden{\n    display:none;\n  }\n\n  .md\\:grid-cols-2{\n    grid-template-columns:repeat(2, minmax(0, 1fr));\n  }\n\n  .md\\:flex-row{\n    flex-direction:row;\n  }\n\n  .md\\:items-start{\n    align-items:flex-start;\n  }\n\n  .md\\:justify-between{\n    justify-content:space-between;\n  }\n\n  .md\\:px-16{\n    padding-left:4rem;\n    padding-right:4rem;\n  }\n\n  .md\\:text-left{\n    text-align:left;\n  }\n}\n\n@media (min-width: 1024px){\n  .lg\\:px-36{\n    padding-left:9rem;\n    padding-right:9rem;\n  }\n}\n\n@media (min-width: 1280px){\n  .xl\\:px-60{\n    padding-left:15rem;\n    padding-right:15rem;\n  }\n\n  .xl\\:px-80{\n    padding-left:20rem;\n    padding-right:20rem;\n  }\n}\n\n@media (min-width: 1536px){\n  .\\32xl\\:px-96{\n    padding-left:24rem;\n    padding-right:24rem;\n  }\n}",""]),r.locals={},n.exports=r},248:function(n,e,t){"use strict";t(166)},249:function(n,e,t){var r=t(49)((function(i){return i[1]}));r.push([n.i,"/*purgecss start ignore*/\n.link[data-v-be1b538e]:hover{\n  text-decoration:underline\n}\n\n/*purgecss end ignore*/",""]),r.locals={},n.exports=r},276:function(n,e,t){"use strict";t.r(e);var r=t(2),o=t(27),l=r.a.extend({components:{MenuIcon:o.e}}),d=t(12),component=Object(d.a)(l,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("button",[t("menu-icon")],1),n._v(" "),n._m(0)])}),[function(){var n=this.$createElement,e=this._self._c||n;return e("nav",[e("ul")])}],!1,null,null,null);e.default=component.exports},277:function(n,e,t){"use strict";t.r(e);var r=t(27),o={components:{FacebookIcon:r.a,InstagramIcon:r.c,TwitchIcon:r.g,TwitterIcon:r.h,GithubIcon:r.b,LinkedinIcon:r.d}},l=t(12),component=Object(l.a)(o,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("ul",{staticClass:"flex items-center"},[t("li",{staticClass:"mr-2"},[t("a",{attrs:{href:"https://twitter.com/BrockHerion",target:"blank"}},[t("twitter-icon",{attrs:{fill:"#1f2937",stroke:"#F9FAFB"}})],1)]),n._v(" "),t("li",{staticClass:"mr-2"},[t("a",{attrs:{href:"https://twitch.tv/brockherion",target:"blank"}},[t("twitch-icon",{attrs:{fill:"#1f2937",stroke:"#F9FAFB"}})],1)]),n._v(" "),t("li",{staticClass:"mr-2"},[t("a",{attrs:{href:"https://github.com/brockherion",target:"blank"}},[t("github-icon",{attrs:{fill:"#1f2937",stroke:"#F9FAFB"}})],1)]),n._v(" "),t("li",{staticClass:"mr-2"},[t("a",{attrs:{href:"https://www.linkedin.com/in/brock-j-herion-34279a176/",target:"blank"}},[t("linkedin-icon",{attrs:{fill:"#1f2937",stroke:"#F9FAFB"}})],1)]),n._v(" "),t("li",{staticClass:"mr-2"},[t("a",{attrs:{href:"https://www.instagram.com/brock_herion/",target:"blank"}},[t("instagram-icon",{attrs:{fill:"#1f2937",stroke:"#F9FAFB"}})],1)]),n._v(" "),t("li",[t("a",{attrs:{href:"https://www.facebook.com/Brock-Herion-197864878943988",target:"blank"}},[t("facebook-icon",{attrs:{fill:"#1f2937",stroke:"#F9FAFB"}})],1)])])}),[],!1,null,null,null);e.default=component.exports},278:function(n,e,t){"use strict";t.r(e);t(248);var r=t(12),component=Object(r.a)({},(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("ul",{staticClass:"flex items-center"},[t("li",{staticClass:"mr-6 link"},[t("NuxtLink",{attrs:{to:"/articles"}},[n._v("Articles")])],1),n._v(" "),t("li",{staticClass:"mr-6 link"},[t("NuxtLink",{attrs:{to:"/about"}},[n._v("About")])],1),n._v(" "),t("li",{staticClass:"mr-6 link"},[t("NuxtLink",{attrs:{to:"/books"}},[n._v("Book Notes")])],1),n._v(" "),t("li",{staticClass:"mr-6 link"},[t("NuxtLink",{attrs:{to:"/tech"}},[n._v("Tech")])],1),n._v(" "),t("li",{staticClass:"link"},[t("NuxtLink",{attrs:{to:"/newsletter"}},[n._v("Newsletter")])],1)])}),[],!1,null,"be1b538e",null);e.default=component.exports}},[[199,7,1,8]]]);