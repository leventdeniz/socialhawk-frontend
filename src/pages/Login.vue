<template>
  <div class="flex-center">
     <div class="title">
      <h3>Welcome to [APP NAME]!</h3>
      <p>the number one for influencer marketing worldwide!</p>
    </div>
    <v-ons-form>      
      <v-ons-input placeholder="username" modifier="underbar" style="margin-bottom: 10px;"></v-ons-input>      
      <v-ons-input placeholder="password" type="password" modifier="underbar" float></v-ons-input>      
    </v-ons-form> 
    <v-ons-button modifier="button" @click="login">Sign In</v-ons-button>
  </div>
</template>
<script>
export default {
  methods:{
    login(){      
      fetch('http://api.levent-deniz.de/influencer/login', {
          method: 'post',          
      }).then(function(response){
        console.log(response.json());
      }).then(function(data){
        //console.log(data.json());
      });
    }
  }
}
</script>
<style scoped>
ons-button[modifier="button"]{
  width: 50%;
  text-align: center;
  position: absolute;
  background: #b2811e;
  width: 50%; 
  bottom: 20%; 
}

v-ons-form{
  position: absolute;
  width: 60%;
  top: 45%;
}
</style>



