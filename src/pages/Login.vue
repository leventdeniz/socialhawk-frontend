<template>
    <v-ons-page>
        <div class="center">
            <h3>Welcome to [APP NAME]!</h3>
            <p>the number one platform for influencer marketing worldwide!</p>
        </div>

        <v-ons-list class="log-in">
            <v-ons-list-item>
                <div class="center">
                    <v-ons-input placeholder="username" modifier="underbar" ></v-ons-input>
                </div>
            </v-ons-list-item>
            <v-ons-list-item>
                <div class="center">
                    <v-ons-input placeholder="password" type="password" modifier="underbar" float></v-ons-input>
                </div>
            </v-ons-list-item>
                <div class="center">
                    <v-ons-button modifier="button" @click="login">Sign In</v-ons-button>
                </div>
        </v-ons-list>
    </v-ons-page>
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

</style>



