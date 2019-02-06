<template id="register">
    <v-ons-page>
        <div class="background"></div>

        <div @click="back" class="btn-back">
            <i class="fa fa-2x fa-angle-left"></i>
        </div>

        <section class="register-header">
            <h3>Welcome to [APPNAME]!</h3>
            <span>the number one platform for influencer marketing!</span>
        </section>

        <div class="register-area">
            <div class="center register-element">
                <v-ons-input placeholder="email" modifier="underbar" v-model="email"></v-ons-input>
            </div>
            <div class="center register-element">
                <v-ons-input placeholder="password" type="password" modifier="underbar" v-model="password"></v-ons-input>
            </div>
            <div class="center register-element">
                <v-ons-input placeholder="confirm password" type="password" modifier="underbar" v-model="passwordConfirm"></v-ons-input>
            </div>
            <div class="center register-element">
                <v-ons-input placeholder="username" modifier="underbar" v-model="username"></v-ons-input>
            </div>
            <div class="center register-element register-checkbox">
                <v-ons-checkbox v-model="terms"></v-ons-checkbox>
                by confirming this checkbox, you agree to our <a href="http://levent-deniz.de">terms of service</a>.
            </div>

            <div class="center register-element register-button">
                <v-ons-button @click="register">Register</v-ons-button>
            </div>
            <section class="center btn-login">
                already have an account? <br>
                <router-link to="/login">Log in!</router-link>
            </section>
        </div>



        <v-ons-toast :visible="toastVisible" animation="ascend">
            {{ message }}
            <button @click="toastVisible = false">ok</button>
        </v-ons-toast>

    </v-ons-page>

</template>
<script>
    export default {
        data: function () {
            return {
                email: '',
                password: '',
                passwordConfirm: '',
                username: '',
                terms: false,
                message: '',
                toastVisible: false
            }
        },
        methods: {
            register() {

                let body = JSON.stringify({
                    email: this.email,
                    password: this.password,
                    username: this.username
                });

                this.axios.post('http://api.levent-deniz.de/influencer/register', body)
                    .then(response => {
                        if (response.data.success && response.data.content.uid) {
                            localStorage.setItem('uid', response.data.content.uid);
                            this.$router.push('/auth');
                        } else {
                            this.message = response.data.content;
                            this.toastVisible = true;
                        }
                    });

            },
            back() {
                this.$router.push('/');
            }
        }
    }
</script>
<style scoped>
    .register-header {
        width: 80%;
        margin: 10vh auto 0;
    }

    .register-header h3 {
        margin-bottom: 0;
    }

    .register-header span {
        font-size: 0.85em;
    }

    .register-area {
        margin-top: 10vh;
    }

    .register-element {
        margin-top: 30px;
    }

    .register-element ons-input {
        width: 80%;
    }

    .register-button {
        margin-top: 5vh;
    }

    .register-checkbox {
        max-width: 80%;
        margin: 3vh auto 0;
    }

    .btn-login {
        margin-top: 4vh;
    }


</style>



