<template>
  <div class="Feed">
    <div class="row">
      <div class="col-xs-4 Feed__filters">
        <h3 class="Feed__filters__title">Filters: </h3>
        <form class="form">
          <div class="form-group">
            <label>
              Property type:
            </label>
            <select v-model="propertyType" class="form-control">
              <option value="">All</option>
              <option v-for="filter in filters" :value="filter">{{ filter }}</option>
            </select>
          </div>
          <div class="form-group">
            <label>
              Sort by price:
            </label>
            <select @change="setSorting" v-model="sorting" class="form-control">
              <option value="">Choose an option</option>
              <option value="-1">Ascending</option>
              <option value="1">Descending</option>
            </select>
          </div>
          <div class="form-group">
            <a @click="downloadJsonFile($event)" class="btn btn-default" type="button">Download JSON</a>
          </div>
        </form>
      </div>
      <div class="col-xs-8 text-center">
        <ul class="Feed__list">
          <li class="col-xs-12 Feed__list__item" v-for="card in cards.homecards | orderBy 'pricePerMonth' sorting | filterBy propertyType in 'type'">
            <div class="col-xs-4">
              <img class="Feed__list__item__picture" :src="card.mainPhotoUrl" alt="" />
            </div>
            <div class="col-xs-8">
              <div class="row">
                <div class="col-xs-10">
                  <h4>{{ card.title }}</h4>
                  <button type="button" class="button button--secondary btn">More details</button>
                  <button type="button" class="button button--primary btn">Book now!</button>
                </div>
                <div class="col-xs-2">
                  <div class="Feed__list__item__price">
                    <span>{{ card.pricePerMonth }}{{ card.currencySymbol }}</span>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import cardStore from '../../stores/card-store.js';

  export default {
    data() {
      return {
        cards: cardStore.card,
        sorting: -1,
        filters: [],
        propertyType: '',
      };
    },
    attached() {
      this.filters = this.getFilters();
    },
    methods: {
      setSorting() {
        this.sorting = Number(this.sorting);
      },
      downloadJsonFile($event) {
        const obj = this.cards.homecards;
        const data = `text/json;charset=utf-8, ${encodeURIComponent(JSON.stringify(obj))}`;
        const link = $event.target;
        link.href = `data: ${data}`;
        link.download = 'data.json';
      },
      getFilters() {
        return this.cards.homecards
          .map((card) => card.type)
          .reduce((cards, card) => {
            if (cards.indexOf(card) < 0) {
              cards.push(card);
            }

            return cards;
          }, []);
      },
    },
  };
</script>

<style lang="scss">
  @import '../../../assets/css/main';
  @import './feedList';
</style>
