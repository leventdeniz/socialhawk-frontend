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
  .center {
    text-align: center;
  }

  .background {
    background-color: #fff;
  }

  .btn-back {
    position: absolute;
    top: 2vh;
    left: 2vh;
    padding: 2px 11px 2px 9px;
    background-color: #fff;
    /*box-shadow: 0 2px 20px rgba(0, 0, 0, 0.15);*/
    border: 1px solid #ddd;
    border-radius: 50%;
    cursor: pointer;
  }

  .btn-back:hover, .btn-back:active, .btn-back:focus {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  }
</style>
