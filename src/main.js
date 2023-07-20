import Vue from 'vue'//引入vue文件包
import App from './App.vue'//引入app组件
import router from './router'
import store from './store'
import ElementUI from 'element-ui';//引入element ui
import 'element-ui/lib/theme-chalk/index.css';//引入样式
Vue.use(ElementUI);//注册element ui
Vue.config.productionTip = false

new Vue({
  router,//router：router  根路由实列
  store,//同上
  render: h => h(App)//挂载
}).$mount('#app')
