<template>
    <v-card class="card">
        <div class="title card__title">
            {{ title }}
        </div>
        <div class="image">
            <card-img alt="news" :style="{backgroundImage: cardImgUrl}"></card-img>
        </div>

        <div class="meta">
            <a>{{ company }}</a>
            <span class="reward">500€</span>
            <span class="hashtag">#fashion</span>
            <span class="hashtag">#shoes</span>
            <span class="hashtag">#adidas</span>
        </div>

        <div class="content card__content">
            {{ contentSize }}
        </div>

    </v-card>
</template>
<script>
    export default {
        props: ['title', 'content', 'image', 'company'],
        computed: {
            cardImgUrl() {
                return 'url("' + this.image + '")';
            },
            contentSize() {
                return this.content.substring(0, 80);
            }
        }
    }
</script>
<style scoped>
    .card {
        padding: 0;
        margin: 16px 12px;
        box-shadow: 0 1px 2px rgba(0, 0, 0, .12);
    }

    .card > .title {
        margin: 0;
        padding: 6px 16px;
        font-size: 18px;
    }

    .image {
        padding: 0 16px;
        /*box-shadow: inset 0 5px 10px -8px black;*/
    }

    card-img {
        width: 100%;
        height: 200px;
        display: block;
        background-size: cover;
        background-position: center;
    }

    .card > .content {
        padding: 6px 16px;
    }

    .card > .meta {
        padding: 4px 16px 0;
        font-size: 12px;
    }

    .card > .meta > span {
        margin-left: 6px;
    }
</style>
