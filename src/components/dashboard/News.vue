<template>
    <v-ons-card>
      <img :src="image" alt="Onsen UI" style="width: 100%">
      <div class="title">
        {{ title }}
      </div>
      <div class="content">
        {{ content }}
      </div>
      <hr>
      <a>{{ company }}</a>
    </v-ons-card>
</template>
<script>
export default {
    props:['title', 'content', 'image', 'company']
}
</script>
<style scoped>

</style>
