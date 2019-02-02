<template>
  <section class="flex-center">
    <div class="title">
      <h3>Welcome to [APP NAME]!</h3>
      <p>the number one for influencer marketing worldwide!</p>
    </div>
    <div class="button-div">
      <v-ons-button modifier="button" @click="login">Sign In</v-ons-button>
      <v-ons-button modifier="button" @click="register">Sign Up</v-ons-button>
      <div class="advertiser-note">
        <p>you're an advertiser? visit <a href="http://levent-deniz.de/">levent-deniz.de</a> to sign up your company.</p>
      </div>
    </div>    
  </section>
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
.flex-center {
  display: flex;
  justify-content: center;    
}

.button-div{
  position: absolute;
  bottom: 20%;
  width: 80%;   
}

.title{
  position: absolute;
  width: 80%;
  top: 30%;
}

.advertiser-note{
  position: absolute;
  text-align: center;   
}

ons-button[modifier="button"]{
  width: 50%;
  text-align: center;
  background: #b2811e;  
}
</style>



