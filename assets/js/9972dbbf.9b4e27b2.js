(self.webpackChunk=self.webpackChunk||[]).push([[8226],{5318:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return f}});var a=n(7378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),i=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=i(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=i(n),f=r,g=p["".concat(c,".").concat(f)]||p[f]||m[f]||o;return n?a.createElement(g,s(s({ref:t},u),{},{components:n})):a.createElement(g,s({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var i=2;i<o;i++)s[i]=n[i];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},517:function(e,t,n){"use strict";var a=n(7378);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},4535:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var a=n(7378),r=n(4956);var o=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=n(8944),l="tabItem_c0e5",c="tabItemActive_28AG";var i=37,u=39;var m=function(e){var t=e.lazy,n=e.block,r=e.defaultValue,m=e.values,p=e.groupId,f=e.className,g=o(),d=g.tabGroupChoices,v=g.setTabGroupChoices,y=(0,a.useState)(r),b=y[0],h=y[1],k=a.Children.toArray(e.children),w=[];if(null!=p){var T=d[p];null!=T&&T!==b&&m.some((function(e){return e.value===T}))&&h(T)}var O=function(e){var t=e.currentTarget,n=w.indexOf(t),a=m[n].value;h(a),null!=p&&(v(p,a),setTimeout((function(){var e,n,a,r,o,s,l,i;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,o=e.right,s=window,l=s.innerHeight,i=s.innerWidth,n>=0&&o<=i&&r<=l&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c),setTimeout((function(){return t.classList.remove(c)}),2e3))}),150))},N=function(e){var t,n;switch(e.keyCode){case u:var a=w.indexOf(e.target)+1;n=w[a]||w[0];break;case i:var r=w.indexOf(e.target)-1;n=w[r]||w[w.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},f)},m.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,s.Z)("tabs__item",l,{"tabs__item--active":b===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:N,onFocus:O,onClick:O},n)}))),t?(0,a.cloneElement)(k.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},4956:function(e,t,n){"use strict";var a=(0,n(7378).createContext)(void 0);t.Z=a},9243:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return m},toc:function(){return p},default:function(){return g}});var a=n(9603),r=n(120),o=(n(7378),n(5318)),s=n(4535),l=n(517),c=["components"],i={title:"Dealing with message"},u=void 0,m={unversionedId:"howto/message",id:"howto/message",isDocsHomePage:!1,title:"Dealing with message",description:"Mention",source:"@site/docs/howto/message.md",sourceDirName:"howto",slug:"/howto/message",permalink:"/docs/howto/message",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/howto/message.md",version:"current",lastUpdatedBy:"Valerie",lastUpdatedAt:1625819036,formattedLastUpdatedAt:"7/9/2021",frontMatter:{title:"Dealing with message"},sidebar:"docs",previous:{title:"Listening events",permalink:"/docs/howto/event"},next:{title:"Managing contacts",permalink:"/docs/howto/contact"}},p=[{value:"Mention",id:"mention",children:[]},{value:"Self message",id:"self-message",children:[]}],f={toc:p};function g(e){var t=e.components,n=(0,r.Z)(e,c);return(0,o.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"mention"},"Mention"),(0,o.kt)("p",null,"Only a message in the room can mention(@) others."),(0,o.kt)(s.Z,{groupId:"programming-languages",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"},{label:"Python",value:"py"},{label:"Go",value:"go"},{label:"Java",value:"java"},{label:"PHP",value:"php"},{label:"Scala",value:"scala"},{label:"C#",value:"csharp"},{label:"Rust",value:"rust"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"ts",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { Message } from 'wechaty'\n\nasync function onMessage(message: Message): Promise<void> {\n  if (await message.mentionSelf()) {\n    const room = message.room()\n    if (!room) {\n      throw new Error('Should never reach here: a mention message must in a room')\n    }\n\n    console.info(message.text())\n    // \"@bot Hello\"\n    console.info(await message.mentionList())\n    // [bot]\n    console.info(await message.mentionText())\n    // \"Hello\"\n\n    const talker = room.talker()\n    await room.say`Thanks for mention me! ${talker}`\n  }\n}\n\nbot.on('message', onMessage)\n"))),(0,o.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const { Message } = require('wechaty')\n\nasync function onMessage(message) {\n  if (await message.mentionSelf()) {\n    const room = message.room()\n    if (!room) {\n      throw new Error('Should never reach here: a mention message must in a room')\n    }\n\n    console.info(message.text())\n    // \"@bot Hello\"\n    console.info(await message.mentionList())\n    // [bot]\n    console.info(await message.mentionText())\n    // \"Hello\"\n\n    const talker = room.talker()\n    await room.say`Thanks for mention me! ${talker}`\n  }\n}\n\nbot.on('message', onMessage)\n"))),(0,o.kt)(l.Z,{value:"py",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},"from typing import List\nfrom wechaty import Wechaty, Contact\n\nclass MyBot(Wechaty):\n    async def on_ready(self, _):\n        contacts: List[Contact] = await self.Contact.find_all()\n        for contact in contacts:\n            print(f'id<{contact.contact_id}>, name<{contact.name}>, type<{contact.type()}>')\n"))),(0,o.kt)(l.Z,{value:"go",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"// TODO: Pull Request is welcome!\n"))),(0,o.kt)(l.Z,{value:"java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// TODO: Pull Request is welcome!\n"))),(0,o.kt)(l.Z,{value:"php",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"// TODO: Pull Request is welcome!\n"))),(0,o.kt)(l.Z,{value:"scala",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"// TODO: Pull Request is welcome!\n"))),(0,o.kt)(l.Z,{value:"csharp",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"// TODO: Pull Request is welcome!\n"))),(0,o.kt)(l.Z,{value:"rust",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"// TODO: Pull Request is welcome!\n")))),(0,o.kt)("h2",{id:"self-message"},"Self message"),(0,o.kt)(s.Z,{groupId:"programming-languages",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"},{label:"Python",value:"py"},{label:"Go",value:"go"},{label:"Java",value:"java"},{label:"PHP",value:"php"},{label:"Scala",value:"scala"},{label:"C#",value:"csharp"},{label:"Rust",value:"rust"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"ts",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { Message } from 'wechaty'\n\nasync function onMessage(message: Message): Promise<void> {\n  if (message.self()) {\n    const talker = message.talker()\n    const bot = message.wechaty.userSelf()\n    assert(talker === bot, 'Message is sent from bot')\n    console.info('Message is sent from bot')\n  }\n}\n\nbot.on('message', onMessage)\n"))),(0,o.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const { Message } = require('wechaty')\n\nasync function onMessage(message) {\n  if (message.self()) {\n    const talker = message.talker()\n    const bot = message.wechaty.userSelf()\n    assert(talker === bot, 'Message is sent from bot')\n    console.info('Message is sent from bot')\n  }\n}\n\nbot.on('message', onMessage)\n"))),(0,o.kt)(l.Z,{value:"py",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},"from typing import List, Optional\nfrom wechaty import Wechaty, Contact\nfrom wechaty_puppet.schemas.contact import ContactQueryFilter\n\nclass MyBot(Wechaty):\n    async def on_ready(self, _):\n        # find by id\n        filehelper: Optional[Contact] = await self.Contact.find('filehelper')\n        if filehelper:\n            print(f'filehelper<{filehelper}>')\n        \n        # find by name\n        contacts: List[Contact] = await self.Contact.find_all(ContactQueryFilter(name='your-friend-name'))\n        print(f'total number of contacts: {len(contacts)}')\n\n        for contact in contacts:\n            print(contact)\n"))),(0,o.kt)(l.Z,{value:"go",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"// TODO: Pull Request is welcome!\n"))),(0,o.kt)(l.Z,{value:"java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// TODO: Pull Request is welcome!\n"))),(0,o.kt)(l.Z,{value:"php",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"// TODO: Pull Request is welcome!\n"))),(0,o.kt)(l.Z,{value:"scala",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"// TODO: Pull Request is welcome!\n"))),(0,o.kt)(l.Z,{value:"csharp",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"// TODO: Pull Request is welcome!\n"))),(0,o.kt)(l.Z,{value:"rust",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"// TODO: Pull Request is welcome!\n")))))}g.isMDXComponent=!0},8944:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);