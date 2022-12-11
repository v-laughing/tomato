(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{1214:function(t,s,a){"use strict";a.r(s);var n=a(7),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"_60-n-个骰子的点数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_60-n-个骰子的点数"}},[t._v("#")]),t._v(" 60. n 个骰子的点数")]),t._v(" "),n("h2",{attrs:{id:"题目链接"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#题目链接"}},[t._v("#")]),t._v(" 题目链接")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://www.lintcode.com/en/problem/dices-sum/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Lintcode"),n("OutboundLink")],1)]),t._v(" "),n("h2",{attrs:{id:"题目描述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#题目描述"}},[t._v("#")]),t._v(" 题目描述")]),t._v(" "),n("p",[t._v("把 n 个骰子扔在地上，求点数和为 s 的概率。")]),t._v(" "),n("p",[n("img",{attrs:{src:a(501),alt:"avatar | 300"}}),n("br")]),t._v(" "),n("h2",{attrs:{id:"解题思路"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#解题思路"}},[t._v("#")]),t._v(" 解题思路")]),t._v(" "),n("h3",{attrs:{id:"动态规划"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#动态规划"}},[t._v("#")]),t._v(" 动态规划")]),t._v(" "),n("p",[t._v("使用一个二维数组 dp 存储点数出现的次数，其中 dp[i][j] 表示前 i 个骰子产生点数 j 的次数。")]),t._v(" "),n("p",[t._v("空间复杂度：O(N"),n("sup",[t._v("2")]),t._v(")")]),t._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Map"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Entry")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Double")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("dicesSum")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" face "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" pointNum "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" face "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" dp "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("n "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("pointNum "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" face"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        dp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" j "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" j "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" pointNum"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" j"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("     "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 使用 i 个骰子最小点数为 i */")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" k "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" k "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" face "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" k "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" j"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" k"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                dp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" dp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" k"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("double")]),t._v(" totalNum "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Math")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("pow")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Map"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Entry")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Double")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" ret "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ArrayList")]),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" pointNum"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        ret"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AbstractMap"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SimpleEntry")]),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" totalNum"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" ret"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h3",{attrs:{id:"动态规划-旋转数组"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#动态规划-旋转数组"}},[t._v("#")]),t._v(" 动态规划 + 旋转数组")]),t._v(" "),n("p",[t._v("空间复杂度：O(N)")]),t._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Map"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Entry")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Double")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("dicesSum")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" face "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" pointNum "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" face "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" dp "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("pointNum "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" face"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        dp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" flag "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("                                     "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 旋转标记 */")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" flag "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" flag"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" j "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" j "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" pointNum"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" j"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            dp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("flag"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("                          "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 旋转数组清零 */")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" j "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" j "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" pointNum"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" j"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" k "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" k "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" face "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" k "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" j"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" k"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                dp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("flag"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" dp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" flag"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" k"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("double")]),t._v(" totalNum "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Math")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("pow")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Map"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Entry")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Double")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" ret "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ArrayList")]),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" pointNum"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        ret"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AbstractMap"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SimpleEntry")]),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" flag"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" totalNum"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" ret"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports},501:function(t,s){t.exports="data:image/png;base64,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"}}]);