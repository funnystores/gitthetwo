

import Vue from 'vue'
import VueRouter from 'vue-router'//引入路由总文件包
// import MyHome from '../views/MyHome'//路由对象引入（手写的视图）
// import MyAout from '../views/MyAout'
// import MyLogoin from '../views/MyLogoin'
Vue.use(VueRouter)//路由无法直接使用，必须先注册再使用。 vue.use()注册组件

//路由配置项：即那个路径对应哪个视图

const routes = [
  {
    path:'/',//代表默认路由的路径
    
    component:()=>import("../views/MyHome"),
   
  },
  {
    path:"*",
    component:()=>import("../views/NotFound")
  }
  
  
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

//创建了一个路由实列对象
const router = new VueRouter({
  routes//routes:routest(es6的写法)
})

//   全局前置守卫
// let flag=false;
// router.beforeEach((to,from,next)=>{
//   if(flag){
//     next()
//   }else{
//     if(to.path=="/login"){
//       next()
//     }else{
//       next("/login")
//     }
//   }
// })
export default router
