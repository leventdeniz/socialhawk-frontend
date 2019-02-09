<template>
  <v-ons-page>
    <v-ons-toolbar>
      <div class="center">{{ title }}</div>
      <div class="right">
        <v-ons-toolbar-button>
          <v-ons-icon :icon="icon"></v-ons-icon>
        </v-ons-toolbar-button>
      </div>
    </v-ons-toolbar>
    <v-ons-tabbar swipeable position="bottom" :tabs="tabs" :visible="true" :index.sync="activeIndex"></v-ons-tabbar>
  </v-ons-page>
</template>
<script>
import Dashboard from "./Dashboard.vue";
import Profile from "./Profile.vue";
import Campaigns from "./Campaigns.vue";

export default {    
  components: {
    Dashboard,
    Profile,
    Campaigns
  },
  data: function() {
    return {
      activeIndex: 1,
      tabs: [
        {
          icon: "ion-person",
          title: "Profile",
          page: Profile,
          key: "profile"
        },
        {
          icon: "ion-home",
          title: "Dashboard",
          page: Dashboard,
          key: "dashboard",
          item: "fa-envelope"
        },
        {
          icon: "ion-filing",
          title: "Campaigns",
          page: Campaigns,
          key: "campaigns",
        }
      ]
    };
  },
  computed: {
    title() {
      return this.tabs[this.activeIndex].title;
    },
    icon(){
        return this.tabs[this.activeIndex].item;
    }
  }, 
};
</script>
<style scoped>
    .center {
        text-align: initial;
    }
 .fa-envelope{
     color: grey;

 }
</style>


