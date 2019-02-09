import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

import Vue from 'vue';
import VueOnsen from 'vue-onsenui';
import App from './App.vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import VueAxios from 'vue-axios';

import Welcome from './pages/Welcome.vue';
import Login from './pages/Login.vue';
import Register from './pages/Register.vue';
import Navigation from './pages/Navigation.vue';
import InstagramAuthentication from './pages/InstagramAuthentication.vue';

Vue.config.productionTip = false;

Vue.use(VueOnsen);
Vue.use(VueRouter);
Vue.use(VueAxios, axios);

const routes = [
  { path: '/', component: Welcome},
  { path: '/login', component: Login},
  { path: '/register', component: Register},
  { path: '/app', component: Navigation},
  { path: '/auth', component: InstagramAuthentication}
];

const router = new VueRouter({
  routes, 
  mode: 'history'
});

new Vue({
  render: h => h(App),
  router,
}).$mount('#app');
