<template>
    <div class="min-h-[10vh]"></div>
    <h1 class="text-2xl text-center font-bold uppercase">Login</h1>
    <div class="min-h-[3rem]"></div>
    <form class="w-[40%] mx-auto space-y-4">
        <div class="form-control">
            <label class="label">
                <span class="label-text">Username</span>
            </label>
            <input type="text" name="username" v-model="username" placeholder="Username" class="input input-bordered"
                required />
        </div>
        <div class="form-control">
            <label class="label">
                <span class="label-text">Password</span>
            </label>
            <input type="password" v-model="password" name="password" placeholder="Password"
                class="input input-bordered" required />
        </div>
        <div class="form-control">
            <a class="btn btn-primary" @click="loginUser">Login</a>
        </div>
    </form>
    </main>
</template>

<script>
import axios from 'axios';

export default {
    beforeRouteEnter(routeTo, routeFrom, next) {
        axios.get('api/user', {
        })
            .then(res => {
                if (res.status === 200) {
                    next({ name: 'Home' })
                };
            })
            .catch(res => {
                next(vm => { })
            })
    },
    data() {
        return {
            username: undefined,
            password: undefined,
        }
    },
    methods: {
        loginUser() {
            axios.post('api/login', {
                username: this.username,
                password: this.password,
            }).then(() => {
                this.$router.push('/home');
            })
                .catch(res => {
                    if (res.response.status == 401) {
                        console.log(res);
                    }
                })
        }
    },
    beforeCreate() {
        axios.get('api/user', {
        })
            .then(res => {
                if (res.status === 200) {
                    this.$router.push({ name: 'Home' })
                };
            })
            .catch(res => {
                if (res.response.status == 401) {
                    console.log('Unauthenticated');
                }
                else console.log("An error with code:" + res.response.status + " occured. =(")
            })
    }
}
</script>