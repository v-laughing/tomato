(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{1115:function(t,s,a){"use strict";a.r(s);var n=a(7),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"备忘录-memento"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#备忘录-memento"}},[t._v("#")]),t._v(" 备忘录（Memento）")]),t._v(" "),n("h3",{attrs:{id:"intent"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#intent"}},[t._v("#")]),t._v(" Intent")]),t._v(" "),n("p",[t._v("在不违反封装的情况下获得对象的内部状态，从而在需要时可以将对象恢复到最初状态。")]),t._v(" "),n("h3",{attrs:{id:"class-diagram"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#class-diagram"}},[t._v("#")]),t._v(" Class Diagram")]),t._v(" "),n("ul",[n("li",[t._v("Originator：原始对象")]),t._v(" "),n("li",[t._v("Caretaker：负责保存好备忘录")]),t._v(" "),n("li",[t._v("Memento：备忘录，存储原始对象的的状态。备忘录实际上有两个接口，一个是提供给 Caretaker 的窄接口：它只能将备忘录传递给其它对象；一个是提供给 Originator 的宽接口，允许它访问到先前状态所需的所有数据。理想情况是只允许 Originator 访问本备忘录的内部状态。")])]),t._v(" "),n("p",[n("img",{attrs:{src:a(454),alt:"avatar"}}),n("br")]),t._v(" "),n("h3",{attrs:{id:"implementation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[t._v("#")]),t._v(" Implementation")]),t._v(" "),n("p",[t._v("以下实现了一个简单计算器程序，可以输入两个值，然后计算这两个值的和。备忘录模式允许将这两个值存储起来，然后在某个时刻用存储的状态进行恢复。")]),t._v(" "),n("p",[t._v("实现参考："),n("a",{attrs:{href:"https://www.oodesign.com/memento-pattern-calculator-example-java-sourcecode.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Memento Pattern - Calculator Example - Java Sourcecode"),n("OutboundLink")],1)]),t._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * Originator Interface\n */")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Calculator")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Create Memento")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PreviousCalculationToCareTaker")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("backupLastCalculation")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// setMemento")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("restorePreviousCalculation")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PreviousCalculationToCareTaker")]),t._v(" memento"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getCalculationResult")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setFirstNumber")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" firstNumber"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setSecondNumber")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" secondNumber"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * Originator Implementation\n */")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CalculatorImp")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Calculator")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" firstNumber"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" secondNumber"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PreviousCalculationToCareTaker")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("backupLastCalculation")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// create a memento object used for restoring two numbers")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PreviousCalculationImp")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("firstNumber"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" secondNumber"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("restorePreviousCalculation")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PreviousCalculationToCareTaker")]),t._v(" memento"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("firstNumber "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PreviousCalculationToOriginator")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" memento"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getFirstNumber")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("secondNumber "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PreviousCalculationToOriginator")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" memento"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getSecondNumber")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getCalculationResult")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// result is adding two numbers")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" firstNumber "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" secondNumber"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setFirstNumber")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" firstNumber"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("firstNumber "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" firstNumber"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setSecondNumber")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" secondNumber"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("secondNumber "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" secondNumber"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * Memento Interface to Originator\n *\n * This interface allows the originator to restore its state\n */")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PreviousCalculationToOriginator")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getFirstNumber")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getSecondNumber")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n *  Memento interface to CalculatorOperator (Caretaker)\n */")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PreviousCalculationToCareTaker")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// no operations permitted for the caretaker")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * Memento Object Implementation\n * <p>\n * Note that this object implements both interfaces to Originator and CareTaker\n */")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PreviousCalculationImp")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PreviousCalculationToCareTaker")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PreviousCalculationToOriginator")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" firstNumber"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" secondNumber"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PreviousCalculationImp")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" firstNumber"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" secondNumber"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("firstNumber "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" firstNumber"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("secondNumber "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" secondNumber"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getFirstNumber")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" firstNumber"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getSecondNumber")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" secondNumber"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * CareTaker object\n */")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Client")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// program starts")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Calculator")]),t._v(" calculator "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CalculatorImp")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// assume user enters two numbers")]),t._v("\n        calculator"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setFirstNumber")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        calculator"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setSecondNumber")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// find result")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("calculator"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getCalculationResult")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Store result of this calculation in case of error")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PreviousCalculationToCareTaker")]),t._v(" memento "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" calculator"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("backupLastCalculation")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// user enters a number")]),t._v("\n        calculator"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setFirstNumber")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("17")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// user enters a wrong second number and calculates result")]),t._v("\n        calculator"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setSecondNumber")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("290")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// calculate result")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("calculator"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getCalculationResult")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// user hits CTRL + Z to undo last operation and see last result")]),t._v("\n        calculator"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("restorePreviousCalculation")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("memento"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// result restored")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("calculator"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getCalculationResult")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("div",{staticClass:"language-html extra-class"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[t._v("110\n-273\n110\n")])])]),n("h3",{attrs:{id:"jdk"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#jdk"}},[t._v("#")]),t._v(" JDK")]),t._v(" "),n("ul",[n("li",[t._v("java.io.Serializable")])])])}),[],!1,null,null,null);s.default=e.exports},454:function(t,s){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA30AAADLCAMAAADtLwp+AAABDlBMVEX////z8/MAAAC/v78/Pz9AQEC2traCgoLExMQvLy/Y2Nj29vb5+flHR0f+/f3s7OxnZ2f6+vqkpKT49/cfHx8NDQ16enpQUFA8PDw3NzdaWlonJyf8/PyHh4fe3t6ysbFUVFTNzMwsLCzm5uYYGBh5eXnu7u7Kycm6urpxcXGop6dqamrr6+vX1tbw8PASEhJDQ0OtrKx9fX1gYGBdXV3R0dGOjo68vLzb29vo6Ojj4uKZmZng4ODPz8+Kg4PIx8fU1NSdnJw6Ojqgn5+NjY0yMjIlJSWSj49ISEiXlpaLiIhubm6ioqJkZGQtLS2AgICGgIBLS0uwrq61tLSVkpLCwcFzc3OPiYmcl5d2dnYAfn4kAAAhUElEQVR42uydfVfSYBiH792IQMCQsYFzgBBEgAgGaCh4Kgq1kjyWdk7f/4v0vGwOwhcqy23c1x9F4+Gwnptrz8t+KBAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQdzC5zXiTgpwH1SL32IKxK+sGWvEHRg9uA+qxe/QiQGxUPE1IO5A78P9UC2WJ/cFiJWqONnnHci+Vas42ecdyL5VqzjZ5x3IvlWrONnnHci+Vas42ecdyL5VqzjZ5x3IvlWrONnnHci+Vas42ecdyL5Vq/hf25dwUOE2qBa/Y1/CIQ3Ek1b8WQwjMEcEY8/AW+hbikMabiUQtfg/5J4rDhmYJSBZ2c8erXj8VUnHzuW7Ntn3H2ohOxd7ivNoIw5e4D77ApCVNda8ad8giZJYVIU/Q/2AUVgKsk86Z1/KXuEf2PeyGgGJH+1brg898r7//GyPwoj9UOXNdwP1MvwZlT2y7zftQw0AEo0/sC/fRbIvIPblC4gF/tlVNYNPhyKYHHWNpj3zHPQ6evaogRtxOfOMIkaL045+oQCA8nENjVxIZU8xuH/FhoWdUkgVHzDtjXlZg18g+6R9G/g5A1AJj0vCvlbBQqvbkv3WyuqdjQovyXGvg2vNDMz2exQ5Edn9uPZRIfv8a1/rDHOHwIlv4Mk+t+8AUZP27ZqIup7Lzdr3foyMbBpqW9gJT9BowhVrZibLcG0hfjGEzez1n3KYTME8ZJ9t3zA2HgHUceMH61vez1ZyguMBf+q0hIx+W1wPzT0dG/HZfi+HO6zxFRyWeG2QVY/s8619+yd4oYLgHLHJJNPHw/JI2JfvonGuZgo4a58+jO+bOBnANuIrUKZYaotLs5h/XhZByaLxmn+KzK1oeaGOZJ+0b72P27x/hxHWt5nPzCHeld08e6p60R7l0HgDRZNfx3Zjxuu5fk8lMQL8tfo3Vd2usheRfX61L4p4DpJrRI1JhkPV3vOsXTK1xGPXPjFjGnLblFQqAezwZCDtkzqK5i/4pyh8BAuQfbZ90SE2Eq2zk31uHx8LgfdfuMIe5moAdV4Kjc9FINFg3Tnb79K+0VgciW+wF5F9PrZvOGcfL7m0T3oE0C659klX6/xToIZyBjLs5SAX8csuAKSSzFn50kXIPtu+cjVceVkttbl9UWTIrmRPXah8RiJKIREtZL+79tlHWKNqmezzq32szo4m54jbUjLXvohYEM7apwFI25oGlg7qU9c+3kI2T6bsly5C9kn72iUjeoAHYNs3SQrKvN9EC2GfsSmOTmtuv7v2iSOgsUNkn1/ta53hXgU4So/ZIxVaHPsW7WuXxBwpctvY11fIvgfsgwPs9qsvHfs0kMzZ5+YbFu1zx76TfbLPr/appzN3HL5nZMkX132L9qWS/Gh7yz7srvveWtjNk30P2feyWjVyNWHfYMKucov2NRHri/bNr/uUHu7Rum+p90045D10toc5xK26uNtu7sKcfXLPM97F2+xjaoaPMu8MNuCJC7HK9zxzR6Ds8Lv2ZN9D9rXOECMq2HuesX3IvLA+K7P2FU2cKjAKm+9/tW+qiD3P16p6buCpurL2iUXOku+7qTgkPGQfjHIoGZfBtc+538fob91mX/4TMvT3MZxcseEOTzR+v88wO2hoKtn3oH1qBA0xXZf3+4xNC/XQ7NgnZiN6uIO5wzn7lB6ivhPn9/smFuKO4vf7fXbOWFNW0T7IrPP/fampwK/2wXHJYFmX23dd4qe6UTpODyfmu3TzC07WZdZFnx6rQPY9aB9EjbOWtE9mXfRGEebsk1kX86MyP/OE4xzqkYSMGp29yvg963KTM04Olki4Bs6++8ioYmOmkQAP4lf7PMmT2OeufKI7BpZqDyZcV8m+oaGHQP1q4CvwImRfAOx7Z+/6pYdi067YsGcBTuLYTbvaCVd2YKqjVWg59qULaF3fNHMzxn63b8DXI6ZYW3gRss//9il9NIvAqU0/DaBsobWnozkAJ3Hspl2dhOt2Byd8OdyS9qkaHyPcZjcZY7/bB63CBI2zpje+/0n2zRMI+0bj2a9YJRrcxd0YHoCTOHbTrva9Fnmj+XUVt6V9IZ1v8znNZjLGvrfP25B9/rdvfntOraVqKrdsJ2MnjmfTrtK+dC3VFpvqBWHfNdfObeZkjAOw7vM4ZF8g7LtQ4Qblo2lHW+0Uz2zaVdgnN4g5EW6fHsPJYL6ZiGiRfYuQfZ7lieyrhHEaB4f4DnYa77bNm1tcMJt2lfa1cmhlNe1E2seJpOea8eE0CHueHofs8799Ss/ZdYl/vzosV/EDn3m69sm/JNI+GWhkismx7/wK9fJcM7LvDsg+z/JE9oGG2I3bOeOC+JIbHJ+49sm0q2uf862OdZT2JVOHOey3RTOy737IPs/yVPa1+4hb60flroHhozcGZtOtKeLUsW827SoTrk2+G1O8RLxQhX2wbRjNmWaPal8sRNxB9VHso1oINp/IPqj0UTJ+y9d0jNIpGptl2z437WonXPdNZDSy2Mm9Ffa1+8xbt9mj2ofEnTyKfVQLifVE9kE61LOclPVRz9CzqdaOldy37XPTrk7Clf1pncYHW9bWQNgHUR0L+ZtmNPbdDo19HmbTh98wEgQ25+lxaN0XgHXfnZB93obsI/vIvuUh+zwL2eehs/UDZB/ZR/YtD9nnWcg+D52tHyD7yD6yb3nIPs9C9i19tiq/QYlmtwirjDfsC0gtyL5lzzZdwOQwVM/qVhSgdRaFWdRIBFYDT9gXlFqQfQ+dbaKmAqdclT9pZTfWU9g/5iveLvmm4n62L2i1uMe+IOSFYn9vXzSZAk4T68DJHxfTEfG7b9xfJBtFhgZqqNQxztbTEGAexz6qxUP2BSIr+3j2latDFWyUIa7X0vEd/SBU7+tRSLz8kk3FVc3YuY52jU95CC6esC8otaCxb9mKxxudwsipuYZRgLfjDypAJdxIwLNYBKBo8vlQvmC9heDiCfuCUgta9y1bcch820O9NBypTsUl8Y2NuKz4NtblhVmD4PKTvbNvShuG43hIZaUilYfEWkt5EOQZeSiCgj2VosjQeajjbu//jSxp6apj7nCHri35/rHbkSbN8c0n+SWW/lxBn1+8YPT9rbdxJ8GptaG/6DahVLcdz/H7mBTajqvojiOK33hm1+8l+vzoxYfQl9Ykwxf0nRMDJ3Ka40IBYCs1a+Ysx+uybOi7fc12nIcLudpxr9LnRy/WT1+qjCBGsFFOeZ8+J9pxRIMa03GRv9HN13Lbjqvf6sD3ckfk6RMv1kxfwRAglB4B4DQIBaPgH/oC44ew7XjadDwcNUtS8su9hu/10fRNNX1zvFgrfWmKXLewALGLYEPT/UJfYo7vRCv7knJpOr5THp6Tz/l8J2Cfs93ToIiTssC/+mj6NAwFY1O8WB99Oo04pzpwZC+A3qbvdBIAptMZOHvuPR2hRkUEIVzt1dK43Hs64OdCNly7DabrYhx3SlxXcWn2IW/QBwqGuW3ZCC/WRF9hvIg4lyNRugB6mb5fClQyiD7ZWxfJ/9sYFWn2WLmSyMq4JT4qeGQ+XwG3Jq423PX0LWZtKb0BXvwbfYlAoXbWPz/dvjzJFkPf+aETcS5J1zBEyhCsLLfSx/R5py6pBwTRuOB3L6TDL+lWpXJnXE0mk+fxSOUf2kc/ytNqVOscZDLSLNLc2pevhUPlBqF8o4Ex/KPGf/kiKX0+WPuYPvXM09iCUOP87YV0CJeFcaORR+hGORSu5f2tZmQmZTIHHS1anZZ/HLUfeHU0fp5cGXeV1mP6S4njbzFsaOm3ggiN80XkyWTRt29rK/ixkhE0oyb/Sjok9Hy/KGb1y9NcrRAIg3/To0YB5MBrGQLE05S3T12YGH0v5IJ935sAorL+IuRsQGQUvP6UNdN/ijyDmxB5ros+KkOCNoA6PbfifPALI6b/derS3YBTl/U+aVawADSCNOT0xS+MmP7PXxweN8CLtdLnAIiQUXDDeGb7PiJv0VcYIzpzb4QX66ePqqC7ZDwz+og8RZ/WgFvGpnjBft/not56QZ/wlPXmeMHoc1FvvSBXvFHQL2L0/akWDjK9IbwW+pgXphoKo2+zHGf0uUeMPhf11gtikSeLPBl9q4vR51ox+lzUWy+I0cfoY/StLkafa8Xoc1FvvSBGH6OP0be6GH2uFaPPRb31ghh9jD7f01eX4yL4MMXUyApZX+23ZFLtRqJhX9J3Jql310Wwuhh97qIvBPO2fVcwsrueMbEXA3EoLxhJtmmCgjUqcL/Kq/Z2KpOA5+h7X1LpQLVzHOOlM/CbUm0ZQkXjlqdARp9r6IvTMRnCeV60vOzk30/fcu5jkFSHKdI4tjPw5IL5lenbjmyvcNWJEgcryUP0ETPenVQ6jrIA9INqErwSh5SHEjfZx6MkrbR0H0bfJ2aOfks7ZYu+TjMHqIrC7B/oW8p9DC6VsUhcFmaatfa0hMjKjqeFVeiL7TVz3qOPevFXM96bVDrXnCcIlAPl8rfr5LoVIpACu5JzH0bfp2dRCdNX3G1V6LfULyvwenQMtgUzSU4IPislQCSOMlV6dax1ixsHFyIAfKQ/VnDmNDFQoKSD10VnFRnKlRhY5D5OtJoQ35bo+OoS0yl9XeUEECWm9x3q+K56DZW9nJmnrr+HGtFa4AFhrf+isXAUQhL9Oo1Z2hbiegYrg1g9g9GYDp5ivuVs7Kw3sROdD8s7Zh4cpV1bFItZUmVv2xX02V7QPinj3Wg0vGTGH5JKJ8h3Dput2CKptFMFgDTumXGmPKKO/Jq3Tq+PrMXwXA8vKon6PYKKumvfxzaD0fcZ9CW/oi7HqY2vSVCXg49ZQ5BqsdOm1g8QU79o04Q5kw54cnVMxe0LroorxNDmUbs3QB1+3qsIUuF1EV8tlQ7w0yL3cUxtqBehOR6LZLbtBEz6uOZINJfCRzrQziTB0FtB+ZRg0al2OR7Pyyo3QNOE05h4vPetWBCdxmz62gctUj6RKr0ybJnRbnnHoQ+UYNrOCVSXZ2m9Ig9TVnEWzb4UuxnBTfRlUSTdm2v70fCSGctJpZNfcbvXm+cri6TSThUy6QRz1vFS5vgFfdSAY2DJrhRCmSduoFTD1n0cMxh9n0DfboROh2J8FEhMzbDke/5qEY+FYChuGtf7dknpK+bVGHWUxHY8VOnGAe6RDwb57OsiPkZnXdIszQNCiigqibmcIlOvCohIo/xtjZ7lNFOEPnGEOAukJFnh4rQZSEZa8mh4/qIxaww5jdn0Cdv0X+XESq9MV7sXMTL9kFQlHzZziekwZQ7wkUjpS7ZpTXEAXUTfT/bOhTtpGIrjbXErk62MR2XljTBgwHgMBjrcUSabc4zt4HTn+P2/iLm5rTcaYUVkdtqc4/M2SePNzzSP+096f+sQPp7ZO0nOkC+VPklMYjAlzzfxghUhS3lWx17f5/6j1Gn1KnaHwUwRHf5VwIdYj+AMn77101ee9cqKgl9n/LOkmd8Nfacva41wQgD09S+O+ThiBhW9VOCd4Au4WwvKJigBO0kGTDgIvTWjNn2V+IDPVlRGHx8RoZbLRmiXfyjq/JK6a9ZzqDCkjwpzetDBNtin0D+nHKQMdTi+qrpRhKYdpflXF/ZWoK88gzzK4Y2H6LPf6fhiNyQ5Y96l0grzDIIkZHl1rqOxxh+kZBxOW2ZbBwIxEyZwNf4rC87w6Vv/zdFG1EztB1RFYWy8CLBUTeyEv9OX3s832dDTAR/H6lYOHvioRREF7ATwmGQi+mL1dkPhpQ/Zk19s+tQeo6aSqoR2oat0A5CmW8/xixGKwMeoMKRPLIz+/0a7AmVBNgCU0sCsKkquVGF5rvlcs75RhGpend8anlh1EXxhQ9No74YkZ/ziUunm550Wy+fQJ2R5vnXtUFWVFnEOo73WTcfATEpkM5mC2m36BGf49D3CzdHG6SSuwRJHULOTQJ8yiFeU6EYR6Avt2naZPjJJ9CFQyMkAnkesRlbW0HsqEMOm+5gepE8sbD59WAmt/u2ntw8SZfaaURwrsBqW0xtrnoIvhHeSnCFdKg2X/PUrjfALhz4hyzt73wUbLSf11hzwTDBhrw9OwpsOfd+d4dP3WDdHR7KZVr7MBwdMRF85cdTsHqWBPhx4MP1En2Qi+mCskcc+Np6Oiu0RJ4aPQpgeoI8Kcz/2GXq7+Oas7+ThRSB9twaOM9758hTok5whXSrNftrkc0WHPiHLgrGPZhksEzz5FZpbdegDZ/g7Do9KH067wSMSfcb4MnDDXG3P++bQRyaJPseUE+Z9wNFkN3cOgxnO+9zRJxY2lz6c91GqxIM5loumRTjvC+/YcywP0Rfeqcdo3ic6Q75U2vlXKicc+oQs8+Z9d3W+lIk7MDwTDo7GWJz3+fQ9Gn2FnQr8cn1xHJvAiptS7I3SRJ/y7nyaKCN9lZIegeXRZFaij0wSfZXS2AA0zmjNE54YnOUnMU6MMS7B5pQ6yYQepI8K+zV90pondM+r/a7KlwQh0xe2agrVbB/AOqnxwUtrntsH8IoRnb3Tz86QL5VW+rAiZVyXNor4zyBkmbfmmTPrKp6H1UaYqVDqA++WVsV/RcEZPn3rvzm6nE/1A3AVMewXWbVAZ8c6ZB05VTtNc/rUrgb+sff77geD21YmItFHJgEYvPsYtugqgboZNRS111Md+optLYfEQIcaBu6S8cDCsS+q6UGVCptHH+332ckYn92M8ID37A62w16jORjf6AyO8pYX6LN9AZtv1bf3k71d2RnypdKFeLJardevSpsqv1RayJLe//V+X+TKvLm9G/T3tImq8Ezl/FYt0G9HL27DKtbjOMMf+x7jnGc4Y2n8KmI8K5HiV4u/tbT7GKdP6fDzKbpz1sW87MTkL08yCcDg3cf8eEorHxDPujwHKNpFJAaPV8Snp8ZC+hpdbS9Lhc2jj8660Hk37H38rMt5JmybjcBMi7842fUCfU4yBm2NTYhZcyRnyJdKG4M9LfVBzc60K7xUmrLMO+uiGG8n53DKusochZlOumZrmg0dmYky1uM4w6fvX4swwnOe60zpo3bxqcf3NdorrXzQOU9llHrnOosf4/Cv05e+ggnbWhLFODzh6NpOHmipmp2Vi69dUIyDu+TT96/Th/F9a0kU3/eE6Tve2ugEhqlEY9XSKb7PbfLp+/fp80Zsu2fpU46nMDVt+LHtnu7PT5Y+zyZv0PePJJ8+D73tU0g+fT59Pn3uk0+fZ5NPn4fe1vWc8HqpeZtP38Jp36rNMKJu5o24nUi/9en7vbf1gt6ZvGYZ3tHGhrNbqAV/NP5H9C0vabayj1yumd71iz5963tbWVFsbXpntF9H9JWcQM9hyVyGPtL7etr0/aakmeSjpZ3sfr/Qp291HS33imJr0zsjTTKib3Y+sI9LJyiP+9TMe58+2RerS5pJPlrWyaiJ5tO33gijxlFKsz6G4JzkcWLrOcmTwcnIlBY/OFFsRTEyyXpnoikIxxU/GcG2dlOLwEdTvmVebka46RSUxMK23hkzJUwuqIZnQCVNMqDvoLuf5pbUlRak0txV5Oh9OYJm3qRP0pdzI2mmfnymmYmAYTeRWo/HPBf6iITnqCbHyY0Mc/puVj4nioFdKBRHT6G58SJu5k99+pb1+OuEVWOaZnUW3tM9SPaLgjzZK4sdvahZiYatKEYmWe9MNF317nI7qVE+V02ymYcRNetfgkfmVZqZPuQ7Ad38uo2yXEa0dP+lkmndxzCwjDTJBPr0kZXlJzh7EIFNpbmrCKW7SNDMy/SRvpwLSbNQnT1c7cWDCjaRWo+SZgt9RMJzVJPtZOgPhbtZvCDFSKBuFQYS0lNghkiZ4Wknf/nI9JnP/koy/xh9xpjHuX28OGaRLOOIIsqTjV5WUMLI9gCZZL0z0QST9aC5cQKBon0la9VVmNal3jHTrAiBaBsojsBMXPT1Q6nixP5RfB7Rx0Q7eRcasUqF0lxWhLFvJGjmYfpIX86FpNm7s7GBQGATqfW2pNkiH5FWHNWETjbGnLvs2SQmxQdC4BKOrOJTkGtgRvkh28elbyIQsfeYqf6n6GvmpyEnsJxLiZE8GSnW2vSRaZHeWZAHBKJyQ6OtgxQCTvSiaOKFYQ+qgQnRwbh3ik0X6ItNuiqflAB9VJq7irBrCoJmHqaP9OVcSpphWBU2kVqPoe0uNOmgaKEmHMVm8A2Ceo4UG08SVSjPKD4FuTK864Smj0SfnLbVv5BW1zRDIQ+SdRDlyYy303N4CukTTYv0zoLsB0Xe6Uomfg2m6IWOJqIPnYZsoOaLrMsCJVRZX4lNJjzgkEpzWRHYRUEzr9G3QF9usaRZUd8zWTaHPmo9yrq40KSDooWa+N9if0DtRtKFESSqlDds0BWeglyOro/u07e8jpZInyBPxjpD8i4brtwgfaJpvt6ZTJ/umCT60FvYC1DvTNYkgxKK7bHxfKvKK6XSXFYEdlHQzGv0udKXkyXNIJL9/Wn4pGvTJ7YeJc0e0KSTxdPonwvdQJpoojoqyDOKTzkicT59S3/t4Lgj0ifIkzUuk03+XYj0CaZFemcSFHyAw0RQkNKui7EP4uBHONnE0lxXRGPf0Ktjnyt9OVnSzNAvTvm3tEMftR7HPheadCSeRn8LvpDGPnrR0mD7IN8Un0L6eNHGrU/fsvO+nkr00byPBO46GtInmObrnclQQH+ZQx/NVRbO+0CXbLOrGwrN+9xX9JPOs6fnfaQv96CkmeOtrCXO+0RJs4c16WjeR39LYtbSvA/3XPXs2VARn+K5UH1c7fn0LeVxR8SqYwbQn4I8GcjOwXUB5hAdI5gW6J1JUGStKXgqkChI9GWtSQzW6eKFRWueIO2UtCrYnag0dxWhnQTNvLzmSfpyD0uaIR4xvdRTsYnUelrznOsjok+oyV7zLFX4v+q9tOaJO4c19gLiUzxXThsasKTs07ekjhaIWIGmmYr0CfJksfv4MPD+2fXGtBjhimJkUubrnUlQGFGzV+U1CFCgLBfs9wXZHhXLpfbm7vfxc4r5JnYnKs1dRSjdRYJmntzvk/TlXEia5cyDwV1Sv98qhHgTqfX2zsACHxF9Yk0oGwc7eXCJ0aG034enZp7xuxfpKfxHTrDNx/eJhE/fMmcD6KyLand5UZ4s/KJl5guRYct6hYpiZJqvdyZBwQ9hoGoaQYGyXMyUgFyR+WddkD5YOcdKqTSXFaF0lyNo5s2zLpK+nAtJs0jtRrNqsYJldrCJ1Ho867LIR0SfWBM6uZGBP5/IZ11wooL/svQUmk8mrKucRn36vHcyx7Xe2bKaZP9RjMPykmarJtRE83J8n0/fH9U7W06TzKdvoaTZKoliHJ4Ifentv5PSXvH4GuL7FiefvsXxfasljO/zdGz700reps+Pbf/Gzh3bIAxDURRFREJiA1okCpZgBTr2X4UOCYWYONVz/jkrPF25sX0Y8m27+iIWH9rO6ttiuH9dxrLrxdWXQ33VFldfDvVVW1x9OdRXbXH15VDfr8XPEwtu7fps0ePyVN988SOL2vXZoouzb+4xfdxPfLs267NFl5f6Eu/FjeBPfbZYQX1lF1dfDvVVW1x9OdRXbXH15VBftcXVl0N91RZXXw71VVtcfTnUV21x9eVQX7XF1ZdDfQAAAAAAAAAAAAAAAADAu527a1EbiAIwfIaASiKzxECuokEkiQQNKKTGVMeEFIKDsEOMJP7/P9KZ6LrbYltK25tyngs/Ts5evozuuiKEEEL/J7JdWPAdh7xEFBBC/xRdrcfuhH4zSrWCFz4ghP6pRenZ3qeBAQCmERkUYHgoPc/rLwEh9E/p3LNt7zUc9EbF5895sdKqvmfLUQAIoX9qf2vNfl17V8+7Xu312rOl6wU+oAYhFv3Bl8yZ9x2LGCbcWO/r1Cf3VXUZIfSQjT37mesAHuhLELZ5FRP4jpn08vakzahamrj5aBB1+3qV567eteYHx80QpN05Hx0iQAi92X15Xt96Dw/piTHORVNtKXxkbUrBGsaO8ZDSrFUPXR/AmTaCM1EPLBjqIyZcA4AmbVOXTYW/y0HoYVs+rc/rZ+/x5aK9LJfzWrQyqHdmT3A31oMRK93ZNufzJGjZxgG9LDeJ3uNNBpNa3Op7Kbg2mxRsgH/IQOjOma/t50ICN1Yo8tQBGC5bMSKUqn6625jzgwVAI5c1y5iFEcCUFcRy2XkIEK1EOFzWbtjVpzc5AYhZZQBCqDP54tnPrWO4WTbNEhS605bbIAhmTno4TH0jFPeWyOHgzzY6BchkZLOWZSDFvPX91Oh19SVl66s4Xfy6fIRuqObZP3KybitzMSKP/YsQ4hxVa8Gms5rv4VtWj52p3pSzLuymTAGcW32k4lU2bZsYEEIdcvpxfWMflGElzg68SQtxXJr7klXbrKvrIxqXcpSxetHVVzbJoz75THAmVnj0IXS36F549sNgOqg+8/F4fAzPg+mZ29JrAoq1EnN4lzWtD5Na3ux5vYWP5JgHFGLWvoC0q/l7feTMy7ZltQ4Ioc6sb9vel9ikhmVaBiHyziSWszuq+vagmJU4m/DgF83SOXDNAb0pd/DRNmdzCyBjx0VXX9lM3uqjAW91I5qzYgEIIWW2tu21Bs50tSHQGe5XGwP0vpwHFJTLIxl/GQEdMPflVKYytpYdoGMmqQkQhWLlA6gqU+ju6+1bfUYlBlSutE0CCCFl9iqPvgVMxtf1noKS8OtrANZJnn3T+07NB2YXZq+ZW7Cr66BZGQDmWRRbkGhStzMwekw97aqcqiQvLCdv9ZGVmFIAkjf40hOhmwW3vdwBbW17KwuUi2dfV6azkfVl0DE1Vk+JaUaDpgkcsCp25DFIacuqmWkO0xEbvThBUybmcGiqKk9bx5RXNUcmexYVUSmOFqYZcJkpQkjxj559onCW9RUEJDq/2teRQS+23U/hhvR4U1Tuid/OwCkX+aLbnRzFsXLDmp1SSGpR5kVRuAbscpa7VSsKuWXN5Vzmtz3JWSjzxQ9aI3RjrDzvswMXWV9lgTJQZ5/j9Gy7NOCOaDWTjoduEuVi44BCkxGTmlUKNGA3eSSrHHE5DWfqR9XG0QdIw4bxeoDxIfRmulbv+7alN86gk9bXcQxWbtu991KGk4N2CVIKihWWCdz58UUbZAQAFtObpamexIfDMgLJSeQsG6pos8M0dQAhdBcV3npOYTLP7q3RSU8+zPrelxQ+oOYjnKQOrY8XKDyBH6ZG6JeST9fx3gEHHkygu9rrB88DosuCFRNACP0xmh3tfm+yIA4ojmWRdPDp+iVw4CnLFYJpgBD6C2bz/LV/HJ015VytRtzmoU7hOapvNhqefQj9HfRFnxefXj3Ffv2Su8HO+Nk6xTd1CP09JvG3dz7B/0NACCGEEEIIIYQQQgih3/cVFMr7+Sy2o4EAAAAASUVORK5CYII="}}]);