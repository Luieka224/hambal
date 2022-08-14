<template>
    <div class="min-h-[3rem]"></div>
    <h1 class="text-2xl text-center font-bold uppercase">Send Me a Message!</h1>
    <div class="min-h-[3rem]"></div>
    <form action="" class="w-[40%] mx-auto space-y-4">
        <div class="w-full">
            <textarea v-model="message" type="text" placeholder="Send Me a Message"
                class="textarea textarea-bordered max-h-[30vh] w-full"></textarea>
        </div>
        <div class="form-control">
            <button type="button" class="btn btn-primary" @click="sendMessage">Send</button>
        </div>
    </form>
    <Transition>
        <div v-if="messageSent" class="toast">
            <div class="alert alert-info">
                <div>
                    <span>Message is Sent!</span>
                </div>
            </div>
        </div>
    </Transition>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            appURL: import.meta.env.VITE_APP_URL,
            user_id: null,
            message: "",
            slug: this.$route.params.slug,
            messageSent: false,
        }
    },
    beforeCreate() {
        axios.post(this.appURL+'/api/check-slug', {
            slug: this.$route.params.slug
        })
            .catch(res => {
                console.log(res)
                if (res.response.status == 404) {
                    this.$router.push({ name: 'Landing' })
                }
                else console.log("An error with code:" + res.response.status + " occured. =(")
            })
    },
    methods: {
        sendMessage() {
            axios.post(this.appURL+'/api/messages', {
                slug: this.slug,
                message: this.message,
            })
                .then(res => {
                    if (res.status == 201) {
                        this.setMessageSent()
                        this.message = ""
                    }
                })
        },
        setMessageSent() {
            this.messageSent = true;
            setTimeout(() => this.messageSent = false, 3000);
        }
    }
}
</script>