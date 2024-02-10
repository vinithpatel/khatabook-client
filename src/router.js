import { createRouter, createWebHistory } from "vue-router";

import HelloWorld from "./components/HelloWorld.vue"
import BlogVue from "./components/BlogVue.vue"


const router = createRouter({
    history:createWebHistory(),
    routes: [
        {
            name:'Blog',
            path:'/blog', component:BlogVue,
        },

        {
            name:"App",
            path:'/', component:HelloWorld,
        }
    ]
})

export default router