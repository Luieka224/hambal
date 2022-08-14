<template>
    <div class="inline-block align-middle absolute top-[30%]">
        <div class="px-[7.5rem] space-y-8">
            <h1 class="text-[6rem] leading-none uppercase">
                E <span class="font-bold text-primary">Hambal</span> na ang <br>
                imo <span>{{ message }}</span>
            </h1>
            <div class="flex space-x-4">
                <button class="btn btn-primary btn-lg">Get Started</button>
                <button class="btn btn-lg">How it Works</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            landing_messages: ['nabatyagan', 'naluyagan', 'mensahe', 'pag-abiabi'],
            current_index: 0,
        }
    },
    computed: {
        message() {
            return this.landing_messages[this.current_index];
        }
    },
    methods: {
        changeCurrentIndex() {
            setInterval(() => {
                if (this.current_index == 3) this.current_index = 0;
                else this.current_index++;
            }, 3000);
        }
    },
    created() {
        this.changeCurrentIndex()
    }
}
</script>