import { createRouter, createWebHistory } from "vue-router";
import GraphicDesign from '../views/graphicDesign/GraphicDesign';
import Uiux from '../views/Uiux';
import UiuxDetail from '../views/UiuxDetail';
import Experience from '../views/Experience';
import Intro from '../views/Intro';

const routes =[
    {
        path:'/',
        name:'Intro',
        component:Intro
    },
    {
        path:'/GraphicDesign',
        name:'GraphicDesign',
        component: GraphicDesign
    },
    {
        path:'/Uiux',
        name:'Uiux',
        component: Uiux,
    },
    {
        path:'/Uiux/:id',
        name:'UiuxDetail',
        component: UiuxDetail,
    },
    {
        path:'/Experience',
        name:'Experience',
        component: Experience,
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router