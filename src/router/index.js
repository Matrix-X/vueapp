import Vue from 'vue'
import Router from 'vue-router'
import Test from '@/components/Test'
import Users from '@/components/Users'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
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
    {
      path: '/test',
      name: 'Test',
      component: Test,
      props: { msg: "Hello Prop" }
    },
  ]
})
