import {createWebHistory, createRouter, createWebHashHistory} from "vue-router";
import About from './components/About'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Episodes from './components/Episodes'
import Home from './components/Home'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About,
        meta: {
            title: 'About Me'
        }
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
