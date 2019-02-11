<template>
    <v-ons-page>
        <campaign-list>
            <campaign v-for="campaign in campaigns"
                      :key="campaign.id"
                      :title="campaign.title"
                      :content="campaign.content"
                      :image="campaign.image"
                      :company="campaign.company"
                    ></campaign>
        </campaign-list>
    </v-ons-page>
</template>
<script>
import Campaign from '../components/campaigns/Campaign.vue';

export default {
    components:{
        Campaign
    },
    data: function(){
        return {
            campaigns: [
                 {
                    id: 0,
                    title: "New Campaign @adidas",
                    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!" +
                        " Maiores et perferendis eaque, exercitationem praesentium nihil.",
                    company: "@adidas",
                    image: "https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/962a32add53a" +
                        "4bbd8347a91200fd8d4d_9366/POD-S3_1_Schuh_schwarz_B37366_01_standard.jpg"
                },
            ]
        }
    }
}
</script>
<style>

</style>


