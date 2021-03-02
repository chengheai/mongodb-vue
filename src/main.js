import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios';
// 引入element组件化框架
import ElementUI from 'element-ui';
// 引入样式文件
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false;
Vue.prototype.axios = axios;

Vue.use(ElementUI);
// // 全局守卫
router.beforeEach((to, from, next) => {
  //   // alert('还没有登录，请先登录');
  //   // next();
  //   console.log('to:',to)

  // 判断store.getters.isLogin === false
  console.log(store.getters.isLogin === false);
  if (to.path === '/login') {
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
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
