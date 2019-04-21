import Vue from 'vue'
import ElementUI from 'element-ui'
import './assets/less/element-variable.scss'
import './assets/less/index.less'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
Vue.use(ElementUI, {size: 'small'})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
