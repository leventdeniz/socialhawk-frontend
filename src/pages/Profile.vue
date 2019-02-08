<template>
    <v-ons-page>
         <p>Profile</p>         
    </v-ons-page>
</template>
<script>
    export default {
        beforeMount() {
            if (!this.$parent.checkUid) this.$parent.logout;
        }
    }
</script>
<style scoped>

</style>


