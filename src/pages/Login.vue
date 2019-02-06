<template id="login">
    <v-ons-page>
        <div class="background"></div>

        <div @click="back" class="btn-back">
            <i class="fa fa-2x fa-angle-left"></i>
        </div>

        <section class="login-header">
            <h3>Welcome to [APPNAME]</h3>
            <span>worlds leading platform for influencer marketing!</span>
        </section>

        <div class="login-area">
            <div class="center login-element" v-bind:class="[errors.email ? 'error' : '']">
                <v-ons-input placeholder="email" modifier="underbar" v-model="email"></v-ons-input>
                <i class="fa fa-exclamation"></i>
            </div>

            <div class="center login-element" v-bind:class="[errors.password ? 'error' : '']">
                <v-ons-input placeholder="password" type="password" modifier="underbar" v-model="password" float></v-ons-input>
                <i class="fa fa-exclamation"></i>
            </div>

            <div class="center login-element login-button">
                <v-ons-button modifier="button" @click="login">Log In</v-ons-button>
            </div>

            <section class="center test-data">
                You can use the following test email & password  combination to take a look inside our app: <br><br>
                guest@example.com <br>
                guestpass
            </section>

            <v-ons-toast :visible="toastVisible" animation="ascend">
                {{ errorMessage }}
                <button @click="toastVisible = false">ok</button>
            </v-ons-toast>
        </div>

    </v-ons-page>
</template>
<script>

export default {
    data: function () {
        return {
            email: '',
            password: '',
            errorMessage: '',
            errors: {email: false, password: false},
            toastVisible: false
        }
    },
    methods: {
        login() {
            if(this.checkForm()) {            
               let body = JSON.stringify({
                   email: this.email,
                   password: this.password
               });

            this.axios.post(this.$parent.apiBaseUrl + '/influencer/login', body)
                .then(response => {
                    if (response.data.success) {
                        localStorage.setItem('uid', response.data.content);
                        this.$router.push('/dashboard');
                    } else {
                        this.errorMessage = response.data.content;
                        this.errors.email = this.errors.password = true;                           
                        this.toastVisible = true;
                    }
                });
            } else {
                this.toastVisible = true;
            }
        },

        back() {
            this.$router.push('/');
        }, 
        checkForm(){
            if(this.email && this.password){
               return true; 
            }

            this.errors.email = !this.email;
            this.errors.password = !this.password;
            this.errorMessage = "Please check your information.";
            return false;
        }
    }
}
</script>
<style scoped>

    .login-header, .test-data {
        width: 80%;
        margin: 10vh auto 0;
    }

    .test-data {
        margin-top: 7vh;
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
        position: relative;
    }

    .login-element ons-input {
        width: 80%;
    }

    .login-button {
        margin-top: 10vh;
    }

    .fa-exclamation {
        position: absolute;
        margin-left: -10px;
        color: orangered;
        opacity: 0;
    }
    .error .fa-exclamation {
        opacity: 1;
    }

</style>



