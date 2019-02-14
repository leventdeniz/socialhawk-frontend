<template>
    <v-ons-page>
        <campaign-list>
            <campaign v-for="campaign in campaigns"
                      :key="campaign.id"
                      :title="campaign.title"
                      :content="campaign.content"
                      :image="campaign.image"
                      :company="campaign.company"
                      :reward="campaign.reward"
                      :hashtags="campaign.hashtags"
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
    beforeMount() {
        let savedUserId = localStorage.getItem('uid');
            let body = JSON.stringify({
              uid: savedUserId
            });

            this.axios.post(this.$store.state.apiBaseUrl + '/influencer/campaign/recommendation', body)
                .then(response => {
                   if(response.data.success){
                       console.log(response.data.content);
                       response.data.content.forEach(element => {
                           this.campaigns.push({
                               id: element.campaign_id,
                               title: element.campaign_title,
                               content: element.campaign_desc,
                               company: element.company,
                               reward: element.reward,
                               image: element.campaign_thumbnail,
                               hashtags: element.campaign_hashtags
                           });
                       });
                    }
                });
    },
    data: function(){
        return {
            campaigns: []
        }
    }
}
</script>
<style>

</style>


