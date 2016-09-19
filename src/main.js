import Vue from './vue';
import App from './vue/App.vue';
import Router from './router';
import cardStore from './vue/stores/card-store.js';

/* eslint-disable no-new */
const app = Vue.extend({
  components: {
    App,
  },
  init() {
    cardStore.subscribeActions();
  },
  destroyed() {
    cardStore.unsubscribeActions();
  },
});

/* Bootstrap routes to the main component */
Router.start(app, 'body');
