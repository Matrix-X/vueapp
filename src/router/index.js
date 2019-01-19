import Vue from 'vue'
import Router from 'vue-router'
import Test from '@/components/Test'
import Users from '@/components/Users'
import AttributeBinding from '@/components/AttributeBinding'
import Computed from '@/components/computed'
import Components from '@/components/Components'
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
      props: {  }
    },
    {
      path: '/attributeBinding',
      name: 'AttributeBinding',
      component: AttributeBinding,
      props: { msg: "Hello Prop" }
    },
    {
      path: '/computed',
      name: 'Computed',
      component: Computed,
      props: {  }
    },
    {
      path: '/components',
      name: 'Components',
      component: Components,
      props: {  }
    }
  ]
})
