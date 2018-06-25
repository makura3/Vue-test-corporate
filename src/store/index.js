import Vuex from 'vuex'
import { firebaseMutations, firebaseAction } from 'vuexfire'
// https://github.com/vuejs/vuefire/tree/firestore
import { INIT } from './types'
import db from '~/plugins/firebaseInit'
// vuex は Nuxt.js によって取り込まれているため、別途インストールする必要はありません。
// dbはプラグイン化

//参考 https://github.com/frost-star/vuextodo/blob/1.0.0/src/vuex/store.js

const itemRef = db.collection('items')

// myPluginはストアが初期化されたときに呼ばれます
// 第二引数はactionに渡ります INIT, 'hoge' みたいな
const myPlugin = store => store.dispatch(INIT)

const store = () =>
  new Vuex.Store({
    state: {
      itemList: ['a']
    },
    mutations: {
      ...firebaseMutations
    },
    actions: {
      INIT: firebaseAction(({ bindFirebaseRef }) => {
        console.log('init action')
        itemRef.get().then(e => {
          bindFirebaseRef('questions', e.doc)
        })
        // console.log('init action')
        // bindFirebaseRef('itemList', itemRef)
      })
    },
    getters: {
      getItems: state => state.itemList
    },
    plugins: [myPlugin]
  })

export default store
