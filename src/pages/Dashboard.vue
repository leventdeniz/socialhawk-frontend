<template>
    <v-ons-page>
        <news v-for="information in news"
              :key="information.id"
              :title="information.title"
              :content="information.content"
              :image="information.image"
              :company="information.company"
        ></news>
    </v-ons-page>
</template>
<script>
    import News from '../components/News.vue';

    export default {
        components: {
            News
        },
        data: function () {
            return {
                news: [
                    {
                        id: 0,
                        title: "New Campaign [@adidas].",
                        content: "Hey guys! this is our brand new show! you wanna check this out and get one pair for free?" +
                            " ... apply to our campaign!",
                        company: "@adidas",
                        image: "https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/962a32add53a" +
                            "4bbd8347a91200fd8d4d_9366/POD-S3_1_Schuh_schwarz_B37366_01_standard.jpg"
                    },
                    {
                        id: 1,
                        title: "New Campaign [@colgate].",
                        content: "Ever wanted the whitest teeth in your clique? ... yea we know, not always easy but " +
                            "with our new toothpaste you will smile like never before! apply here for our brand new " +
                            "campaign! We're happy to see you smiling!",
                        company: "@colgate",
                        image: "https://img.gesundshop24.de/220/11540633-colgate-max-white-expert-white-zahnpasta-1.jpg"
                    }
                ]
            }
        }
    }
</script>
<style scoped>

</style>


