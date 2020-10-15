<template>
  <ul class="catalog__list">
    <CatalogItem v-for="product in catalog" :key="product.id" :product="product" 
                  @gotoPage="(pageName, pageParams) => $emit('gotoPage', pageName, pageParams)" />
  </ul>
</template>

<script>
import CatalogItem from '@/components/catalog/CatalogItem.vue';

export default {
  props: ['catalog'],
  components: { CatalogItem },
};
</script>

<style src="../../../public/assets/css/catalog.css" />