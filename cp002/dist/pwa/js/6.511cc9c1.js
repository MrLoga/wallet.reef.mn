(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{8041:function(e,t,a){"use strict";var r=a("af78"),s=a.n(r);s.a},"8b24":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",{attrs:{padding:""}},[a("div",{staticClass:"q-gutter-md"},[a("q-card",{attrs:{flat:"",bordered:""}},[a("q-card-section",[a("div",{staticClass:"text-h6"},[e._v("\n          "+e._s(e.$t("My Address"))+" "),a("span",{staticClass:"text-grey-7"},[e._v("("+e._s(e.address.substr(0,4)+"..."+e.address.substr(-4))+")")])]),e.balances&&e.balances.available_balance_sum?a("div",{staticClass:"text-subtitle1"},[a("div",[e._v(e._s(e.$t("Available balance"))+" "+e._s(e.prettyNumber(e.balances.available_balance_sum,3))+" BIP")]),e.balances&&e.balances.available_balance_sum_usd&&"ru"===e.language?a("span",{staticClass:"text-grey-7"},[e._v("\n            (~ "+e._s(e.prettyNumber(e.balances.available_balance_sum_usd*e.currency["USDRUB"],2))+" руб)\n          ")]):e._e(),e.balances&&e.balances.available_balance_sum_usd&&"en-us"===e.language?a("span",{staticClass:"text-grey-7"},[e._v("\n            (~ "+e._s(e.prettyNumber(e.balances.available_balance_sum_usd,2))+" usd)\n          ")]):e._e()]):e._e()]),a("q-separator",{attrs:{inset:""}}),a("q-card-actions",{attrs:{align:"around"}},[a("q-btn",{attrs:{flat:""},on:{click:e.copyAddress}},[e._v(e._s(e.$t("Copy address")))]),a("q-btn",{attrs:{flat:""},on:{click:function(t){e.qrAddress=!0}}},[e._v(e._s(e.$t("Show QR")))])],1)],1),e._e(),a("q-list",[a("q-item-label",{attrs:{header:""}},[e._v(e._s(e.$t("Coins")))]),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{to:"/convert",clickable:""}},[a("q-btn",{staticClass:"bg-secondary text-white full-width",attrs:{size:"16px",icon:"compare_arrows",flat:"",label:e.$t("Convert coins")}})],1),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{to:"/contacts",clickable:""}},[a("q-btn",{staticClass:"bg-secondary text-white full-width",attrs:{size:"16px",icon:"supervisor_account",flat:"",label:e.$t("Send to people")}})],1),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{to:"/services",clickable:""}},[a("q-btn",{staticClass:"bg-secondary text-white full-width",attrs:{size:"16px",icon:"star",flat:"",label:e.$t("Services")}})],1)],1)],1),a("q-dialog",{model:{value:e.qrAddress,callback:function(t){e.qrAddress=t},expression:"qrAddress"}},[a("q-card",[a("img",{staticClass:"address__qr",attrs:{src:e.qrImg}})])],1)],1)},s=[],n=(a("8e6e"),a("8a81"),a("ac6a"),a("cadf"),a("06db"),a("456d"),a("c47a")),c=a.n(n),i=a("2f62"),l=a("58a4"),o=a.n(l),u=a("d055"),d=a.n(u),b=a("158a"),p=a("6ff6"),f=a("ed08");function m(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function v(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?m(Object(a),!0).forEach((function(t){c()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):m(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}o.a.util=a("427a");var _={name:"Index",components:{},data:function(){return{language:this.$i18n.locale,qrAddress:!1,qrImg:""}},computed:v({},Object(i["c"])({privateKey:function(e){return e.wallet.privateKey},address:function(e){return e.wallet.address},key:function(e){return e.wallet.key},nonce:function(e){return e.wallet.nonce},currency:function(e){return e.request.currency},balances:function(e){return e.api.balances},balancesJSON:function(e){return e.api.balancesJSON},delegations:function(e){return e.api.delegations}}),{},Object(i["b"])(["isLogin","isRegistered","balanceSum","balanceCustom","delegationsSum"])),methods:{registerAddress:function(){this.$store.dispatch("REGISTER_ADDRESS")},getAddress:function(){this.$store.dispatch("GET_ADDRESS")},prettyNumber:function(e,t){return Object(f["c"])(e,t)},createQR:function(){var e=this,t={errorCorrectionLevel:"H",type:"image/png",rendererOpts:{quality:5}};d.a.toDataURL(this.address,t).then((function(t){e.qrImg=t})).catch((function(t){e.$q.notify({message:t,color:"purple"})}))},copyAddress:function(){var e=this;navigator.clipboard.writeText(this.address).then((function(){e.$q.notify({message:e.$t("Address copied"),color:"purple",position:"bottom",timeout:300})})).catch((function(){}))},signFee:function(){return Object(b["e"])(p["e"],{payload:"MX4qptIH0mXijR8XlroE56txuOeyig=="})}},created:function(){this.createQR()}},g=_,y=(a("8041"),a("2877")),q=a("eebe"),h=a.n(q),w=a("9989"),O=a("f09f"),C=a("a370"),j=a("eb85"),S=a("4b7e"),x=a("9c40"),A=a("1c1c"),$=a("0170"),Q=a("66e5"),R=a("24e8"),k=a("714f"),D=Object(y["a"])(g,r,s,!1,null,null,null);t["default"]=D.exports;h()(D,"components",{QPage:w["a"],QCard:O["a"],QCardSection:C["a"],QSeparator:j["a"],QCardActions:S["a"],QBtn:x["a"],QList:A["a"],QItemLabel:$["a"],QItem:Q["a"],QDialog:R["a"]}),h()(D,"directives",{Ripple:k["a"]})},af78:function(e,t,a){}}]);