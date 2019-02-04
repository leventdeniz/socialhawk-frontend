import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

import Vue from 'vue';
import VueOnsen from 'vue-onsenui';
import App from './App.vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import Home from './pages/Home.vue';
import Login from './pages/Login.vue';
import Register from './pages/Register.vue';
import InstagramAuthentification from './pages/InstagramAuthentification.vue';

Vue.config.productionTip = false;

Vue.use(VueOnsen);
Vue.use(VueRouter);
Vue.use(VueResource);

const routes = [
  { path: '/', component: Home}, 
  { path: '/login', component: Login},
  { path: '/register', component: Register},
  { path: '/auth', component: InstagramAuthentification}
];

const router = new VueRouter({
  routes, 
  mode: 'history'
});

new Vue({
  render: h => h(App),
  router,
}).$mount('#app');
