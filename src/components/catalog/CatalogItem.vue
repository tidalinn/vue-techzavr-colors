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

    <ul class="colors colors--black">
      <!-- eslint-disable vue/no-use-v-if-with-v-for,vue/no-confusing-v-for-v-if -->
      <CatalogItemColor v-for="colorItem in colors" :key="colorItem.id"
                        v-if="product.colorsId.includes(colorItem.id)" 
                        :value-color="colorItem.color" 
                        :check-color="colors[currentColor-1].color" />
    </ul>
  </li>
</template>

<script>
import CatalogItemColor from './CatalogItemColor.vue';
import colors from '../../data/colors';

export default {
  data() {
    return {
      currentColor: this.product.colorsId[0],
    };
  },
  props: ['product'],
  components: { CatalogItemColor },
  computed: {
    colors() {
      return colors;
    },
  },
  methods: {
    productColors() {
      return this.product.colorsId;
    },
  },
};
</script>