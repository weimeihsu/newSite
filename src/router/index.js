import { createRouter, createWebHistory } from 'vue-router'
import Uiux from '../views/Uiux'
import Experience from '../views/Experience'
import Intro from '../views/Intro'
import More from '../views/More'
import GraphicWeb from '../views/GraphicWeb'

const routes = [
  {
    path: '/',
    name: 'Intro',
    component: Intro
  },
  {
    path: '/GraphicWeb',
    name: 'GraphicWeb',
    component: GraphicWeb
  },
  {
    path: '/Uiux',
    name: 'Uiux',
    component: Uiux
  },
  {
    path: '/More',
    name: 'More',
    component: More
  },
  {
    path: '/Experience',
    name: 'Experience',
    component: Experience
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
