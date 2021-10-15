import Vue from 'vue';
import VueYoutube from 'vue-youtube';
import App from './App.vue';
import store from './store';

Vue.use(VueYoutube);

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
