(self.webpackChunk=self.webpackChunk||[]).push([[9725,5863,2775,2076,4562,9842,7574,313,196,9685,2826],{5318:function(t,e,o){"use strict";o.d(e,{Zo:function(){return u},kt:function(){return h}});var n=o(7378);function s(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function r(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function a(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?r(Object(o),!0).forEach((function(e){s(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function c(t,e){if(null==t)return{};var o,n,s=function(t,e){if(null==t)return{};var o,n,s={},r=Object.keys(t);for(n=0;n<r.length;n++)o=r[n],e.indexOf(o)>=0||(s[o]=t[o]);return s}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)o=r[n],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(s[o]=t[o])}return s}var l=n.createContext({}),i=function(t){var e=n.useContext(l),o=e;return t&&(o="function"==typeof t?t(e):a(a({},e),t)),o},u=function(t){var e=i(t.components);return n.createElement(l.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var o=t.components,s=t.mdxType,r=t.originalType,l=t.parentName,u=c(t,["components","mdxType","originalType","parentName"]),d=i(o),h=s,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||r;return o?n.createElement(m,a(a({ref:e},u),{},{components:o})):n.createElement(m,a({ref:e},u))}));function h(t,e){var o=arguments,s=e&&e.mdxType;if("string"==typeof t||s){var r=o.length,a=new Array(r);a[0]=d;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=t,c.mdxType="string"==typeof t?t:s,a[1]=c;for(var i=2;i<r;i++)a[i]=o[i];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},517:function(t,e,o){"use strict";var n=o(7378);e.Z=function(t){var e=t.children,o=t.hidden,s=t.className;return n.createElement("div",{role:"tabpanel",hidden:o,className:s},e)}},4535:function(t,e,o){"use strict";o.d(e,{Z:function(){return p}});var n=o(7378),s=o(4956);var r=function(){var t=(0,n.useContext)(s.Z);if(null==t)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return t},a=o(8944),c="tabItem_c0e5",l="tabItemActive_28AG";var i=37,u=39;var p=function(t){var e=t.lazy,o=t.block,s=t.defaultValue,p=t.values,d=t.groupId,h=t.className,m=r(),g=m.tabGroupChoices,y=m.setTabGroupChoices,f=(0,n.useState)(s),b=f[0],v=f[1],w=n.Children.toArray(t.children),k=[];if(null!=d){var T=g[d];null!=T&&T!==b&&p.some((function(t){return t.value===T}))&&v(T)}var x=function(t){var e=t.currentTarget,o=k.indexOf(e),n=p[o].value;v(n),null!=d&&(y(d,n),setTimeout((function(){var t,o,n,s,r,a,c,i;(t=e.getBoundingClientRect(),o=t.top,n=t.left,s=t.bottom,r=t.right,a=window,c=a.innerHeight,i=a.innerWidth,o>=0&&r<=i&&s<=c&&n>=0)||(e.scrollIntoView({block:"center",behavior:"smooth"}),e.classList.add(l),setTimeout((function(){return e.classList.remove(l)}),2e3))}),150))},U=function(t){var e,o;switch(t.keyCode){case u:var n=k.indexOf(t.target)+1;o=k[n]||k[0];break;case i:var s=k.indexOf(t.target)-1;o=k[s]||k[k.length-1]}null==(e=o)||e.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":o},h)},p.map((function(t){var e=t.value,o=t.label;return n.createElement("li",{role:"tab",tabIndex:b===e?0:-1,"aria-selected":b===e,className:(0,a.Z)("tabs__item",c,{"tabs__item--active":b===e}),key:e,ref:function(t){return k.push(t)},onKeyDown:U,onFocus:x,onClick:x},o)}))),e?(0,n.cloneElement)(w.filter((function(t){return t.props.value===b}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},w.map((function(t,e){return(0,n.cloneElement)(t,{key:e,hidden:t.props.value!==b})}))))}},4956:function(t,e,o){"use strict";var n=(0,o(7378).createContext)(void 0);e.Z=n},3171:function(t,e,o){"use strict";o.r(e),o.d(e,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return i},toc:function(){return u},default:function(){return d}});var n=o(9603),s=o(120),r=(o(7378),o(5318)),a=["components"],c={},l=void 0,i={unversionedId:"polyglot/dotnet/transclusions/shortest-chatbot",id:"polyglot/dotnet/transclusions/shortest-chatbot",isDocsHomePage:!1,title:"shortest-chatbot",description:"`csharp",source:"@site/docs/polyglot/dotnet/transclusions/shortest-chatbot.mdx",sourceDirName:"polyglot/dotnet/transclusions",slug:"/polyglot/dotnet/transclusions/shortest-chatbot",permalink:"/docs/polyglot/dotnet/transclusions/shortest-chatbot",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/polyglot/dotnet/transclusions/shortest-chatbot.mdx",version:"current",lastUpdatedBy:"Valerie",lastUpdatedAt:1625819036,formattedLastUpdatedAt:"7/9/2021",frontMatter:{}},u=[],p={toc:u};function d(t){var e=t.components,o=(0,s.Z)(t,a);return(0,r.kt)("wrapper",(0,n.Z)({},p,o,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'var wechaty = new Wechaty(options, logger).onScan((qrcode, status) => {\n  Console.WriteLine($"Scan QR Code to login: {status} https://wechaty.js.org/qrcode/{(qrcode)}`");\n}).OnLogin( user => {\n  Console.WriteLine("User {user} logined");\n}).OnMessage( message => {\n  Console.WriteLine($"Message: {message}");\n}).Start();\n')))}d.isMDXComponent=!0},2641:function(t,e,o){"use strict";o.r(e),o.d(e,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return i},toc:function(){return u},default:function(){return d}});var n=o(9603),s=o(120),r=(o(7378),o(5318)),a=["components"],c={},l=void 0,i={unversionedId:"polyglot/go/transclusions/shortest-chatbot",id:"polyglot/go/transclusions/shortest-chatbot",isDocsHomePage:!1,title:"shortest-chatbot",description:"`go",source:"@site/docs/polyglot/go/transclusions/shortest-chatbot.mdx",sourceDirName:"polyglot/go/transclusions",slug:"/polyglot/go/transclusions/shortest-chatbot",permalink:"/docs/polyglot/go/transclusions/shortest-chatbot",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/polyglot/go/transclusions/shortest-chatbot.mdx",version:"current",lastUpdatedBy:"Valerie",lastUpdatedAt:1625819036,formattedLastUpdatedAt:"7/9/2021",frontMatter:{}},u=[],p={toc:u};function d(t){var e=t.components,o=(0,s.Z)(t,a);return(0,r.kt)("wrapper",(0,n.Z)({},p,o,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n "fmt"\n\n  "github.com/wechaty/go-wechaty/wechaty"\n)\n\nfunc main() {\n  _ = wechaty.NewWechaty().\n    OnScan(func(qrCode, status string) {\n      fmt.Printf("Scan QR Code to login: %s\\nhttps://wechaty.js.org/qrcode/%s\\n", status, qrCode)\n    }).\n    OnLogin(func(user string) { fmt.Printf("User %s logged in\\n", user) }).\n    OnMessage(func(message string) { fmt.Printf("Message: %s\\n", message) }).\n    Start()\n}\n')))}d.isMDXComponent=!0},2928:function(t,e,o){"use strict";o.r(e),o.d(e,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return i},toc:function(){return u},default:function(){return d}});var n=o(9603),s=o(120),r=(o(7378),o(5318)),a=["components"],c={},l=void 0,i={unversionedId:"polyglot/java/transclusions/shortest-chatbot",id:"polyglot/java/transclusions/shortest-chatbot",isDocsHomePage:!1,title:"shortest-chatbot",description:"`java",source:"@site/docs/polyglot/java/transclusions/shortest-chatbot.mdx",sourceDirName:"polyglot/java/transclusions",slug:"/polyglot/java/transclusions/shortest-chatbot",permalink:"/docs/polyglot/java/transclusions/shortest-chatbot",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/polyglot/java/transclusions/shortest-chatbot.mdx",version:"current",lastUpdatedBy:"Valerie",lastUpdatedAt:1625819036,formattedLastUpdatedAt:"7/9/2021",frontMatter:{}},u=[],p={toc:u};function d(t){var e=t.components,o=(0,s.Z)(t,a);return(0,r.kt)("wrapper",(0,n.Z)({},p,o,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'package io.github.wechaty;\n\nclass Bot{\n  public static void main(String args[]){\n    Wechaty bot = Wechaty.instance()\n      .onScan((qrcode, statusScanStatus, data) -> System.out.println(QrcodeUtils.getQr(qrcode)))\n      .onLogin(user -> System.out.println("User logged in :" + user))\n      .onMessage(message -> System.out.println("Message:" + message))\n      .start(true);\n  }\n}\n')))}d.isMDXComponent=!0},1797:function(t,e,o){"use strict";o.r(e),o.d(e,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return i},toc:function(){return u},default:function(){return d}});var n=o(9603),s=o(120),r=(o(7378),o(5318)),a=["components"],c={},l=void 0,i={unversionedId:"polyglot/openapi/transclusions/shortest-chatbot",id:"polyglot/openapi/transclusions/shortest-chatbot",isDocsHomePage:!1,title:"shortest-chatbot",description:"`sh",source:"@site/docs/polyglot/openapi/transclusions/shortest-chatbot.mdx",sourceDirName:"polyglot/openapi/transclusions",slug:"/polyglot/openapi/transclusions/shortest-chatbot",permalink:"/docs/polyglot/openapi/transclusions/shortest-chatbot",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/polyglot/openapi/transclusions/shortest-chatbot.mdx",version:"current",lastUpdatedBy:"Valerie",lastUpdatedAt:1625819036,formattedLastUpdatedAt:"7/9/2021",frontMatter:{}},u=[],p={toc:u};function d(t){var e=t.components,o=(0,s.Z)(t,a);return(0,r.kt)("wrapper",(0,n.Z)({},p,o,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"# To be add: curl ...\n")))}d.isMDXComponent=!0},9826:function(t,e,o){"use strict";o.r(e),o.d(e,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return i},toc:function(){return u},default:function(){return d}});var n=o(9603),s=o(120),r=(o(7378),o(5318)),a=["components"],c={},l=void 0,i={unversionedId:"polyglot/php/transclusions/shortest-chatbot",id:"polyglot/php/transclusions/shortest-chatbot",isDocsHomePage:!1,title:"shortest-chatbot",description:"`php",source:"@site/docs/polyglot/php/transclusions/shortest-chatbot.mdx",sourceDirName:"polyglot/php/transclusions",slug:"/polyglot/php/transclusions/shortest-chatbot",permalink:"/docs/polyglot/php/transclusions/shortest-chatbot",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/polyglot/php/transclusions/shortest-chatbot.mdx",version:"current",lastUpdatedBy:"Valerie",lastUpdatedAt:1625819036,formattedLastUpdatedAt:"7/9/2021",frontMatter:{}},u=[],p={toc:u};function d(t){var e=t.components,o=(0,s.Z)(t,a);return(0,r.kt)("wrapper",(0,n.Z)({},p,o,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'$wechaty = \\IO\\Github\\Wechaty\\Wechaty::getInstance($token, $endPoint);\n$wechaty->onScan(function($qrcode, $status, $data) {\n    $qr = \\IO\\Github\\Wechaty\\Util\\QrcodeUtils::getQr($qrcode);\n    echo "$qr\\n\\nOnline Image: https://wechaty.js.org/qrcode/$qrcode\\n";\n})->onLogin(function(\\IO\\Github\\Wechaty\\User\\ContactSelf $user) {\n})->onMessage(function(\\IO\\Github\\Wechaty\\User\\Message $message) {\n    $message->say("hello from PHP7.4");\n})->start();\n')))}d.isMDXComponent=!0},9845:function(t,e,o){"use strict";o.r(e),o.d(e,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return i},toc:function(){return u},default:function(){return d}});var n=o(9603),s=o(120),r=(o(7378),o(5318)),a=["components"],c={},l=void 0,i={unversionedId:"polyglot/python/transclusions/shortest-chatbot",id:"polyglot/python/transclusions/shortest-chatbot",isDocsHomePage:!1,title:"shortest-chatbot",description:"`py",source:"@site/docs/polyglot/python/transclusions/shortest-chatbot.mdx",sourceDirName:"polyglot/python/transclusions",slug:"/polyglot/python/transclusions/shortest-chatbot",permalink:"/docs/polyglot/python/transclusions/shortest-chatbot",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/polyglot/python/transclusions/shortest-chatbot.mdx",version:"current",lastUpdatedBy:"Valerie",lastUpdatedAt:1625819036,formattedLastUpdatedAt:"7/9/2021",frontMatter:{}},u=[],p={toc:u};function d(t){var e=t.components,o=(0,s.Z)(t,a);return(0,r.kt)("wrapper",(0,n.Z)({},p,o,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"from wechaty import Wechaty\nimport asyncio\n\nasync def main():\n    bot = Wechaty()\n    bot.on('scan', lambda status, qrcode, data: print('Scan QR Code to login: {}\\nhttps://wechaty.js.org/qrcode/{}'.format(status, qrcode)))\n    bot.on('login', lambda user: print('User {} logged in'.format(user)))\n    bot.on('message', lambda message: print('Message: {}'.format(message)))\n    await bot.start()\n\nasyncio.run(main())\n")))}d.isMDXComponent=!0},4732:function(t,e,o){"use strict";o.r(e),o.d(e,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return i},toc:function(){return u},default:function(){return d}});var n=o(9603),s=o(120),r=(o(7378),o(5318)),a=["components"],c={},l=void 0,i={unversionedId:"polyglot/rust/transclusions/shortest-chatbot",id:"polyglot/rust/transclusions/shortest-chatbot",isDocsHomePage:!1,title:"shortest-chatbot",description:"`rust",source:"@site/docs/polyglot/rust/transclusions/shortest-chatbot.mdx",sourceDirName:"polyglot/rust/transclusions",slug:"/polyglot/rust/transclusions/shortest-chatbot",permalink:"/docs/polyglot/rust/transclusions/shortest-chatbot",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/polyglot/rust/transclusions/shortest-chatbot.mdx",version:"current",lastUpdatedBy:"Valerie",lastUpdatedAt:1625819036,formattedLastUpdatedAt:"7/9/2021",frontMatter:{}},u=[],p={toc:u};function d(t){var e=t.components,o=(0,s.Z)(t,a);return(0,r.kt)("wrapper",(0,n.Z)({},p,o,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"let bot = Wechaty::new(PuppetService::new(options).await.unwrap());\n\nbot.on_scan(handle_scan)\n    .on_login(handle_login)\n    .on_logout(handle_logout)\n    .on_message(handle_message)\n    .start()\n    .await;\n")))}d.isMDXComponent=!0},2489:function(t,e,o){"use strict";o.r(e),o.d(e,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return i},toc:function(){return u},default:function(){return d}});var n=o(9603),s=o(120),r=(o(7378),o(5318)),a=["components"],c={},l=void 0,i={unversionedId:"polyglot/scala/transclusions/shortest-chatbot",id:"polyglot/scala/transclusions/shortest-chatbot",isDocsHomePage:!1,title:"shortest-chatbot",description:"`scala",source:"@site/docs/polyglot/scala/transclusions/shortest-chatbot.mdx",sourceDirName:"polyglot/scala/transclusions",slug:"/polyglot/scala/transclusions/shortest-chatbot",permalink:"/docs/polyglot/scala/transclusions/shortest-chatbot",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/polyglot/scala/transclusions/shortest-chatbot.mdx",version:"current",lastUpdatedBy:"Valerie",lastUpdatedAt:1625819036,formattedLastUpdatedAt:"7/9/2021",frontMatter:{}},u=[],p={toc:u};function d(t){var e=t.components,o=(0,s.Z)(t,a);return(0,r.kt)("wrapper",(0,n.Z)({},p,o,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'package wechaty\n\nobject DingDongBot {\n  def main(args: Array[String]): Unit = {\n    Wechaty.instance()\n      .onScan(payload     => { println("Scan QR Code to login: %s\\nhttps://wechaty.js.org/qrcode/%s\\n".format(payload.status, payload.qrcode)) })\n      .onLogin(payload    => { println("User %s logged in\\n".format(payload.id)) })\n      .onMessage(message  => { println(message) })\n      .start()\n    Thread.currentThread().join()\n  }\n}\n')))}d.isMDXComponent=!0},1645:function(t,e,o){"use strict";o.r(e),o.d(e,{frontMatter:function(){return v},contentTitle:function(){return w},metadata:function(){return k},toc:function(){return T},default:function(){return U}});var n=o(9603),s=o(120),r=(o(7378),o(5318)),a=o(4535),c=o(517),l=o(6474),i=o(1797),u=o(5297),p=o(9845),d=o(2641),h=o(2928),m=o(9826),g=o(2489),y=o(3171),f=o(4732),b=["components"],v={},w=void 0,k={unversionedId:"polyglot/transclusions/shortest-chatbots",id:"polyglot/transclusions/shortest-chatbots",isDocsHomePage:!1,title:"shortest-chatbots",description:"<Tabs",source:"@site/docs/polyglot/transclusions/shortest-chatbots.mdx",sourceDirName:"polyglot/transclusions",slug:"/polyglot/transclusions/shortest-chatbots",permalink:"/docs/polyglot/transclusions/shortest-chatbots",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/polyglot/transclusions/shortest-chatbots.mdx",version:"current",lastUpdatedBy:"Valerie",lastUpdatedAt:1625819036,formattedLastUpdatedAt:"7/9/2021",frontMatter:{}},T=[],x={toc:T};function U(t){var e=t.components,o=(0,s.Z)(t,b);return(0,r.kt)("wrapper",(0,n.Z)({},x,o,{components:e,mdxType:"MDXLayout"}),(0,r.kt)(a.Z,{groupId:"programming-languages",defaultValue:"ts",values:[{label:"OpenAPI",value:"openapi"},{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"},{label:"Python",value:"py"},{label:"Go",value:"go"},{label:"Java",value:"java"},{label:"PHP",value:"php"},{label:"Scala",value:"scala"},{label:"C#",value:"csharp"},{label:"Rust",value:"rust"}],mdxType:"Tabs"},(0,r.kt)(c.Z,{value:"openapi",mdxType:"TabItem"},(0,r.kt)(i.default,{mdxType:"ShortestChatbotOpenApi"})),(0,r.kt)(c.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)(l.default,{mdxType:"ShortestChatbotTypeScript"})),(0,r.kt)(c.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)(u.default,{mdxType:"ShortestChatbotJavaScript"})),(0,r.kt)(c.Z,{value:"py",mdxType:"TabItem"},(0,r.kt)(p.default,{mdxType:"ShortestChatbotPython"})),(0,r.kt)(c.Z,{value:"go",mdxType:"TabItem"},(0,r.kt)(d.default,{mdxType:"ShortestChatbotGo"})),(0,r.kt)(c.Z,{value:"java",mdxType:"TabItem"},(0,r.kt)(h.default,{mdxType:"ShortestChatbotJava"})),(0,r.kt)(c.Z,{value:"php",mdxType:"TabItem"},(0,r.kt)(m.default,{mdxType:"ShortestChatbotPhp"})),(0,r.kt)(c.Z,{value:"scala",mdxType:"TabItem"},(0,r.kt)(g.default,{mdxType:"ShortestChatbotScala"})),(0,r.kt)(c.Z,{value:"csharp",mdxType:"TabItem"},(0,r.kt)(y.default,{mdxType:"ShortestChatbotDotnet"})),(0,r.kt)(c.Z,{value:"rust",mdxType:"TabItem"},(0,r.kt)(f.default,{mdxType:"ShortestChatbotRust"}))))}U.isMDXComponent=!0},5297:function(t,e,o){"use strict";o.r(e),o.d(e,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return i},toc:function(){return u},default:function(){return d}});var n=o(9603),s=o(120),r=(o(7378),o(5318)),a=["components"],c={},l=void 0,i={unversionedId:"polyglot/typescript/transclusions/shortest-chatbot-js",id:"polyglot/typescript/transclusions/shortest-chatbot-js",isDocsHomePage:!1,title:"shortest-chatbot-js",description:"`js",source:"@site/docs/polyglot/typescript/transclusions/shortest-chatbot-js.mdx",sourceDirName:"polyglot/typescript/transclusions",slug:"/polyglot/typescript/transclusions/shortest-chatbot-js",permalink:"/docs/polyglot/typescript/transclusions/shortest-chatbot-js",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/polyglot/typescript/transclusions/shortest-chatbot-js.mdx",version:"current",lastUpdatedBy:"Valerie",lastUpdatedAt:1625819036,formattedLastUpdatedAt:"7/9/2021",frontMatter:{}},u=[],p={toc:u};function d(t){var e=t.components,o=(0,s.Z)(t,a);return(0,r.kt)("wrapper",(0,n.Z)({},p,o,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const { Wechaty } = require('wechaty')\n\nasync function main () {\n  const bot = new Wechaty()\n  bot\n    .on('scan', (qrcode, status) => console.log(`Scan QR Code to login: ${status}\\nhttps://wechaty.js.org/qrcode/${encodeURIComponent(qrcode)}`))\n    .on('login',            user => console.log(`User ${user} logged in`))\n    .on('message',       message => console.log(`Message: ${message}`))\n  await bot.start()\n}\n\nmain()\n  .catch(console.error)\n")))}d.isMDXComponent=!0},6474:function(t,e,o){"use strict";o.r(e),o.d(e,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return i},toc:function(){return u},default:function(){return d}});var n=o(9603),s=o(120),r=(o(7378),o(5318)),a=["components"],c={},l=void 0,i={unversionedId:"polyglot/typescript/transclusions/shortest-chatbot",id:"polyglot/typescript/transclusions/shortest-chatbot",isDocsHomePage:!1,title:"shortest-chatbot",description:"`ts",source:"@site/docs/polyglot/typescript/transclusions/shortest-chatbot.mdx",sourceDirName:"polyglot/typescript/transclusions",slug:"/polyglot/typescript/transclusions/shortest-chatbot",permalink:"/docs/polyglot/typescript/transclusions/shortest-chatbot",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/polyglot/typescript/transclusions/shortest-chatbot.mdx",version:"current",lastUpdatedBy:"Valerie",lastUpdatedAt:1625819036,formattedLastUpdatedAt:"7/9/2021",frontMatter:{}},u=[],p={toc:u};function d(t){var e=t.components,o=(0,s.Z)(t,a);return(0,r.kt)("wrapper",(0,n.Z)({},p,o,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { Wechaty } from 'wechaty'\n\nasync function main () {\n  const bot = new Wechaty()\n  bot\n    .on('scan', (qrcode, status) => console.log(`Scan QR Code to login: ${status}\\nhttps://wechaty.js.org/qrcode/${encodeURIComponent(qrcode)}`))\n    .on('login',            user => console.log(`User ${user} logged in`))\n    .on('message',       message => console.log(`Message: ${message}`))\n  await bot.start()\n}\n\nmain()\n  .catch(console.error)\n")))}d.isMDXComponent=!0},8944:function(t,e,o){"use strict";function n(t){var e,o,s="";if("string"==typeof t||"number"==typeof t)s+=t;else if("object"==typeof t)if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(o=n(t[e]))&&(s&&(s+=" "),s+=o);else for(e in t)t[e]&&(s&&(s+=" "),s+=e);return s}function s(){for(var t,e,o=0,s="";o<arguments.length;)(t=arguments[o++])&&(e=n(t))&&(s&&(s+=" "),s+=e);return s}o.d(e,{Z:function(){return s}})}}]);