(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{1263:function(A,t,s){"use strict";s.r(t);var a=s(7),n=Object(a.a)({},(function(){var A=this,t=A.$createElement,a=A._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":A.$parent.slotKey}},[a("h1",{attrs:{id:"_32-1-从上往下打印二叉树"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_32-1-从上往下打印二叉树"}},[A._v("#")]),A._v(" 32.1 从上往下打印二叉树")]),A._v(" "),a("p",[a("a",{attrs:{href:"https://www.nowcoder.com/practice/7fe2212963db4790b57431d9ed259701?tpId=13&tqId=11175&tPage=1&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking&from=cyc_github",target:"_blank",rel:"noopener noreferrer"}},[A._v("NowCoder"),a("OutboundLink")],1)]),A._v(" "),a("h2",{attrs:{id:"题目描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题目描述"}},[A._v("#")]),A._v(" 题目描述")]),A._v(" "),a("p",[A._v("从上往下打印出二叉树的每个节点，同层节点从左至右打印。")]),A._v(" "),a("p",[A._v("例如，以下二叉树层次遍历的结果为：1,2,3,4,5,6,7")]),A._v(" "),a("p",[a("img",{attrs:{src:s(487),alt:"avatar | 250"}}),a("br")]),A._v(" "),a("h2",{attrs:{id:"解题思路"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解题思路"}},[A._v("#")]),A._v(" 解题思路")]),A._v(" "),a("p",[A._v("使用队列来进行层次遍历。")]),A._v(" "),a("p",[A._v("不需要使用两个队列分别存储当前层的节点和下一层的节点，因为在开始遍历一层的节点时，当前队列中的节点数就是当前层的节点数，只要控制遍历这么多节点数，就能保证这次遍历的都是当前层的节点。")]),A._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("public")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[A._v("ArrayList")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[A._v("Integer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(">")])]),A._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[A._v("PrintFromTopToBottom")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[A._v("TreeNode")]),A._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(")")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("{")]),A._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[A._v("Queue")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[A._v("TreeNode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(">")])]),A._v(" queue "),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("=")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("new")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[A._v("LinkedList")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("<")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(">")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(";")]),A._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[A._v("ArrayList")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[A._v("Integer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(">")])]),A._v(" ret "),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("=")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("new")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[A._v("ArrayList")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("<")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(">")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(";")]),A._v("\n    queue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[A._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("(")]),A._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(";")]),A._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("while")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("!")]),A._v("queue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[A._v("isEmpty")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(")")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("{")]),A._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("int")]),A._v(" cnt "),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("=")]),A._v(" queue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[A._v("size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(";")]),A._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("while")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("(")]),A._v("cnt"),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("--")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v(">")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[A._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(")")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("{")]),A._v("\n            "),a("span",{pre:!0,attrs:{class:"token class-name"}},[A._v("TreeNode")]),A._v(" t "),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("=")]),A._v(" queue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[A._v("poll")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(";")]),A._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("if")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("(")]),A._v("t "),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("==")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(")")]),A._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("continue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(";")]),A._v("\n            ret"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[A._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("(")]),A._v("t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(".")]),A._v("val"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(";")]),A._v("\n            queue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[A._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("(")]),A._v("t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(".")]),A._v("left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(";")]),A._v("\n            queue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[A._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("(")]),A._v("t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(".")]),A._v("right"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(";")]),A._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("}")]),A._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("}")]),A._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("return")]),A._v(" ret"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(";")]),A._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("}")]),A._v("\n")])])])])}),[],!1,null,null,null);t.default=n.exports},487:function(A,t){A.exports="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAoHBwkHBgoJCAkLCwoMDxkQDw4ODx4WFxIZJCAmJSMgIyIoLTkwKCo2KyIjMkQyNjs9QEBAJjBGS0U+Sjk/QD3/2wBDAQsLCw8NDx0QEB09KSMpPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT3/wgARCAGFAbQDAREAAhEBAxEB/8QAGwABAAIDAQEAAAAAAAAAAAAAAAYHAQQFAgP/xAAYAQEAAwEAAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAuYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8kZIwYJASw+gAAAAAAAAAAAAAAAAAAAAAAAPkVFMdHozk949EepMew0t6s7aMpAAAAAAAAAAAAAAAAAAAAAAFWy7fVj27wgMTGhW0L5dbfrOQAAAAAAAAAAAAAAAAAAAAAD4lQa0snpzAJIFfc97Mx06IAAAAAAAAAAAAAAAAAAAAAByivOjOebUHPrPDpMs1qIrlbt82srAAAAAAAAAAAAAAAAAAAAAAOaVtvnP8AegERytLtaiJ5WkHNrKAAAAAAAAAAAAAAAAAAAAAAD5lN6VszqyAQSFcc+lq433gAAAAAAAAAAAAAAAAAAAAAAV4Y6cpRrQkEcSl4/wAutrwAAAAAAAAAAAAAAAAAAAAAAA8FKzGxrWSaU9kdpb6YX66Z8fcAAAAAAAAAAAAAAAAAAAAAAwQIkhskdPBIDqnwIKWCZAAAAAAAAAAAAAAAAAAAAAMEGO2d8AAA4xxSZgAAAAAAAAAAAAAAAAAAAAEKOkSMAAAAiB0TvAAAAAAAAAAAAAAAAAAAAEPNokwAAAAMFfE3NsAAAAAAAAAAAAAAAAAAAigJWAAAAAD5FelinoAAAAAAAAAAAAAAAAAAjB8CXAAAAAAA5hFydgAAAAAAAAAAAAAAAAwCPHPJkAAAAAAACLHskwAAAAAAAAAAAAAABpFfnJtCWpWbbh0wAAAAAAACtTQlqzGTt1mfmwAAAAAAAAAAAAc0qO9Z50Z9W8ZhoVmvcL2hnfugAAAAAAEVIDtSwd6bcxg4dJhvNrcNZ2gAAAAAAAAAAAU/MTnry27QAPlCt+XW56W9AAAAAAHwKb0rZvTl6kAOXWY3ybWpAAAAAAAAAAADWKm2pY3RmOfWcm/aBBsbzvn07QAAAAABFDidWUq0qOTVvn3sFbc2tx5W9AAAAAAAAAAA5BAOjOdbUGjWY7naYbUIi+d+vy6y0AAAAAAgCNrry7N4HDytrykmlRXfPpa2N9oAAAAAAAAAAGgVfvnYe9BF8rb9o7N4EOytKebWSAAAAAAEIPj1YyHSBw85+lnYtArXn0uLG/0AAAAAAAAAAB5KZvFldWPqQAFZ82lw5X+4AAAAABzir9qWL0ZgIJfKFe8m1xVnIAAAAAAAAAABCCLb52FvT0DBC8bdTDWewAAAAAAArM+/TlKdKpD5wrPn0svK8hAAAAAAAAAAAPBXh1iBXjd0p6NDO+3SbgPQAAAAAAB5KZl8716F6/E1s7Talsk0AAAAAAAAAAAIISs6Bg0jybxHz2d8AAAAAAA0SKE2NE+puArosE+gAAAAAAAAABHT4EpAAB5ICWAAAAAAAAQMmRtAAHIOITIAAAAAAAAAGmQosAyAAAQYmBsgAAAAAHgr8sMAAArksM9gAAAAAAAA8ldFhH1AAABpEWJsAAAAAARY3DugAAHFOWS4AAAAAAAAEJO8dgAAAAFelgmQAAAAAV2WGZAAABXJYh6AAAAAAABwzkkyAAAAAIybB3gAAAADnEcJoAAAAcM5xLQAAAAAAYNcgBYx6AAAAANIgBPjdMgAAAwQIm59wAAADBXJYh6MgAAAAwQwh1o8XjEOznaxjaAAABqFV2fPSm7aNWJ+WNrSiemAAaxXByb182e6TMazMzIAAOAV9Mal4+ptVtYtXXAAABgrk1OjKaa19SHHpMI59bipOyAAD5lNWid9WXStAGpVXPNrcVLbYBrlOWib9OXYvA8wheVtnn1sgyACLkA2pYm+f3kNSqusNLRyv2wAADkla7UsTozQSGDkUnj8m1mAAAhRo9WUn0oSAORWeTx7WSAVodbrx7F4yACvMNLJwv1gDwUxpWzOnL1JBIfGJrzk1uSs5AABXZ0uvHrXgfGrzLYkK45NbipbIAMFTzE47MfrJCJ52k2lfsYK75dbhpYYKdvWx+vIYhH6zIbwOVSeXybWKAcMhHRnN9qDjUnB2rwK8wvaeGm4AACrpSrrx27QITjfrWiQaVFb82lxZX9AAwVHMT/sx9SQhWV5FpXp2gVzya3FSw8lO61sjpyHHpMZyvO98/ctWsxPk2tKAEUOL05SnWo0aTzYmQaUJg2N55z6dkAAFcHX68OpcI/nb7THavArbl1uTO2QACrSU9mG7Yhw6z27RmXzhAOTa36yMFN3rZPXkPjCNZ2lWtcnMrPF5NrJgBHyHdGU12qOTSenePYK8wvaOGm8AADilfb5z/egAHMpMc5drRhkAA4ZX2+dg70AAhuN+/z6S8GCr5SLqx6d4AAgOF59hp3AD5lM6Vs3pyyJAfOFccu1y0n0AADBWMvv0ZSvWuQc+s1/zaXDS22AAAV5LkbZzbWn3l8yH5W84a2lDIBqFPXrYHTn0LQMEVytq8+toQyACIEQ3zn21PpIfGFdYaWNjeQgAAA8kBIrev0s8w26TZ8TvAAAAwRkhUvlMe4S2JmBkAA0SsZjTvHqXzqlNLT89AAAixALRm9RmlrHrPfQSAAAAMHg9HoAAAAAAAAAAAHk8nsyAAAAYPIPYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB8jjGwfI7Zqn3PZqn0B8z6GD6HsAAAAAAAAAAAAAAAAAAAGgR89nglRoHg9no9GifYwD7nSAAAAAAAAAAAAAAAAAAABomkdM5B3DnmQYMH3Nc+4PqbIAAAAAAAAAAAAAAAAAAAB8Dyez7AwDIAAAP/EAEUQAAEDAwEFBAcFBgMHBQAAAAECAwQABQYRBxIhMUEQEyAiFBUwQFFhcSMyUIGRFiRCQ1JyM1OxJkRjkqHC0WBwdILB/9oACAEBAAE/AP8A0ipaUJKlkJA5k1ec/stnJQX++d/obpza/wD5FsdpG15aP8a1rqz7SrLdCELWYzp6Lpp1t5AW0tK0nqk6j8RkSGokdbz6whtA1Uo1kWXXPLZ5ttkC0RqsmzqHFAduRL71NWW3MJAbhMAfJApdogOghcNg/VAq8bPrdPQTFHo71Wy93nAbkI84LdhVbLlHusFuXFWFtrH4htMv70yezYYC+ZHeVjGOsWG3pQBq+sArX4b1Z496gLjSE8+SuoNYTdX8WyldmmrIYdP4fJeEeK68eTaCr9BWHti+ZhNubvnCVlQ/Px7SYIYdiXJsaKCgkmrDPFzscSWP5rYP4dkrvc49NX/wjWy5vSBLX8SO28NXJ6Klu0vNMulWi3HBron5Vgb8h+PcPSn3H1of03lknt2htheMr+S62bu7+HRfw7IWe/sE1H/CUa2WvaxZjXwI8GAf4V0/+Ue3aM8G8b/vXWzpnusNhn+sa/hzzQfYcaPJaSk/nVgX+zWdyYD/AJGnFlKf+3x7QZpuN2iWqN51dR86s8FNttEaIjk02E/h+0vF3ZaEXiAPt2Pv1iGVs3iII75CJbflKfDkmSR7BCUpSgXz9xutm9lXeLw9fZpCihXkH4gsJUghYBT1Bq/WhiXk0j9lQ8p1rzrCOWvyq3bQZ1uPo94iklHNXWoufWV8Al/ufkun86sjHKWHfkirltJcf1atMU6nquscwOff5frHIStLZOoQeaquUR3A72i5QUk2p8hL7fRFRJbU2K3IYWFNuAEEfh2ugrKMjlXmf6gsB1cXwff6IFY1jcXHYAZZGrquLrnVRqfYLZdR+/QmXvqKk7LrC/yQ418kUxsqsTPPvnat2MWi1aGHBZbWOvZNhsz4jkaQgLacSQoVZJb+FX02WeSYEg6xneiaBBGo/DcsyeRKm+oLBq5Mc4OrH8ArFsXYxyDoPPJc4uunmT7DJbAxkNrXHc4Oji0vqk1hd/f312K7eWdG4JJ/jH4Zl2VPB8WWx/bT3/KpSf5VYpijOPRNV6OzXOLr3ss0xxyWhF1tnknxfN/eKxTI28htgWfLKb4PN9QfwrL8rchrFps+rtzf4DT+CsRxRFhYMiQe9nv8XXfaZJAfxO9DILYkmMs6SmRVsuLF1gNyoywptwa/hGX5X6qAgW4B65v8EIHTWsQxP1Qgzp5765P8VrPT2siO3KjrZeSFtrBCgahvPYBkXob+ptExWra+jZpC0uIC0EFJGoP4NluVosjAixB309/g22KxDFFwNbpdiXrm/wAVE/we3v1kYv1rdiSBzHlV1Saw29yLbOXjl5Oj7XBhZ/jH4LleUtWCIENDvZzvBpoViWKutPm83o99cXuI1/l+45pjJvEQS4fknxvO2usNyYXyAWZPknseV1B/ALldYloimRNeS02Kuu1greLFkiF34LNev84necNrQD/wimvXOcxei1//AEJq2ZUIWRm4X+C4t89TyR9E1Zr/AAL9H72A8FjqnqPcsyEfGsiYvEGS2y+o/bs9Vipm1C73Eluywf8Avr1rnL/RaaGTZtbiFuslaR8Wias21hhboYvEYsL/AK6hzWJ8ZL8V1LjSuSkn3q93qNYra5MlrASjkPiaCLttDuynnlluEg1aMbt9mZCI7CSrqtQ1JoDsuVlg3RgtSo6Fa9audmuWDzxcbW6sxqxXJo+S2sPtEB5PB1HwPuGbZg1jUAoaIVNdGjaKsWKTMmk+tL26str4gdVVCtkS3MpbisIQkfLj2EBQ0IBq94lb700d9oNPdFoq33G67PbyGJJLkFZq3z2LnCblRVhbTg1BHvOcT3coy5qzxte4ZOhq2W5m1wW40dASlA8MiO1LYWy8gLbWNCDUB5zBs5COUN7/AEpKgpIUORGvtpUlEOI7Id+40kqV9BVrYczbMX5ssaxm1UhCW0BCAAkDQDw3+ys3u2OR3Ujf01Qr4GtmF4dgXR+wzPqj3i4P+jW6S9/Q2oj9K2eNm43qfc3ef/ntul8gWYIM98Nlf3RoSTp8hVrvcC8oWqC+HNz7w0II7dpsPWBGmAedtYTWJTzcsYgyF/fU2NfbbSJ5gYhIKObpDf5GtnkIRcbQ71fOp7blk9rtEn0eZIKHdAdAgmoU2PcIqJER1LrS+Sh25HrZM/iTWf5pB/U6UhQWgKHIj3fKFlGOTSOfdmtl4Hq6T23GTAtzfp0/u092CErUNVcegrEor0u9z733BjxpPBlHbtBAOMOVs1WTh8b2211ZGOtD4uViYCcbiAf09uRTZkJhYhWn0wOtkOLB5fUaamsFbjt46BHf74lZLnTcV8O3aNwu9uX13hVuJVbo6jzLafd72z39lmI+LKv9K2XP6emxl8F9uUY9crzPivRHYoZYGoQ+ToVa/ACrQxf2pRN1kQnI+5wDAIOv6Dt2lSA1YENdVuVgDBYw2B80a+22rMF3Eivqh1FYNJTIxeN8Uag9s9rJDKfEB+B6Ov7nfBW+j9BWNWM2K3KZW73rzqy44octe3O3fSctgRkcSCj/AFphvumEI/pSB7upIWgpPIjQ08F4dtDX3o0jvr/LRVIUFoCknUKGoPiyd9eUZdGtcPiltW7UOMiJEaYbGiW0gD219tou1llQ+riCE/WsAnm23KVZpXAlfl8UmQiLGcedICEJ1JrEIzmU527clj7BklfvO06zw5lhMx5YafY+4aw7NAwE2+7Ep6IcNIWladUKCge0kAak6CsuzVuGhcG2nvJR4EjpWzrEV2xk3SeNZb/uG0PFHmJIv9q1DqOLoFYrmMe8MpYkqDUwUO159uO0px5YQhI1JPQVl2Xm8L9XwFaR9dFuVhlgj2KxNIYIWp0Ba3PeHHEtNqcWQEpGpJoFzPsn6izwj+TiqynAIN9Y34oEaUkeVYosZZiDhRuOOsD800xtLksjSdbl07tNW6P3S3OUZuWZUvuWGHGmz0AKB/1qNjK8NvtqkXMIkIfXos9EGkFJQCn7pGo9wUhK0FKwCk8xWR44ifmz0LHWwhaEb6qavmVY4vuZkZx4J/rSVU3tP3BpJtztP7R5z40gW5dNWbKsxdHf77Mf58AKY2c26HjkiIBvynEcXq2c3ZbsB20TOEuCdw+8Zhd5F2nt45Zzq66f3hfRCasloYsdsahxh5UDifiezmKes1ukal6FHX/c2DTVjtjHFqBGR9GxSUhCdEgACs3tHrfGpCEf4rQ71H1FYZd/W+OMOL/xWx3ax8x7heJ7drtMiW4dA2g/r0rZtAWuLKvMofbzXCaW2h1BS4kKSehFOWC1OnVy3RV/VsUxaoMY6sRGGyOqUAduStLxXM4t7YGkaUe7epp1LzSHEHVKwFA/I+7ZhkgsFs0Z8857yst1hONm0w1TZnnny/O6rxqSFAgjUGsbJxzN59oXwYlHvWvcNo0xct2DYo3FclwFz+yrdCRboDEVr7rSAnxZPZkX2xSIi+ZGqP7hyrZ3eFzLU7Aln96hLLZ91udxYtUB2XJWEobBNYtbn8nva8iugPdJJEVo+x2ixHIpg32MPtYa6gS258BmS0dUOoCgfbLWG0KWo6ADU1iiDkeaT725xYYJbj+wvyDiecxbujywpfkfptaXW0rQdUqAI9zKglJKjoBzq5PO55k3qyOdLTEVq8vos1HYbix0MspCW20hKR8h7G7QEXO1yIjo1S6gitnE9YhybPJP28Fen0T7bP7x6rxt1DZ0fknukVh9n9S47HYI0dUN9z6+wyuyi/WCRE01cI1b+Sq2e3sz7QqFJ4SoR7tXueb394ut2G0+abK4L05oFY1YGcetLcVrivm4vqo+zu/+zG0GNcBwjT/I781UPa3H/ajaMxE5xbd5l0BoNB7G8A4fnTNyb4Qp/kepKgtIUkgg+45VkTWO2lb/ADfVwaR8TWDY86wHLzc/PPl/qge0zy0m6Y46Whq/H+1brDbuLzjUZ/mtI3F/Ue0vtyRaLNJmLIBbQSn61s3ti2rY/c5A+2muFfsstsib5YX2P5qBvtH4EVs9vZuVjEZ8/vcTyLHuEyaxBiuSH1pS22kqJqyRns4yQ3icCIEY6MNUAEjQDQD2k2fBYaWiVJZQFAggrFYleIliyS5QVyEehOq7xpfQVGvECXwYlsrPwCx7IkCs/km6z4FgY5PrCnvkKhx0RIjTCAAltAT+ns7jriGfImo4Qbj5V/30laVgFKgR7Q6Csl2jwLItcaMPSpNLv+ZZIdYgWw2eiPLTuMZXLaKZMsqB6KIpmFmVgQDFdc7lH8CCNKs+1R9h4Rr9EKOm+Kgz49yiokRHUutLGoI9jcblGtUNcmY6G201ds/vOQylw7C0tDNMbPLjcSHrtPO//wA9DZfD6yl0/s1kxftbZPIcqFmGRYjJDF1QX2Piv/8AFVY79Cv8ISIToV8U9U+KbPj26KuRLdS20gakmrxtVefeMewxCs/1mgzm93JdXIebQaOL5WHQ8JZLtIv+ZY2dZYXIbHRfmrGdpEC9rEaUPRZNA6jUePI8wt2NtfvK9948mkVJzzJL+6UWdgsN9Cmncayy4gGa+VdQFkGvVGaQvMxMdO78FioO0e92V8M3uIXUVYckgZDF72E79UHmPZbQc0cYX6mtBJkr4LWisXwRqMBMuo759fHcNIQltAShISkcAByHbe8agXthQfaAd6ODnVun3HZ5fQxIK3IC6gzGbhDbkx1hbbg1BHjedQw0pxwgJSNSavNynZ/kXokXVMFo1ZrFEskQMxWx819T4LhbY10jLYltJWhVETtnmQh9glcF01bZ7VzgMy2Dqh1IUPBNmMwIjkmQsIbbGpJq5XG47Q76Y8YlEBBqx4zAsbCQw0FO9XDz7VoS4gpWApJ4EGsnwRmSgzLUAzIRx3BWz7NFuu+pruSJCODa1+LNctaxq2/GW6NG0VjuKycjketr2tZQs6gHmqosNiEyGozSG0Dokds+2xbmwWpbKXBV2ss/CLim5WpxZja1i2SR8ktSZLJ0cHBxHwPsMluosthlTDzQnQfU1gNpXcpr96neclR3PFk1lbvVodZKNXQCWz862U3p0GTZZPNnUo8e0+7qgY33DJ0ckncrBLMLZY0PLH20jznxZLaUXiyvsK++AVINbJrq53Mu1P8ANg6oHg2rXp3WNZY3N7QrrF7Iiy2hpoI0eUAXD8/Fn9pMCWzeoQ3FBQ36xm7C92CLM6rTofqPAtYQ2pZ5JGtILmcZ0685xiMn9E022lpsIQkJSkaADwyozcyM4w8kKQsEEGsakO4fnZgL4RpCtz9eVDx7Xpq2rREio5PO1i8QQ8ehoHVsKPbLlswYrkiSsIabGqlVBnMXGIiTFXvsr13VaEcj2sk2baq0G+DbzgB8e1VZlZJbYtR20tR20JGgSkAdqLzf59znsWxqAWorpb1eCtaiGQYjRlhsSN0d4G/u69dOwgEEGsXJgbUnm0nRCyvwSSbztWdS5xbZcIHaVBKSVEAAak0jMIz8ktw4U6S0F7in2mtUduSxBMx+Y2ejZUPqK2QzFrtUyIv+S74MymKgYpPeRwWGvLWzKJpan5XVxztueRotkwsGBPfOgO+w1vJqz5PHvM12K1FlMuNJ3l98gDt2lMmLMgz2vvirS/6VaYr3VTSf9PHtc19Jtvw36tenquNpy7pPbkM9F+MuK1IQiDCQpTh3wC86AdEj5CsJdQrF4qAsFaQrUdR5j25Jw2iQijnvCkfcT9PFtF+yziAs03xbT9B23yxRYMGbdYN3lNPFRc8rw3FK15cKx2W/OsEORK4vLRqT2277bat5OhPar7h+lY9x2jzSvnvntyxxbOMT1N89zT9TTE+82LG4M5oRBAASCwB5yD1J+Jpl0PMIdTyWkKH5jsuWnq2Try7s1sj19NuXg2kajDpVbPNP2ZR23m5JtNpkTFc20+UfEngKw6AY1o9Lf4ypp75xR+fLt2n6eq2P76xMqOMwt/nuePbBGWbbBkI5IdrGpSZdghrT0bCT9QO2dhlpfjv9xDQmQtJ3Fla+CqxmwIsUAIWlHpSx9stBJCtCdOfaT612rMBrihDooDQeLa9CWiVAn9EeSrRMTPtUaSnk4gHtOHWRckvrggrKt46uL01+mtJSlCAlACUgaAAaADsfdDLDjh5IST+grZ60q655LuPNtG//ANfASbVtXf70aIW6e2VGbmxXY741bdSUqHyNIwp4ttRJN2detrK95MfuwPyKqSkJSEpGgA0HZkcpMSwTHFf5RA+pFbH46xAnyV8lu+DOIxlYfcUIGq+6rZlKC7O9H/jbc7cishv8FEUSe4SFhavJvb1NoDTSW08kgAfQdu05/vXYUNviurMx6PZojfUNJ8eWWcXvHZUX+Mp1T9RWzu7FgvWaV5HGySjxX+7Is1pekrPmA8nzNbLLQ5KnSr5J6khHjy6xpv8AYH4v8zm38lVgF7MRx2zTyULQfIF+LPr+IcD0CMvWS/WznHvUlgDjw0kSdFr8G1SzuMS4t7j/AMBAXWP3ZF4tDMlJ1URosfPxbRLuXe5s8TzuOEFdYjZhY8djRf49N5fgeaS+yttY1SsEGrYV4Zm78J/gw8d3WgQoaggg+F51DDK3HCAlAJNWhpzM8/Ej/do6gfyTSUhIAHIewz/E34Uz19ZgQsHV0IrGM2i3VoMTFBmUmgQe263qFZ46nZbwTpyT1NAz9ol+Qy2C3AQatluYtUBqJGSEttjT2GfYQ7Mc9bWcaSkcVoFY9n4a/c74C26jh3lRp8aY0HI76FpPUGtRT0pmOgredQhI5kmr/tAjRkFi1fbvnr0FYThku5T/AF1fh80IXQAA0HguVvYukB2JJSFNuDQ0sT9nV/W2sFyAs1ab3CvMdLsV4EnmjqO3UAamsmzaLamixEUHpRrAMTfnzfX15BJJ1aC/FnmIi/we/jDScwNUVi2ZqgkWu96trQd0LVTTzb7YcaWlaDyKT2yZTENouyHUNoHMqNZDlEnJZYtVlQsoWrQkVh+LtYzag1zkL0Lq/YqSlaSlQBSeYNZPsyYuLxl2lYjP9UUI2aY5wDT7jI/MV+397Y8j1tBXRv2XXfyQobiNeiE1atml2uz4fvsgtoq1WiJZoaY0JkIQPZZDglqv+ri0dzI/zEU/ssvEBe/bZ4Nfs1naPIHnSj5OJprZnf7kvW4zwise2cWuyrD7wMmQOq6ACRoBoPFdLTEvERUaayHEGrrs0utpfL9ikFxFJv2XWjyTYbi9Oi01+397f8jVtAXRYzTI+HcvNsmsY2YswHhLu6xJf6IpCUoSEpASkcgPHlOCwMjQXNAxK6OIpeM5djTp9BLj7Y6o4ihm+QQeEu379HMcluPCHAKCeqBUfC8oyN8G6LWw3136xrEIGNRtGEBb/V1XtCAeddy3/Qj9KCEp5JA95KEq5pBoMt/0I/SgAOXsy0g80JP5UGkDkhI/L/2cfWWmFrHNIqLkHSUj800Mhjf0OU1fFvzm20IAbUrT59j1wix17jr6Er+FNrS6gLQoKSeRHY9cYjDm47IQlfw1pcllDHfKcQGue/rwqPKZlIKmHErA+BpNxiKe7pMhsr1001p2Syy4hDjgC1nRKepp+WxFA791KNeWtNrS6gLQoKSRqCPwm8SDHgKKeazu0zbZD7YWhA0PLU6a0LPM10LWg+JNFh+3vtuLGhB1B6Gi6TGLiBqdzUCrNHaVbg8pIW4/qXFHiVcamNKtcVbkDcQgr1dCuOmtGVLM2UGygsMt6/Mkpq0RmfVqFlKXFPDVxShqVE0LbCbZ5aNIcLpBV5QRSlLMe4T2kbjbiNxHQq6FVTmGkY4N1IG4hKkn4HhxqYwjvYMncAedeb31flUtTqb2FxWe/cSzurSSAEgnUcTVj0EAp5LS4oLTppunqPwm7RlSYKkoGqkneFFpUxuIphYSG+Ckk6EVNbU9EcbQQFKGgp9pRhR4f3397p0FNp3G0pHQaV6reZWv0KYWG1nUoKAoA/LWjGj2+2Ph1SlBYJcWeaiasTSEWpBB3islSj86FreYKhCmKZaUddwoCtPprTtn3oPozT6k6r33FKGpWfnTEN4IW3Jkh5pSNzdDYTp+lC0OqQhh2YtcZJGje4ASByBNToLstbJbkd0GlbwG4FeapEBxcn0iNILDhTuq8oUCPoahxBDY3AorUolS1HmpR5n8KMRhZKi2NT1FGCweaVf86v8AzTMdpnXu2wn2v//EACQRAAICAgEEAwEBAQAAAAAAAAECABEDECATMDFAEiFQgDJw/9oACAECAQE/AP8AhCrcXFPjPjDjjKR+iIq1xIBhH6GIc8o/QxbPiY95P0MPDGN5P0MZ4Abyn9FHvizAQn9JclQZBDkEOWEk/wBUgQJCkr1KnwM+B91EuBK2VjJXpJjgWtskZSPaUWYBQ4kXHFehjW5VcSAYfZwwaLVA17yj0MfjZaoDe8o9nFtiIg3k8d8RP87eJvN7OLbLcXeX0E8bIuKK3l9lD988h9DE3NzZ9pH4u/pI98CQI7+4HM6s6sLn07i5Kgyw5YWJ/pUYyYMRhxnuAQYp0ocUK9kYzOkYcZHaCEzpTpEQjtgXEx1K2yXGWuyq3FWtiER0rkq3FWt1GxwiuaJcA0IRHTtYl5Mt9nGtDk4sQjii1yyLyxrcAriRYjCj2U8bJoQGxvIPvmsGwxJg0Y/DGPvh8r2/jli2Wite8vYHmL425+pj8by+eawbZQPuKdv54YvO3NLB9C9t4h88cW2iLW8vYETxspcVa3k7C7KbP0IfPDH9GDRFz4bbxDxxbZb4ZezibkxhN9jE3LI3EGKeWVuWM8iaEc2eyDFfVaLAR3vsg1FyQMNWBGyQnkj1AwOq0zy+aPBW7Ed+2LEDzqw5IST3ATPmZZ7IJEGSdWF4eyGM6s6twk/0P//EACARAAEEAwEBAQEBAAAAAAAAAAEAAhEgEBIwQFCAIXD/2gAIAQMBAT8A/wAIJhFylSgYQM/SJmoMIfQddv0H5Cdlv0H0dlv0HC7fokVA+kQtVqtUGoD9VStlPl2W3tJhE5lAz4i5TkGEDPqJhEzUGE0z4CbAx6n5CjLPA7ICjLPS/IRyzwOy1Oyz0vGQUUMM8Dsgo5YPSbBMHgcLj1FtWt8RbUD2QEWIMQA8mq0WiDf0rK3W3XdboPQPHZbqeUrdbqehNAYQM8SYRM1BmxMImaAoXLqgzycbAxxJmzTFiZs02dYfxNM8Tkf1ERltzkICjaOpGW2fQjLOJyBCdllzQFHLaOyKBCr8hOKGGcSMhyJy3gc7ZCbR1JyLPGQaM4vFgEODxZtSiEKsFiLgci2gbKAjkWqMQg25ErWKBvAtUZhNb0LVqtUBHSFCjiRK1WqDeWq1Qao/Q/8A/9k="}}]);