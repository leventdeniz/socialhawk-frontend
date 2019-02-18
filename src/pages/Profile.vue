<template>
    <v-ons-page>
        <v-ons-list>
            <v-ons-list-item>
                <div class="left profile-img">
                    <img src="https://instagram.fmuc3-1.fna.fbcdn.net/vp/84f65e52878773d392407275b1e1685b/5CEC9E1E/t51.2885-19/s150x150/44760102_331256484368479_1709732991984467968_n.jpg?_nc_ht=instagram.fmuc3-1.fna.fbcdn.net" alt="profile page image">
                </div>
                <div class="center">
                    <span class="name">@jens.codes</span>
                    <span class="hashtags">#tech #developer #designer</span>
                    <span class="status-gold">Gold Status</span>
                </div>
            </v-ons-list-item>

            <v-ons-list-header>Your Statistics:</v-ons-list-header>
            <v-ons-list-item>
                <span class="points">7094 Points</span>
                <span class="points-to-diamond">2806 Points until diamond status</span>
                <span>820€ earned</span>
                <span>3 active links</span>
                <span>32 finished cooperation's</span>
            </v-ons-list-item>

            <v-ons-list-header>Your Channels:</v-ons-list-header>
            <v-ons-list-item>
                <div class="left">
                    <img src="https://image.flaticon.com/icons/png/512/87/87390.png" alt="Instagram Logo">
                </div>
                <div class="center">
                    <span class="follower-count">19731 Followers</span>
                    <span class="engagement-rate">3.6% engagement rate</span>
                    <span class="comments-per-post">350 comments/Post</span>
                </div>
            </v-ons-list-item>
            <v-ons-list-item>
                <div class="left">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO8GBImbzsK9004QvK61t_9DYUL_qgjlrxWdlseEVJ6UoU_5ivpw" alt="YouTube Logo">
                </div>
                <div class="center">
                    <span class="sub-count">7989 Subscribers</span>
                    <span class="upload-rate">3 uploads/week</span>
                    <span class="comments-per-video">350 comments/Video</span>
                </div>
            </v-ons-list-item>

            <v-ons-list-header>About you:</v-ons-list-header>
            <v-ons-list-item>
                <span class="description">
                    I ❤️ technology <br>
                    I’m a web developer and designer ☝️ <br>
                    🔥 UI & UX design <br>
                    - <br>
                    📷 Sony RX100M3 <br>
                </span>
            </v-ons-list-item>
        </v-ons-list>
    </v-ons-page>
</template>
<script>
    export default {
        
    }
</script>
<style scoped>
    .list-item > .left > img {
        width: 80px;
    }
    .profile-img > img {
        border-radius: 50%;
    }

    .list-item > .center {
        width: 70%;
    }
    .list-item > .left {
        width: 30%;
    }
    .description {
        text-align: left;
    }
</style>


