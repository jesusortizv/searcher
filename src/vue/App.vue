<template>
  <div class="container">
    <header>
      <header-app></header-app>
    </header>
    <main>
      <router-view
        transition transition-mode="out-in">
      </router-view>
    </main>
  </div>
</template>

<script>
require('../../node_modules/font-awesome-webpack');
require('../../node_modules/bootstrap-css-only');
import headerApp from './components/common/header/header.vue';

export default {
  components: {
    headerApp,
  },
};
</script>
