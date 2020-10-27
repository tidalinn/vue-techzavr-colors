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
    
    <BaseColors :class="{'colors--black': actualColors}" :colors="actualColors" @change-color="getColor" />
  </li>
</template>

<script>
import BaseColors from '@/components/BaseColors.vue';
import colors from '@/data/colors';
import filteredColors from '@/helpers/filteredColors';
import gotoPage from '@/helpers/gotoPage';
import numberFormat from '@/helpers/numberFormat';

export default {
  data() {
    return {
      colorFromChildConponent: null,
    };
  },
  props: ['product'],
  components: { BaseColors },
  filters: { 
    color: filteredColors,
    numberFormat,
  },
  methods: {
    getColor(color) {
      this.colorFromChildConponent = color;
    },
    gotoPage,
  },
  computed: {
    actualColors() {
      return filteredColors(colors, this.product);
    },
  },
};
</script>