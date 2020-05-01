(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{"8b24":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-page",{attrs:{padding:""}},[n("q-card",{staticClass:"q-mb-lg q-mt-sm",attrs:{flat:"",bordered:""}},[n("q-card-section",[n("div",{staticClass:"text-h6"},[e._v("\n        "+e._s(e.currentWallet.title)+"\n        "),n("span",{staticClass:"text-grey-7 text-subtitle1"},[e._v("("+e._s(e.address.substr(0,4)+"..."+e.address.substr(-4))+")")])]),e.balance&&e.balance.available_balance_sum?n("div",{staticClass:"q-mt-sm"},[n("div",[e._v(e._s(e.$t("Available balance"))+":")]),n("b",[e._v(e._s(e.prettyNumber(e.balance.available_balance_sum,3))+" BIP")]),e.balance&&e.balance.available_balance_sum_usd&&"en-us"===e.language?n("span",{staticClass:"text-grey-7"},[e._v("\n          (~ "+e._s(e.prettyNumber(e.balance.available_balance_sum_usd,2))+" usd)\n        ")]):e._e()]):e._e()]),n("q-separator",{attrs:{inset:""}}),n("q-card-actions",{attrs:{align:"around"}},[n("q-btn",{attrs:{flat:""},on:{click:e.copyAddress}},[e._v(e._s(e.$t("Copy address")))]),n("q-btn",{attrs:{flat:""},on:{click:function(t){e.qrAddress=!0}}},[e._v(e._s(e.$t("Show QR")))])],1)],1),n("div",{staticClass:"row q-mb-lg"},[n("div",{staticClass:"col-md-6 col-xs-6 q-pa-xs"},[n("q-btn",{staticClass:"bg-light-blue-14 text-white full-width q-pb-sm",attrs:{push:"",stack:"",to:"/convert"}},[n("div",[n("q-icon",{staticClass:"text-white",attrs:{name:"compare_arrows",size:"2rem"}})],1),e._v("\n        "+e._s(e.$t("Convert coins"))+"\n      ")])],1),n("div",{staticClass:"col-md-6 col-xs-6 q-pa-xs"},[n("q-btn",{staticClass:"bg-light-blue-14 text-white full-width q-pb-sm",attrs:{push:"",stack:"",to:"/contacts"}},[n("div",[n("q-icon",{staticClass:"text-white",attrs:{name:"supervisor_account",size:"2rem"}})],1),e._v("\n        "+e._s(e.$t("Contacts"))+"\n      ")])],1),n("div",{staticClass:"col-md-6 col-xs-12 q-pa-xs"},[n("AddWallet")],1)]),n("q-dialog",{model:{value:e.qrAddress,callback:function(t){e.qrAddress=t},expression:"qrAddress"}},[n("q-card",[n("img",{staticClass:"address__qr",attrs:{src:e.qrImg}})])],1)],1)},s=[],r=(n("8e6e"),n("8a81"),n("ac6a"),n("cadf"),n("06db"),n("456d"),n("c47a")),l=n.n(r),i=n("2f62"),o=n("d055"),c=n.n(o),d=n("ed08"),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("q-btn",{staticClass:"bg-light-blue-14 text-white full-width q-pa-xs q-pb-sm",attrs:{push:""},on:{click:function(t){e.newWalletDialog=!0}}},[n("q-icon",{staticClass:"text-white q-mr-sm",attrs:{name:"add_box",size:"1.8rem"}}),e._v("\n    "+e._s(e.$t("Add new wallet"))+"\n    ")],1),n("q-dialog",{attrs:{"transition-show":"scale","transition-hide":"scale"},model:{value:e.newWalletDialog,callback:function(t){e.newWalletDialog=t},expression:"newWalletDialog"}},[n("q-card",{staticClass:"dialog-min300"},[n("form",{attrs:{autocorrect:"off",autocapitalize:"off",autocomplete:"off",spellcheck:"false"},on:{submit:function(t){return t.preventDefault(),t.stopPropagation(),e.saveNewWallet(t)}}},[n("q-card-section",{staticClass:"q-gutter-md"},[n("div",{staticClass:"text-h6"},[e._v(e._s(e.$t("Add new wallet")))]),n("q-input",{attrs:{outlined:"",clearable:"",label:e.$t("Title"),hint:e.$t("Optional")},model:{value:e.newTitle,callback:function(t){e.newTitle=t},expression:"newTitle"}}),n("q-input",{attrs:{outlined:"",clearable:"",autogrow:"",label:e.$t("Mnemonic"),error:e.newMnemonicIsError,"error-message":e.newMnemonicErrorMsg},scopedSlots:e._u([{key:"after",fn:function(){return[n("q-btn",{style:e.generateWalletLoading?"cursor-pointer: none;":"",attrs:{flat:"",stack:"",round:"","no-caps":"",icon:"cached",disabled:e.generateWalletLoading,loading:e.generateWalletLoading},on:{click:e.generateWallet},scopedSlots:e._u([{key:"loading",fn:function(){return[n("q-spinner-gears")]},proxy:!0}])})]},proxy:!0}]),model:{value:e.newMnemonic,callback:function(t){e.newMnemonic=t},expression:"newMnemonic"}}),n("div",[n("q-btn",{staticClass:"full-width",attrs:{type:"submit",label:e.$t("Add new wallet"),color:"primary",disabled:!e.newMnemonic||!e.newMnemonic.length}})],1)],1)],1)])],1)],1)},b=[],p=n("a2dc");function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){l()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var g={name:"AddWallet",data:function(){return{newWalletDialog:!1,newTitle:null,newMnemonic:null,newMnemonicIsError:null,newMnemonicErrorMsg:null,generateWalletLoading:!1}},methods:{generateWallet:function(){var e=this;this.generateWalletLoading=!0,setTimeout((function(){e.newMnemonic=Object(p["a"])()._mnemonic}),200)},saveNewWallet:function(){if(Object(p["b"])(this.newMnemonic)){var e=Object(p["c"])(this.newMnemonic),t={address:e.getAddressString(),privateKey:e.getPrivateKeyString(),mnemonic:e.getMnemonic()},n=this.findWallet(t.address);if(n&&n.address)this.newMnemonicIsError=!0,this.newMnemonicErrorMsg=this.$t("This wallet already exists");else{var a=this.findProfile(t.address);t.title=this.newTitle||(a?a.title:"")||(this.walletsSelect.length?this.walletsSelect.length+1+" wallet":"Main wallet"),t.icon=a?a.icon:"",this.newWalletDialog=!1,this.$store.commit("SAVE_WALLET",t),this.$router.push({path:"/wallet"})}}else this.newMnemonicIsError=!0,this.newMnemonicErrorMsg="Invalid mnemonic"}},computed:f({},Object(i["c"])({address:function(e){return e.wallet.address}}),{},Object(i["b"])(["walletsSelect","findWallet","findProfile"])),watch:{newWalletDialog:function(){this.newMnemonic=null,this.newTitle=null},newMnemonic:function(e){var t=this;setTimeout((function(){t.newMnemonicIsError=!1,t.generateWalletLoading=!1}),200)}}},w=g,h=n("2877"),v=n("eebe"),q=n.n(v),_=n("9c40"),O=n("0016"),y=n("24e8"),j=n("f09f"),x=n("a370"),C=n("27f9"),W=n("cf57"),M=Object(h["a"])(w,u,b,!1,null,null,null),P=M.exports;function $(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?$(Object(n),!0).forEach((function(t){l()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}q()(M,"components",{QBtn:_["a"],QIcon:O["a"],QDialog:y["a"],QCard:j["a"],QCardSection:x["a"],QInput:C["a"],QSpinnerGears:W["a"]});var D={name:"Index",components:{AddWallet:P},data:function(){return{language:this.$i18n.locale,qrAddress:!1,qrImg:"",currentWallet:null}},created:function(){this.currentWallet=this.findWallet(this.address),this.createQR()},methods:{prettyNumber:function(e,t){return Object(d["d"])(e,t)},createQR:function(){var e=this,t={errorCorrectionLevel:"H",type:"image/png",rendererOpts:{quality:5}};c.a.toDataURL(this.address,t).then((function(t){e.qrImg=t})).catch((function(t){e.$q.notify({message:t,color:"purple"})}))},copyAddress:function(){var e=this;navigator.clipboard.writeText(this.address).then((function(){e.$q.notify({message:e.$t("Address copied"),color:"purple",position:"bottom",timeout:300})})).catch((function(){}))}},computed:A({},Object(i["c"])({address:function(e){return e.wallet.address},balance:function(e){return e.api.balance}}),{},Object(i["b"])(["balanceSum","balanceCustom","delegationsSum","findWallet"]))},S=D,k=n("9989"),Q=n("eb85"),E=n("4b7e"),I=Object(h["a"])(S,a,s,!1,null,null,null);t["default"]=I.exports;q()(I,"components",{QPage:k["a"],QCard:j["a"],QCardSection:x["a"],QSeparator:Q["a"],QCardActions:E["a"],QBtn:_["a"],QIcon:O["a"],QDialog:y["a"]})}}]);