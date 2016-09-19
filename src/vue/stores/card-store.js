import actionListener from '../../assets/js/emitter.js';

const state = {
  homecards: null,
};

const onAction = (data) => {
  switch (data.action) {
    case 'update-cards':
      state.homecards = data.cards.homecards;
      break;
    default: break;
  }
};

const subscribe = (data) => {
  actionListener.on(data, onAction);
};

const unsubscribe = (data) => {
  actionListener.off(data, onAction);
};

export default {
  card: state,
  subscribeActions() {
    subscribe('CARD-ACTION');
  },
  unsubscribeActions() {
    unsubscribe('CARD-ACTION');
  },
};
