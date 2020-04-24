import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/home.vue'
import covid from '../components/covid.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/covid',
    name: 'covid',
    component: covid,
    props: true,
    beforeEnter: (to, from, next) => {
      if(to.params.updatename) {
        next()
      }else {
        next({name:'Home'})
      }
    }
  },
] 


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
