import {createRouter, createWebHistory} from 'vue-router'
import Home from 'views/Home'


const routes = [
    {path: '/', component: Home},
    // {path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound, props: true},
]

const router = createRouter({
    history: createWebHistory(),
    linkExactActiveClass: 'active',
    linkActiveClass: 'active',
    routes
})


export default router