import Vue from 'vue'
import VueResource from 'vue-resource'
import Router from 'vue-router'
import Test from '@/components/Test'
import Users from '@/components/Users'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)
Vue.use(VueResource)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
    {
      path: '/',
      name: 'Users',
      component: Users
    },
    // {
    //   path: '/',
    //   name: 'Test',
    //   component: Test,
    //   props: { msg: "Hello Prop" }
    // },
  ]
})
