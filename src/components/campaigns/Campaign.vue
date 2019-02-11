<template>
    <v-card class="card">
        <div class="image">
            <card-img alt="news" :style="{backgroundImage: cardBackgroundImgUrl}"></card-img>
            <div class="meta">
                <a>{{ company }}</a>
                <span class="reward">500€</span>
                <span class="hashtag">#fashion</span>
                <span class="hashtag">#shoes</span>
                <span class="hashtag">#adidas</span>
            </div>
        </div>

        <div class="content-wrapper">
            <div class="title card__title">
                {{ title }}
            </div>

            <div class="content card__content">
                {{ contentSize }}
            </div>
        </div>
    </v-card>
</template>
<script>
export default {
    props: ['title', 'content', 'image', 'company'],
    computed: {
        cardBackgroundImgUrl(){
            return 'url("' + this.image + '")';
        }, 
        contentSize(){
            return this.content.substring(0, 80);
        }
    }
}
</script>
<style scoped>
      .card {
        padding: 0;
        margin: 1.75rem;
        box-shadow: 0 10px 30px 0 rgba(0,0,0,.11), 0 5px 15px 0 rgba(0,0,0,.08);
        border-radius: 5px;
    }

    .card .content-wrapper {
        padding: 0.75rem 1.5rem 1rem;
    }

    .card .title {
        margin: 0 0 0.5rem;
        font-size: 18px;
        font-weight: 700;
    }
    .card .content {
        color: #606f7b;
        font-size: 16px;
        line-height: 1.5;
    }

    .image {
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        overflow: hidden;
        background: #fff;
    }

    card-img {
        width: 100%;
        height: 120px;
        display: inline-block;
        background-size: cover;
        background-position: center;
    }

    .card .meta {
        display: none;
        padding: 4px 16px 0;
        font-size: 12px;
    }

    .card .meta > span {
        margin-left: 6px;
    }
</style>
