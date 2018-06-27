import Vuex from 'vuex'
import {
  LOADING,
  INIT,
  SEL_FAVORITE,
  ADD_FAVORITE,
  DEL_FAVORITE
} from './types'
import db from '~/plugins/firebaseInit'
// dbはプラグイン化しました

const itemRef = db.collection('items')
const favRef = db.collection('favorite')

// myPluginはストアが初期化されたときに呼ばれます
// 第二引数はactionに渡ります INIT, 'hoge' みたいな
const myPlugin = store => store.dispatch(INIT)

const store = () =>
  new Vuex.Store({
    state: {
      loading: true,
      itemList: [],
      favoriteList: []
    },
    mutations: {
      [LOADING](state, isLoading) {
        state.loading = isLoading
      },
      [INIT](state, data) {
        state.itemList = data
      },
      [SEL_FAVORITE](state, data) {
        state.favoriteList = data
      }
    },
    actions: {
      [INIT]({ commit }) {
        // commit('LOADING', true)
        itemRef.get().then(res => {
          let list = []
          res.forEach(doc => {
            let data = {
              id: doc.id,
              url: doc.data().url,
              name: doc.data().name,
              description: doc.data().description
            }
            list.push(data)
          })
          commit('INIT', list)

          favRef.get().then(favRes => {
            let favList = []
            favRes.forEach(doc => {
              let data = {
                id: doc.id,
                favorite: doc.data().addFlg
              }
              favList.push(data)
            })
            commit('SEL_FAVORITE', favList)
          })
          //loading finish
          commit('LOADING', false)
        })
      },
      [ADD_FAVORITE]({ commit }, id) {
        console.log('add_fav action start')
        console.log(id)
        favRef
          .doc(id)
          .update({
            addFlg: true
          })
          .then(function() {})
        //必要ないけど一旦
        commit('LOADING', false)
      },
      [DEL_FAVORITE]({ commit }, id) {
        console.log('del_fav action start')
        console.log(id)
        favRef
          .doc(id)
          .update({
            addFlg: false
          })
          .then(function() {})
        //必要ないけど一旦
        commit('LOADING', false)
      }
    },
    getters: {
      getItems: state => {
        return state.itemList
      },
      //引数ありの場合
      getFavoriteData: state => id => {
        let data = state.favoriteList.find(data => data.id === id)
        if (data) {
          return data['favorite']
        }
      }
    },
    plugins: [myPlugin]
  })

export default store
