<template id="home">
  <v-ons-page>

    <v-ons-toolbar>
      <div class="center">Home</div>
    </v-ons-toolbar>

    <div class="title">
      <h3>Welcome to [APP NAME]!</h3>
      <p>the number one for influencer marketing worldwide!</p>
    </div>

    <p style="text-align: center; margin-top: 25vh;">
      <v-ons-button modifier="button" @click="login">Sign In</v-ons-button>
      <v-ons-button modifier="button" @click="register">Register</v-ons-button>
    </p>

    <div class="advertiser-note">
      <p>You're an advertiser? visit <a href="http://levent-deniz.de/">levent-deniz.de</a> to sign up your company.</p>
    </div>

  </v-ons-page>
</template>
<script>
export default { 
  methods: {
    login(){
      this.$router.push('/login');
    },
    register(){
      this.$router.push('/register');
    }
  }
}
</script>
<style scoped>

.title{
  text-align: center;
}

.advertiser-note{
  text-align: center;
  position: absolute;
  bottom: 0;
}

ons-button[modifier="button"]{
  width: 120px;
  text-align: center;
  margin-left:5px;
}
</style>



