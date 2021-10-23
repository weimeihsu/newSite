import { createRouter, createWebHistory } from "vue-router";
import GraphicDesign from '../views/graphicDesign/GraphicDesign'
import UIUX from '../views/UIUX'
import ProjectA from '../views/ProjectA'
import Experience from '../views/Experience'
import Intro from '../views/Intro'

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
        path:'/UIUX/:id',
        //name:'UIUX',
        component: UIUX,
        children:[
            {
                path:'',
                name:'ProjectA',
                component: ProjectA
            }
        ]
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