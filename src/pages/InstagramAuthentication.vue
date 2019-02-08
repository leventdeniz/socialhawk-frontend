<template>
    <div>
        <router-link to="/dashboard">dashboard</router-link>
    </div>
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



