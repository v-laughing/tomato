(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{1276:function(t,a,s){"use strict";s.r(a);var n=s(7),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"_10-4-变态跳台阶"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_10-4-变态跳台阶"}},[t._v("#")]),t._v(" 10.4 变态跳台阶")]),t._v(" "),n("h2",{attrs:{id:"题目链接"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#题目链接"}},[t._v("#")]),t._v(" 题目链接")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://www.nowcoder.com/practice/22243d016f6b47f2a6928b4313c85387?tpId=13&tqId=11162&tPage=1&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking&from=cyc_github",target:"_blank",rel:"noopener noreferrer"}},[t._v("NowCoder"),n("OutboundLink")],1)]),t._v(" "),n("h2",{attrs:{id:"题目描述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#题目描述"}},[t._v("#")]),t._v(" 题目描述")]),t._v(" "),n("p",[t._v("一只青蛙一次可以跳上 1 级台阶，也可以跳上 2 级... 它也可以跳上 n 级。求该青蛙跳上一个 n 级的台阶总共有多少种跳法。")]),t._v(" "),n("p",[n("img",{attrs:{src:s(488),alt:"avatar | 380"}}),n("br")]),t._v(" "),n("h2",{attrs:{id:"解题思路"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#解题思路"}},[t._v("#")]),t._v(" 解题思路")]),t._v(" "),n("h3",{attrs:{id:"动态规划"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#动态规划"}},[t._v("#")]),t._v(" 动态规划")]),t._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JumpFloorII")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" target"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" dp "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("target"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Arrays")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("fill")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" target"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" j "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" j "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" j"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            dp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" dp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" dp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("target "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h3",{attrs:{id:"数学推导"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#数学推导"}},[t._v("#")]),t._v(" 数学推导")]),t._v(" "),n("p",[t._v("跳上 n-1 级台阶，可以从 n-2 级跳 1 级上去，也可以从 n-3 级跳 2 级上去...，那么")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("f(n-1) = f(n-2) + f(n-3) + ... + f(0)\n")])])]),n("p",[t._v("同样，跳上 n 级台阶，可以从 n-1 级跳 1 级上去，也可以从 n-2 级跳 2 级上去... ，那么")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("f(n) = f(n-1) + f(n-2) + ... + f(0)\n")])])]),n("p",[t._v("综上可得")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("f(n) - f(n-1) = f(n-1)\n")])])]),n("p",[t._v("即")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("f(n) = 2*f(n-1)\n")])])]),n("p",[t._v("所以 f(n) 是一个等比数列")]),t._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JumpFloorII")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" target"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Math")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("pow")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" target "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports},488:function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAkoAAAFeCAMAAABNUsC7AAAAwFBMVEX///+6yNPAwMBmZmYvMjUAAAD9/f3Q0NAMDQ2QkJCMlp5AQECAgID6+vq5ubloaGj4+Pitra1dZGr19fXDw8PGxsbm5ubc29vs7Ozp6enu7u7f39/X19fw8PDKysqzs7Py8vLZ2dm8vLy2trbS0tJ1dXXj4+PU1NSxsLBtbW1ra2vh4eHMzMxqamq/v796enrOzs6hoaHJycmYmJhycnKRkZGUlJR9fX2NjY2JiYlvb2+lpaWcnJyDg4OqqqqGhoZg+FlhAAAfQElEQVR42uzaa2+iQBQG4JMhGbJJUQwDA3IRFLUULyjq6mr1//+r3RluVtus6e52eznPhyadtDHBwztnDgBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBC6JVoNFYDk81ag5YDktXqlQY2SBqPSpwCQoLTOy7y7en7MJl2QKBzpbYBadesJBSEU7PyCNLgoZ2shvO7x9M6BslptVgQc6trYLV9TrTLJ/1jvlaLeHlQanMQQqWRg7RtVn5oIJyVW1sH4fGq3Db1wkMLJHW9WdzPAs8Ksbg+PHU3fJomRrupgBlI5rf1Jj8s9sf7mQ6S0b/c4KLNtvRtAtLyh1L5BlKu1FYg7a4+y5LJ5fpYWh+DlpqDFASaKLUtSONBn008bnV1Cn9G08OuY6WcQ0HvHxf5enc3TBIC0uYiAZu8m87XLqB3jFrB/WZefHX1NrR63OwHZqRBjWq64duONUoNkCw1mwRL02SEpSC5jFR49Tc1ByQjTUeW5Ti27cOzND6Z9fb57vsqYXC5Le6qTMyP/Qxz6p3JksstRueOBgVqVF+XR2oTEDTSyEAKSIOCYF6tqKSmgpQyZgYTdezxVAOJ+uF5/I0Goul//NH0ZSul0Maceg+M8OmGMl93Iqh1LTdSA5EyXlFe14WzJBWzmgdcptJ1AUJMagykjNSWZ//FgmwcpRo0dMvVrjbBE0itb/uZ5wN6a37W2U2nRhElyWq7Z1yH0mV2BNUXzswgi59khx8auq5RCi8LuyUfCnTk8ijyxnEcd0Fy2FW6XRWgK5MrjlInLKZaZm+xvhN5Ojg/GPzY7WcYU2+FWmzxXZG8J+uh48bLKk1YnROqA/8cLbuwkQaSowYmKahVAtZ4VcgGBd2yQNKmSu0e0Fsw6h52eKRQoum4DoKqXfb4yA51+H80o+vUxcWvciqTe6DIKV+mnzo4PE7PRqbGocU1QP/OuBgX7Zc2NCJSG8M7JZNrxMexDZcNfQSS5utO1svLRrwvuvLTnrk6oL8pNHMPBJqfOrFeTbT5WSmZKv9IA+auuiQltS4ulkWjrg6C2lZK8yOm09+S9k7F4LqhO5Hc0vzit9TyP+Ll1mVOjY2LMyaLxYozO8yVggfoL7AHZZO9bpbGJimwz5T+fMJIKQbJ8LPjqa0oFgiUh4Bezd4q0uoQUCj5pLD0rM9USYJhp55IWxeELmGqaxvcrYdRW4LV9FodeVbrcFlHBq13ggm3P+KOdhNaDV9TIpkxd/T6RYWt+dnunzdiJcnCowBAbb6sjjqh/XG66z+heYyc7eTOIVGEhwP2Trejy9wDSbbT1IlZ8VziqzGcaEIEW9ZWlj8owgzQTbq9VfGUv+BXN2dgw1ek2a4aUxBsddzf4kD8VjxvF485SxaR1BH2CHKuaU46B7wUv6eZd4ow7GtQGhFCMutrdEe/w4m0dA05EF9YgF5glKeUjDYHNspTvAkrehoQKTMgVZT2ES/NC7g4oCwc+S7HkuBB5TmGaxYvGKQyvieAnpWveiK7jYiJrgDQs7oeIzZAJJ8DHD7tgO11dAcatkoE5gB6ATXkz4GYDdx9zYPt87RB0jyytJZEmGCn/Xu0L17fSt7tmzVvjZpDkdNQCImArznfxCZk0VaUqQHoF3sn20cOBZ0RxvFcchuqEnK/UoYY4HK7n4pT270OFX+EF+Z2jkn6h04K6Cd799qcJhCFAfh0T7tOp6KkLAiCijesSlSImniJ+f//qlzFsdNOEyA15TyfEsfgGF921+XsotUx4HUAuGlRhN5A6rMA/e+UKSI+zwG4poZTJeQNOmpU1Ftx0hqnDQ6g+4xRlN5KCidPKj+7pA/bANKIBYQD5I0ctT9aAYlXt9Kir1waiH2oJKk35HCxwH5FMyO5K5cPUEXGI6IL50ptlS6R5NDe4VCyEMcA8gtuq3VSihlm7XFL0KahuQwQ8dHcI7YEBhhUh3RExGaV3nG5uhiaYfXWX+p1RFw6ABINtIuBl45QGVa0+ZkMYAha0VWMLp5V6XucQMT7BQCfMMaoNLkYSzx7gcp4ijs32w+r3Wm4XdikUgVHSs7Sk5NZyQmNlQrC65ioQ7XwcA2OoN6tOHNMdKFSJDfs3GhLjiJtMLKrxvkp25BtVzyhYVKhNAzNVpX4Ttzfz2oQMalzK94LBoZQBdZ9dr3RqMS58766GKjE2gqribimi7YlwgBUQH9GSSqZj80qFOWacZL4nOrbymO04f/n7BHHBvAalW//pfq3dwMfibFG3GtRkhjVb/+V+pfP7+QLfCQbxL0TJ6k6l63zRunT+/j+saLUoyRRlIrBXQNgQuvcKEqFsBijTdxuMkqMfazS6DkliaJUjBEliaKUi3LyOhCyuzTipijlnAY4AaEoFbLWj3a5pSjl5zQRt0AoSnlJS8SlDBIVJ1GUcjohNk0wBDPgnciDk/ew2dXH0+YRImyKqQcOIXP7dftw9A6nu54GET43tfaN5Z2idH2PiQYoorRJbqlV8xfD08PLuLmFyBYz/JdHWhA64lnTvlxEtl/WnwTcCIrSBXmNuANYlXer5BNm5KuYzHoQmYyvWyXxS5QOmGnHz5munzdebyBcS4K/RVEqyw/EmQ5mfH/FgnDN7R2f7+tSUhifap6S+C4aojtqabrC4bd0q+b6Khs00g5OP748jmdxAuVkDuNsHL8WNw0Of0ZRKssBcQBKcddwpcFDvYmxCYRGm83Ruxv6fUOC/LiiO30FIrU1nsV58xBnz8eeav3+tShKpUh2CORdxlwOhbjDs6Vy9VKKrs3b6cKoMxUiE5axs/vzxbocQvZoNOm3TEfT29EDvGOuFj8Ox+3THUSeMdW8g9+hKJUk+cwUyMVYLKSk6Cmw3x0WVpyHJAJhXxURcShWv0SpzzJyUqWQsa+f48fHkR1Ht2VIuU/LJsbu4ycoret3RlEqTydnAa5cOyzP6wSVwcDqpF3RXIfr4CRR0lWhdt3axDrf2pJrZkpJjmut3K6vqkKk15g1llEu4xYcbOUkx7HN7o/tsnmIfxsjPnrM4ZCiKJUk6VpWOZqjzT1GepfjGXPS/eUDF37NMmXIQ9YNbW62rEnN/F1bpo+sua5Aoo2x/WYY/wVFqUxtoSrwRh7GmruBBIm2ys6SBqpjKzKHEnCnP+qKy/bOTTrAVRzbxSOmGIQoSiXgQ0+HQI7NJvkMA+tjV4GMxWLqqq/Bu+CSbHckiEyuR2FK7cfTDAMHCFCUyuDnuIor6xARS0+NfpQNS4hO0sqJVd9pS/BP8I4xD1qqLErg1Fqa1dg+6HGyGkKmKBWLLxHv4E1M7x7nkOmYLmO3tVKF28bchpAUt1ATp8OTLnnqtShKRVogTmV4PUmtY6ABCcUSLKbe5A4dXGUJMZLTKfK6zylKRZHGiMPXl5bod1MMfU1jw5Mg+a32jW7rxY2Wy2J9ANnfYejR5xSlwkon15Ksvm5GydhiaHrQ4MwNYmRpN1b9cY235yOR7hrtHKYYqGsUpdySubsGWIzVXr1n2XIQ5kZOb3wq3XqMzmwFIroQpzEinihKP9k706bElSgMd/U702hdYjI3CdkggGyyKPumov//X91JWMYlATJ6oRPO82GqRizbKp866T45fc53YAKPSvAa12UJeAYWOcGYsOsp7lERJN8fXuZqk1T6BsQcqCXPc+s33SAOdU0eYLN04ox4gO+QSt9AEWhrlfA96X4+t6WsbE5sLSnPa8fhtv7I5JBKX8JTUQ7u4rbYMZRmaGyd83iA6aVlgxSD5oWRtclmmCmk0lcoVBX9yNoSwdtvhnIEeeSeI+m5PwmiMApUegQWCqn05a4l9ePmdALq3VYe22hlppmi0xXMBLDQSKWvoIUv7g8ShqTXtB7WjhxXttRIpS9gc947HJIWANq3IthtZ1WnwKUhqfQFRDFXYQfQJwBWzmYIU4qPbAeLrqqk0t+gP7jsOJoAngRjbpCJyezc0/oCaCik0l8wRvvYAPPrus6YqPJMTxhUzAnwRColR1cBlx1PyQxCUlpT28eg3AF5nVRKzAOwYMfj8ezPhVOGq5ovSKWkLAHjcOgyKiykchFDTzWDc49USogNdDTHtMTeb2qgv6khMXgvq/vtEPsV1u9/w/eRzmKpkEpHUwPGzNz/ItdtAI2Na1pWcwBv2ieOW0HuvzYEUCOVkpSv9Uqcm/tM6gNqnV0GOYSUXxoIyJFKx1IC7pXq3s4l2hyXMf9uTQNveKS9UpLz20wY+55vYgmoPca6ZpddAgW8wSWVjmYGmDbno30ZTMBYJwGynQLY8owdQzrBHY9/P1eK+06+ZQAva5Na7CJoYodFKiWgoux9vukApoI1OeeDywhKjC2woU95pWS4+85vYoVXhTmXZBLLYcMNqZQMa//5raoFsvHexZjExBxrSqRSMoqHLpoEXbxHmS0EiMBASJlenCREsRy2DzHi3NDZBSEaAJCnd3AJ0CzBDiI455m5CpAgLNmkUgJeMWXxNB80FlDIOeyyEBNgRpUBCXCABovF7mDKLpQR0CWVEmAC471p7iW7VFybqigTj6GIwwIwYFkg/8+JuPp5dSKkUykPeIWczSJZAa8sE+R//jgNV8FCJ0E2lRSgIwxuxqZ8u6xoZmDHfbLnzo+LfcBZwNLlfBAXlIbB6AefpR5S6X/nAXjqxrw1qQKwhSlVx2RSSVqVhoBRj+nWNgWeg8oSIwMvTLKo0nQqVaImD3gG50pMKaETXOHJQuVkFlWSLCr10Ym7IFAExkHJgJmFegBS6X+nNTWcuP5ct2NXMTjPxOVJUukUWHtqcb2MBCVS6STk4nski6wEJVLpJJicaywaOytBiVQ6Ca34FKRmZiQokUqnoST2zPD/SjvCgXlbfhmOp2OHhYzV+/ak0c+vXq/9bd1d1sb/X6xKvbj0oz5vF/9ydC2vvKlofVshLfCHe2Wb1sJjfjosG9WPPpNKqVKpGztr6CZ5i1hR8O/GcxW423aS26K2tlEJW5YsZIIdU/YBUilNKhnAM4vkGnhgSSjnd548sRD/evb8VL4x/Lr7djiy6xS61raePLfoq+/vLvLF0yh8HpJKqVLpLgghUSj3QKI/qI4196vnWjITRMkb3L6MN7snJTRrMs4JUilVKj0DRtwYpgZzmoIdolCr73ZGqyffEe8/HZh8Q3ObqNphis0FhKLVdEoae//Iexx2SaUUqbQE6r7pRjacGLqcW4faNS6xjV66pW3OfI7XMu315/wP3jaJtcNYq2Ts1MoFv4jiP63UzQ6LVEqPSnOgGNmdZAqY1QMqOcM2AnbRQ/yWyOchRRbir50x/V5V2djX9axqsdiq17dFwHW+w2Qhwq6H/dZGpFJ6VFIBK7KyrQ0URvuGTorcNUKWg88j13f9c0WpoinsACXHq9Z9g++G9o6CKc6DX3eCVEqNSjrQsaLqkWygre3ryyXWIuVrb2RTeIBf9Gz9byQQeknsfk5Ar6kF/5v2H9I0s/1CVSoA8zrnDvuID0wLe0d7PwKYVUPtWtteOc2cZSvf8Wv5fENdY10A8yqpJLlKRWDhR41PegBqxb3lk7XO0P4zJNRm34tiewMe0GXKMwJrbVJJapVcoBxZF6APx5XQsf2UWjzEV9j3oxRahqEFws8BdAxSSWaVmGcqcTsiEfOBvhPP3pzPirZg/w9iragotwHMNFJJYpXC1I8ZHXGir7/57XZh61pA7gTjl3V+MweQV0glmVUqxc04bXJejG461Nuo5HNe1NkJ0Dl/uAbgkUqSq9SKa3RqRw7/WAq2zTZq7DRUepw/NcaCVJJZJVE3SywSTY/s373U2BlwzCDRpJNKEqsUiWjqMZfCca0wYXmCnRrRCpPopJKkKrVmIxbtTNthn7DU8Omm9M5zC8UxggnipJKcKl0DekyvN599pDIBGjpTghSAzs6A1uOG1hSkkowqzYFCTN+JVlSZXLvAtFGY3D4Pjj7EUpBKEqrUB+yYUYNe1J47t+7f7bKz0QcGpJKEKjUAtyIio5XX+ri3FrdWeJPXKLHzUQZeSSUJVXoE6nwUqVj07W/r3J3g9Q5QJJXkU6kNmJzrUV8fRKnk8LM3W3oCVlL3QL5QlToxKnWAXlT4aQXtc86LqwK3Gqkkm0pqqJIW9XU/SrGKUT97M4oFMLRIJdlUAhDZPBDA6L1ivYezO7ShBiwNhVSSUqXPkpRfyp5liXejZMtMDixgwj1SSTKV5phHqlRoFX4j3nUQeGFyINoAN0klyVTybmPHvb9XaQwY7Oz01M6TYOX7Jef2r+msQirJo9Jv9qj0PsncZGfnF4B8NzhIDh8BPJNKsqnEDqqkA6rwDZedlyICngu9PAJuSCWpVDK4waKwC/a7NkxLJyjQPTN5vGGikUpSqVQ1qkeFg3GRc4+dmRHeYNK2Wy6VjqIHDMMOAmdGrLBjKUilFKrEgRfO+fmn5njYUaJkQBpVqgF3nJvs/IyxoUx5pVSq5Ifv5GQYoutgjVohlVKpkmYY2vmLAkKWCLmmbHc6VQqQIBcQYCEkRyqlWSWLyUAfAOaCVEqzSnIMq7wNgxK9zk2xSoapMxlQOsCCSt/SrJI0POC+QCqRSt+B69I1AVLpE/l/TsTVz6vT8DNY6CSQSh+CxY/TcJW5hX6QShl/7tAD7jhIJXkWIpVIJVIpgFSSZ6F/f06nUyYZQiglx9aFYAchlaRZSMaoJBR/OXmcNIb2YZlIJWkWklAlkXvFmsmdJrawaEglaRaSTyVhtoHG8nm26kAdGubI7+WqVjNmEBepJM1C0qkkBm10yq4mFL3ah7rmvvPY6C9G2mebSCVpFpJNJaHn0TYFE4oihDfvhNzfqyqA+/mt8lEmUkmahaRTqQb1VojSXX91qwut5Nq2U6gOeHmcn6hQZx8fc6SSNAvJppL2iokrtBUAdfkuBikOnwC/SCVZF/qPvTvsTRoKowB8s6MHjb28xQJjRcY2VqR1l1oplJUB//9fmSpD0LloYsqduefTdtvkfHlS2rct2EYpjLCgnkHuC8jNsRt2tygv1HEcJVuKbKN0EaPJMMa9P8ix+ImS34JpqOM4SrYUWUaJU6D/G0oMF4LkXB3FUbKmyC5KHOfwtNJLmMVWZMT9BupuMweQhOoojpI1RRZRInnx/QSJfiSApD6rRa11cD5dJwIBIl8dxVGypsgWSiSDzjyGZJUVdrO0aA0U6X/cLItcUCXtRJhrdRxHyZYiOygx6E/fGgHKzN/JqqLCaSr4FpO+7egx0HTDAFuLLKDE4G4RxQIgeftJ88c627kAJl9MLvthoMkJ5KM6jqNkTdGpKTH48hAZQEyRnR1CUuzNEkgxuq4QfVsPPOSh+jmOkiVFp6XEwWUhgInWm3PNn7YtgGgU8MfCR8HI3YOztuiUlMhOKhBZ3vY0f93aMm97B8sMoyev3xwlS4pOSIn9hQBRa0z1ZPRYH9MCJr/u6ijZUnQ6SvosAfLJM09wH21g28DTjpK9RaeixMEshpl19R9/FpYoz92jbxYXnYgSu0tBdObzT+ENDfLLp/Z2lGwpOg0lhoVI2uVTQ+9fVrQOLiMgbj8pyVGypegklPipgMwHT0jqZtNq9QCUnszvIwDFtXtNwO6iU1DiRQF50L/S0O0IZkDF7kd/v68AkGIS/EaSo2RL0Qko8cqDrH6VRG4MZE6lm3HS4m7xHIgXDZ+/k+Qo2VJ0AkrBQjAL+CuxoSDq+Cp4MDA3j5QaQE8/48hRsqWofkp6JVg+gYP9GNE1GSxE0jYfKTWRBOqZOEq2FNVOST8YROHu3PowQYH4nIoTwTrkHtgMqa+ei6NkSVHdlPRKkI6/DwRCHk2zBZlWHMfwLtQ+foR7rZ6Lo2RJUb2UOJgJdvOkIMoPp9e9CFFA5S+RfDhY7htkVM/FUbKkqFZKbKSC6BNVlTBB2dkr0QuRKRVvEyx9tQ+bkI+O0osoqpESr1oxZNnlDs8oRjx9/GdoZBmQ3RRR74BO4CHyHaUXUVQbJfJTJIgP5knsxCivWf2lzwTplVL+AjI8kMOWQDbPTicdJVuK6qPUyQHvmodLjRLV+RL1MEb5gcp/EJn7h/OBHAC2fTdXegFFtVHq5zDZgMe8moKlVhwK4juqYGPghYeSIuQ3ayCfavXbOEqWFNVGaQvpkBUQ7V90htls0aDSGXBLv4T0ST0XRAcDAl6XwET7DwJZXrkbJ7YX1UYpxkyTujddbKNERCARFT+VmPP7SIm3gqjPPaRgWALwbulfpiLepSap/X6jfXZ2p9U+jpItRbVRKjHXQWNRCiAmiaLUW1GpIMXaV8EWyTkHEaLezhGDO08Q3RskoyuOlwbxpHs9elsmRkSSttrHUbKlqDZKb5HceQYixps0eldB4FMp9nJsteKtYKE5FGyqRVLfpAIpxsHGQLZX9EcCiRNARABIRz3GUbKmqDZK5wkAlNnnkIfDb2BU6XmA6TBYo7ym7t8sSgBpM/g21ATyM7IpAMx2M10Bpuk+4Cwsqo1S4AH5yif5Y2RZOdnqitKnBOuA1zGih1wEkHT3Kgr9mYHMGjkQZRekzoD54dDSUbKlqDZKQ0HU13xkRN3PUgPxvs+2OREzop4JBJBk/mHwSI7+lxiSAPPzMBwMwi+CpOMoWVhU4xWcF3J3St2/HM0KI5Bi/yK37yEec1AA682Xrj60wv5SAIhJqhgASUPt4yjZUlQbJZHdsYSbOBEAUhaTgN+jB/17SEa2BTNNxV3230EZy2HMVO3jKNlSVBslyJiPTyBViUfjClL4ubnJsnkqAJIP9N/CNMjw9qaVZav920263z7M50Dt4yjZUlQbJXm8T8vRWgBA7idnDykeU24NtgG7OfLZblVmVI/hUdSPOEq2FNU4opRhwN2PvTW9UgARAJIAEG8a6BnkrjosYb86+QMzjpItRbVRui0hRdYINFlp6k4ASP7Q/tBOkDR9klcpos9LA4lnZx86CUzLd5ReUFFtlNhYG8BE80m7cd0N7yKgGPY02Ta7p93YFBEgbV1o8tYg6rpfqXxJRbVRUtSXhZHdZX0sQDxbTUY37WkOWWpWOxQA0suPVe5ySHHljkovqKjeZ7vH7dU2wRNZsdr8IcZhJHOUXlBRrZQUSerzzjCb36+9IorKOEmMCEyLu3cFjiitHKUXVPQ3lLx3/3/evH5TT17/d0Vv/obS61cuLr9NRcm2g7/LS8x7R8nFUXKxKo6Syz+jNJ/PHaWv7NSxDYAwAMAwxILgGP4/DzigqN0y2DdEwZXIkBJSokVKSIkWKSElWqSElGiRElKiRUpIiRYpISVapISUaJESUqJFSkiJFikhJVqkhJRokRJSomUtpQtG1lKCsYWU7tcJI19K83YYkRJSImebd8CPDQAAAAAAAAAAAHjauZsWV2EojOMPLo6rhBzi+7upqNAi0u//4W5ivZ1hbjezu8j5DTOG0yz/aJAyQgghhBBCCCGEEEIIIYQQQvy/qrwuDOE7W2RZCyF+hXIXxdlAx5rChdp6SruaIMRv2Elr7abCGDsURWuNLR4uTCQl8StU7dpzyTONNue2KH1GTnsPBSF+m1LgnH7x158p0dzEcdPiJ1Mv+5QbBG2zL3eCR1mzNK8l7CNFYMZ9ySCujNpY65sOzuu52Al/Wc2Hn8+8oufDDCB776CdA21CQMwOXsvBAnFldjnaCT/fF24hnGhlfphCM9/u+MYyr7Wq/afO0sqpnZhLYOK1Qsm8A5rPlFZeYFcuIa6Lqv3jXcnFFqeO+wHezDzii+o5NXjdhYaZN4SKJuDGLYCWVwXtsiOlgZmAkXeI6zJj9PGupJM74aBWrnC451WW57mB/3NHxqvFoc5NlZdhA8eoeINHmmeUGI6ULLMCFpZ/cHpl5VN/Piu5zpwBscPbg5kHrMwb9n/KoJ5nNPxEkPACnClh47gq1lVee17ZkujTz5iSghDs/MBbw+wsNl4nbP8cfSZegfQsLOXHV0pmZa+GuLDUhTP2c2qm7unX23Mam/gYRrVC0H1PCSM3oZkM0D9TuvPaAsmHlJRj7pnXAuK6Nl9N0hSDHaqqKsuiGqxty2XTehsNgoZTfFGrJugbQjN3fNf2a3aUt8MLSb1TurO2oIk3iOvyJbl4UFVWKRxMkVlVxU5vi0EwcE84VIUCNs4qXgDkvJ3zfKDjGTbiGKfwyHH9TunBJby+h7gun1I60zAlU4WAyi7JDd2Td0pwnCJQRywZJzduj0p4RmBXHkA3jhEY7s/N9p1SzBm8VVK6ssTpuFVZqrccgcmdTloquvcDDjPz0wBFxGwRmuEIQcxrQ8DccwI8OFI4bNwRVOSH75Rm7ltQyhHEdXWbnqyqE61Hgjc0Wm8FVft57A5y5vXWM/cVvIk5Q0CPcx4Z3NmvvQkoVj/1v2Fz7j+9IVTEfuNNXgZcWZOElOZEuxyBHbWOKir242XAqdIhpMQgKJgNXmqfDN9iCs28TADKm29KV8BrfENoqfejAeLCik53JQ2dSzMElG1ut5QlrjN4I2WNwkvJ8dfcWEOvDS/0mhq/eI8RKKPkC1DXZvIkGo0qm9niYOumVEPjklrho32VbzKJD6hdXDobZc3fgRnU4PtaBsIHpJl7CyH+VUxJOletNSow1g5FkyZNQficUt9LSuIjavOui6fmnnlzPo5Nlz5qS/jM5yYPOPEZKVuV9djE3eGx5KUlOSMLIYQQv/cH6KQy97TOh74AAAAASUVORK5CYII="}}]);