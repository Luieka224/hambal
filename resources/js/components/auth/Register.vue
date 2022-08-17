<template>
    <h1 class="text-2xl text-center font-bold uppercase mt-16 md:mt-24">Register</h1>
    <form action="" class="md:w-[60%] lg:w-[40%] mx-6 md:mx-auto space-y-4 mt-6">
        <div class="form-control">
            <label class="label">
                <span class="label-text">Username</span>
            </label>
            <input type="text" name="username" v-model="username" placeholder="Username" class="input input-bordered" />
        </div>
        <div class="form-control">
            <label class="label">
                <span class="label-text">Password</span>
            </label>
            <input type="password" placeholder="Password" name="password" v-model="password"
                class="input input-bordered" />
        </div>
        <div class="form-control">
            <label class="label">
                <span class="label-text">Retype Password</span>
            </label>
            <input type="password" placeholder="Password" name="password_confirmation" v-model="password_confirmation"
                class="input input-bordered" />
        </div>
        <div class="form-control">
            <span class="btn btn-primary" @click="registerUser">Register</span>
        </div>
    </form>
</template>

<script>
import axios from 'axios'

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
            password_confirmation: undefined,
        }
    },
    methods: {
        registerUser() {
            axios.get('sanctum/csrf-cookie')
                .then(() => {
                    axios.post('api/register', {
                        username: this.username,
                        password: this.password,
                        password_confirmation: this.password_confirmation,
                    }).then(res => {
                        if (res.status == (201 || 200)) this.$router.push('home');
                    })
                        .catch(error => {
                            console.log("An error occured")
                        })
                })
        }
    }
}
</script>