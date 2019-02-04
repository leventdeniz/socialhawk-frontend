<template id="login">
    <v-ons-page>
        <div class="background"></div>

        <section class="login-header">
            <h3>Welcome to [APPNAME]</h3>
            <span>worlds leading platform for influencer marketing!</span>
        </section>

        <div class="login-area">
            <div class="center login-element">
                <v-ons-input placeholder="email" modifier="underbar" v-model="email"></v-ons-input>
            </div>

            <div class="center login-element">
                <v-ons-input placeholder="password" type="password" modifier="underbar" v-model="password" float></v-ons-input>
            </div>

            <div class="center login-element login-button">
                <v-ons-button modifier="button" @click="login">Log In</v-ons-button>
            </div>
        </div>

        <div class="center back-btn">
            <p @click="back"><i class="fa fa-arrow-left"></i>back</p>
        </div>

    </v-ons-page>
</template>
<script>

    export default {
        data: function () {
            return {
                email: '',
                password: ''
            }
        },
        methods: {
            login() {
                fetch('http://api.levent-deniz.de/influencer/login', {
                    method: 'post',
                    body: 'email=' + this.email + '&password=' + this.password,
                    headers: {'Content-type': 'application/x-www-form-urlencoded'}
                }).then(function (response) {
                    console.log(response.json());
                })
            },

            back() {
                this.$router.push('/');
            }
        }
    }
</script>
<style scoped>

    .login-header {
        width: 80%;
        margin: 10vh auto 0;
    }

    .login-header h3 {
        margin-bottom: 0;
    }

    .login-header span {
        font-size: 0.85em;
    }

    .login-area {
        margin-top: 15vh;
    }

    .login-element {
        margin-top: 30px;
    }

    .login-button {
        margin-top: 10vh;
    }

    .back-btn {
        position: absolute;
        bottom: 2%;
        left: 50%;
        transform: translateX(-50%);
    }

    .back-btn i {
        padding-right: 5px;
    }

</style>



