/**
 * Card Service
 * @namespace services.cardService
 **/

import Vue from '../../vue';
import jsonCards from './cards.json';

/**
 * @method getCards
 * @desc Get all cards.
 * @return {Promise} AJAX request as promise - Array of cards if successful.
 * @memberof services.cardService
 **/
export function getCards(cardId, local) {
  return !local ? Vue.http.get(`https://www.spotahome.com/api/public/listings/search/homecards/${cardId}`, {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  }) : new Promise((resolve) => resolve(jsonCards));
}
