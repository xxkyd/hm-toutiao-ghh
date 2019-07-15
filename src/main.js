import Vue from 'vue'
import App from './App.vue'

// 导入包
import ElementUI from 'element-ui'
// 导入样式
import 'element-ui/lib/theme-chalk/index.css'
import router from '@/router'
// 注册到VUE实例
Vue.use(ElementUI)
Vue.use(router)
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
