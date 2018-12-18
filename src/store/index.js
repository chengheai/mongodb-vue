/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'

// import * as actions from './actions'
// import * as getters from './getters'
// import * as mutations from './mutations'


// import menu from './module/menu'
// import users from './module/users'
// import status from './module/status'
Vue.use(Vuex)

export const store = new Vuex.Store({
  // menu,
  // users,
  // status

  state
  :{
    // 设置属性
    currentUser: null,
    isLogin:false
  }
  ,
  getters
  :{
    // 获取属性的状态   //  function getMenuItems (state){ return state.menuItems }
    currentUser:state => state.currentUser,
    isLogin:state => state.isLogin,
  }
  ,
  mutations
  :{
    // 改变属性的状态
    // 更改用户的状态信息
    userStatus(state,user){
      if(user){
        state.currentUser = user
        state.isLogin = true
      }else{
        state.currentUser = null
        state.isLogin = false
      }
    }
  }
  ,
  actions
  :{
    // 应用 mutations
    setUser({commit}, user){
      commit('userStatus', user)
    }
  }
})
