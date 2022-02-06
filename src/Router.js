import { createRouter, createWebHistory } from 'vue-router'

import Home from './pages/home.vue'
import Search from './pages/search.vue'
import News from './pages/news.vue'
import Detail from './pages/detail'

const routes = [{
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
        component: Detail
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router