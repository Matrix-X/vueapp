import Vue from 'vue'
import Router from 'vue-router'
import Test from '@/components/Test'
import Users from '@/components/Users'
import AttributeBinding from '@/components/AttributeBinding'
import Computed from '@/components/computed'
import Components from '@/components/Components'
import Message from '@/components/Message'
import ExeciseModal from '@/components/ExeciseModal'
import ExeciseTabs from '@/components/ExeciseTabs'
import ExeciseEvents from '@/components/ExeciseEvents'
import ExeciseSlot from '@/components/ExeciseSlot'
import ExeciseInlineTemplate from '@/components/ExeciseInlineTemplate'
import ExeciseAjax from '@/components/ExeciseAjax'
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
    },
    {
      path: '/message',
      name: 'Message',
      component: Message,
      props: {  }
    },
    {
      path: '/modal',
      name: 'Modal',
      component: ExeciseModal,
      props: {  }
    },
    {
      path: '/tabs',
      name: 'Tabs',
      component: ExeciseTabs,
      props: {  }
    },
    {
      path: '/events',
      name: 'Events',
      component: ExeciseEvents,
      props: {  }
    },
    {
      path: '/slot',
      name: 'Slot',
      component: ExeciseSlot,
      props: {  }
    },
    {
      path: '/inlineTemplate',
      name: 'InlineTemplate',
      component: ExeciseInlineTemplate,
      props: {  }
    },
    {
      path: '/ajax',
      name: 'Ajax',
      component: ExeciseAjax,
      props: {  }
    }
  ]
})
