(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[15],{"8b24":function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("q-page",{attrs:{padding:""}},[e.wallets?s("div",[s("div",{staticClass:"row justify-between"},[s("q-item-label",{staticClass:"col",attrs:{header:""}},[e._v(e._s(e.$t("Wallets")))]),s("div",{staticClass:"col q-pa-md text-right text-caption"},[e._v(e._s(e.prettyNumber(e.totalWalletsBip,2))+" BIP")])],1),s("q-card",[s("q-list",{staticClass:"q-mb-md",attrs:{separator:""}},e._l(e.walletsSelect,(function(e,t){return s("WalletItem",{key:t,attrs:{wallet:e}})})),1)],1)],1):e._e(),e.observer&&e.observer.length?s("div",[s("div",{staticClass:"row justify-between"},[s("q-item-label",{staticClass:"col",attrs:{header:""}},[e._v(e._s(e.$t("Observers")))]),s("div",{staticClass:"col q-pa-md text-right text-caption"},[e._v(e._s(e.prettyNumber(e.totalObserversBip,2))+" BIP")])],1),s("q-card",[s("q-list",{staticClass:"q-mb-md",attrs:{separator:""}},e._l(e.observerSelect,(function(e,t){return s("WalletItem",{key:t,attrs:{wallet:e,type:"observer"}})})),1)],1)],1):e._e(),s("q-item-label",{attrs:{header:""}},[e._v(e._s(e.$t("Services")))]),s("div",{staticClass:"row q-mb-lg"},[e.isAuth?e._e():s("div",{staticClass:"col-md-12 col-xs-12 q-pa-xs"},[s("q-btn",{staticClass:"bg-positive text-white full-width q-pa-xs",attrs:{push:"",stack:"",to:"/profile/reg"}},[s("q-icon",{staticClass:"text-white",attrs:{name:"account_circle",size:"1.4rem"}}),s("div",{staticClass:"text-width-medium",staticStyle:{"font-size":"0.8rem"}},[e._v(e._s(e.$t("Create account")))])],1)],1),s("div",{staticClass:"col-md-6 col-xs-6 q-pa-xs"},[s("AddWallet")],1),s("div",{staticClass:"col-md-6 col-xs-6 q-pa-xs"},[s("AddObserver")],1),s("div",{staticClass:"col-md-6 col-xs-6 q-pa-xs"},[s("q-btn",{staticClass:"bg-light-blue-14 text-white full-width q-pa-xs",attrs:{push:"",stack:"",to:"/contacts"}},[s("q-icon",{staticClass:"text-white",attrs:{name:"supervisor_account",size:"1.4rem"}}),s("div",{staticClass:"text-width-medium",staticStyle:{"font-size":"0.6rem"}},[e._v(e._s(e.$t("Contacts")))])],1)],1),e.isAuth?s("div",{staticClass:"col-md-6 col-xs-6 q-pa-xs"},[s("q-btn",{staticClass:"bg-light-blue-14 text-white full-width q-pa-xs",attrs:{push:"",stack:"",to:"/profile"}},[s("q-icon",{staticClass:"text-white",attrs:{name:"account_circle",size:"1.4rem"}}),s("div",{staticClass:"text-width-medium",staticStyle:{"font-size":"0.6rem"}},[e._v(e._s(e.$t("Profile")))])],1)],1):e._e()])],1)},a=[],n=(s("8e6e"),s("8a81"),s("ac6a"),s("cadf"),s("06db"),s("456d"),s("c47a")),l=s.n(n),i=s("2f62"),o=s("ed08"),c=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("q-btn",{staticClass:"bg-light-blue-14 text-white full-width q-pt-xs q-pb-xs",attrs:{push:"",stack:""},on:{click:function(t){e.newWalletDialog=!0}}},[s("q-icon",{staticClass:"text-white",attrs:{name:"add_box",size:"1.4rem"}}),s("div",{staticClass:"text-width-medium",staticStyle:{"font-size":"0.6rem","white-space":"nowrap"}},[e._v(e._s(e.$t("Add wallet")))])],1),s("q-dialog",{attrs:{"transition-show":"scale","transition-hide":"scale"},model:{value:e.newWalletDialog,callback:function(t){e.newWalletDialog=t},expression:"newWalletDialog"}},[s("q-card",{staticClass:"dialog-min300"},[s("form",{attrs:{autocorrect:"off",autocapitalize:"off",autocomplete:"off",spellcheck:"false"},on:{submit:function(t){return t.preventDefault(),t.stopPropagation(),e.saveNewWallet(t)}}},[s("q-card-section",{staticClass:"q-gutter-md"},[s("div",{staticClass:"text-h6"},[e._v(e._s(e.$t("Add wallet")))]),s("q-input",{attrs:{outlined:"",clearable:"",spellcheck:"false",label:e.$t("Title"),hint:e.$t("Optional")},model:{value:e.newTitle,callback:function(t){e.newTitle=t},expression:"newTitle"}}),s("q-input",{attrs:{outlined:"",clearable:"",spellcheck:"false",autogrow:"",label:e.$t("Mnemonic"),error:e.newMnemonicIsError,"error-message":e.newMnemonicErrorMsg},scopedSlots:e._u([{key:"after",fn:function(){return[s("q-btn",{style:e.generateWalletLoading?"cursor-pointer: none;":"",attrs:{flat:"",stack:"",round:"","no-caps":"",icon:"cached",disabled:e.generateWalletLoading,loading:e.generateWalletLoading},on:{click:e.generateWallet},scopedSlots:e._u([{key:"loading",fn:function(){return[s("q-spinner-gears")]},proxy:!0}])})]},proxy:!0}]),model:{value:e.newMnemonic,callback:function(t){e.newMnemonic=t},expression:"newMnemonic"}}),s("div",[s("q-btn",{staticClass:"full-width",attrs:{type:"submit",label:e.$t("Add wallet"),color:"primary",disabled:!e.newMnemonic||!e.newMnemonic.length}})],1)],1)],1)])],1)],1)},d=[],u=s("a2dc");function p(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,r)}return s}function b(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?p(Object(s),!0).forEach((function(t){l()(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):p(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var w={name:"AddWallet",data:function(){return{newWalletDialog:!1,newTitle:null,newMnemonic:null,newMnemonicIsError:null,newMnemonicErrorMsg:null,generateWalletLoading:!1}},methods:{generateWallet:function(){this.generateWalletLoading=!0,this.newMnemonic=Object(u["a"])()},saveNewWallet:function(){if(Object(u["b"])(this.newMnemonic)){var e=Object(u["c"])(this.newMnemonic),t={address:e.getAddressString(),privateKey:e.getPrivateKeyString(),mnemonic:e.getMnemonic()},s=this.findWallet(t.address);if(s&&s.address)this.newMnemonicIsError=!0,this.newMnemonicErrorMsg=this.$t("This wallet already exists");else{var r=this.findProfile(t.address);t.title=this.newTitle||(r?r.title:"")||(this.walletsSelect.length?this.walletsSelect.length+1+" wallet":"Main wallet"),t.icon=r?r.icon:"",this.newWalletDialog=!1,this.$store.dispatch("SAVE_WALLET",t),this.$store.dispatch("FETCH_BALANCE"),this.$store.dispatch("FETCH_DELEGATION"),this.$router.push({path:"/wallet"})}}else this.newMnemonicIsError=!0,this.newMnemonicErrorMsg=this.$t("Invalid mnemonic")}},computed:b({},Object(i["c"])({address:function(e){return e.wallet.address}}),{},Object(i["b"])(["walletsSelect","findWallet","findProfile"])),watch:{newWalletDialog:function(){this.newMnemonic=null,this.newTitle=null},newMnemonic:function(e){var t=this;setTimeout((function(){t.newMnemonicIsError=!1,t.generateWalletLoading=!1}),200)}}},f=w,m=s("2877"),h=s("eebe"),v=s.n(h),g=s("9c40"),O=s("0016"),y=s("24e8"),_=s("f09f"),q=s("a370"),j=s("27f9"),x=s("cf57"),C=Object(m["a"])(f,c,d,!1,null,null,null),A=C.exports;v()(C,"components",{QBtn:g["a"],QIcon:O["a"],QDialog:y["a"],QCard:_["a"],QCardSection:q["a"],QInput:j["a"],QSpinnerGears:x["a"]});var E=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("q-btn",{staticClass:"bg-light-blue-14 text-white full-width q-pa-xs q-pl-none q-pr-none",attrs:{push:"",stack:""},on:{click:function(t){e.newWalletDialog=!0}}},[s("q-icon",{staticClass:"text-white",attrs:{name:"visibility",size:"1.4rem"}}),s("div",{staticClass:"text-width-medium",staticStyle:{"font-size":"0.6rem","white-space":"nowrap"}},[e._v(e._s(e.$t("Add observer")))])],1),s("q-dialog",{attrs:{"transition-show":"scale","transition-hide":"scale"},model:{value:e.newWalletDialog,callback:function(t){e.newWalletDialog=t},expression:"newWalletDialog"}},[s("q-card",{staticClass:"dialog-min300"},[s("form",{attrs:{autocorrect:"off",autocapitalize:"off",autocomplete:"off",spellcheck:"false"},on:{submit:function(t){return t.preventDefault(),t.stopPropagation(),e.saveNewObserver(t)}}},[s("q-card-section",{staticClass:"q-gutter-md"},[s("div",{staticClass:"text-h6"},[e._v(e._s(e.$t("Add observer")))]),s("q-input",{attrs:{outlined:"",clearable:"",spellcheck:"false",label:e.$t("Title"),hint:e.$t("Optional")},model:{value:e.newTitle,callback:function(t){e.newTitle=t},expression:"newTitle"}}),s("q-input",{attrs:{outlined:"",clearable:"",spellcheck:"false",autogrow:"",label:e.$t("Address"),error:e.newAddressIsError,"error-message":e.newAddressErrorMsg},model:{value:e.newAddress,callback:function(t){e.newAddress=t},expression:"newAddress"}}),s("div",[s("q-btn",{staticClass:"full-width",attrs:{type:"submit",label:e.$t("Add wallet"),color:"primary",disabled:!e.newAddress||!e.newAddress.length}})],1)],1)],1)])],1)],1)},P=[];function W(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,r)}return s}function S(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?W(Object(s),!0).forEach((function(t){l()(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):W(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var $={name:"AddObserver",data:function(){return{newWalletDialog:!1,newTitle:null,newAddress:null,newAddressIsError:null,newAddressErrorMsg:null}},methods:{saveNewObserver:function(){if("Mx"===Object(o["a"])(this.newAddress)){var e={address:this.newAddress,icon:null,title:"Observer"},t=this.findWallet(e.address),s=this.findObserver(e.address);if(t&&t.address||s&&s.address)this.newAddressIsError=!0,this.newAddressErrorMsg=this.$t("This wallet already exists");else{var r=this.findProfile(e.address);e.title=this.newTitle||(r?r.title:"")||(this.observerSelect.length?this.observerSelect.length+1+" observer":"Observer"),e.icon=r?r.icon:"",this.newWalletDialog=!1,this.$store.dispatch("SAVE_OBSERVER",e),this.$router.push({path:"/wallet/"+e.address})}}else this.newAddressIsError=!0,this.newAddressErrorMsg="Invalid adress"}},computed:S({},Object(i["c"])({address:function(e){return e.wallet.address}}),{},Object(i["b"])(["walletsSelect","observerSelect","findWallet","findObserver","findProfile"])),watch:{newWalletDialog:function(){this.newMnemonic=null,this.newTitle=null},newMnemonic:function(e){var t=this;setTimeout((function(){t.newMnemonicIsError=!1,t.generateWalletLoading=!1}),200)}}},D=$,k=Object(m["a"])(D,E,P,!1,null,null,null),M=k.exports;v()(k,"components",{QBtn:g["a"],QIcon:O["a"],QDialog:y["a"],QCard:_["a"],QCardSection:q["a"],QInput:j["a"]});var I=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""},on:{click:function(t){return e.selectWallet(e.wallet.address)}}},[s("q-item-section",{staticClass:"q-ml-none",attrs:{top:"",avatar:""}},[s("q-avatar",{attrs:{"text-color":"green",rounded:""}},["observer"===e.type||e.wallet.privateKey?"observer"!==e.type&&e.wallet.address===e.activeAddress?s("q-icon",{staticClass:"wallet__active-icon",attrs:{name:"radio_button_checked",color:"green",size:"0.9rem"}}):"observer"!==e.type?s("q-icon",{staticClass:"wallet__active-icon",attrs:{name:"radio_button_unchecked",color:"grey",size:"0.9rem"}}):e._e():s("q-icon",{staticClass:"wallet__active-icon",attrs:{name:"lock",color:"red",size:"0.9rem"}}),e.wallet.icon?s("q-img",{staticStyle:{height:"40px"},attrs:{src:e.wallet.icon,"spinner-color":"primary","spinner-size":"sm"},scopedSlots:e._u([{key:"error",fn:function(){return[s("div",{staticClass:"avatar__text text-white bg-primary"},[e._v(e._s(e.wallet.title[0]))])]},proxy:!0}],null,!1,1804216258)}):s("q-icon",{attrs:{name:"person",color:"grey",size:"2rem"}})],1)],1),s("q-item-section",[s("q-item-label",{attrs:{lines:"1"},domProps:{innerHTML:e._s(e.wallet.label)}}),s("q-item-label",{attrs:{caption:"",lines:"1"}},[e._v(e._s(e.wallet.caption))])],1),s("q-item-section",{attrs:{side:""}},[e.value?s("b",{staticClass:"text-grey-10",domProps:{innerHTML:e._s(e.value+" BIP")}}):e.wallet.balance?s("b",{staticClass:"text-grey-10",domProps:{innerHTML:e._s(e.wallet.balance+" BIP")}}):s("q-spinner-rings",{attrs:{size:"2em"}})],1)],1)},T=[],Q=s("967e"),L=s.n(Q),z=(s("96cf"),s("fa84")),B=s.n(z);function N(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,r)}return s}function H(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?N(Object(s),!0).forEach((function(t){l()(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):N(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var F={name:"WalletItem",props:{wallet:Object,type:String},data:function(){return{value:null}},created:function(){var e=this;return B()(L.a.mark((function t(){var s;return L.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("FETCH_BALANCE_ADDRESS",e.wallet.address);case 2:s=t.sent,e.value=Object(o["d"])(s.total_balance_sum,2,!0);case 4:case"end":return t.stop()}}),t)})))()},methods:{selectWallet:function(e){"observer"===this.type?this.$router.push({path:"/wallet/"+e}):(this.$store.commit("SET_WALLET",e),this.$store.dispatch("FETCH_BALANCE"),this.$store.dispatch("FETCH_DELEGATION"),this.$router.push({path:"/wallet"}))}},computed:H({},Object(i["c"])({activeAddress:function(e){return e.wallet.address}}))},R=F,G=s("66e5"),K=s("4074"),V=s("cb32"),J=s("068f"),U=s("0170"),X=s("792f"),Y=s("714f"),Z=Object(m["a"])(R,I,T,!1,null,null,null),ee=Z.exports;function te(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,r)}return s}function se(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?te(Object(s),!0).forEach((function(t){l()(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):te(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}v()(Z,"components",{QItem:G["a"],QItemSection:K["a"],QAvatar:V["a"],QIcon:O["a"],QImg:J["a"],QItemLabel:U["a"],QSpinnerRings:X["a"]}),v()(Z,"directives",{Ripple:Y["a"]});var re={name:"Index",components:{AddWallet:A,AddObserver:M,WalletItem:ee},data:function(){return{language:this.$i18n.locale,qrAddress:!1,currentWallet:null,newObserverDialog:!1,newObserverAddress:null}},created:function(){this.currentWallet=this.findWallet(this.address)},methods:{saveNewObserver:function(){},prettyNumber:function(e,t){return Object(o["d"])(e,t)},copyAddress:function(){var e=this;navigator.clipboard.writeText(this.address).then((function(){e.$q.notify({message:e.$t("Address copied"),color:"purple",position:"bottom",timeout:300})})).catch((function(){}))}},computed:se({},Object(i["c"])({address:function(e){return e.wallet.address},wallets:function(e){return e.wallet.wallets},observer:function(e){return e.wallet.observer},balance:function(e){return e.api.balance}}),{},Object(i["b"])(["balanceSum","balanceCustom","walletsSelect","totalWalletsBip","totalObserversBip","observerSelect","findWallet","isAuth"]))},ae=re,ne=s("9989"),le=s("1c1c"),ie=Object(m["a"])(ae,r,a,!1,null,null,null);t["default"]=ie.exports;v()(ie,"components",{QPage:ne["a"],QItemLabel:U["a"],QCard:_["a"],QList:le["a"],QBtn:g["a"],QIcon:O["a"]})}}]);