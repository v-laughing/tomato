(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{1022:function(t,s,a){t.exports=a.p+"assets/img/http-tls.b17df166.jpg"},1023:function(t,s,a){t.exports=a.p+"assets/img/nginx2flask.123d611c.jpg"},1270:function(t,s,a){"use strict";a.r(s);var n=a(7),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"页面请求过程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#页面请求过程"}},[t._v("#")]),t._v(" 页面请求过程")]),t._v(" "),n("h2",{attrs:{id:"准备"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#准备"}},[t._v("#")]),t._v(" 准备")]),t._v(" "),n("p",[t._v("URL解析 -> [[browser#缓存机制 |  检测缓存]]")]),t._v(" "),n("blockquote",[n("p",[n("strong",[t._v("URL解析")]),t._v("：判断URL的合法性，并对URL进行字符编码等操作。以及其他额外的操作，如安全检查、访问限制。")])]),t._v(" "),n("h2",{attrs:{id:"请求"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#请求"}},[t._v("#")]),t._v(" 请求")]),t._v(" "),n("p",[t._v("浏览器网络请求线程 -> [[../network/application#域名系统 | DNS域名解析]]  -> [[../network/HTTP | HTTP]]、[[../network/transport#TCP连接管理 | TCP/IP]] -> 一系列报文封装过程。")]),t._v(" "),n("h1",{attrs:{id:"通信技术"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#通信技术"}},[t._v("#")]),t._v(" 通信技术")]),t._v(" "),n("p",[n("strong",[t._v("XMLHttpRequest")]),t._v("：能够进行客户端与服务器的通信对象。")]),t._v(" "),n("h2",{attrs:{id:"ajax"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ajax"}},[t._v("#")]),t._v(" Ajax")]),t._v(" "),n("p",[t._v("基于XMLHttpRequest的异步通信方式。\n可以直接由 js 脚本向服务器发起 http 通信，然后根据服务器返回的数据，更新网页的相应部分，而不用刷新整个页面的一种方法。")]),t._v(" "),n("p",[t._v("一般实现：设置对象的属性和监听函数后，调用 sent 即可向服务器发起请求。")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getRes")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("url")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Promise")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("resolve"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" reject")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" xhr "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("XMLHttpRequest")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    xhr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"GET"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置状态的监听函数")]),t._v("\n    xhr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onreadystatechange")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("readyState "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("status "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("response"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("reject")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Error")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("statusText"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置错误监听函数")]),t._v("\n    xhr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onerror")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("reject")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Error")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("statusText"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置响应的数据类型")]),t._v("\n    xhr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("responseType "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"json"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置请求头信息")]),t._v("\n    xhr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setRequestHeader")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Accept"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"application/json"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 发送 http 请求")]),t._v("\n    xhr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("send")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("缺点：")]),t._v(" "),n("ul",[n("li",[t._v("仅支持同源请求。")]),t._v(" "),n("li",[t._v("API难用。")])]),t._v(" "),n("h2",{attrs:{id:"跨域"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#跨域"}},[t._v("#")]),t._v(" 跨域")]),t._v(" "),n("h3",{attrs:{id:"同源策略"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#同源策略"}},[t._v("#")]),t._v(" 同源策略")]),t._v(" "),n("p",[t._v("从一个源加载的脚本默认不能访问另一个源的资源。"),n("mark",[t._v("浏览器")]),t._v("的一个"),n("mark",[t._v("安全限制")]),t._v("，一定程度上可以阻止CSRF攻击。主要的限制有：")]),t._v(" "),n("ul",[n("li",[t._v("Cookie、LocalStorage 和 IndexDB 无法读取。")]),t._v(" "),n("li",[t._v("DOM 无法获得。")]),t._v(" "),n("li",[t._v("AJAX 请求不能发送。")])]),t._v(" "),n("blockquote",[n("p",[t._v("同源：两个端的协议，端口或者域名都相同。")])]),t._v(" "),n("h3",{attrs:{id:"跨域技术"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#跨域技术"}},[t._v("#")]),t._v(" 跨域技术")]),t._v(" "),n("p",[t._v("依赖技巧或api：")]),t._v(" "),n("ul",[n("li",[n("p",[n("strong",[t._v("主域名")]),t._v("：如果两个网页的主域名相同，浏览器允许通过设置"),n("code",[t._v("document.domain")]),t._v("共享 Cookie，访问"),n("code",[t._v("iframe")]),t._v("窗口。")])]),t._v(" "),n("li",[n("p",[n("strong",[t._v("window.name")]),t._v("：在同一个窗口里，前一个网页设置了这个属性，后一个网页可以读取它。无论是否同源。")])]),t._v(" "),n("li",[n("p",[n("strong",[t._v("window.postMessage")]),t._v("：跨窗口通信，不论是否同源。"),n("code",[t._v("H5的api")])])])]),t._v(" "),n("p",[t._v("依赖能够执行跨源请求的DOM特性的技术：")]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("图片探测")]),t._v("：基于可以跨域加载图片，通过监听其onload和onerror事件得知什么时候收到回应。")])]),t._v(" "),n("blockquote",[n("p",[t._v("浏览器无法获得服务器信息，常用于动态显示广告。")])]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("JSONP")]),t._v("：基于浏览器可以跨域加载JS脚本的特点。可实现浏览器与服务器的双向通信。")])]),t._v(" "),n("blockquote",[n("p",[t._v("简单适用，老式浏览器全部支持；只有get 请求；请求的域可能不安全；不好确定JSONP请求是否失败；")])]),t._v(" "),n("p",[t._v("依赖没有同源限制的通信协议：")]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("WebSocket")]),t._v("：长时通信技术。")]),t._v(" "),n("li",[n("strong",[t._v("CORS")]),t._v("：跨域资源共享，W3C标准。")])]),t._v(" "),n("h3",{attrs:{id:"jsonp"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#jsonp"}},[t._v("#")]),t._v(" JSONP")]),t._v(" "),n("p",[t._v("原理：浏览器能够加载非同源JS脚本，并将返回的脚本内容在浏览器下执行。")]),t._v(" "),n("p",[t._v("因此，当浏览器加载下面JS时，可使服务器返回"),n("code",[t._v("hello(data)")]),t._v("，从而在浏览器执行该回调函数。")]),t._v(" "),n("div",{staticClass:"language-html extra-class"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://localhost:8080/?callback=hello"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token script"}}),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),n("p",[t._v("简单实现：")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("jsonp")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("req")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" script "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'script'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" url "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" req"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("url "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'?callback='")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" req"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("callback"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    script"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("src "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    document"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementsByTagName")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'head'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendChild")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("script"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h3",{attrs:{id:"cors"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#cors"}},[t._v("#")]),t._v(" CORS")]),t._v(" "),n("p",[t._v("定义了浏览器与服务器如何实现跨源通信。基本思路是使用自定义的HTTP头部允许浏览器和服务器相互了解，以确实请求或响应应该成功还是失败。")]),t._v(" "),n("blockquote",[n("p",[t._v("所有浏览器都支持该功能，IE浏览器不能低于IE10。因此，实现CORS通信的关键是服务器。只要服务器实现了CORS接口，就可以跨源通信。")])]),t._v(" "),n("p",[t._v("浏览器将CORS请求分成两类：简单请求和非简单请求。")]),t._v(" "),n("p",[n("strong",[t._v("简单请求")]),t._v("：一般指"),n("code",[t._v("GET")]),t._v("、"),n("code",[t._v("POST")]),t._v("请求。\n此时，浏览器直接发出CORS请求。具体来说，在头信息之中增加一个"),n("code",[t._v("Origin")]),t._v("字段。")]),t._v(" "),n("p",[n("strong",[t._v("非简单请求")]),t._v("："),n("code",[t._v("PUT")]),t._v("、"),n("code",[t._v("DELETE")]),t._v("请求，或者"),n("code",[t._v("Content-Type")]),t._v("字段为"),n("code",[t._v("application/json")]),t._v("。")]),t._v(" "),n("p",[t._v("此时，浏览器会先通过"),n("code",[t._v("Options")]),t._v("方法发送"),n("strong",[t._v("预检请求")]),t._v("，询问服务器，是否允许该域名，以及可以使用哪些HTTP动词和头信息字段。")]),t._v(" "),n("p",[t._v("请求通过后，以后每次浏览器相同类型的CORS请求，都跟简单请求一样。")]),t._v(" "),n("h3",{attrs:{id:"请求凭据"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#请求凭据"}},[t._v("#")]),t._v(" 请求凭据")]),t._v(" "),n("p",[t._v("默认情况下，"),n("mark",[t._v("跨源请求不提供凭据")]),t._v("（cookie、HTTP认证和客户端SSL证书）。可以通过将withCredentials属性设置为true来表明请求会发送凭据。")]),t._v(" "),n("h2",{attrs:{id:"fetch"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#fetch"}},[t._v("#")]),t._v(" Fetch")]),t._v(" "),n("p",[t._v("基于XMLHttpRequest的异步通信方式。")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("语法简洁，更加语义化")])]),t._v(" "),n("li",[n("p",[t._v("基于标准 Promise 实现，支持 async/await")])]),t._v(" "),n("li",[n("p",[t._v("同构方便。")])]),t._v(" "),n("li",[n("p",[t._v("不支持超时控制。")])]),t._v(" "),n("li",[n("p",[t._v("比较底层，api较为复杂")])])]),t._v(" "),n("h2",{attrs:{id:"axios"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#axios"}},[t._v("#")]),t._v(" Axios")]),t._v(" "),n("p",[t._v("基于 promise 的 HTTP 库。")]),t._v(" "),n("ul",[n("li",[t._v("简单易用，api接近于jquery，比fetch的简单。")]),t._v(" "),n("li",[t._v("浏览器兼容性好，能兼容IE7。")]),t._v(" "),n("li",[t._v("通用性好，能在node和浏览器中使用，api一致。")])]),t._v(" "),n("h1",{attrs:{id:"登录鉴权"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#登录鉴权"}},[t._v("#")]),t._v(" 登录鉴权")]),t._v(" "),n("h2",{attrs:{id:"session"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#session"}},[t._v("#")]),t._v(" Session")]),t._v(" "),n("p",[t._v("存储用户信息也可以通过Session，其存储在服务器端，会更加安全。")]),t._v(" "),n("p",[t._v("使用 Session 维护用户登录状态的过程如下：")]),t._v(" "),n("ul",[n("li",[t._v("用户进行登录时，用户提交包含用户名和密码的表单，放入 HTTP 请求报文中；")]),t._v(" "),n("li",[t._v("服务器验证该用户名和密码，如果正确则把用户信息存储到 Redis 中，它在 Redis 中的 Key 称为 Session ID；")]),t._v(" "),n("li",[t._v("服务器返回的响应报文的 Set-Cookie 首部字段包含了这个 Session ID，客户端收到响应报文之后将该 Cookie 值存入浏览器中；")]),t._v(" "),n("li",[t._v("客户端之后对同一个服务器进行请求时会包含该 Cookie 值，服务器收到之后提取出 Session ID，从 Redis 中取出用户信息，继续之前的业务操作。")])]),t._v(" "),n("blockquote",[n("p",[t._v("浏览器禁用 Cookie下，可以将 Session ID 作为 URL 的参数进行传递。")])]),t._v(" "),n("p",[t._v("应该注意 Session ID 的安全性问题，不能让它被恶意攻击者轻易获取，那么就不能产生一个容易被猜到的 Session ID 值。此外，还需要经常重新生成 Session ID。在对安全性要求极高的场景下，例如转账等操作，除了使用 Session 管理用户状态之外，还需要对用户进行重新验证，比如重新输入密码，或者使用短信验证码等方式。")]),t._v(" "),n("h3",{attrs:{id:"cookie-session"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#cookie-session"}},[t._v("#")]),t._v(" Cookie & Session")]),t._v(" "),n("ul",[n("li",[t._v("Cookie 只能存储 ASCII 码字符串，而 Session 则可以存储任何类型的数据，因此在考虑数据复杂性时首选 Session；")]),t._v(" "),n("li",[t._v("Cookie 存储在浏览器中，容易被恶意查看。如果非要将一些隐私数据存在 Cookie 中，可以将 Cookie 值进行加密，然后在服务器进行解密；")]),t._v(" "),n("li",[t._v("对于大型网站，如果用户所有的信息都存储在 Session 中，那么开销是非常大的，因此不建议将所有的用户信息都存储到 Session 中。")])]),t._v(" "),n("h1",{attrs:{id:"服务端推送"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#服务端推送"}},[t._v("#")]),t._v(" 服务端推送")]),t._v(" "),n("p",[t._v("用于某些情景的实时推送，如工业运行监控、Web 在线通讯、即时报价系统。")]),t._v(" "),n("h2",{attrs:{id:"基于http"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#基于http"}},[t._v("#")]),t._v(" 基于HTTP")]),t._v(" "),n("p",[t._v("HTTP是半双工协议。也就是说，在同一时刻数据只能单向流动，客户端向服务器发送请求(单向的)，然后服务器响应请求。"),n("mark",[t._v("服务器不能主动推送数据")]),t._v("给浏览器。")]),t._v(" "),n("h3",{attrs:{id:"_1-轮询-polling"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-轮询-polling"}},[t._v("#")]),t._v(" 1.轮询（polling）")]),t._v(" "),n("p",[t._v("客户端每隔一段时间向服务器请求数据。")]),t._v(" "),n("ul",[n("li",[t._v("优点：实现简单，无需做过多的更改")]),t._v(" "),n("li",[t._v("缺点：轮询的间隔过长，会导致用户不能及时接收到更新的数据；轮询的间隔过短，会导致查询请求过多，增加服务器端的负担")])]),t._v(" "),n("h3",{attrs:{id:"_2-长轮询-long-polling"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-长轮询-long-polling"}},[t._v("#")]),t._v(" 2.长轮询（long-polling）")]),t._v(" "),n("p",[t._v("客户端请求数据，服务器hold住连接，一直到有数据或者超时才返回。")]),t._v(" "),n("ul",[n("li",[t._v("优点：比 Polling 做了优化，有较好的时效性")]),t._v(" "),n("li",[t._v("缺点：保持连接会消耗资源; 程序超时时，服务器没有返回有效数据。")])]),t._v(" "),n("h3",{attrs:{id:"_3-iframe流-streaming"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-iframe流-streaming"}},[t._v("#")]),t._v(" 3.iframe流（streaming）")]),t._v(" "),n("p",[t._v("在页面中插入一个隐藏的iframe，利用其src属性在服务器和客户端之间创建一条长连接。")]),t._v(" "),n("ul",[n("li",[t._v("优点：消息能够"),n("mark",[t._v("实时到达")]),t._v("；浏览器兼容好。")]),t._v(" "),n("li",[t._v("缺点：服务器维护一个长连接会增加开销。")])]),t._v(" "),n("h2",{attrs:{id:"websocket"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#websocket"}},[t._v("#")]),t._v(" WebSocket")]),t._v(" "),n("p",[t._v("建立在单个TCP连接上，可进行"),n("mark",[t._v("全双工通信的应用层协议")]),t._v("。只要建立起WebSocket连接，就会一直保持连接状态，直到其中一方断开连接。")]),t._v(" "),n("p",[t._v("特点：")]),t._v(" "),n("ul",[n("li",[t._v("支持双向通信，实时性更强")]),t._v(" "),n("li",[t._v("可以发送文本，也可以发送二进制数据")]),t._v(" "),n("li",[t._v("数据格式比较轻量，性能开销小，通信高效。")]),t._v(" "),n("li",[t._v("与 HTTP 协议有着良好的兼容性。握手阶段采用 HTTP 协议。")]),t._v(" "),n("li",[t._v("没有同源限制，客户端可以与任意服务器通信。")])]),t._v(" "),n("p",[t._v("协议标识符是"),n("code",[t._v("ws")]),t._v("（如果加密，则为"),n("code",[t._v("wss")]),t._v("：")]),t._v(" "),n("div",{staticClass:"language-html extra-class"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[t._v("ws://example.com:80/some/path\n")])])]),n("p",[n("img",{attrs:{src:a(1022),alt:"avatar"}}),n("br")]),t._v(" "),n("h3",{attrs:{id:"socket-io"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#socket-io"}},[t._v("#")]),t._v(" Socket.IO")]),t._v(" "),n("p",[t._v("面向实时 web 应用的 JavaScript 库，能够实现服务器和客户端之间的双向通信。"),n("mark",[t._v("主要使用WebSocket协议")]),t._v("。但是如果需要的话，Socket.io可以回退到几种其它方法，如JSONP拉取，或是传统的AJAX拉取。")]),t._v(" "),n("p",[t._v("Socket.IO的服务端和客户端必须配套。")]),t._v(" "),n("h1",{attrs:{id:"部署架构"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#部署架构"}},[t._v("#")]),t._v(" 部署架构")]),t._v(" "),n("h2",{attrs:{id:"web服务器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#web服务器"}},[t._v("#")]),t._v(" Web服务器")]),t._v(" "),n("p",[t._v("对于传统的客户端 - 服务器架构，服务器的作用是：接收请求、处理请求、返回响应。Web服务器是一类特殊的服务器，其作用是主要是接收 HTTP 请求并返回响应。常见的 web服务器有 Nginx，Apache，IIS等。")]),t._v(" "),n("h2",{attrs:{id:"web框架"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#web框架"}},[t._v("#")]),t._v(" Web框架")]),t._v(" "),n("p",[t._v("开发web应用的框架。")]),t._v(" "),n("h2",{attrs:{id:"wsgi"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#wsgi"}},[t._v("#")]),t._v(" WSGI")]),t._v(" "),n("p",[t._v("一个协议，定义了 web服务器和 web应用之间的接口规范。’")]),t._v(" "),n("p",[t._v("名词区分：")]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("uwsgi")]),t._v("：同 wsgi 一样也是一种协议。")]),t._v(" "),n("li",[n("strong",[t._v("uWSGI")]),t._v("：实现了 uwsgi 和 WSGI 两种协议的web服务器。")])]),t._v(" "),n("p",[n("img",{attrs:{src:a(1023),alt:"avatar"}}),n("br")]),t._v(" "),n("h1",{attrs:{id:""}},[n("a",{staticClass:"header-anchor",attrs:{href:"#"}},[t._v("#")])])])}),[],!1,null,null,null);s.default=e.exports}}]);