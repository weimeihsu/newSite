import { createRouter, createWebHistory } from 'vue-router'
import Uiux from '../views/Uiux'
import Experience from '../views/Experience'
import Intro from '../views/Intro'
import More from '../views/More'
import GraphicWeb from '../views/GraphicWeb'
import UiuxRetired from '../views/UiuxRetired'
import Prototype from '../views/Prototype'

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
    path: '/Prototype',
    name: 'Prototype',
    component: Prototype
  },
  {
    path: '/UiuxRetired/:id',
    name: 'UiuxRetired',
    component: UiuxRetired
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
