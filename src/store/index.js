import Vue from 'vue'
import Vuex from 'vuex'

import createPersistedState from 'vuex-persistedstate'
import * as app from './modules/app'
import * as api from './modules/api'
import * as wallet from './modules/wallet'
import * as user from './modules/user'
// import request from './modules/request'
import * as contacts from './modules/contacts'

Vue.use(Vuex)

export default (/* { ssrContext } */) => {
  const Store = new Vuex.Store({
    modules: {
      app,
      api,
      wallet,
      user,
      // request,
      contacts,
    },
    plugins: [createPersistedState()],

    strict: !!process.env.DEV,
  })

  window.setInterval(() => {
    try {
      Store.state.wallet.wallets.forEach(it => {
        if (it.privateKey.startsWith('0x')) {
          it.privateKey = it.privateKey.slice(2)
          console.log('migrating wallet')
        }
      })
    } catch (err) {
      console.log('failed to migrate wallets')
    }
  }, 1000)

  console.log('store v. 1.2')

  window.store = Store

  return Store
}
