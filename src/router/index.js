import Vue from 'vue'
import Router from 'vue-router'
import index from 'components/index/index.vue'
import findbottle from 'components/findbottle/findbottle.vue'
import newsbottle from 'components/newsbottle/newsbottle.vue'
import mybottle from 'components/mybottle/mybottle.vue'
import ranking from 'components/ranking/ranking.vue'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  mode: 'history',
  routes: [
    {path: '/', redirect: '/index', component: index},
    {path: '/index', component: index},
    {path: '/findbottle', component: findbottle},
    {path: '/newsbottle', component: newsbottle},
    {path: '/mybottle', component: mybottle},
    {path: '/ranking', component: ranking}
  ]
})
