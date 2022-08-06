import './bootstrap';
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue'
import Landing from './components/Landing.vue'
import Home from './components/Home.vue'
import SendMessage from './components/SendMessage.vue'
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
    ]
})

var isAuthenticated = false;

router.beforeEach(async (to, from) => {
    axios.get('api/user', {
    })
        .then(res => {
            if (res.status === 200) {
                console.log("authenticated")
                isAuthenticated = true
            };
        })
        .catch(res => {
            if (res.response.status == 401) {
                console.log('Unauthenticated');
                isAuthenticated = false;
            }
            else console.log("An error with code:" + res.response.status + " occured. =(")
        })


    if (!isAuthenticated && (to.name !== 'Login' && to.name !== 'Register' && to.name !== 'Landing' && to.name !== 'SendMessage')) {
        return {
            name: 'Login'
        }
    }
    else if (isAuthenticated && (to.name == 'Login' || to.name == 'Register')) {
        return {
            name: 'Home'
        }
    }
})

createApp(App)
    .use(router)
    .mount('#app');