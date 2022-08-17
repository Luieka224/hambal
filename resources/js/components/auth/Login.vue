<template>
    <h1 class="text-2xl text-center font-bold uppercase mt-32">Login</h1>
    <form action="" class="md:w-[60%] lg:w-[40%] mx-6 md:mx-auto space-y-4 mt-6">
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
    <Transition>
        <div v-if="loginError" class="toast">
            <div class="alert alert-info">
                <div>
                    <span>Invalid Credentials!</span>
                </div>
            </div>
        </div>
    </Transition>
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
            loginError: false,
        }
    },
    methods: {
        loginUser() {
            axios.post('api/login', {
                username: this.username,
                password: this.password,
            })
                .then(() => {
                    this.$router.push({ name: "Home" })
                })
                .catch(res => {
                    if (res.response.status == 422) {
                        this.loginError = true
                        setTimeout(() => this.loginError = false, 3000);
                    }
                })
        }
    },
}
</script>