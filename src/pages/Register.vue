<template>
  <div class="flex-center">
     <div class="title">
      <h3>Welcome to [APP NAME]!</h3>
      <p>the number one for influencer marketing worldwide!</p>
    </div>
    <v-ons-form>      
      <v-ons-input placeholder="email" modifier="underbar" style="margin-bottom: 10px;" v-model="email"></v-ons-input>      
      <v-ons-input placeholder="password" type="password" modifier="underbar" style="margin-bottom: 10px;" v-model="password"></v-ons-input>      
      <v-ons-input placeholder="password" type="password" modifier="underbar" style="margin-bottom: 10px;" v-model="passwordconfirm"></v-ons-input>      
      <v-ons-input placeholder="username" modifier="underbar" style="margin-bottom: 15px;" v-model="username"></v-ons-input>
      <div class="checkbox-div">
        <v-ons-checkbox v-model="terms"></v-ons-checkbox>
        by confirming this checkbox, you agree to our <a href="http://levent-deniz.de">terms of service</a>.
      </div>
    </v-ons-form>
    <div class="button-div">
      <v-ons-button modifier="button" @click="register">Sign Up</v-ons-button>
      <div class="login-note">
        already have an account? sign in <router-link to="/login">here</router-link>!
      </div>
    </div>     
  </div> 
</template>
<script>
export default {
  data: function(){
    return{
      email: '', 
      password: '', 
      passwordconfirm: '',
      username: '', 
      terms: false
    }
  },
  methods: {
    register(){
      //console.log(this.email + " " + this.password + " " + this.passwordconfirm + " " + this.username + " " + this.terms);
      fetch('http://api.levent-deniz.de/influencer/register', {
        method: 'post',
        body: JSON.stringify({email: this.email, password: this.password})
      }).then(function(response){
        console.log(response.json());
      }).catch(function(response){
        //console.log(response.json());
      });
    }
  }
}
</script>
<style scoped>
ons-button[modifier="button"]{  
  text-align: center;  
  background: #b2811e;     
  width: 100%;
}

v-ons-form{
  position: absolute;
  width: 60%;
  top: 25%;
}

.login-note{
  position: absolute;
  text-align: center;
}

.button-div{
  position: absolute;
  bottom: 20%;
  width: 50%;   
}

</style>



