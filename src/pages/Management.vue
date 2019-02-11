<template>
    <v-ons-page>
         <v-ons-tabbar 
                swipeable               
                position="top"
                :tabs="tabs_2"
                :visible="true"
                :index.sync="activeIndex"
                >
        </v-ons-tabbar>
    </v-ons-page>
</template>
<script>
import Campaigns from './Campaigns.vue';
import MyCampaigns from './MyCampaigns.vue';
import Brands from './Brands.vue';

export default {
    components: {
        Campaigns,
        MyCampaigns,
        Brands
    },
    data: function () {
            return {
                activeIndex: 1,
                tabs_2: [
                    {
                        label: 'Campaigns',
                        key: "campaigns",
                        page: Campaigns  
                    },
                    {
                        label: 'My Campaigns',
                        key: "mycampaigns",
                        page: MyCampaigns 
                    },
                    {
                        label: 'Brands',
                        key: "brands",
                        page: Brands 
                    }                         
                ]
            };
        },
}
</script>
<style scoped>

</style>


