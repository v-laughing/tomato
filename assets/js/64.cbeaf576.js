(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{1178:function(t,e,n){"use strict";n(568)},1189:function(t,e,n){"use strict";n.r(e);var a=n(47),r=(n(99),n(15),n(40),n(231),n(128),n(96),n(440),n(72),n(228),n(1143),n(557)),o=n.n(r);n(1144),n(52),n(1146),n(1148),n(1153),n(1155),n(1156),n(1157),n(1159),n(1160),n(1161),n(1162),n(1163),n(1164),n(1165),n(1166),n(1167),n(1168),n(1169),n(1170),n(1171),n(1172),n(1173),n(1174),n(1175),n(1176),n(1177);function s(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"YYYY-MM-DD",e=new Date,n=e.getFullYear(),a=String(e.getMonth()+1).padStart(2,"0"),r=String(e.getDate()).padStart(2,"0"),o=String(e.getHours()).padStart(2,"0"),s=String(e.getMinutes()).padStart(2,"0"),i=String(e.getSeconds()).padStart(2,"0"),c=t.replace(/YYYY/g,n).replace(/MM/g,a).replace(/DD/g,r).replace(/HH/g,o).replace(/mm/g,s).replace(/ss/g,i);return c}function i(t){for(var e=window.atob(t),n=new Uint8Array(e.length),a=0;a<e.length;a++)n[a]=e.charCodeAt(a);return new TextDecoder("utf-8").decode(n)}var c="v-laughing",u="xiaohe",l="heads/master",p={data:function(){return{blogType:"logs",inputText:"",password:"",showImgLinks:!1,lastUploadedImgs:[],ciperText:"VTJGc2RHVmtYMTk4TVZBYmttQ0lFVUYxTmNEbDI3REVUdFhrTjZZVW5UUm8rTnlTcXFDTktnd2NyMEtkRFh5YkxmVFZYc0pRQVdYSS9FaHVNbGM5dHc9PQ=="}},mounted:function(){this.password=localStorage.getItem("GPOST_KEY"),this.lastUploadedImgs=JSON.parse(localStorage.getItem("GPOST_IMGS")||"[]")},computed:{accessToken:function(){return this.getToken()}},methods:{readFile:function(t){return new Promise((function(e,n){var a=new FileReader;a.onload=function(t){e(t.target.result.split(",")[1])},a.onerror=function(t){n(t)},a.readAsDataURL(t)}))},uploadImage:function(t){var e=this;return Object(a.a)(regeneratorRuntime.mark((function n(){var a,r,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t){n.next=2;break}return n.abrupt("return");case 2:return e.octokit||(e.octokit=new window.Octokit({auth:e.getToken()})),n.prev=3,n.next=6,e.readFile(t);case 6:return a=n.sent,r="".concat(s(),"_").concat(t.name),o="assets/".concat(r),n.next=11,e.octokit.repos.createOrUpdateFileContents({owner:c,repo:u,path:o,message:"Upload file",content:a});case 11:e.lastUploadedImgs.push({name:r,mdUrl:"![img](/".concat(o,")  \n")}),e.lastUploadedImgs.length>5&&e.lastUploadedImgs.splice(0,1),localStorage.setItem("GPOST_IMGS",JSON.stringify(e.lastUploadedImgs)),navigator.clipboard.writeText("![img](/".concat(o,")  \n")),alert("上传成功"),n.next=21;break;case 18:n.prev=18,n.t0=n.catch(3),console.error("Error: ",n.t0);case 21:case"end":return n.stop()}}),n,null,[[3,18]])})))()},handleFileUpload:function(t){var e=t.target.files[0];this.uploadImage(e)},getToken:function(){if(!this.password)return"";try{var t=o.a.enc.Base64.parse(this.ciperText).toString(o.a.enc.Utf8),e=o.a.AES.decrypt(t,this.password).toString(o.a.enc.Utf8);return localStorage.setItem("GPOST_KEY",this.password),e}catch(t){return""}},submit:function(){var t=this.getToken();if(t){if(this.octokit||(this.octokit=new window.Octokit({auth:t})),this.inputText){var e="".concat(this.blogType,"/").concat(s("YYYY-MM"),".md");this.commitContent(e,this.inputText,this.blogType)}}else alert("error")},getFileContent:function(t){var e=this;return Object(a.a)(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,e.octokit.rest.repos.getContent({owner:c,repo:u,path:t,ref:l});case 3:return a=n.sent,n.abrupt("return",i(a.data.content));case 7:if(n.prev=7,n.t0=n.catch(0),404!==n.t0.status){n.next=13;break}return n.abrupt("return","");case 13:throw n.t0;case 14:case"end":return n.stop()}}),n,null,[[0,7]])})))()},getUpdateContent:function(t,e){var n="",a="## ".concat(s("MM"),"月");-1===t.lastIndexOf(a)&&(n+="".concat(a,"  \n\n"));var r=-1!==t.lastIndexOf(s());return t+(n+="".concat(r?"":"> ".concat(s(),"  \n\n")).concat(e,"  \n\n"))},commitContent:function(t,e,n){var r=this;return Object(a.a)(regeneratorRuntime.mark((function e(){var a,o,s,i,p,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.octokit.git.getRef({owner:c,repo:u,ref:l});case 3:return a=e.sent,o=a.data.object.sha,e.next=7,r.getFileContent(t);case 7:return s=e.sent,i=r.getUpdateContent(s,r.inputText),e.next=11,r.octokit.git.createTree({owner:c,repo:u,base_tree:o,tree:[{path:t,mode:"100644",type:"blob",content:i}]});case 11:return p=e.sent,e.next=14,r.octokit.git.createCommit({owner:c,repo:u,message:n,tree:p.data.sha,parents:[o]});case 14:return d=e.sent,e.next=17,r.octokit.git.updateRef({owner:c,repo:u,ref:l,sha:d.data.sha});case 17:alert("Commit Success"),r.inputText="",e.next=24;break;case 21:e.prev=21,e.t0=e.catch(0),alert(e.t0.message);case 24:case"end":return e.stop()}}),e,null,[[0,21]])})))()}}},d=(n(1178),n(7)),g=Object(d.a)(p,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.accessToken?n("div",[n("div",{staticClass:"flex items-center"},[n("input",{staticClass:"file-input",attrs:{type:"file",accept:"image/*"},on:{change:t.handleFileUpload}}),t._v(" "),n("div",{staticClass:"flex-shrink-0 ml-4 text-blue-600",on:{click:function(e){t.showImgLinks=!t.showImgLinks}}},[t._v("展开")])]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.showImgLinks,expression:"showImgLinks"}],staticClass:"mt-4"},t._l(t.lastUploadedImgs,(function(e,a){return n("div",{key:a,staticClass:"flex items-center mt-2"},[t._v("\n        "+t._s(e.name)+"\n        "),n("base-copy",{staticClass:"ml-4",attrs:{value:e.mdUrl}})],1)})),0),t._v(" "),n("base-opt",{staticClass:"mt-4",attrs:{options:["logs"]},model:{value:t.blogType,callback:function(e){t.blogType=e},expression:"blogType"}}),t._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.inputText,expression:"inputText"}],staticClass:"text-input mt-4",domProps:{value:t.inputText},on:{input:function(e){e.target.composing||(t.inputText=e.target.value)}}}),t._v(" "),n("button",{staticClass:"submit-button",on:{click:t.submit}},[t._v("Submit")])],1):n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"w-80 mb-4",attrs:{type:"text"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})])}),[],!1,null,"d3629bfe",null);e.default=g.exports},558:function(t,e){},568:function(t,e,n){}}]);