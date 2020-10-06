<template>
  <ul class="catalog__list">
    <CatalogItem v-for="product in catalog" :key="product.id" :product="product" />
  </ul>
</template>

<script>
import CatalogItem from './CatalogItem.vue';

export default {
  props: ['catalog'],
  components: { CatalogItem },
};
</script>

<style src="../../../public/assets/css/catalog.css" />