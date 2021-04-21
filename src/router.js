const { createRouter, createWebHistory } = require("vue-router");
import Home from './views/Home.vue'
import About from './views/About.vue'
import Contact from './views/Contact.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/about',
            name: 'About',
            component: About
        },
        {
            path: '/contact',
            name: 'Contact',
            component: Contact
        }
    ]
})

export default router