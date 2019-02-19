<template>
    <v-ons-page>
        <div class="center">
            @<v-ons-input placeholder="Instagram Name" class="instagram-input" v-model="instagramInput"></v-ons-input>
            <div>
                <v-ons-button class="connect-button" @click="connect">Connect</v-ons-button>
            </div>
        </div>
        <v-ons-toast :visible="toastVisible" animation="ascend">
            {{ errorMessage }}
            <button @click="toastVisible = false">ok</button>
        </v-ons-toast>
    </v-ons-page>
</template>
<script>
export default {
   data: function(){
       return {
           instagramInput: '',
           errorMessage: '', 
           toastVisible: false
       }
   }, 
   methods:{
       connect(){
            let savedUserId = localStorage.getItem('uid');   
            let body = JSON.stringify({
                uid: savedUserId,
                igUsername: this.instagramInput
            });
            
            this.axios.post(this.$store.state.apiBaseUrl + '/influencer/import/instagram', body)
                        .then(response => {
                            if(response.data.success){
                                this.$router.push('/app');
                            }
                            else{
                                this.errorMessage = 'Please check your Instagram username and try again.';
                                this.toastVisible = true;
                            }
                        });
       }
   }
}
</script>
<style scoped>
.center{
    margin-top: 15vh;
}

.connect-button{
    margin-top: 2vh;
}

.instagram-input{
    margin-left: 1vh;
}
</style>



