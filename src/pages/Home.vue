<template id="home">
    <v-ons-page>
        <div class="background"></div>

        <div class="title">
            <h3>Welcome to [APP NAME]!</h3>
            <p>the number one for influencer marketing worldwide!</p>
        </div>

        <p class="center">
            <v-ons-row class="btn-row">
                <v-ons-col style="flex-grow: 2.6;">
                    <v-ons-button modifier="button" @click="login">Log In</v-ons-button>
                </v-ons-col>
                <v-ons-col vertical-align="center" width="20px">or</v-ons-col>
                <v-ons-col style="flex-grow: 3">
                    <v-ons-button modifier="button" @click="register">Register</v-ons-button>
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



