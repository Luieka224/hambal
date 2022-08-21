<template>
    <div class="min-h-[1rem]"></div>
    <div class="mx-4 lg:mx-32">
        <span class="text-lg uppercase leading-none">
            Hello there,
            <br>
            <span class="text-xl font-bold leading-none">{{ userDetails.username }}</span>
        </span>
    </div>
    <div class="mx-4 lg:mx-32 lg:flex lg:space-x-16 space-y-4 lg:space-y-0 mt-8 lg:mt-4">
        <div class="mt-2">
            <div class="space-y-4 lg:hidden">
                <div>
                    <div class="justify-between flex items-center">
                        <h1 class="text-xl uppercase mb-2">Your Link</h1>
                        <button type="button" class="btn btn-ghost lg:hidden" @click="expandCollapseCopyLink">
                            <svg xmlns="http://www.w3.org/2000/svg" class="fill-current w-8 h-8" viewBox="0 0 50 50">
                                <path v-if="showCopyLink" d="M14.15 30.75 12 28.6l12-12 12 11.95-2.15 2.15L24 20.85Z" />
                                <path v-else d="m24 30.75-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z"/>
                            </svg>
                        </button>
                    </div>
                    <div class="card card-compact lg:w-96 bg-primary text-primary-content shadow-xl"
                        v-if="showCopyLink">
                        <div class="card-body">
                            <input type="text" class="input text-base-content font-mono"
                                :value="appURL + '/m/' + userDetails.slug" readonly>
                            <div class="card-actions justify-end">
                                <span class="btn btn-outline btn-sm text-primary-content" @click="copyToClipboard">Copy
                                    Link</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="justify-between flex items-center">
                        <h1 class="text-xl uppercase mb-2">Custom Message</h1>
                        <button type="button" class="lg:hidden btn btn-ghost" @click="expandCollapseCustomMessage">
                            <svg xmlns="http://www.w3.org/2000/svg" class="fill-current w-8 h-8" viewBox="0 0 50 50">
                                <path v-if="showCustomMessage" d="M14.15 30.75 12 28.6l12-12 12 11.95-2.15 2.15L24 20.85Z" />
                                <path v-else d="m24 30.75-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z"/>
                            </svg>
                        </button>
                    </div>
                    <div class="card card-compact lg:w-96 bg-primary text-primary-content shadow-xl"
                        v-if="showCustomMessage">
                        <div class="card-body">
                            <input class="input text-base-content" readonly placeholder="Unlock to Send Me A Message">
                            <div class="card-actions justify-end">
                                <button
                                    class="btn btn-outline btn-sm text-primary-content disabled:text-primary-content"
                                    disabled>Unlock to Set Message</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="flex justify-between items-center">
                        <h1 class="text-xl uppercase mb-2">Custom Slug</h1>
                        <button type="button" class="lg:hidden btn btn-ghost" @click="expandCollapseCustomSlug">
                            <svg xmlns="http://www.w3.org/2000/svg" class="fill-current w-8 h-8" viewBox="0 0 50 50">
                                <path v-if="showCustomSlug" d="M14.15 30.75 12 28.6l12-12 12 11.95-2.15 2.15L24 20.85Z" />
                                <path v-else d="m24 30.75-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z"/>
                            </svg>
                        </button>
                    </div>
                    <div class="card card-compact lg:w-96 bg-primary text-primary-content shadow-xl"
                        v-if="showCustomSlug">
                        <div class="card-body">
                            <input class="input text-base-content read-only:text-black" readonly
                                placeholder="Unlock to Set Custom Slug">
                            <div class="card-actions justify-end">
                                <button
                                    class="btn btn-outline btn-sm text-primary-content disabled:text-primary-content"
                                    disabled>
                                    Unlock to Set Custom Slug
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="space-y-4 hidden lg:block">
                <div>
                    <h1 class="text-xl uppercase mb-2">Your Link</h1>
                    <div class="card card-compact lg:w-96 bg-primary text-primary-content shadow-xl">
                        <div class="card-body">
                            <input type="text" class="input text-base-content font-mono"
                                :value="appURL + '/m/' + userDetails.slug" readonly>
                            <div class="card-actions justify-end">
                                <span class="btn btn-outline btn-sm text-primary-content" @click="copyToClipboard">Copy
                                    Link</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 class="text-xl uppercase mb-2">Custom Message</h1>
                    <div class="card card-compact lg:w-96 bg-primary text-primary-content shadow-xl">
                        <div class="card-body">
                            <input class="input text-base-content" readonly placeholder="Unlock to Send Me A Message">
                            <div class="card-actions justify-end">
                                <button
                                    class="btn btn-outline btn-sm text-primary-content disabled:text-primary-content"
                                    disabled>Unlock to Set Message</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 class="text-xl uppercase mb-2">Custom Slug</h1>
                    <div class="card card-compact lg:w-96 bg-primary text-primary-content shadow-xl">
                        <div class="card-body">
                            <input class="input text-base-content read-only:text-black" readonly
                                placeholder="Unlock to Set Custom Slug">
                            <div class="card-actions justify-end">
                                <button
                                    class="btn btn-outline btn-sm text-primary-content disabled:text-primary-content"
                                    disabled>
                                    Unlock to Set Custom Slug
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Messages -->
        <div class="space-y-4 lg:flex-1">
            <div class="flex justify-between items-center">
                <h1 class="text-xl uppercase">Messages</h1>
                <button class="btn btn-ghost" @click="refreshMessages" type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 30 30"
                        class="fill-current" :class="{ 'animate-spin': !messagesLoaded }">
                        <path
                            d="M 15 3 C 12.031398 3 9.3028202 4.0834384 7.2070312 5.875 A 1.0001 1.0001 0 1 0 8.5058594 7.3945312 C 10.25407 5.9000929 12.516602 5 15 5 C 20.19656 5 24.450989 8.9379267 24.951172 14 L 22 14 L 26 20 L 30 14 L 26.949219 14 C 26.437925 7.8516588 21.277839 3 15 3 z M 4 10 L 0 16 L 3.0507812 16 C 3.562075 22.148341 8.7221607 27 15 27 C 17.968602 27 20.69718 25.916562 22.792969 24.125 A 1.0001 1.0001 0 1 0 21.494141 22.605469 C 19.74593 24.099907 17.483398 25 15 25 C 9.80344 25 5.5490109 21.062074 5.0488281 16 L 8 16 L 4 10 z">
                        </path>
                    </svg>
                </button>
            </div>
            <div
                class="overflow-y-scroll pl-0 p-4 max-h-[65vh] lg:min-h-[65vh] md:max-h-[80vh] md:min-h-[80vh] lg:max-h-[65vh] lg:min-h-[65vh] space-y-4">
                <div v-for="message of messages" :key="messageKey"
                    class="card card-compact w-full bg-primary text-primary-content shadow-xl rounded-br-none">
                    <div class="card-body">
                        <p>{{ message.message }}</p>
                        <div class="card-actions justify-end">
                            <span>Sent {{ moment(message.created_at).startOf('minute').fromNow() }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="min-h-[1rem] lg:hidden"></div>
    <Transition>
        <div v-if="isCopiedText" class="toast">
            <div class="alert alert-info">
                <div>
                    <span>Copied to Clipboard!</span>
                </div>
            </div>
        </div>
    </Transition>
</template>

<script>
import axios from 'axios'
import moment from 'moment'

export default {
    beforeRouteEnter(routeTo, routeFrom, next) {
        axios.get('api/user', {
        })
            .then(res => {
                if (res.status === 200) {
                    next(vm => {
                        vm.userDetails = res.data
                    })
                };
            })
            .catch(res => {
                next({ name: 'Login' })
            })
    },
    data() {
        return {
            appURL: import.meta.env.VITE_APP_URL,
            isCopiedText: false,
            userDetails: [],
            messages: [],
            messagesLoaded: true,
            moment: moment,
            messageKey: 1,
            showCopyLink: true,
            showCustomMessage: false,
            showCustomSlug: false,
        }
    },
    methods: {
        copyToClipboard() {
            navigator.clipboard.writeText(this.appURL + "/m/" + this.userDetails.slug);
            this.isCopiedText = true;
            setTimeout(() => this.isCopiedText = false, 3000);
        },
        refreshMessages() {
            this.messagesLoaded = false;
            axios.get('api/messages')
                .then(res => {
                    this.messagesLoaded = true;
                    this.messages = res.data;
                })
        },
        reloadMomentJS() {
            setInterval(() => {
                this.messageKey = !this.messageKey;
            }, 30000)
        },
        expandCollapseCopyLink() {
            this.showCopyLink = !this.showCopyLink;
        },
        expandCollapseCustomMessage() {
            this.showCustomMessage = !this.showCustomMessage;
        },
        expandCollapseCustomSlug() {
            this.showCustomSlug = !this.showCustomSlug;
        },
    },
    created() {
        axios.get('api/user')
            .then(res => {
                this.userDetails = res.data
            })

        this.refreshMessages();
        this.reloadMomentJS();
    }
}
</script>