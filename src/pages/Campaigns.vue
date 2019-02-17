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

            this.axios.post(this.$store.state.apiBaseUrl + '/influencer/campaign/all', body)
                .then(response => {
                   if(response.data.success){  
                       for(var item in response.data.content){
                           var element = response.data.content[item];                           
                           this.campaigns.push({
                               id: element.campaign_hash,
                               title: element.title,
                               content: element.description,
                               company: element.company_name,
                               reward: element.rewards,
                               image: element.thumbnail,
                               hashtags: element.hashtags.split(',')
                           });
                       }         
                    //    response.data.content.forEach(element => {
                    //        this.campaigns.push({
                    //            id: element.campaign_hash,
                    //            title: element.title,
                    //            content: element.description,
                    //            company: element.company_name,
                    //            reward: element.rewards,
                    //            image: element.thumbnail,
                    //            hashtags: element.hashtags
                    //        });
                    //   });
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


