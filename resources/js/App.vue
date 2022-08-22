<template>
    <nav
        class="sticky top-0 z-50 flex justify-between px-4 md:px-16 lg:px-32 py-4 md:py-6 bg-base-100/90 items-center backdrop-blur-sm">
        <div>
            <RouterLink :to="{ name: 'Landing' }" class="text-3xl font-bold text-primary">Hambal</RouterLink>
        </div>
        <div class="space-x-4" v-if="isLoggedIn">
            <RouterLink :to="{ name: 'Home' }" class="uppercase font-medium text-sm">Home</RouterLink>
            <button type="button" class="font-medium btn btn-primary py-0 px-4" @click="logoutUser">Logout</button>
        </div>
        <div class="space-x-4" v-if="!isLoggedIn">
            <RouterLink :to="{ name: 'Login' }" class="uppercase font-medium text-sm">Login</RouterLink>
            <RouterLink :to="{ name: 'Register' }" class="font-medium btn btn-primary py-0 px-4">Register</RouterLink>
        </div>
    </nav>
    <main class="contain min-h-screen">
        <router-view></router-view>
    </main>
    <footer class="footer px-4 md:px-16 lg:px-32 py-4 md:py-6 bg-neutral text-neutral-content">
        <div>
            <span class="text-5xl font-bold text-primary">Hambal</span>
            <p>&copy; Luie John Malimit</p>
            <p>
                This webapp is made with ♥ and
                <a href="https://laravel.com" class="link">Laravel</a>,
                <a href="https://vuejs.org" class="link">Vue</a>,
                <a href="https://tailwindcss.com" class="link">TailwindCSS</a>,
                <a href="https://daisyui.com" class="link">DaisyUI</a>, and
                <a href="https://icons8.com" class="link">Icons8</a>.
            </p>
        </div>
        <div>
            <span class="footer-title">Social</span>
            <div class="grid grid-flow-col gap-4">
                <a class="pointer hover" href="https://linkedin.com/in/luiejohn-malimit">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 30 30"
                        class="fill-current w-12 h-12">
                        <path
                            d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M10.496,8.403 c0.842,0,1.403,0.561,1.403,1.309c0,0.748-0.561,1.309-1.496,1.309C9.561,11.022,9,10.46,9,9.712C9,8.964,9.561,8.403,10.496,8.403z M12,20H9v-8h3V20z M22,20h-2.824v-4.372c0-1.209-0.753-1.488-1.035-1.488s-1.224,0.186-1.224,1.488c0,0.186,0,4.372,0,4.372H14v-8 h2.918v1.116C17.294,12.465,18.047,12,19.459,12C20.871,12,22,13.116,22,15.628V20z">
                        </path>
                    </svg>
                </a>
                <a class="pointer hover" href="https://github.com/Luieka224">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 64 64"
                        class="fill-current w-12 h-12">
                        <path
                            d="M 32 10 C 19.85 10 10 19.85 10 32 C 10 44.15 19.85 54 32 54 C 44.15 54 54 44.15 54 32 C 54 19.85 44.15 10 32 10 z M 32 14 C 41.941 14 50 22.059 50 32 C 50 40.238706 44.458716 47.16934 36.904297 49.306641 C 36.811496 49.1154 36.747844 48.905917 36.753906 48.667969 C 36.784906 47.458969 36.753906 44.637563 36.753906 43.601562 C 36.753906 41.823563 35.628906 40.5625 35.628906 40.5625 C 35.628906 40.5625 44.453125 40.662094 44.453125 31.246094 C 44.453125 27.613094 42.554688 25.720703 42.554688 25.720703 C 42.554688 25.720703 43.551984 21.842266 42.208984 20.197266 C 40.703984 20.034266 38.008422 21.634812 36.857422 22.382812 C 36.857422 22.382813 35.034 21.634766 32 21.634766 C 28.966 21.634766 27.142578 22.382812 27.142578 22.382812 C 25.991578 21.634813 23.296016 20.035266 21.791016 20.197266 C 20.449016 21.842266 21.445312 25.720703 21.445312 25.720703 C 21.445312 25.720703 19.546875 27.611141 19.546875 31.244141 C 19.546875 40.660141 28.371094 40.5625 28.371094 40.5625 C 28.371094 40.5625 27.366329 41.706312 27.265625 43.345703 C 26.675939 43.553637 25.872132 43.798828 25.105469 43.798828 C 23.255469 43.798828 21.849984 42.001922 21.333984 41.169922 C 20.825984 40.348922 19.7845 39.660156 18.8125 39.660156 C 18.1725 39.660156 17.859375 39.981656 17.859375 40.347656 C 17.859375 40.713656 18.757609 40.968484 19.349609 41.646484 C 20.597609 43.076484 20.574484 46.292969 25.021484 46.292969 C 25.547281 46.292969 26.492043 46.171872 27.246094 46.068359 C 27.241926 47.077908 27.230199 48.046135 27.246094 48.666016 C 27.251958 48.904708 27.187126 49.114952 27.09375 49.306641 C 19.540258 47.168741 14 40.238046 14 32 C 14 22.059 22.059 14 32 14 z">
                        </path>
                    </svg>
                </a>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    data() {
        return {
            isLoggedIn: false,
        }
    },
    created() {
        this.checkIfLoggedIn();
    },
    methods: {
        logoutUser() {
            axios.post('api/logout')
                .then(res => {
                    this.$router.push({ name: "Landing" })
                });

            this.checkIfLoggedIn();
        },
        checkIfLoggedIn() {
            axios.get(import.meta.env.VITE_APP_URL+"/api/check-auth")
                .then(res => {
                    if (res.data === 1) {
                        this.isLoggedIn = true;
                    } else {
                        this.isLoggedIn = false;
                    }
                })
                .catch(err => {
                    console.error(err);
                })
        }
    },
    watch: {
        $route(to, from) {
            this.checkIfLoggedIn();
        },
    }
}
</script>