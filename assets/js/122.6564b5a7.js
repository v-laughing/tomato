(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{1266:function(a,t,s){"use strict";s.r(t);var n=s(7),e=Object(n.a)({},(function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[n("h2",{attrs:{id:"工厂方法-factory-method"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#工厂方法-factory-method"}},[a._v("#")]),a._v(" 工厂方法（Factory Method）")]),a._v(" "),n("h3",{attrs:{id:"intent"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#intent"}},[a._v("#")]),a._v(" Intent")]),a._v(" "),n("p",[a._v("定义了一个创建对象的接口，但由子类决定要实例化哪个类。工厂方法把实例化操作推迟到子类。")]),a._v(" "),n("h3",{attrs:{id:"class-diagram"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#class-diagram"}},[a._v("#")]),a._v(" Class Diagram")]),a._v(" "),n("p",[a._v("在简单工厂中，创建对象的是另一个类，而在工厂方法中，是由子类来创建对象。")]),a._v(" "),n("p",[a._v("下图中，Factory 有一个 doSomething() 方法，这个方法需要用到一个产品对象，这个产品对象由 factoryMethod() 方法创建。该方法是抽象的，需要由子类去实现。")]),a._v(" "),n("p",[n("img",{attrs:{src:s(457),alt:"avatar"}}),n("br")]),a._v(" "),n("h3",{attrs:{id:"implementation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[a._v("#")]),a._v(" Implementation")]),a._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("abstract")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Factory")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("abstract")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Product")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("factoryMethod")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("doSomething")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Product")]),a._v(" product "),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("factoryMethod")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// do something with the product")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ConcreteFactory")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("extends")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Factory")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Product")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("factoryMethod")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ConcreteProduct")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ConcreteFactory1")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("extends")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Factory")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Product")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("factoryMethod")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ConcreteProduct1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ConcreteFactory2")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("extends")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Factory")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Product")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("factoryMethod")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ConcreteProduct2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),n("h3",{attrs:{id:"jdk"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#jdk"}},[a._v("#")]),a._v(" JDK")]),a._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"http://docs.oracle.com/javase/8/docs/api/java/util/Calendar.html#getInstance--",target:"_blank",rel:"noopener noreferrer"}},[a._v("java.util.Calendar"),n("OutboundLink")],1)]),a._v(" "),n("li",[n("a",{attrs:{href:"http://docs.oracle.com/javase/8/docs/api/java/util/ResourceBundle.html#getBundle-java.lang.String-",target:"_blank",rel:"noopener noreferrer"}},[a._v("java.util.ResourceBundle"),n("OutboundLink")],1)]),a._v(" "),n("li",[n("a",{attrs:{href:"http://docs.oracle.com/javase/8/docs/api/java/text/NumberFormat.html#getInstance--",target:"_blank",rel:"noopener noreferrer"}},[a._v("java.text.NumberFormat"),n("OutboundLink")],1)]),a._v(" "),n("li",[n("a",{attrs:{href:"http://docs.oracle.com/javase/8/docs/api/java/nio/charset/Charset.html#forName-java.lang.String-",target:"_blank",rel:"noopener noreferrer"}},[a._v("java.nio.charset.Charset"),n("OutboundLink")],1)]),a._v(" "),n("li",[n("a",{attrs:{href:"http://docs.oracle.com/javase/8/docs/api/java/net/URLStreamHandlerFactory.html#createURLStreamHandler-java.lang.String-",target:"_blank",rel:"noopener noreferrer"}},[a._v("java.net.URLStreamHandlerFactory"),n("OutboundLink")],1)]),a._v(" "),n("li",[n("a",{attrs:{href:"https://docs.oracle.com/javase/8/docs/api/java/util/EnumSet.html#of-E-",target:"_blank",rel:"noopener noreferrer"}},[a._v("java.util.EnumSet"),n("OutboundLink")],1)]),a._v(" "),n("li",[n("a",{attrs:{href:"https://docs.oracle.com/javase/8/docs/api/javax/xml/bind/JAXBContext.html#createMarshaller--",target:"_blank",rel:"noopener noreferrer"}},[a._v("javax.xml.bind.JAXBContext"),n("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=e.exports},457:function(a,t){a.exports="data:image/png;base64,"}}]);