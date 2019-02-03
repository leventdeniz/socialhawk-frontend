<template id="login">
    <v-ons-page>

        <div class="title">
            <h3>Login</h3>
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

        <div class="back-btn">
            <p @click="back">Back</p>
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

    },

      back(){
          this.$router.push('/');
      }
  }
}
</script>
<style scoped>

.title {
    text-align:left;
    padding: 25px;
}

.login-area {
    margin-top: 20vh;
}

.login-element {
    margin-top:20px;
}

.back-btn{
    text-align: center;
    position: absolute;
    bottom: 0;
}

</style>



