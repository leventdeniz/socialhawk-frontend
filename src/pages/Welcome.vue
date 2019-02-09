<template id="home">
    <v-ons-page v-show="show">
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
            if (!this.$parent.checkUid()) {
                this.show = true;
                this.$router.push('/');
            } else {
                this.$router.push('/app');
            }
        },
        methods: {
            login() {
                this.$router.push('/login');
            },
            register() {
                this.$router.push('/register');
            }
        }, 
        data: function(){
            return {
                show: false
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



