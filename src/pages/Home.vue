<template id="home">
    <v-ons-page>
        <div class="background"></div>

        <div class="title">
            <h3>Welcome to [APP NAME]!</h3>
            <p>the number one for influencer marketing worldwide!</p>
        </div>

        <p class="center">
            <v-ons-row class="btn-row">
                <v-ons-col style="flex-grow: 2;">
                    <v-ons-button modifier="button large" @click="login">Log In</v-ons-button>
                </v-ons-col>
                <v-ons-col vertical-align="center">or</v-ons-col>
                <v-ons-col style="flex-grow: 2">
                    <v-ons-button modifier="button large" @click="register">Register</v-ons-button>
                </v-ons-col>
            </v-ons-row>
        </p>

        <div class="advertiser-note">
            <p>You're an advertiser? visit <a href="http://levent-deniz.de/">levent-deniz.de</a> to sign up your
                company.</p>
        </div>

    </v-ons-page>
</template>
<script>
    export default {
        beforeMount() {
            let savedUserId = localStorage.getItem('uid');        
            if (savedUserId) {
                let body = JSON.stringify({
                    uid: savedUserId
                });
                this.axios.post(this.$parent.apiBaseUrl + '/influencer/validate/uid', body)
                    .then(response => {
                        if (response.data.success) {
                            this.$router.push('/dashboard');
                        }
                    });
            } else {
                this.$router.push('/');
            }

        },
        methods: {
            login() {
                this.$router.push('/login');
            },
            register() {
                this.$router.push('/register');
            }
        }
    }
</script>
<style scoped>

    .title {
        text-align: left;
        padding: 25px;
        margin-top: 25vh;
    }

    .advertiser-note {
        text-align: center;
        position: absolute;
        bottom: 0;
        padding: 0 25px;
    }

    .btn-row {
        max-width: 80%;
        margin: auto;
    }


    .ons-button[modifier="button"] {
        width: 120px;
        text-align: center;
        margin-left: 5px;
    }
</style>



