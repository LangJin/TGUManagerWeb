import Vue from 'vue'
import Router from 'vue-router'
import {isCookie} from '../utils/cookie'

Vue.use(Router)

const router =  new Router({
  mode: 'history',
  routes: [

    {
      path: '/',
      redirect:"/home",
      children:[
        {
          path:"/home",
          component: () => import( '../views/Home.vue'),
          name:"Home",
          meta:{
            requireAuth:true,  //添加该字段，表示进入这个路由是需要登录的
            title:"主页"
          }
        }
    ]
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

//路由拦截器
router.beforeEach((to, from, next) => {
  　　//根据字段判断是否路由过滤
  　　if(to.meta.requireAuth) { // 判断该路由是否需要登录权限
  　　　　if(isCookie('token')) { //身份信息获取
  　　　　　　next();
  　　　　} else {
  　　　　　　next({
  　　　　　　　　path: '/login'
  　　　　　　})
  　　　　}
  　　}else {
      　　　　next();
      　　}
  
      /* 如果本地存在token,则不允许直接跳转到登录页面 */
      if (to.fullPath === '/login') {
        if (isCookie('token')) {
          next({
            path: from.fullPath
          })
        } else {
          next()
        }
}});
      

export default router;