import './bootstrap';
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue'
import Landing from './components/Landing.vue'
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
    ]
})


createApp(App)
    .use(router)
    .mount('#app');