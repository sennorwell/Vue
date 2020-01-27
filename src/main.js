/*
 * 当项目的ES6语法没有转为ES5
 * 全局的加载ES6模块
 * import '@babel/polyfill'
 */
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');