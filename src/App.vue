<template>
  <div id="app">
    <router-view>

    </router-view>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        apiBaseUrl: 'http://api.levent-deniz.de',
      }
    },
    methods: {
      checkUid() {
          let savedUserId = localStorage.getItem('uid');
          let body = JSON.stringify({
            uid: savedUserId
          });

          return !savedUserId
                  ? !!savedUserId
                  : this.axios.post(this.apiBaseUrl + '/influencer/validate/uid', body)
                          .then(response => {
                            return response.data.success;
                          });
        },
        logout(){
          this.$router.push("/login");
        }
    }
  }
</script>

<style>
    @import url('https://fonts.googleapis.com/css?family=Raleway:300,400,600');
  .center {
    text-align: center;
  }

  .background {
    background-color: #f2f2f2;
  }

  .btn-back {
    position: absolute;
    top: 2vh;
    left: 5vh;
    padding: 2px 11px 2px 9px;
    background-color: #fff;
    /*box-shadow: 0 2px 20px rgba(0, 0, 0, 0.15);*/
    border: 1px solid #ddd;
    border-radius: 50%;
    cursor: pointer;
  }
    *:not(.fa) {
        font-family: Raleway, sans-serif !important;
    }

</style>
