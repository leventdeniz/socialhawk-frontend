<template>
    <v-ons-page>

        <div class="right list-icon">
            <v-ons-icon :icon="this.listIcons[this.listView]" v-on:click="changeListView"></v-ons-icon>
        </div>
        <news-list :class="listView">
            <news v-for="information in news"
                  :key="information.id"
                  :title="information.title"
                  :content="information.content"
                  :image="information.image"
                  :company="information.company"
            ></news>
        </news-list>
    </v-ons-page>
</template>
<script>
    import News from '../components/dashboard/News.vue';

    export default {
        components: {
            News
        },
        data: function () {
            return {
                news: [
                    {
                        id: 0,
                        title: "New Campaign @adidas",
                        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!" +
                            " Maiores et perferendis eaque, exercitationem praesentium nihil.",
                        company: "@adidas",
                        image: "https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/962a32add53a" +
                            "4bbd8347a91200fd8d4d_9366/POD-S3_1_Schuh_schwarz_B37366_01_standard.jpg"
                    },
                    {
                        id: 1,
                        title: "New Campaign @colgate",
                        content: "Ever wanted the whitest teeth in your clique? ... yea we know, not always easy but " +
                            "with our new toothpaste you will smile like never before! apply here for our brand new " +
                            "campaign! We're happy to see you smiling!",
                        company: "@colgate",
                        image: "https://img.gesundshop24.de/220/11540633-colgate-max-white-expert-white-zahnpasta-1.jpg"
                    }
                ],
                listView: localStorage.getItem('dashboardListView') || 'expanded',
                listIcons:{'expanded': 'md-view-day', 'contracted': 'md-view-list'}
            }
        },
        methods:{
            changeListView(){
                this.listView = this.listView === 'expanded' ? 'contracted' : 'expanded';
                localStorage.setItem('dashboardListView', this.listView)
            }
        }
    }
</script>
<style scoped>
    .right {
        text-align: right;
    }
    .list-icon {
        padding: 0.75rem 1.75rem 0;
        font-size: 1.8rem;
        color: #bfbfbf;
        margin-bottom: -0.5rem;
    }
</style>


