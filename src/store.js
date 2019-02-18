import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios, axios);
Vue.use(Vuex);

export let store = new Vuex.Store({
  state: {
    apiBaseUrl: 'http://api.socialhawk.io',
    status: false
  }, 
  actions: {
    checkUid({ commit, state }){

      let savedUserId = localStorage.getItem('uid');
      let body = JSON.stringify({
                  uid: savedUserId
                });
      
      return axios.post(state.apiBaseUrl + '/influencer/validate/uid', body)
                .then(response => {                      
                    commit('setUidStatus', response.data.success);                      
                });          
      }
  }, 
  mutations: {
    setUidStatus(state, status){
      state.status = status;
    }
  }, 
  getters: {
    getUidStatus(state){
      return state.status;
    }
  }
});



