<template id="login">
    <v-ons-page>

        <section class="login-header">
            <h3>Welcome to [APPNAME]</h3>
            <span>worlds leading platform for influencer marketing!</span>
        </section>

        <div class="login-area">
            <div class="center login-element">
                <v-ons-input placeholder="email" modifier="underbar" id="email"></v-ons-input>
            </div>

            <div class="center login-element">
                <v-ons-input placeholder="password" type="password" modifier="underbar" id="password" float></v-ons-input>
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



