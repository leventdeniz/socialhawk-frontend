<template>

    <v-ons-page>
        <div class="center">
            <h3>Welcome to [APP NAME]!</h3>
            <p>the number one platform for influencer marketing worldwide!</p>
        </div>

        <v-ons-list class="register">
            <v-ons-list-item>
                <div class="center">
                    <v-ons-input placeholder="email" v-model="email"></v-ons-input>
                </div>
            </v-ons-list-item>
            <v-ons-list-item>
                <div class="center">
                    <v-ons-input placeholder="password" type="password" modifier="underbar"
                                 v-model="password"></v-ons-input>
                </div>
            </v-ons-list-item>
            <v-ons-list-item>
                <div class="center">
                    <v-ons-input placeholder="password" type="password" modifier="underbar"
                                 v-model="passwordconfirm"></v-ons-input>
                </div>
            </v-ons-list-item>
            <v-ons-list-item>
                <div class="center">
                    <v-ons-input placeholder="username" modifier="underbar" v-model="username"></v-ons-input>
                </div>
            </v-ons-list-item>
            <v-ons-list-item>
                <div class="center">
                    <v-ons-checkbox v-model="terms"></v-ons-checkbox>
                    by confirming this checkbox, you agree to our <a href="http://levent-deniz.de">terms of service</a>.
                </div>
            </v-ons-list-item>
        </v-ons-list>

        <p style="text-align: center">
            <v-ons-button @click="register">Sign Up</v-ons-button>
        </p>

        <section>
            <div class="login-note">
                already have an account? sign in
                <router-link to="/login">here</router-link>
                !
            </div>
        </section>

    </v-ons-page>

</template>
<script>
    export default {
        data: function () {
            return {
                email: '',
                password: '',
                passwordconfirm: '',
                username: '',
                terms: false
            }
        },
        methods: {
            register() {
                //console.log(this.email + " " + this.password + " " + this.passwordconfirm + " " + this.username + " " + this.terms);
                fetch('http://api.levent-deniz.de/influencer/register', {
                    method: 'post',
                    body: JSON.stringify({email: this.email, password: this.password})
                }).then(function (response) {
                    console.log(response.json());
                }).catch(function (response) {
                    //console.log(response.json());
                });
            }
        }
    }
</script>
<style scoped>
</style>



