<template>
  <li class="catalog__item">
    <a class="catalog__pic" href="#">
      <img :src="product.image" :alt="product.title">
    </a>
    <h3 class="catalog__title">
      <a href="#"> {{ product.title }} </a>
    </h3>
    <h4 class="catalog__author">
      <a href="#"> {{ product.author }} </a>
    </h4>
    <span class="catalog__price"> {{ product.price }} ₽</span>
    
    <CatalogColors :class="{'colors--black': actualColors}" :colors="actualColors" />
  </li>
</template>

<script>
import colors from '../../data/colors';
import CatalogColors from './CatalogColors.vue';
import filteredColors from '../../helpers/filteredColors';

export default {
  props: ['product'],
  components: { CatalogColors },
  filters: { 
    color: filteredColors,
  },
  computed: {
    actualColors() {
      return filteredColors(colors, this.product);
    },
  },
};
</script>