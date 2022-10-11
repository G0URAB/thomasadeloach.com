import {createWebHistory, createRouter, createWebHashHistory} from "vue-router";
import About from './components/About'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Episodes from './components/Episodes'

const routes = [
    {
        path: '/',
        name: 'About',
        component: About
    },
    {
        path: '/episodes',
        name: 'Episodes',
        component: Episodes
    },
    {
        path: '/blog',
        name: 'Blog',
        component: Blog
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
