import Vuex from 'vuex'
import { LOADING, INIT } from './types'
import db from '~/plugins/firebaseInit'
// dbはプラグイン化しました

const skillRef = db.collection('skills')

const myPlugin = store => store.dispatch(INIT)

const store = () =>
  new Vuex.Store({
    state: {
      loading: true,
      frontData: [],
      serverData: []
    },
    mutations: {
      [LOADING](state, isLoading) {
        state.loading = isLoading
      },
      [INIT](state, data) {
        state.frontData = data
      }
    },
    actions: {
      [INIT]({ commit }) {
        commit('LOADING', true)

        skillRef
          .orderBy('name')
          .get()
          .then(res => {
            let list = []
            res.forEach(doc => {
              let data = {
                id: doc.id,
                name: doc.data().name,
                color: doc.data().color,
                ratio: doc.data().ratio
              }
              list.push(data)
            })
            commit('INIT', list)

            //loading finish
            commit('LOADING', false)
          })
      }
    },
    getters: {
      getSkill: state => {
        return state.frontData
      }
      //引数ありの場合
      // getFavoriteData: state => id => {
      //   let data = state.favoriteList.find(data => data.id === id)
      //   if (data) {
      //     return data['favorite']
      //   }
      // }
    },
    plugins: [myPlugin]
  })

export default store
