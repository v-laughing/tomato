(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{1123:function(t,i,o){"use strict";o(552)},1141:function(t,i,o){"use strict";o.r(i);o(128);var n={props:{words:{type:Array,default:function(){return["hello","hotel"]}},britishAccent:{type:Boolean,default:!1}},mounted:function(){var t=this;this.audio=document.createElement("audio"),this.audio.onerror=function(){if(t.retry)return t.audio.src="https://s.yimg.com/bg/dict/dreye/live/m/".concat(t.word,".mp3"),t.audio.play(),t.retry=!1,!0}},methods:{onClick:function(t){this.word=t,this.retry=!0,this.audio.src=this.getAudioUrl(t),this.audio.play()},getAudioUrl:function(t){var i=this.britishAccent?1:2;return"http://dict.youdao.com/dictvoice?audio=".concat(t,"&type=").concat(i)}}},e=(o(1123),o(7)),r=Object(e.a)(n,(function(){var t=this,i=t.$createElement,o=t._self._c||i;return o("div",{staticClass:"box"},t._l(t.words,(function(i){return o("div",{key:i,staticClass:"word",on:{click:function(o){return t.onClick(i)}}},[t._v("\n    "+t._s(i)+"\n  ")])})),0)}),[],!1,null,"454a6539",null);i.default=r.exports},552:function(t,i,o){}}]);