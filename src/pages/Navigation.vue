<template>
<v-ons-page>
    <v-ons-toolbar>
      <div class="center"></div>
    </v-ons-toolbar>

    <v-ons-tabbar swipeable position="auto"
      :tabs="tabs"
      :visible="true"
      :index.sync="activeIndex"
    >
    </v-ons-tabbar>
</v-ons-page>
</template>
<script>
import Home from './Home.vue';
import Profile from './Profile.vue';
import Campaigns from './Campaigns.vue';

export default {
    components:{
        Home,
        Profile,
        Campaigns
    },
    data: function(){
        return {
            activeIndex: 1,            
            tabs:[
                {
                    icon: 'ion-person',
                    label: 'Profile',
                    page: Profile,
                    key: 'profile',
                    title: "Home"                    
                },
                {
                    icon: 'ion-home',
                    label: 'Home',
                    page: Home,
                    key: 'home'
                },
                {
                    icon: 'ion-filing',
                    label: 'Campaigns',
                    page: Campaigns,
                    key: 'campaigns'
                }
            ]
        }
    }
}
</script>
<style scoped>

</style>


