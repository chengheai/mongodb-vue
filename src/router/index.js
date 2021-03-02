import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      redirect: "/login"
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("@/views/Login")
    },
    {
      path: "/list",
      name: "List",
      component: () => import("@/views/List")
    },
    {
      path: "/league/:name",
      name: "Detail",
      component: () => import("@/views/Detail")
    }
  ]
});

export default router;
