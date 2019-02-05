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

    </v-ons-page>
</template>
<script>

export default {
  data:function(){
    return {
      email: '',
      password: ''
    }
  },
  methods:{
    login(){
        let body = JSON.stringify({
            email: this.email,
            password: this.password
        });

        this.axios.post('http://api.levent-deniz.de/influencer/login', body)
            .then(response => {
                if (response.data.success) {
                    localStorage.setItem('uid', response.data.content);
                    this.$router.push('/dashboard');
                } else {
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

</style>



