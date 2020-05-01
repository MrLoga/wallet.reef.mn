(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{3066:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",[a("q-tabs",{staticClass:"bg-teal text-white shadow-2",attrs:{"inline-label":"","active-color":"white","indicator-color":"white"},model:{value:e.authTab,callback:function(t){e.authTab=t},expression:"authTab"}},[a("q-tab",{attrs:{name:"authorized",icon:"accessibility_new",label:"Authorized"}}),a("q-tab",{attrs:{name:"blocked",icon:"error",label:"Blocked"}})],1),a("q-tab-panels",{attrs:{animated:""},model:{value:e.authTab,callback:function(t){e.authTab=t},expression:"authTab"}},[a("q-tab-panel",{attrs:{name:"authorized"}},[Object.keys(e.getAuthorized).length?a("q-list",e._l(e.getAuthorized,(function(e){return a("auth-domen",{key:e.name,attrs:{item:e}})})),1):a("q-item-label",{attrs:{caption:""}},[e._v("No authorized")])],1),a("q-tab-panel",{attrs:{name:"blocked"}},[Object.keys(e.getBlocked).length?a("q-list",e._l(e.getBlocked,(function(e){return a("auth-domen",{key:e.name,attrs:{item:e}})})),1):a("q-item-label",{attrs:{caption:""}},[e._v("No blocked")])],1)],1)],1)},r=[],o=(a("8e6e"),a("8a81"),a("ac6a"),a("cadf"),a("06db"),a("456d"),a("c47a")),c=a.n(o),i=a("2f62"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-item",[a("q-item-section",[a("q-item-label",{attrs:{lines:"1"}},[a("img",{staticClass:"favicon-site",attrs:{src:"https://www.google.com/s2/favicons?domain="+e.item.name}}),e._v("\n       \n      "),a("span",{staticClass:"text-weight-medium"},[e._v(e._s(e.item.name))])])],1),a("q-item-section",{attrs:{side:""}},[a("div",{staticClass:"text-grey-8"},[a("q-btn",{attrs:{icon:"delete"},on:{click:e.remove}},[e._v("Remove")])],1)])],1)},l=[];a("7f7f");function u(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?u(Object(a),!0).forEach((function(t){c()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var m={name:"Login",props:["item","name"],data:function(){return{}},created:function(){},methods:{remove:function(){var e={id:this.nonce,from:"wallet",to:"server",action:"remove-auth",requests:[this.item.name]};this.$store.dispatch("REQUESTS",e),this.$q.notify({message:"Access to requests is closed",icon:"tag_faces",color:"teal"})}},computed:b({},Object(i["c"])({nonce:function(e){return e.wallet.nonce}}))},p=m,d=a("2877"),h=a("eebe"),f=a.n(h),O=a("66e5"),g=a("4074"),v=a("0170"),j=a("9c40"),w=Object(d["a"])(p,s,l,!1,null,null,null),y=w.exports;function q(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function P(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?q(Object(a),!0).forEach((function(t){c()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):q(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}f()(w,"components",{QItem:O["a"],QItemSection:g["a"],QItemLabel:v["a"],QBtn:j["a"]});var k={name:"Authenticator",components:{AuthDomen:y},data:function(){return{authTab:"authorized"}},computed:P({},Object(i["c"])({authDB:function(e){return e.auth.authDB}}),{},Object(i["b"])(["getAuthorized","getBlocked"])),methods:{registerAddress:function(){this.$store.dispatch("REGISTER_ADDRESS")},getAddress:function(){this.$store.dispatch("GET_ADDRESS")}},created:function(){}},_=k,D=a("9989"),T=a("429b"),E=a("7460"),Q=a("adad"),S=a("823b"),A=a("1c1c"),z=Object(d["a"])(_,n,r,!1,null,null,null);t["default"]=z.exports;f()(z,"components",{QPage:D["a"],QTabs:T["a"],QTab:E["a"],QTabPanels:Q["a"],QTabPanel:S["a"],QList:A["a"],QItemLabel:v["a"]})}}]);