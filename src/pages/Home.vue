<template>
  <div></div>
</template>
<script>

export default {
  mounted() {
    fetch("http://api.levent-deniz.de/ajax")
            .then(response => response.json())
            .then((data) => {
              console.log(data);
            })
  }
}

</script>

<style scoped>

</style>



