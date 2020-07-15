import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [

    {
      path: '/',
      component: () => import( '../views/Home.vue')
    },
    {
      path: '/login',
      component: () => import('../views/Login.vue'),
      meta: { title: '登录' }
    },
    {
      path: '*',
      component: {
        template:'<p>404</p>'
      },
      meta: { title: '404' }
    }
  ]
});
