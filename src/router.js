import VueRouter from 'vue-router';
import feed from './vue/views/feed.vue';
import home from './vue/views/home.vue';
import * as cardService from './vue/services/card-service';
import actionEmitter from './assets/js/emitter.js';

const router = new VueRouter({
  saveScrollPosition: false,
  history: true,
});

router.map({
  '/:homeCard': {
    name: 'homeCard',
    description: 'Home Cards',
    component: feed,
  },
  '/home': {
    name: 'home',
    description: 'Home',
    component: home,
  },
  'list/:homeCard': {
    name: 'list',
    description: 'Home Cards',
    component: feed,
  },
});

router.beforeEach((transition) => {
  if (transition.to.name !== 'home') {
    const homeCardId = transition.to.params.homeCard;

    if (!homeCardId) {
      transition.redirect({ name: 'homeCard' });
    }

    cardService.getCards(homeCardId)
      .then((resp) => {
        const cards = resp.body.data;
        actionEmitter.emit('CARD-ACTION', { cards, action: 'update-cards' });
        transition.next();
      });
  }
});

router.redirect({
  '*': '/home',
});

export default router;
