import './bootstrap';
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue'
import Landing from './components/Landing.vue'
import Home from './components/Home.vue'
import SendMessage from './components/SendMessage.vue'
import NotFound from './components/NotFound.vue'
import Login from './components/auth/Login.vue'
import Register from './components/auth/Register.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Landing',
            component: Landing,
        },
        {
            path: '/login',
            name: 'Login',
            component: Login,
        },
        {
            path: '/register',
            name: 'Register',
            component: Register,
        },
        {
            path: '/home',
            name: 'Home',
            component: Home,
        },
        {
            path: '/m/:slug',
            name: 'SendMessage',
            component: SendMessage,
        },
        {
            path: "/:catchAll(.*)",
            name: 'NotFound',
            component: NotFound,
        }
    ]
})

createApp(App)
    .use(router)
    .mount('#app');