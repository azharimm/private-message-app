require('./bootstrap');

window.Vue = require('vue');
import store from './store/index';

Vue.component('conversation-dashboard', require('./components/ConversationDashboard.vue').default);
Vue.component('conversations', require('./components/Conversations.vue').default);
Vue.component('loader', require('./components/Loader.vue').default);

const app = new Vue({
    el: '#app',
    store
});
