"use strict";(self.webpackChunkport_website=self.webpackChunkport_website||[]).push([[2509,4657,9461],{765:function(e){function t(e){!function(e){var t=e.util.clone(e.languages.javascript),n=/(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,a=/(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,s=/(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;function r(e,t){return e=e.replace(/<S>/g,(function(){return n})).replace(/<BRACES>/g,(function(){return a})).replace(/<SPREAD>/g,(function(){return s})),RegExp(e,t)}s=r(s).source,e.languages.jsx=e.languages.extend("markup",t),e.languages.jsx.tag.pattern=r(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source),e.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,e.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,e.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,e.languages.jsx.tag.inside.comment=t.comment,e.languages.insertBefore("inside","attr-name",{spread:{pattern:r(/<SPREAD>/.source),inside:e.languages.jsx}},e.languages.jsx.tag),e.languages.insertBefore("inside","special-attr",{script:{pattern:r(/=<BRACES>/.source),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:e.languages.jsx}}},e.languages.jsx.tag);var i=function e(t){return t?"string"===typeof t?t:"string"===typeof t.content?t.content:t.content.map(e).join(""):""},g=function t(n){for(var a=[],s=0;s<n.length;s++){var r=n[s],g=!1;if("string"!==typeof r&&("tag"===r.type&&r.content[0]&&"tag"===r.content[0].type?"</"===r.content[0].content[0].content?a.length>0&&a[a.length-1].tagName===i(r.content[0].content[1])&&a.pop():"/>"===r.content[r.content.length-1].content||a.push({tagName:i(r.content[0].content[1]),openedBraces:0}):a.length>0&&"punctuation"===r.type&&"{"===r.content?a[a.length-1].openedBraces++:a.length>0&&a[a.length-1].openedBraces>0&&"punctuation"===r.type&&"}"===r.content?a[a.length-1].openedBraces--:g=!0),(g||"string"===typeof r)&&a.length>0&&0===a[a.length-1].openedBraces){var o=i(r);s<n.length-1&&("string"===typeof n[s+1]||"plain-text"===n[s+1].type)&&(o+=i(n[s+1]),n.splice(s+1,1)),s>0&&("string"===typeof n[s-1]||"plain-text"===n[s-1].type)&&(o=i(n[s-1])+o,n.splice(s-1,1),s--),n[s]=new e.Token("plain-text",o,null,o)}r.content&&"string"!==typeof r.content&&t(r.content)}};e.hooks.add("after-tokenize",(function(e){"jsx"!==e.language&&"tsx"!==e.language||g(e.tokens)}))}(e)}e.exports=t,t.displayName="jsx",t.aliases=[]},7369:function(e,t,n){var a=n(765),s=n(9669);function r(e){e.register(a),e.register(s),function(e){var t=e.util.clone(e.languages.typescript);e.languages.tsx=e.languages.extend("jsx",t),delete e.languages.tsx.parameter,delete e.languages.tsx["literal-property"];var n=e.languages.tsx.tag;n.pattern=RegExp(/(^|[^\w$]|(?=<\/))/.source+"(?:"+n.pattern.source+")",n.pattern.flags),n.lookbehind=!0}(e)}e.exports=r,r.displayName="tsx",r.aliases=[]},9669:function(e){function t(e){!function(e){e.languages.typescript=e.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),e.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete e.languages.typescript.parameter,delete e.languages.typescript["literal-property"];var t=e.languages.extend("typescript",{});delete t["class-name"],e.languages.typescript["class-name"].inside=t,e.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:t}}}}),e.languages.ts=e.languages.typescript}(e)}e.exports=t,t.displayName="typescript",t.aliases=["ts"]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_tsx.06c9daea.chunk.js.map