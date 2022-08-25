<template>
    <div v-if="validLink">
        <div class="min-h-[3rem]"></div>
        <h1 class="text-2xl text-center font-bold uppercase">Send Me a Message!</h1>
        <div class="min-h-[3rem]"></div>
        <form action="" class="lg:w-[40%] mx-4 lg:mx-auto space-y-4">
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
    </div>
    <div v-else-if="!validLink">
        <NotFound />
    </div>
</template>

<script>
import axios from 'axios'
import NotFound from './NotFound.vue'

export default {
    beforeRouteEnter(routeTo, routeFrom, next) {
        axios.post(import.meta.env.VITE_APP_URL + "/api/check-slug", {
            slug: routeTo.params.slug
        })
            .then(() => {
                next(vm => vm.validLink = true)
            })
            .catch(() => {
                next(vm => vm.validLink = false)
            })
    },
    data() {
        return {
            appURL: import.meta.env.VITE_APP_URL,
            user_id: null,
            message: "",
            slug: this.$route.params.slug,
            messageSent: false,
            validLink: undefined,
        };
    },
    methods: {
        sendMessage() {
            axios.post(this.appURL + "/api/messages", {
                slug: this.slug,
                message: this.message,
            })
                .then(res => {
                    if (res.status == 201) {
                        this.setMessageSent();
                        this.message = "";
                    }
                });
        },
        setMessageSent() {
            this.messageSent = true;
            setTimeout(() => this.messageSent = false, 3000);
        }
    },
    components: { NotFound }
}
</script>