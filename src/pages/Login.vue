<template id="login">
    <v-ons-page>

        <v-ons-toolbar>
            <div class="center">Login</div>
        </v-ons-toolbar>

        <div class="center">
            <p>Login with an existing account.</p>
        </div>

        <div class="login-area">
            <div class="center login-element">
                <v-ons-input placeholder="email" modifier="underbar" id="email"></v-ons-input>
            </div>

            <div class="center login-element">
                <v-ons-input placeholder="password" type="password" modifier="underbar" id="password" float></v-ons-input>
            </div>

            <div class="center login-element">
                <v-ons-button modifier="button" @click="login">Sign In</v-ons-button>
            </div>
        </div>


    </v-ons-page>
</template>
<script>
    import VueOnsen from 'vue-onsenui';
export default {
  methods:{
    login(){
        let email = document.getElementById('email');
        let password = document.getElementById('password');

        let http = new XMLHttpRequest();
        let url = 'http://api.levent-deniz.de/influencer/login';
        let params = 'email=' + email + '&password=' + password;
        http.open('POST', url, true);

        http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        http.onreadystatechange = function() {
            if(http.readyState === 4 && http.status === 200) {
                let jsonResponse = JSON.parse(http.responseText);

                if(jsonResponse.success === true){
                    alert("user can now login");
                }else{
                    VueOnsen.notification.alert('Your E-Mail address or password is wrong!');
                }
            }
        };
        http.send(params);

    }
  }
}
</script>
<style scoped>

.login-area {
    margin-top: 20vh;
}

.login-element {
    margin-top:20px;
}

</style>



