<template>
  <section class="catalog">
    <CatalogList :catalog="products" />
    <BasePagination v-model="page" :page="page" :count="countProducts" :per-page="productsPerPage" />
    
  </section>
</template>

<script>
import catalog from './data/catalog';
import CatalogList from './components/catalog/CatalogList.vue';
import BasePagination from './components/catalog/BasePagination.vue';

export default {
  name: 'App',
  components: { CatalogList, BasePagination },
  data() {
    return {
      page: 1,
      productsPerPage: 6,
    };
  },
  computed: {
    products() {
      const offset = (this.page - 1) * this.productsPerPage;
      return catalog.slice(offset, offset + this.productsPerPage);
    },
    countProducts() {
      return catalog.length;
    },
  },
};
</script>

<!-- <style src="./assets/css/main.css" lang="stylus" /> -->