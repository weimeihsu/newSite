import { createRouter, createWebHistory } from "vue-router";
import GraphicDesign from '../views/GraphicDesign'
import UIUX from '../views/UIUX'
import Experience from '../views/Experience'

const routes =[
    {
        path:'/GraphicDesign',
        name:'GraphicDesign',
        component: GraphicDesign
    },
    {
        path:'/UIUX',
        name:'UIUX',
        component: UIUX
    },
    {
        path:'/Experience',
        name:'Experience',
        component: Experience
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router