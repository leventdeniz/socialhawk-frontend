<template>
  <div id="app">
    <router-view>

    </router-view>
  </div>
</template>

<script>
  export default {
   
  }
</script>

<style>
    @import url('https://fonts.googleapis.com/css?family=Raleway:300,400,600');
    @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700');

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
    *:not(.fa):not(.fas):not(.ons-icon) {
        font-family: "Source Code Pro", sans-serif !important;
    }

</style>
