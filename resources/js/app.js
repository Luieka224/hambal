import './bootstrap';
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue'
import Landing from './components/Landing.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Landing',
            component: Landing,
        },
    ]
})


createApp(App)
    .use(router)
    .mount('#app');