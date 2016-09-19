/**
 * This entry point is used to ensure that we have a single instance of Vue.
 * Initialise Vue plugins here, to ensure that they are loaded onto the single Vue instance.
 */
import Vue from 'vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';

Vue.use(VueResource);
Vue.use(VueRouter);

export default Vue;
