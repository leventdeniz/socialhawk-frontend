<template>
  <section class="flex-center">
      <v-ons-button modifier="button" @click="login">Sign In</v-ons-button>
      <v-ons-button modifier="button" @click="register">Sign Out</v-ons-button>
  </section>
</template>
<script>

export default {
  /* mounted() {
    fetch("http://api.levent-deniz.de/ajax")
            .then(response => response.json())
            .then((data) => {
              console.log(data);
    })
  },  */
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

ons-button[modifier="button"]{
  width: 50%;
  text-align: center;
  background: #b2811e;
}
</style>



