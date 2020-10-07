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
      <CatalogItemColor v-for="color in actualColors" :key="color.id"
                        :value-color="color.color" 
                        :check-color.sync="actualColors[0]" />
    </ul>
  </li>
</template>

<script>
import CatalogItemColor from './CatalogItemColor.vue';
import colors from '../../data/colors';
import filteredColors from '../../helpers/filteredColors';

export default {
  props: ['product'],
  components: { CatalogItemColor },
  filters: { filteredColors },
  methods: {
    productColors() {
      return this.product.colorsId;
    },
  },
  computed: {
    actualColors() {
      return filteredColors(colors, this.product);
    },
  },
};
</script>