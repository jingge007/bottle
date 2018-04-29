// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible'        // 移动端适配
import Vant from 'vant'
import 'vant/lib/vant-css/index.css'
import 'common/stylus/index.styl'  // 引入样式表
import 'common/iconfont.css'       // 字体图标的css

Vue.use(Vant)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
