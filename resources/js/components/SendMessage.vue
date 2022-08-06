    beforeCreate() {
        axios.post('http://localhost:8000/api/check-slug', {
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
