// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import VueResource from 'vue-resource';
import axios from 'axios';
import { store } from './store';
// 引入element组件化框架
import ElementUI from 'element-ui';
// 引入样式文件
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false;
Vue.prototype.http = axios;

Vue.use(ElementUI);
Vue.use(VueResource);
// // 全局守卫
router.beforeEach((to, from, next) => {
  //   // alert('还没有登录，请先登录');
  //   // next();
  //   console.log('to:',to)

  // 判断store.getters.isLogin === false
  console.log(store.getters.isLogin === false);
  if (to.path == '/login') {
    next();
  } else if (store.getters.isLogin === true) {
    next();
  } else {
    ElementUI.Message({
      message: '大哥，你还没有登录哦，请先登录！',
      type: 'warning'
    });
    // { 当接口不能调通时：选用 }
    next('/login');
  }
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
