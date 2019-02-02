<template>
  <div>
     <v-ons-button @click="login">Sign In</v-ons-button>
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

</style>



