import { createRouter, createWebHistory } from 'vue-router'

import Home from './pages/home.vue';
import Search from './pages/search.vue';
import News from './pages/news.vue'

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/search',
        component: Search
    },
    {
        path: '/news',
        component: News
    },
    {
        path: '/edit/:id',
        component: News
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router
