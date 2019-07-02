// import HelloWorld from '@/components/HelloWorld'
import index from '@/pages/index'
import test from '@/pages/test'
import login from '@/pages/login'
import gradeUser from '@/pages/user/grade'
import indexStore from '@/pages/store/index'
import register from '@/pages/register'
import navTest from '@/pages/navTest'
import UserInfo from '@/components/user/UserInfo'

let routes = [
  {
    path: '/navTest',
    name: 'navTest',
    meta: {
      auth: false
    },
    component: navTest
  },
  {
    path: '/index',
    name: 'index',
    meta: {
      auth: false
    },
    component: index,
    children: [
      {
        path: '/test',
        name: 'test',
        component: test
      },
      {
        path: '/user/userInfo',
        component: UserInfo
      },
      {
        path: '/user/grade',
        component: gradeUser
      },
      {
        path: '/store',
        component: indexStore
      }

    ]
  },
  {
    path: '/user',
    component: index,

    children: [

    ]
  },
  {
    path: '/login',
    name: 'login',
    component: login

  },
  {
    path: '/register',
    name: 'register',
    component: register
  },

  {
    path: '/*',
    component: index
  }
]

export default routes
