<template>
  <li class="catalog__item">
    <router-link class="catalog__pic" :to="{name: 'product', params: {id: product.id}}">
      <img :src="product.image" :alt="product.title">
    </router-link>
    <h3 class="catalog__title">
      <a href="#"> {{ product.title }} </a>
    </h3>
    <h4 class="catalog__author">
      <a href="#"> {{ product.author }} </a>
    </h4>
    <span class="catalog__price"> {{ product.price | numberFormat }} ₽</span>
    
    <ul class="colors">
      <CatalogColors :class="{'colors--black': actualColors}"
                     v-for="color in actualColors" :key="color.id" :valueColor="color" 
                     @select="selectColor" :selected-color="selectedColor" />
    </ul>
  </li>
</template>

<script>
import colors from '@/data/colors';
import CatalogColors from '@/components/catalog/CatalogColors.vue';
import filteredColors from '@/helpers/filteredColors';
import gotoPage from '@/helpers/gotoPage';
import numberFormat from '@/helpers/numberFormat';

export default {
  data() {
    return {
      selectedColor: {},
    };
  },
  props: ['product'],
  components: { CatalogColors },
  filters: { 
    color: filteredColors,
    numberFormat,
  },
  methods: {
    selectColor(valueColor) {
      this.selectedColor = { id: valueColor.id, color: valueColor.color };
    },
    gotoPage, // defining the helper in methods
  },
  computed: {
    actualColors() {
      return filteredColors(colors, this.product);
    },
  },
};
</script>