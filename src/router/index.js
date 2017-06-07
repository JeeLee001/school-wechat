import Vue from 'vue'
import Router from 'vue-router'

import PagesView from '../views/PagesView'
import RegisterView from '../views/RegisterView'
import HomeView from '../views/HomeView'
import TeacherView from '../views/TeacherView'
import ChildView from '../views/ChildView'
import TeachView from '../views/TeachView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/pages/'
    },
    {
      path: '/pages',
      component: PagesView,
      children: [
        {
          path: '',
          redirect: '/pages/register'
        },
        {
          path: 'register',
          name: 'RegisterView',
          component: RegisterView
        },
        {
          path: 'home',
          name: 'homeView',
          component: HomeView
        },
        {
          path: 'teacher',
          name: 'TeacherView',
          component: TeacherView
        },
        {
          path: 'child',
          name: 'ChildView',
          component: ChildView
        },
        {
          path: 'teach',
          name: 'TeachView',
          component: TeachView
        }
      ]
    },
    {
      path: '*',
      redirect: '/pages/'
    }
  ]
})
