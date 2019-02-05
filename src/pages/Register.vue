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
                <v-ons-input placeholder="password" type="password" modifier="underbar" v-model="passwordconfirm"></v-ons-input>
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
        </div>

        <section class="center btn-login">
            already have an account? <br>
            <router-link to="/login">Log in!</router-link>
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
                let body = JSON.stringify({
                    email: this.email,
                    password: this.password
                });

                this.axios.post('http://api.levent-deniz.de/influencer/register', body)
                    .then(response => {
                        if(response.data.success && response.data.content.uid){
                            localStorage.setItem('uid', response.data.content.uid);
                            this.$router.push('/auth');
                        }
                        else{
                            alert(response.data.content);
                        }
                    });
            },
            back(){
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

    .register-button {
        margin-top: 5vh;
    }

    .register-checkbox {
        max-width: 80%;
        margin: 3vh auto 0;
    }

    .btn-login {
        position: absolute;
        bottom: 2%;
        left: 40%;
        transform: translate(-35%);
    }


</style>



