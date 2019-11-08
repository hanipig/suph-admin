import { getMenuByRouter, localSave, routeHasExist, routeEqual, localRead, getHomeRoute } from '@/util'
import routers from '@/router/routers'
const state = {
  munuList: [],
  tagNavList: []
}
const mutations = {
  SET_MENULIST: state => {
    state.menuList = getMenuByRouter(routers, [])
  },
  ADD_TAGNAVLIST: (state, router) => {
    state.tagNavList.push(router)
    localSave('tagNavList', state.tagNavList)
  },
  SET_TAGNAVLIST: (state, tagNavList) => {
    state.tagNavList = tagNavList
    localSave('tagNavList', state.tagNavList)
  },
  DEL_TAGNAVLIST: (state, router) => {
    state.tagNavList = state.tagNavList.filter(item => {
      return !routeEqual(item, router)
    })
    localSave('tagNavList', state.tagNavList)
  },
  SET_HOMEROUTE (state) {
    if (localRead('tagNavList') === '') {
      state.tagNavList.push(getHomeRoute(routers, 'home'))
      localSave('tagNavList', state.tagNavList)
      console.log('test')
    } else {
      state.tagNavList = JSON.parse(localRead('tagNavList'))
      console.log('test')
    }
  }
}
const actions = {
  setMenuList ({ commit }) {
    commit('SET_MENULIST')
  },
  addTagNavList ({ commit }, router) {
    if (!routeHasExist(state.tagNavList, router)) {
      commit('ADD_TAGNAVLIST', router)
    }
  },
  setTagNavList ({ commit }, tagNavList) {
    commit('SET_TAGNAVLIST', tagNavList)
  },
  delTagNavList ({ commit }, router) {
    commit('DEL_TAGNAVLIST', router)
  },
  setHomeRoute ({ commit }) {
    commit('SET_HOMEROUTE')
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}