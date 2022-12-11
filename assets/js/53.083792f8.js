(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{1213:function(A,t,s){"use strict";s.r(t);var a=s(7),n=Object(a.a)({},(function(){var A=this,t=A.$createElement,a=A._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":A.$parent.slotKey}},[a("h1",{attrs:{id:"_6-从尾到头打印链表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-从尾到头打印链表"}},[A._v("#")]),A._v(" 6. 从尾到头打印链表")]),A._v(" "),a("h2",{attrs:{id:"题目链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题目链接"}},[A._v("#")]),A._v(" 题目链接")]),A._v(" "),a("p",[a("a",{attrs:{href:"https://leetcode-cn.com/problems/cong-wei-dao-tou-da-yin-lian-biao-lcof/",target:"_blank",rel:"noopener noreferrer"}},[A._v("leetcode"),a("OutboundLink")],1)]),A._v(" "),a("h2",{attrs:{id:"题目描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题目描述"}},[A._v("#")]),A._v(" 题目描述")]),A._v(" "),a("p",[A._v("从尾到头反过来打印出每个结点的值。")]),A._v(" "),a("p",[a("img",{attrs:{src:s(499),alt:"avatar | 300"}}),a("br")]),A._v(" "),a("h2",{attrs:{id:"解题思路"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解题思路"}},[A._v("#")]),A._v(" 解题思路")]),A._v(" "),a("h3",{attrs:{id:"_1-使用递归"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-使用递归"}},[A._v("#")]),A._v(" 1. 使用递归")]),A._v(" "),a("p",[A._v("要逆序打印链表 1->2->3（3,2,1)，可以先逆序打印链表 2->3(3,2)，最后再打印第一个节点 1。而链表 2->3 可以看成一个新的链表，要逆序打印该链表可以继续使用求解函数，也就是在求解函数中调用自己，这就是递归函数。")]),A._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("def")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[A._v("reversePrint")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("(")]),A._v("head"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(":")]),A._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("if")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("not")]),A._v(" head"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(":")]),A._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("return")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("]")]),A._v("\n\tres "),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("=")]),A._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(".")]),A._v("reversePrint"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("(")]),A._v("head"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[A._v("next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(")")]),A._v("\n\tres"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(".")]),A._v("append"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("(")]),A._v("head"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(".")]),A._v("val"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(")")]),A._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("return")]),A._v(" res\n")])])]),a("h3",{attrs:{id:"_2-使用头插法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-使用头插法"}},[A._v("#")]),A._v(" 2. 使用头插法")]),A._v(" "),a("p",[A._v("头插法顾名思义是将节点插入到头部：在遍历原始链表时，将当前节点插入新链表的头部，使其成为第一个节点。")]),A._v(" "),a("p",[A._v("链表的操作需要维护后继关系，例如在某个节点 node1 之后插入一个节点 node2，我们可以通过修改后继关系来实现：")]),A._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[A._v("node3 "),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("=")]),A._v(" node1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(".")]),A._v("next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(";")]),A._v("\nnode2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(".")]),A._v("next "),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("=")]),A._v(" node3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(";")]),A._v("\nnode1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(".")]),A._v("next "),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("=")]),A._v(" node2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(";")]),A._v("\n")])])]),a("p",[a("img",{attrs:{src:s(889),alt:"avatar | 220"}}),a("br")]),A._v(" "),a("p",[A._v("为了能将一个节点插入头部，我们引入了一个叫头结点的辅助节点，该节点不存储值，只是为了方便进行插入操作。不要将头结点与第一个节点混起来，第一个节点是链表中第一个真正存储值的节点。")]),A._v(" "),a("p",[a("img",{attrs:{src:s(890),alt:"avatar | 420"}}),a("br")]),A._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("public")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[A._v("ArrayList")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[A._v("Integer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(">")])]),A._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[A._v("printListFromTailToHead")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[A._v("ListNode")]),A._v(" listNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(")")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("{")]),A._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[A._v("// 头插法构建逆序链表")]),A._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[A._v("ListNode")]),A._v(" head "),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("=")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("new")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[A._v("ListNode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[A._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(";")]),A._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("while")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("(")]),A._v("listNode "),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("!=")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(")")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("{")]),A._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[A._v("ListNode")]),A._v(" memo "),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("=")]),A._v(" listNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(".")]),A._v("next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(";")]),A._v("\n        listNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(".")]),A._v("next "),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("=")]),A._v(" head"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(".")]),A._v("next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(";")]),A._v("\n        head"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(".")]),A._v("next "),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("=")]),A._v(" listNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(";")]),A._v("\n        listNode "),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("=")]),A._v(" memo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(";")]),A._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("}")]),A._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[A._v("// 构建 ArrayList")]),A._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[A._v("ArrayList")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[A._v("Integer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(">")])]),A._v(" ret "),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("=")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("new")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[A._v("ArrayList")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("<")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(">")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(";")]),A._v("\n    head "),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("=")]),A._v(" head"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(".")]),A._v("next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(";")]),A._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("while")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("(")]),A._v("head "),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("!=")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(")")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("{")]),A._v("\n        ret"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[A._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("(")]),A._v("head"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(".")]),A._v("val"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(";")]),A._v("\n        head "),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("=")]),A._v(" head"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(".")]),A._v("next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(";")]),A._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("}")]),A._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("return")]),A._v(" ret"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(";")]),A._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("}")]),A._v("\n")])])]),a("h3",{attrs:{id:"_3-使用栈"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-使用栈"}},[A._v("#")]),A._v(" 3. 使用栈")]),A._v(" "),a("p",[A._v("栈具有后进先出的特点，在遍历链表时将值按顺序放入栈中，最后出栈的顺序即为逆序。")]),A._v(" "),a("p",[a("img",{attrs:{src:s(500),alt:"avatar | 340"}}),a("br")]),A._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("public")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[A._v("ArrayList")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[A._v("Integer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(">")])]),A._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[A._v("printListFromTailToHead")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[A._v("ListNode")]),A._v(" listNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(")")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("{")]),A._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[A._v("Stack")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[A._v("Integer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(">")])]),A._v(" stack "),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("=")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("new")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[A._v("Stack")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("<")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(">")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(";")]),A._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("while")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("(")]),A._v("listNode "),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("!=")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(")")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("{")]),A._v("\n        stack"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[A._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("(")]),A._v("listNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(".")]),A._v("val"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(";")]),A._v("\n        listNode "),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("=")]),A._v(" listNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(".")]),A._v("next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(";")]),A._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("}")]),A._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[A._v("ArrayList")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[A._v("Integer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(">")])]),A._v(" ret "),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("=")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("new")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[A._v("ArrayList")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("<")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(">")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(";")]),A._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("while")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("!")]),A._v("stack"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[A._v("isEmpty")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(")")]),A._v("\n        ret"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[A._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("(")]),A._v("stack"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[A._v("pop")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(";")]),A._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("return")]),A._v(" ret"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(";")]),A._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("}")]),A._v("\n")])])])])}),[],!1,null,null,null);t.default=n.exports},499:function(A,t){A.exports="data:image/png;base64,"},500:function(A,t,s){A.exports=s.p+"assets/img/9d1deeba-4ae1-41dc-98f4-47d85b9831bc.6d9db2f8.gif"},889:function(A,t){A.exports="data:image/gif;base64,R0lGODlhNgFuAfcAADU1NTw8PEtMTVVWWGBiZGlrbnFydHd3eHt6en99fYaCgpCMjJaTk5+dn6mrsbG2vra9xrzAxcPFx8nJyczMzdDR0tXW2dja39je6Nni8Nnm+dnn+9ro+9ro+9ro+9ro+9zo+ODp9Ofq7+vs7/Dw8fT09Pb19fj39/v6+v38/P7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v////7+/v7+/v7+/v7+/v7+/v7+/v7+/v////7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v////7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v////7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v////7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v////7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v////7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v////7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v////7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v////7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v////7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v////7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v////7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v////7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v////7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v////7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v////7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v////7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v////7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v////7+/v7+/v7+/v///yH/C05FVFNDQVBFMi4wAwEAAAAh+QQElgAAACwAAAAANgFuAQAI/gClCBxIsKDBgwgTKlzIsKHDhxAjSpxIsaLFixgzatzIsaPHjyBDihxJsqTJkyhTqlzJsqXLlzBjypxJs6bNmzhz6tzJs6fPn0CDCh1KtKjRo0iTKl3KtKnTp1CjSp1KtarVq1izat3KtavXr2DDih1LtqzZs2jTql3Ltq3bt3Djyp1Lt67du3jz6t3Lt6/fv4ADCx5MuLDhw4gTK17MuLHjx5AjS55MubLly5gza97MubPnz6BDix5NurTp06hTq17NurXr17Bjy55Nu7bt27hz697Nu7fv38CDCx9OvLjx48iTK1/OvLnz59CjS59Ovbr169iza9/Ovbv37+DD/osfT768+fPo06tfz769+/fw48ufT7++/fv48+vfz7+///8ABijggAQWaOCBCCao4IIMNujggxBGKOGEFFZo4YUYZqjhhhx26OGHIIYo4ogklmjiiSimqOKKLLbo4oswxijjjDTWaOON2klwwI489ujjj0AGKeSQP1YA0wREJqnkkkRSgJgEAAwg5ZRUVmnllVhmqSWVABj50gRRbinmmGRiCYCTh0EJgQdstunmm3DGKeecdLL5QJdHArBmnXz26SecEJz5pJ5/FmronHd66RKYex7q6KGBommYmo9WWmiieTZq6aZzRjqoppyG6iamXxIq6qltepqmqaieSuqi/qy2Gqqqk8Yq66avtsToraLSWhilvHKaK0u7Brupr4QBa2ylw65U7LKPIjuYstAe2qxKz1ZrqLSCUavtn9emlO23fnIbmLfk8hkuSuOmW6e5gKHrLqJ4lgrqvJ0Kuuq9+Ma57knt9guovrXyK/Co9cJq8MFswvuXvAzbmbCutkacKsG/VmyxB/+aFLDFDvsFccQdl/RxxCH3NTLDJZN0MsMp87XywS2P9PLBMe81s8A1i3SzwDnrtXO/PYf0c79B5zU0vkWDdDS+SeO1tJ8ZGCAAARgIO/FHIjyw0NN1auBAAQIIUIADGnAa9V1T86kBA2VjrbWiIREggNcIgT1n/gYJlO23AAlkcCzGyWrsaAYL+C03rlt/RAEAANx9kN5yNvD33w1sYOnadrUtZwYPDPD34pY2TREBkEeO90CUw5kB2QI0kEEGcJsteKWc1+V5nA4oHnfWjNMd0uOpq8664X9isEABBQAPQdnNb074tMj/2fsADjx/NfClNw4S6sUb33qdGBxQNgNp4z59t9X76UADWWtPOrMAEGDA/fjnr//+/Pd/P/jhixwD2lcoDNitbAbgXrTWdy4CFkp+CnzUnQRQpgqaKYAACEACHOgnA0KvAmpjYLw4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"},890:function(A,t,s){A.exports=s.p+"assets/img/0dae7e93-cfd1-4bd3-97e8-325b032b716f-1572687622947.800c015f.gif"}}]);