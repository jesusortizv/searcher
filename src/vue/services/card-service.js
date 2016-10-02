/**
 * Card Service
 * @namespace services.cardService
 **/

import Vue from '../../vue';

/**
 * @method getCards
 * @desc Get all cards.
 * @return {Promise} AJAX request as promise - Array of cards if successful.
 * @memberof services.cardService
 **/
export function getCards(cardId) {
  return Vue.http.get(`/api/${cardId}`);
}
