import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios, axios);
Vue.use(Vuex);

export let store  = new Vuex.Store({
    state: {
        apiBaseUrl: 'http://api.socialhawk.io'
    }, 
    getters: {
        checkUid(state) {
            let savedUserId = localStorage.getItem('uid');
            let body = JSON.stringify({
              uid: savedUserId
            });
  
            return !savedUserId
                    ? !!savedUserId
                    : axios.post(state.apiBaseUrl + '/influencer/validate/uid', body)
                            .then(response => {
                              return response.data.success;
                            });
          },
    }
});



