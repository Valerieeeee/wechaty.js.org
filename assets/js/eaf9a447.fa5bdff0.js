(self.webpackChunk=self.webpackChunk||[]).push([[4927],{5318:function(e,a,t){"use strict";t.d(a,{Zo:function(){return c},kt:function(){return d}});var n=t(7378);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var u=n.createContext({}),m=function(e){var a=n.useContext(u),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},c=function(e){var a=m(e.components);return n.createElement(u.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},i=n.forwardRef((function(e,a){var t=e.components,l=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),i=m(t),d=l,g=i["".concat(u,".").concat(d)]||i[d]||p[d]||o;return t?n.createElement(g,r(r({ref:a},c),{},{components:t})):n.createElement(g,r({ref:a},c))}));function d(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var o=t.length,r=new Array(o);r[0]=i;var s={};for(var u in a)hasOwnProperty.call(a,u)&&(s[u]=a[u]);s.originalType=e,s.mdxType="string"==typeof e?e:l,r[1]=s;for(var m=2;m<o;m++)r[m]=t[m];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}i.displayName="MDXCreateElement"},517:function(e,a,t){"use strict";var n=t(7378);a.Z=function(e){var a=e.children,t=e.hidden,l=e.className;return n.createElement("div",{role:"tabpanel",hidden:t,className:l},a)}},4535:function(e,a,t){"use strict";t.d(a,{Z:function(){return p}});var n=t(7378),l=t(4956);var o=function(){var e=(0,n.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},r=t(8944),s="tabItem_c0e5",u="tabItemActive_28AG";var m=37,c=39;var p=function(e){var a=e.lazy,t=e.block,l=e.defaultValue,p=e.values,i=e.groupId,d=e.className,g=o(),v=g.tabGroupChoices,y=g.setTabGroupChoices,k=(0,n.useState)(l),f=k[0],T=k[1],h=n.Children.toArray(e.children),b=[];if(null!=i){var w=v[i];null!=w&&w!==f&&p.some((function(e){return e.value===w}))&&T(w)}var O=function(e){var a=e.currentTarget,t=b.indexOf(a),n=p[t].value;T(n),null!=i&&(y(i,n),setTimeout((function(){var e,t,n,l,o,r,s,m;(e=a.getBoundingClientRect(),t=e.top,n=e.left,l=e.bottom,o=e.right,r=window,s=r.innerHeight,m=r.innerWidth,t>=0&&o<=m&&l<=s&&n>=0)||(a.scrollIntoView({block:"center",behavior:"smooth"}),a.classList.add(u),setTimeout((function(){return a.classList.remove(u)}),2e3))}),150))},N=function(e){var a,t;switch(e.keyCode){case c:var n=b.indexOf(e.target)+1;t=b[n]||b[0];break;case m:var l=b.indexOf(e.target)-1;t=b[l]||b[b.length-1]}null==(a=t)||a.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},d)},p.map((function(e){var a=e.value,t=e.label;return n.createElement("li",{role:"tab",tabIndex:f===a?0:-1,"aria-selected":f===a,className:(0,r.Z)("tabs__item",s,{"tabs__item--active":f===a}),key:a,ref:function(e){return b.push(e)},onKeyDown:N,onFocus:O,onClick:O},t)}))),a?(0,n.cloneElement)(h.filter((function(e){return e.props.value===f}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},h.map((function(e,a){return(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==f})}))))}},4956:function(e,a,t){"use strict";var n=(0,t(7378).createContext)(void 0);a.Z=n},1946:function(e,a,t){"use strict";t.r(a),t.d(a,{frontMatter:function(){return m},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return i},default:function(){return g}});var n=t(9603),l=t(120),o=(t(7378),t(5318)),r=t(4535),s=t(517),u=["components"],m={title:"Managing rooms"},c=void 0,p={unversionedId:"howto/room",id:"howto/room",isDocsHomePage:!1,title:"Managing rooms",description:"Creating New Room",source:"@site/docs/howto/room.md",sourceDirName:"howto",slug:"/howto/room",permalink:"/docs/howto/room",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/howto/room.md",version:"current",lastUpdatedBy:"Valerie",lastUpdatedAt:1625819036,formattedLastUpdatedAt:"7/9/2021",frontMatter:{title:"Managing rooms"},sidebar:"docs",previous:{title:"Managing contacts",permalink:"/docs/howto/contact"},next:{title:"Making friends",permalink:"/docs/howto/friendship"}},i=[{value:"Creating New Room",id:"creating-new-room",children:[]},{value:"Adding contact to room",id:"adding-contact-to-room",children:[]},{value:"Remove contact from room",id:"remove-contact-from-room",children:[]},{value:"Changing topic of the room",id:"changing-topic-of-the-room",children:[]},{value:"Mention(@) others in the room",id:"mention-others-in-the-room",children:[]},{value:"Moniting room events",id:"moniting-room-events",children:[]}],d={toc:i};function g(e){var a=e.components,t=(0,l.Z)(e,u);return(0,o.kt)("wrapper",(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"creating-new-room"},"Creating New Room"),(0,o.kt)(r.Z,{groupId:"programming-languages",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"},{label:"Python",value:"py"},{label:"Go",value:"go"},{label:"Java",value:"java"},{label:"PHP",value:"php"},{label:"Scala",value:"scala"},{label:"C#",value:"csharp"},{label:"Rust",value:"rust"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"ts",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// TODO: Pull Request is welcome!\n"))),(0,o.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// TODO: Pull Request is welcome!\n"))),(0,o.kt)(s.Z,{value:"py",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},"from __future__ import annotations\nfrom typing import List\n\nfrom wechaty import (\n    Wechaty,\n    Contact,\n    Room,\n    Message\n)\n\n\nclass MyBot(Wechaty):\n    async def on_ready(self, _):\n        \"\"\"creating room\"\"\"\n        # 1. filter friend\n        friends: List[Contact] = await self.Contact.find_all()\n        # find my python-wechaty related friends\n        friends = [friend for friend in friends if friend.alias().startswith('python-wechaty')]\n\n        # 2. create room and invite them\n        room: Room = await self.Room.create(friends, topic='Python\u2764Wechaty')\n        if room:\n            room.say('hello, python-wechaty is ready for you.')\n"))),(0,o.kt)(s.Z,{value:"go",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"// TODO: Pull Request is welcome!\n"))),(0,o.kt)(s.Z,{value:"java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// TODO: Pull Request is welcome!\n"))),(0,o.kt)(s.Z,{value:"php",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"// TODO: Pull Request is welcome!\n"))),(0,o.kt)(s.Z,{value:"scala",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"// TODO: Pull Request is welcome!\n"))),(0,o.kt)(s.Z,{value:"csharp",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"// TODO: Pull Request is welcome!\n"))),(0,o.kt)(s.Z,{value:"rust",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"// TODO: Pull Request is welcome!\n")))),(0,o.kt)("h2",{id:"adding-contact-to-room"},"Adding contact to room"),(0,o.kt)(r.Z,{groupId:"programming-languages",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"},{label:"Python",value:"py"},{label:"Go",value:"go"},{label:"Java",value:"java"},{label:"PHP",value:"php"},{label:"Scala",value:"scala"},{label:"C#",value:"csharp"},{label:"Rust",value:"rust"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"ts",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// TODO: Pull Request is welcome!\n"))),(0,o.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// TODO: Pull Request is welcome!\n"))),(0,o.kt)(s.Z,{value:"py",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'from __future__ import annotations\nfrom typing import List\n\nfrom wechaty import (\n    Wechaty,\n    Contact,\n    Room,\n    Message\n)\n\n\nclass MyBot(Wechaty):\n\n    async def on_message(self, msg: Message):\n        """add friend to room if they send `python-wechaty` keyword to be"""\n\n        # invite someone to the room by keyword<python-wechaty>\n        if msg.text() == \'python-wechaty\':\n            talker: Contact = await msg.talker()\n            room: Room = await msg.room()\n            mention_self: bool = await msg.mention_self()\n            python_wechaty_room: Room = await self.Room.find(query=\'id-of-your-room\')\n            if room:\n                if mention_self:\n                    await python_wechaty_room.add(talker)\n            else:\n                await python_wechaty_room.add(talker)\n'))),(0,o.kt)(s.Z,{value:"go",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"// TODO: Pull Request is welcome!\n"))),(0,o.kt)(s.Z,{value:"java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// TODO: Pull Request is welcome!\n"))),(0,o.kt)(s.Z,{value:"php",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"// TODO: Pull Request is welcome!\n"))),(0,o.kt)(s.Z,{value:"scala",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"// TODO: Pull Request is welcome!\n"))),(0,o.kt)(s.Z,{value:"csharp",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"// TODO: Pull Request is welcome!\n"))),(0,o.kt)(s.Z,{value:"rust",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"// TODO: Pull Request is welcome!\n")))),(0,o.kt)("h2",{id:"remove-contact-from-room"},"Remove contact from room"),(0,o.kt)(r.Z,{groupId:"programming-languages",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"},{label:"Python",value:"py"},{label:"Go",value:"go"},{label:"Java",value:"java"},{label:"PHP",value:"php"},{label:"Scala",value:"scala"},{label:"C#",value:"csharp"},{label:"Rust",value:"rust"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"ts",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// TODO: Pull Request is welcome!\n"))),(0,o.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// TODO: Pull Request is welcome!\n"))),(0,o.kt)(s.Z,{value:"py",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},"from __future__ import annotations\nfrom typing import List\n\nfrom wechaty import (\n    Wechaty,\n    Contact,\n    Room,\n    Message\n)\n\n\nclass MyBot(Wechaty):\n\n    async def on_message(self, msg: Message):\n        room: Room = await msg.room()\n        if room:\n            # func<is_dangerous_words> is to detect whether the content is dangerous\n            if is_dangerous_words(msg.text()):\n                talker: Contact = await msg.talker()\n                room.delete(talker)\n"))),(0,o.kt)(s.Z,{value:"go",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"// TODO: Pull Request is welcome!\n"))),(0,o.kt)(s.Z,{value:"java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// TODO: Pull Request is welcome!\n"))),(0,o.kt)(s.Z,{value:"php",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"// TODO: Pull Request is welcome!\n"))),(0,o.kt)(s.Z,{value:"scala",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"// TODO: Pull Request is welcome!\n"))),(0,o.kt)(s.Z,{value:"csharp",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"// TODO: Pull Request is welcome!\n"))),(0,o.kt)(s.Z,{value:"rust",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"// TODO: Pull Request is welcome!\n")))),(0,o.kt)("h2",{id:"changing-topic-of-the-room"},"Changing topic of the room"),(0,o.kt)(r.Z,{groupId:"programming-languages",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"},{label:"Python",value:"py"},{label:"Go",value:"go"},{label:"Java",value:"java"},{label:"PHP",value:"php"},{label:"Scala",value:"scala"},{label:"C#",value:"csharp"},{label:"Rust",value:"rust"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"ts",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// TODO: Pull Request is welcome!\n"))),(0,o.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// TODO: Pull Request is welcome!\n"))),(0,o.kt)(s.Z,{value:"py",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},"from __future__ import annotations\nfrom typing import List\n\nfrom wechaty import (\n    Wechaty,\n    Room,\n    Message\n)\n\n\nclass MyBot(Wechaty):\n\n    async def on_message(self, msg: Message):\n        \"\"\"change room topic by token\"\"\"\n        room: Room = await msg.room()\n        if not room:\n            return\n\n        text: str = await msg.text()\n        talker: Contact = await msg.talker()\n        keyword = 'new-topic:'\n        if talker.alias() == 'admin' and text.startswith(keyword):\n            new_topic: str = text[len(keyword):]\n            old_topic: str = await room.topic()\n            await room.say(f'ok, I will change old_topic<{old_topic}> to new_topic<{new_topic}>')\n            \n            # change the topic of room\n            await room.topic(new_topic)\n"))),(0,o.kt)(s.Z,{value:"go",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"// TODO: Pull Request is welcome!\n"))),(0,o.kt)(s.Z,{value:"java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// TODO: Pull Request is welcome!\n"))),(0,o.kt)(s.Z,{value:"php",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"// TODO: Pull Request is welcome!\n"))),(0,o.kt)(s.Z,{value:"scala",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"// TODO: Pull Request is welcome!\n"))),(0,o.kt)(s.Z,{value:"csharp",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"// TODO: Pull Request is welcome!\n"))),(0,o.kt)(s.Z,{value:"rust",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"// TODO: Pull Request is welcome!\n")))),(0,o.kt)("h2",{id:"mention-others-in-the-room"},"Mention(@) others in the room"),(0,o.kt)(r.Z,{groupId:"programming-languages",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"},{label:"Python",value:"py"},{label:"Go",value:"go"},{label:"Java",value:"java"},{label:"PHP",value:"php"},{label:"Scala",value:"scala"},{label:"C#",value:"csharp"},{label:"Rust",value:"rust"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"ts",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"await room.say`Hello, ${contact}`\n"))),(0,o.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"await room.say`Hello, ${contact}`\n"))),(0,o.kt)(s.Z,{value:"py",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},"# TODO: Pull Request is welcome!\n"))),(0,o.kt)(s.Z,{value:"go",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"// TODO: Pull Request is welcome!\n"))),(0,o.kt)(s.Z,{value:"java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// TODO: Pull Request is welcome!\n"))),(0,o.kt)(s.Z,{value:"php",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"// TODO: Pull Request is welcome!\n"))),(0,o.kt)(s.Z,{value:"scala",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"// TODO: Pull Request is welcome!\n"))),(0,o.kt)(s.Z,{value:"csharp",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"// TODO: Pull Request is welcome!\n"))),(0,o.kt)(s.Z,{value:"rust",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"// TODO: Pull Request is welcome!\n")))),(0,o.kt)("h2",{id:"moniting-room-events"},"Moniting room events"),(0,o.kt)("p",null,"TBW ..."))}g.isMDXComponent=!0},8944:function(e,a,t){"use strict";function n(e){var a,t,l="";if("string"==typeof e||"number"==typeof e)l+=e;else if("object"==typeof e)if(Array.isArray(e))for(a=0;a<e.length;a++)e[a]&&(t=n(e[a]))&&(l&&(l+=" "),l+=t);else for(a in e)e[a]&&(l&&(l+=" "),l+=a);return l}function l(){for(var e,a,t=0,l="";t<arguments.length;)(e=arguments[t++])&&(a=n(e))&&(l&&(l+=" "),l+=a);return l}t.d(a,{Z:function(){return l}})}}]);