import Vue from 'vue'
import Vuex from 'vuex'//引入vuex
Vue.use(Vuex)

// 初始化一个仓库
export default new Vuex.Store({
  state: {
    manager: {
      name: "",
      address: "",
      time: "",
      ID: ""
    }
  },
  mutations: {
    setData(state, row) {
      state.manager.name = row.name;
      state.manager.address = row.address;
      state.manager.time = row.time;
      state.manager.ID = row.ID;
    }
  },
  actions: {

  }
})
