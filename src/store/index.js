import Vuex from 'vuex'
import { LOADING, INIT, SEL_FAVORITE } from './types'
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
            console.log(favList)
            commit('SEL_FAVORITE', favList)
          })
          //loading finish
          commit('LOADING', false)
        })
      }
      // ,
      // [SEL_FAVORITE]({ commit }) {
      //   console.log('sel_fav action start')
      //   favRef.get().then(res => {
      //     let list = []
      //     res.forEach(doc => {
      //       console.log(doc.data())
      //       let data = {
      //         id: doc.id,
      //         favorite: doc.data().addFlg
      //       }
      //       list.push(data)
      //     })
      //     commit('SEL_FAVORITE', list)
      //   })
      // }
    },
    getters: {
      getItems: state => state.itemList
      //引数ありの場合
      // getItems: state => h => {
      //   console.log(h)
      //   state.itemList
      // }
    },
    plugins: [myPlugin]
  })

export default store
