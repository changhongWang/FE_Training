import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Veevalidate, { Validator } from 'vee-validate';
// 方法1
// import zh from 'vee-validate/dist/locale/zh_CN';

// 方法2 定制化
import './local/index.js';

Vue.use(Veevalidate);
// Validator.localize('zh_CN', zh);

// 方法2 定制化
const validator = new Validator();
validator.localize('zh-CN');

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
