import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

import Vue from 'vue';
import App from './App.vue';
import VueOnsen from 'vue-onsenui';
import VueRouter from 'vue-router';

import Home from './pages/Home.vue';
import Login from './pages/Login.vue';
import Register from './pages/Register.vue';

Vue.config.productionTip = false;

Vue.use(VueOnsen);
Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home}, 
  { path: '/login', component: Login},
  { path: '/register', component: Register},
];

const router = new VueRouter({
  routes, 
  mode: 'history'
});

new Vue({
  render: h => h(App),
  router,
}).$mount('#app');
