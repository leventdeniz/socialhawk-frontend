<template>
  <v-ons-page>
    <v-ons-toolbar>
      <div class="center">{{ title }}</div>
      <div class="right">
        <v-ons-toolbar-button>
          <v-ons-icon :icon="this.tabs[this.activeIndex].item"></v-ons-icon>
        </v-ons-toolbar-button>
      </div>
    </v-ons-toolbar>
    <v-ons-tabbar swipeable position="auto" :tabs="tabs" :visible="true" :index.sync="activeIndex"></v-ons-tabbar>
  </v-ons-page>
</template>
<script>
import Home from "./Home.vue";
import Profile from "./Profile.vue";
import Campaigns from "./Campaigns.vue";

export default {    
  components: {
    Home,
    Profile,
    Campaigns
  },
  data: function() {
    return {
      activeIndex: 1,
      tabs: [
        {
          icon: "ion-person",
          label: "Profile",
          page: Profile,
          key: "profile",
          item: ''
        },
        {
          icon: "ion-home",
          label: "Home",
          page: Home,
          key: "home",
          item: "fa-envelope"
        },
        {
          icon: "ion-filing",
          label: "Campaigns",
          page: Campaigns,
          key: "campaigns",
        }
      ]
    };
  },
  computed: {
    title() {
      return this.tabs[this.activeIndex].label;
    }
  }, 
};
</script>
<style scoped>
 .fa-envelope{
     color: grey;

 }
</style>


