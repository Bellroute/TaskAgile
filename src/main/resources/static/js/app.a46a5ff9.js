(function(t){function e(e){for(var a,i,o=e[0],l=e[1],c=e[2],f=0,p=[];f<o.length;f++)i=o[f],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&p.push(s[i][0]),s[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(p.length)p.shift()();return n.push.apply(n,c||[]),r()}function r(){for(var t,e=0;e<n.length;e++){for(var r=n[e],a=!0,o=1;o<r.length;o++){var l=r[o];0!==s[l]&&(a=!1)}a&&(n.splice(e--,1),t=i(i.s=r[0]))}return t}var a={},s={app:0},n=[];function i(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=a,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(r,a,function(e){return t[e]}.bind(null,a));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;n.push(["56d7","chunk-vendors"]),r()})({"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},n=[],i={name:"App"},o=i,l=r("2877"),c=Object(l["a"])(o,s,n,!1,null,null,null),u=c.exports,f=r("8c4f"),p=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},v=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h1",[t._v("TaskAgile")])])}],d={name:"LoginPage"},m=d,g=Object(l["a"])(m,p,v,!1,null,null,null),b=g.exports,h=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},_=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("div",{staticClass:"row justify-content-center"},[r("div",{staticClass:"register-form"},[r("div",{staticClass:"logo-wrapper"},[r("img",{staticClass:"logo",attrs:{src:"/static/images/logo.png"}}),r("div",{staticClass:"tagline"},[t._v("Open source task management tool")])]),r("form",[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"username"}},[t._v("Username")]),r("input",{staticClass:"form-control",attrs:{type:"text",id:"username"}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"emailAddress"}},[t._v("Email address")]),r("input",{staticClass:"form-control",attrs:{type:"email",id:"emailAddress"}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"password"}},[t._v("Password")]),r("input",{staticClass:"form-control",attrs:{type:"password",id:"password"}})]),r("button",{staticClass:"btn btn-primary btn-block",attrs:{type:"submit"}},[t._v("Create account")]),r("p",{staticClass:"accept-terms text-muted"},[t._v("By clicking “Create account”, you agree to our "),r("a",{attrs:{href:"#"}},[t._v("terms of service")]),t._v(" and "),r("a",{attrs:{href:"#"}},[t._v("privacy policy")]),t._v(".")]),r("p",{staticClass:"text-center text-muted"},[t._v("Already have an account? "),r("a",{attrs:{href:"/login"}},[t._v("Sign in")])])])])]),r("footer",{staticClass:"footer"},[r("span",{staticClass:"copyright"},[t._v("© 2020 TaskAgile.com")]),r("ul",{staticClass:"footer-links list-inline float-right"},[r("li",{staticClass:"list-inline-item"},[r("a",{attrs:{href:"#"}},[t._v("About")])]),r("li",{staticClass:"list-inline-item"},[r("a",{attrs:{href:"#"}},[t._v("Terms of Service")])]),r("li",{staticClass:"list-inline-item"},[r("a",{attrs:{href:"#"}},[t._v("Privacy Policy")])]),r("li",{staticClass:"list-inline-item"},[r("a",{attrs:{href:"https://github.com/taskagile/vuejs.spring-boot.mysql",target:"_blank"}},[t._v("GitHub")])])])])])}],y=(r("f2e5"),{}),C=Object(l["a"])(y,h,_,!1,null,"89d93506",null),w=C.exports;a["a"].use(f["a"]);var O=new f["a"]({mode:"history",base:"/",routes:[{path:"/login",name:"LoginPage",component:b},{path:"/register",name:"RegisterPage",component:w}]}),j=r("2f62");a["a"].use(j["a"]);var P=new j["a"].Store({state:{},mutations:{},actions:{},modules:{}});a["a"].config.productionTip=!1,new a["a"]({router:O,store:P,render:function(t){return t(u)}}).$mount("#app")},ea03:function(t,e,r){},f2e5:function(t,e,r){"use strict";r("ea03")}});
//# sourceMappingURL=app.a46a5ff9.js.map