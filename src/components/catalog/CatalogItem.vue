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
    
    <ul class="colors" :class="{'colors--black': actualColors}" >
      <li class="colors__item" v-for="color in actualColors" :key="color.id">
        <label class="colors__label colors__label--catalog">
          <input class="colors__radio sr-only" type="radio" :value="color.color" v-model="selectedColor">
          <span class="colors__value" :class="{'colors__value--selected': selectColor}" :style="{'background-color': color.color}"></span>
        </label>
      </li>
    </ul>
  </li>
</template>

<script>
import colors from '@/data/colors';
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
  filters: { 
    color: filteredColors,
    numberFormat,
  },
  methods: {
    selectColor(valueColor) {
      this.selectedColor = valueColor;
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