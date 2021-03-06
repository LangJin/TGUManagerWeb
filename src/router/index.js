import Vue from 'vue'
import Router from 'vue-router'
import {isCookie} from '../utils/cookie'

Vue.use(Router)

const router =  new Router({
  mode: 'history',
  routes: [
    // {
    //   path:'/',
    //   meta:{title:"首页",requireAuth:true}
    // },
    {
      path: '/',
      component: () => import('../components/layout/Home.vue'),
      meta: { title: '主页' ,requireAuth:true},
      children:[
        {
          path:"/dashboard",
          component: () => import( '../views/Dashboard.vue'),
          name:"Dashboard",
          meta:{
            requireAuth:true,  //添加该字段，表示进入这个路由是需要登录的
            title:"主页"
          }
        },
        {
          path:"/a",
          component: () => import( '../views/A.vue'),
          name:"A",
          meta:{
            requireAuth:true,  //添加该字段，表示进入这个路由是需要登录的
            title:"A"
          }
        },
        {
          path:"/b",
          component: () => import( '../views/B.vue'),
          name:"B",
          meta:{
            requireAuth:true,  //添加该字段，表示进入这个路由是需要登录的
            title:"B"
          }
        },
        {
          path:"/c",
          component: () => import( '../views/C.vue'),
          name:"C",
          meta:{
            requireAuth:true,  //添加该字段，表示进入这个路由是需要登录的
            title:"C"
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
      document.title = `${to.meta.title} | 后台管理系统`;
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
      
// https://www.jianshu.com/p/6fbb009c45c4
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router;