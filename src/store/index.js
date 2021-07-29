import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    count: 0,
    sum: 2
  },
  mutations: {
    // 不能写异步操作
    add(state) {
      state.count++

      // setTimeout(()=>{
      //   state.count++
      //
      // },1000)
    },
    addN(state, step) {
      state.count += step
    },
    sub(state) {
      state.count--
    },
    subN(state, step) {
      state.count -= step
    }
  },
  actions: {
    //处理异步任务
    addAsync(context) {
      setTimeout(() => {
        // 在actions不能直接修改stste中的值，需要修改mutations
        context.commit('add')
      }, 100)
    },
    addNAsync(context, step) {
      setTimeout(() => {
        // 在actions不能直接修改stste中的值，需要修改mutations
        context.commit('addN', step)
      }, 100)
    },
    subAsync(content) {
      setTimeout(() => {
        // 在actions不能直接修改stste中的值，需要修改mutations
        content.commit('sub')
      }, 100)
    },
    subNAsync(content,step) {
      setTimeout(() => {
        // 在actions不能直接修改stste中的值，需要修改mutations
        content.commit('subN',step)
      }, 100)
    }
  },
  modules: {}
})
// mutation 用于修改store中的值，不可以直接操作store中的值
