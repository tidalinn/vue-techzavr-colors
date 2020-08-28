<template>
  <ul class="catalog__list">
    <li class="catalog__item" v-for="(product, index) in catalog" :key="index">
      <CatalogItem :product="product" />
    </li>
  </ul>
</template>

<script>
import CatalogItem from './CatalogItem.vue';

export default {
  props: ['catalog'],
  components: {
    CatalogItem,
  },
};
</script>

<style src="../../../public/assets/css/catalog.css" />