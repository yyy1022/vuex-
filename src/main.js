
import App from './App.vue'
import Vue from 'vue'
import store from './store'
import Antd from 'ant-design-vue';
Vue.use(Antd);
import 'ant-design-vue/dist/antd.css'; // or 'ant-design-vue/dist/antd.less' npm install ant-design-vue --save
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
