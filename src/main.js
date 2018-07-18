import Vue from 'vue';
import store from '@/store';
import VueRouter from 'vue-router';
import App from './App.vue';

Vue.use(VueRouter);

new Vue({ // eslint-disable-line no-new
    store: store,
    el: '#app',
    render: h => h(App)
});
