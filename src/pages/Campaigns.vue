<template>
    <v-ons-page>
         <p>Campaigns</p>
    </v-ons-page>
</template>
<script>
    import App from "../App";

export default {
    beforeMount() {
        if (!App.checkUid()) App.logout();
    }
}
</script>
<style scoped>

</style>


