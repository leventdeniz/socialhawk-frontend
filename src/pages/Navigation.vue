<template>
    <v-ons-page>
        <v-ons-toolbar>         
            <div class="center">{{ title }}</div>
            <div class="right" v-show="activeIndex != 2">
                <v-ons-toolbar-button>
                    <v-ons-icon :icon="icon"></v-ons-icon>
                </v-ons-toolbar-button>
            </div>
        </v-ons-toolbar>
        <v-ons-tabbar                
                position="bottom"
                :tabs="tabs"
                :visible="true"
                :index.sync="activeIndex">
        </v-ons-tabbar>
    </v-ons-page>
</template>
<script>
    import Dashboard from "./Dashboard.vue";
    import Profile from "./Profile.vue";
    import Management from "./Management.vue";

    export default {
        components: {
            Dashboard,
            Profile,
            Management
        },
        beforeMount(){
           if(!this.$store.getters.checkUid){
               this.$router.push("/login");
           }
        },
        data: function () {
            return {
                activeIndex: 1,
                tabs: [
                    {
                        icon: "ion-person",
                        title: "Profile",
                        page: Profile,
                        key: "profile"
                    },
                    {
                        icon: "ion-home",
                        title: "SocialHawk",
                        page: Dashboard,
                        key: "dashboard",
                        item: "fa-envelope"
                    },
                    {
                        icon: "ion-filing",
                        title: "Management",
                        page: Management,
                        key: "management"
                    }
                ]
            };
        },
        computed: {
            title() {
                return this.tabs[this.activeIndex].title;
            },
            icon() {
                return this.tabs[this.activeIndex].item;
            }
        },
    };
</script>
<style scoped>
    .center {
        text-align: initial;
    }

    .fa-envelope {
        color: grey;
    }

    .search{
        width: 100%;
    }

    .search search-input{
        width: 100%;
        height: 100%;
    }
</style>


