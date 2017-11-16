import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import {store} from './store/store.js'

import router from './router'

axios.defaults.baseRUL = 'https://vuejs-http-a1a5c.firebaseio.com';
axios.defaults.headers.get['Accept'] = 'application/json';

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});
