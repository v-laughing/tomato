(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{1132:function(t,a,s){"use strict";s.r(a);var e=s(7),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"简单语句-simple-statements"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#简单语句-simple-statements"}},[t._v("#")]),t._v(" 简单语句（Simple Statements）")]),t._v(" "),e("p",[t._v("空语句中只含有一个单独的分号"),e("code",[t._v(";")]),t._v("，使用时应该加上注释。")]),t._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// read until we hit end-of-file or find an input equal to sought")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cin "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" s "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" s "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" sought"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// null statement")]),t._v("\n")])])]),e("p",[t._v("多余的空语句并非总是无害的。")]),t._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// disaster: extra semicolon: loop body is this null statement")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("iter "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" svec"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("end")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// the while body is the empty statement")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("iter"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("     "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// increment is not part of the loop")]),t._v("\n")])])]),e("p",[t._v("复合语句是指用"),e("mark",[t._v("花括号")]),t._v("括起来的语句和声明的序列，也叫做块（block）。")]),t._v(" "),e("p",[t._v("一个块就是一个作用域。在块中引入的名字只能在块内部以及嵌套在块中的子块里访问。通常，名字在有限的区域内可见，该区域从名字定义处开始，到名字所在（最内层）块的结尾处为止。")]),t._v(" "),e("p",[t._v("语句块不以分号作为结束。")]),t._v(" "),e("h2",{attrs:{id:"语句作用域-statement-scope"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#语句作用域-statement-scope"}},[t._v("#")]),t._v(" 语句作用域（Statement Scope）")]),t._v(" "),e("p",[t._v("可以在"),e("code",[t._v("if")]),t._v("、"),e("code",[t._v("switch")]),t._v("、"),e("code",[t._v("while")]),t._v("和"),e("code",[t._v("for")]),t._v("语句的控制结构内定义变量，这些变量只在相应语句的内部可见，一旦语句结束，变量也就超出了其作用范围。")]),t._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_num")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("   "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// i is created and initialized on each iteration")]),t._v("\n    cout "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" i "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" endl"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ni "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// error: i is not accessible outside the loop")]),t._v("\n")])])]),e("h2",{attrs:{id:"条件语句-conditional-statements"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#条件语句-conditional-statements"}},[t._v("#")]),t._v(" 条件语句（Conditional Statements）")]),t._v(" "),e("h3",{attrs:{id:"if语句-the-if-statement"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#if语句-the-if-statement"}},[t._v("#")]),t._v(" if语句（The if Statement）")]),t._v(" "),e("p",[e("code",[t._v("if")]),t._v("语句的形式：")]),t._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("condition"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    statement\n")])])]),e("p",[e("code",[t._v("if-else")]),t._v("语句的形式：")]),t._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("condition"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    statement\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v("\n    statement2\n")])])]),e("p",[e("code",[t._v("if")]),t._v("语句可以嵌套，其中"),e("code",[t._v("else")]),t._v("与离它最近的尚未匹配的"),e("code",[t._v("if")]),t._v("相匹配（就近原则）。")]),t._v(" "),e("h3",{attrs:{id:"switch语句-the-switch-statement"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#switch语句-the-switch-statement"}},[t._v("#")]),t._v(" switch语句（The switch Statement）")]),t._v(" "),e("p",[e("code",[t._v("switch")]),t._v("语句的形式为。其中"),e("code",[t._v("case")]),t._v("标签必须是整型常量表达式。")]),t._v(" "),e("p",[e("img",{attrs:{src:s(749),alt:"5-1"}})]),t._v(" "),e("p",[e("code",[t._v("default")]),t._v("标签：如果没有任何一个"),e("code",[t._v("case")]),t._v("标签能匹配上"),e("code",[t._v("switch")]),t._v("表达式的值，程序将执行"),e("code",[t._v("default")]),t._v("标签后的语句。")]),t._v(" "),e("blockquote",[e("p",[t._v("通常情况下每个"),e("code",[t._v("case")]),t._v("分支后都应有"),e("code",[t._v("break")]),t._v("语句，且该定义一个"),e("code",[t._v("default")]),t._v("标签。")])]),t._v(" "),e("p",[t._v("不允许跨过变量的初始化语句直接跳转到该变量作用域内的另一个位置。如果需要为"),e("code",[t._v("switch")]),t._v("的某个"),e("code",[t._v("case")]),t._v("分支定义并初始化一个变量，则应该把变量定义在块内。")]),t._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ok: declaration statement within a statement block")]),t._v("\n    string file_name "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_file_name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h2",{attrs:{id:"迭代语句-iterative-statements"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#迭代语句-iterative-statements"}},[t._v("#")]),t._v(" 迭代语句（Iterative Statements）")]),t._v(" "),e("h3",{attrs:{id:"while语句-the-while-statement"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#while语句-the-while-statement"}},[t._v("#")]),t._v(" while语句（The while Statement）")]),t._v(" "),e("p",[e("code",[t._v("while")]),t._v("语句的形式：")]),t._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("condition"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    statement\n")])])]),e("p",[t._v("定义在"),e("code",[t._v("while")]),t._v("条件部分或者循环体内的变量每次迭代都经历从创建到销毁的过程。")]),t._v(" "),e("h3",{attrs:{id:"传统的for语句-traditional-for-statement"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#传统的for语句-traditional-for-statement"}},[t._v("#")]),t._v(" 传统的for语句（Traditional for Statement）")]),t._v(" "),e("p",[e("code",[t._v("for")]),t._v("语句的形式：")]),t._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("initializer"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" condition"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" expression"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    statement\n")])])]),e("p",[t._v("执行顺序为"),e("code",[t._v("initializer")]),t._v("->"),e("code",[t._v("condition")]),t._v("-> "),e("code",[t._v("expression")]),t._v("->"),e("code",[t._v("condition")]),t._v("...。当"),e("code",[t._v("condition")]),t._v("求值为"),e("code",[t._v("false")]),t._v("，跳出循环。")]),t._v(" "),e("p",[e("code",[t._v("for")]),t._v("语句头中定义的对象只在"),e("code",[t._v("for")]),t._v("循环体内可见。")]),t._v(" "),e("h3",{attrs:{id:"范围for语句-range-for-statement"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#范围for语句-range-for-statement"}},[t._v("#")]),t._v(" 范围for语句（Range for Statement）")]),t._v(" "),e("p",[t._v("范围"),e("code",[t._v("for")]),t._v("语句的形式：")]),t._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("declaration "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" expression"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    statement\n")])])]),e("p",[t._v("其中"),e("code",[t._v("expression")]),t._v("表示一个序列，拥有能返回迭代器的"),e("code",[t._v("begin")]),t._v("和"),e("code",[t._v("end")]),t._v("成员。"),e("code",[t._v("declaration")]),t._v("定义一个变量，每次迭代都会重新定义循环控制变量。")]),t._v(" "),e("h3",{attrs:{id:"do-while语句-the-do-while-statement"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#do-while语句-the-do-while-statement"}},[t._v("#")]),t._v(" do-while语句（The do-while Statement）")]),t._v(" "),e("p",[e("code",[t._v("do-while")]),t._v("语句的形式：")]),t._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v("\n    statement\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("condition"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("计算"),e("code",[t._v("condition")]),t._v("的值之前会先执行一次"),e("code",[t._v("statement")]),t._v("。")]),t._v(" "),e("p",[t._v("因为"),e("code",[t._v("do-while")]),t._v("语句先执行语句或块，再判断条件，所以不允许在条件部分定义变量。")]),t._v(" "),e("h2",{attrs:{id:"跳转语句-jump-statements"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#跳转语句-jump-statements"}},[t._v("#")]),t._v(" 跳转语句（Jump Statements）")]),t._v(" "),e("p",[t._v("跳转语句中断当前的执行过程。")]),t._v(" "),e("h3",{attrs:{id:"break语句-the-break-statement"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#break语句-the-break-statement"}},[t._v("#")]),t._v(" break语句（The break Statement）")]),t._v(" "),e("p",[e("code",[t._v("break")]),t._v("语句只能出现在迭代语句或者"),e("code",[t._v("switch")]),t._v("语句的内部，负责终止离它最近的"),e("code",[t._v("while")]),t._v("、"),e("code",[t._v("do-while")]),t._v("、"),e("code",[t._v("for")]),t._v("或者"),e("code",[t._v("switch")]),t._v("语句，并从这些语句之后的第一条语句开始执行。")]),t._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[t._v("string buf"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cin "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" buf "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("buf"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("empty")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("switch")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("buf"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'-'")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// process up to the first blank")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("auto")]),t._v(" it "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" buf"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("begin")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" it "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" buf"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("end")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("it"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("it "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("' '")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// #1, leaves the for loop")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// . . .")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// break #1 transfers control here")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// remaining '-' processing:")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// #2, leaves the switch statement")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'+'")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// . . .")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// end switch")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// end of switch: break #2 transfers control here")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// end while")]),t._v("\n")])])]),e("h3",{attrs:{id:"continue语句-the-continue-statement"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#continue语句-the-continue-statement"}},[t._v("#")]),t._v(" continue语句（The continue Statement）")]),t._v(" "),e("p",[e("code",[t._v("continue")]),t._v("语句只能出现在=迭代语句==的内部，负责终止离它最近的循环的当前一次迭代并立即开始下一次迭代。")]),t._v(" "),e("p",[e("code",[t._v("continue")]),t._v("语句中断当前迭代后，具体操作视迭代语句类型而定：")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("对于"),e("code",[t._v("while")]),t._v("和"),e("code",[t._v("do-while")]),t._v("语句来说，继续判断条件的值。")])]),t._v(" "),e("li",[e("p",[t._v("对于传统的"),e("code",[t._v("for")]),t._v("语句来说，继续执行"),e("code",[t._v("for")]),t._v("语句头中的"),e("mark",[t._v("第三部分")]),t._v("，之后判断条件的值。")])]),t._v(" "),e("li",[e("p",[t._v("对于范围"),e("code",[t._v("for")]),t._v("语句来说，是用序列中的下一个元素初始化循环变量。")])])]),t._v(" "),e("h3",{attrs:{id:"goto语句-the-goto-statement"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#goto语句-the-goto-statement"}},[t._v("#")]),t._v(" goto语句（The goto Statement）")]),t._v(" "),e("p",[e("code",[t._v("goto")]),t._v("语句（labeled statement）是一种特殊的语句，在它之前有一个标识符和一个冒号。")]),t._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[t._v("end"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// labeled statement; may be the target of a goto")]),t._v("\n")])])]),e("p",[t._v("标签标识符独立于变量和其他标识符的名字，它们之间不会相互干扰。")]),t._v(" "),e("p",[e("code",[t._v("goto")]),t._v("语句的形式：")]),t._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("goto")]),t._v(" label"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[e("code",[t._v("goto")]),t._v("语句使程序"),e("mark",[t._v("无条件跳转")]),t._v("到标签为"),e("code",[t._v("label")]),t._v("的语句处执行，但两者必须位于同一个函数内，同时"),e("code",[t._v("goto")]),t._v("语句也不能将程序的控制权从变量的作用域之外转移到作用域之内。")]),t._v(" "),e("blockquote",[e("p",[t._v("建议不要在程序中使用"),e("code",[t._v("goto")]),t._v("语句，它使得程序既难理解又难修改。")])]),t._v(" "),e("h2",{attrs:{id:"try语句块和异常处理-try-blocks-and-exception-handling"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#try语句块和异常处理-try-blocks-and-exception-handling"}},[t._v("#")]),t._v(" try语句块和异常处理（try Blocks and Exception Handling）")]),t._v(" "),e("p",[t._v("异常（exception）是指程序运行时的反常行为，这些行为超出了函数正常功能的范围。")]),t._v(" "),e("p",[t._v("异常处理机制包括"),e("code",[t._v("throw")]),t._v("表达式（throw expression）、"),e("code",[t._v("try")]),t._v("语句块（try block）和异常类（exception class）。")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("异常检测部分使用"),e("code",[t._v("throw")]),t._v("表达式表示它遇到了无法处理的问题（"),e("code",[t._v("throw")]),t._v("引发了异常）。")])]),t._v(" "),e("li",[e("p",[t._v("异常处理部分使用"),e("code",[t._v("try")]),t._v("语句块处理异常。"),e("code",[t._v("try")]),t._v("语句块以关键字"),e("code",[t._v("try")]),t._v("开始，并以一个或多个"),e("code",[t._v("catch")]),t._v("子句（catch clause）结束。"),e("code",[t._v("try")]),t._v("语句块中代码抛出的异常通常会被某个"),e("code",[t._v("catch")]),t._v("子句处理，"),e("code",[t._v("catch")]),t._v("子句也被称作异常处理代码（exception handler）。")])]),t._v(" "),e("li",[e("p",[t._v("异常类用于在"),e("code",[t._v("throw")]),t._v("表达式和相关的"),e("code",[t._v("catch")]),t._v("子句之间传递异常的具体信息。")])])]),t._v(" "),e("h3",{attrs:{id:"throw表达式-a-throw-expression"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#throw表达式-a-throw-expression"}},[t._v("#")]),t._v(" throw表达式（A throw Expression）")]),t._v(" "),e("p",[e("code",[t._v("throw")]),t._v("表达式包含关键字"),e("code",[t._v("throw")]),t._v("和紧随其后的一个表达式，其中表达式的类型就是"),e("mark",[t._v("抛出的异常类型")]),t._v("。")]),t._v(" "),e("h3",{attrs:{id:"try语句块-the-try-block"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#try语句块-the-try-block"}},[t._v("#")]),t._v(" try语句块（The try Block）")]),t._v(" "),e("p",[e("code",[t._v("try")]),t._v("语句块的通用形式：")]),t._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    program"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("statements\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("exception"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("declaration"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    handler"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("statements\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("exception"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("declaration"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    handler"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("statements\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// . . .")]),t._v("\n")])])]),e("p",[e("code",[t._v("try")]),t._v("与"),e("code",[t._v("catch")]),t._v("语句块为各自独立的作用域。")]),t._v(" "),e("p",[t._v("当异常匹配到某个"),e("code",[t._v("catch")]),t._v("子句后，执行与之对应的块，之后跳过剩余的所有"),e("code",[t._v("catch")]),t._v("子句。")]),t._v(" "),e("p",[t._v("如果没能找到相匹配的"),e("code",[t._v("catch")]),t._v("子句，程序会执行名为"),e("code",[t._v("terminate")]),t._v("的标准库函数。该函数的行为与系统有关，一般情况下，执行该函数将导致程序非正常退出。")]),t._v(" "),e("h3",{attrs:{id:"标准异常-standard-exceptions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#标准异常-standard-exceptions"}},[t._v("#")]),t._v(" 标准异常（Standard Exceptions）")]),t._v(" "),e("p",[t._v("异常类分别定义在4个头文件中：")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("头文件"),e("code",[t._v("exception")]),t._v("定义了最通用的异常类"),e("code",[t._v("exception")]),t._v("。它只报告异常的发生，不提供任何额外信息。")])]),t._v(" "),e("li",[e("p",[t._v("头文件"),e("code",[t._v("stdexcept")]),t._v("定义了几种常用的异常类。")]),t._v(" "),e("p",[e("img",{attrs:{src:s(750),alt:"5-2"}})])]),t._v(" "),e("li",[e("p",[t._v("头文件"),e("code",[t._v("new")]),t._v("定义了"),e("code",[t._v("bad_alloc")]),t._v("异常类。")])]),t._v(" "),e("li",[e("p",[t._v("头文件"),e("code",[t._v("type_info")]),t._v("定义了"),e("code",[t._v("bad_cast")]),t._v("异常类。")])])]),t._v(" "),e("p",[t._v("标准库异常类的继承体系：")]),t._v(" "),e("p",[e("img",{attrs:{src:s(751),alt:"5-3"}})]),t._v(" "),e("p",[t._v("只能以默认初始化的方式初始化"),e("code",[t._v("exception")]),t._v("、"),e("code",[t._v("bad_alloc")]),t._v("和"),e("code",[t._v("bad_cast")]),t._v("对象，不允许为这些对象提供初始值。其他异常类的对象在初始化时必须提供一个"),e("code",[t._v("string")]),t._v("或一个C风格字符串，通常表示异常信息。"),e("code",[t._v("what")]),t._v("成员函数可以返回该字符串的"),e("code",[t._v("string")]),t._v("副本。")])])}),[],!1,null,null,null);a.default=n.exports},749:function(t,a,s){t.exports=s.p+"assets/img/5-1.08d322a1.png"},750:function(t,a,s){t.exports=s.p+"assets/img/5-2.ecaa5ce1.png"},751:function(t,a,s){t.exports=s.p+"assets/img/5-3.e01b75cc.png"}}]);