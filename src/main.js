import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Todos from './components/Todos.vue'
import HelloWorld from './components/HelloWorld.vue'


Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  { path: '/todos', component: Todos },
  { path: '/', component: HelloWorld }

]

const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
