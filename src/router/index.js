import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/readme',
      component: resolve => require(['../components/common/Home.vue'], resolve),
      children: [
        {
          path: '/',
          component: resolve => require(['../components/page/Readme.vue'], resolve)
        }
      ]
    },
    {
      path: '/login',
      component: resolve => require(['../components/page/Login.vue'], resolve)
    },
    {
      path: '/register',
      component: resolve => require(['../components/page/Register.vue'], resolve)
    },
    {
      path: '/register-success',
      component: resolve => require(['../components/page/RegisterSuccess.vue'], resolve)
    }
  ]
})
