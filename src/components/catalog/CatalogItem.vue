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
      <CatalogItemColor v-for="valueColor in colors" :key="valueColor.hue" :valueColor="valueColor.hue" :itemColor="activeColor"  />
    </ul>
  </li>
</template>

<script>
import CatalogItemColor from './CatalogItemColor.vue';

export default {
  data() {
    return {
      activeColor: '#73B6EA',
      colors: [
        { hue: '#73B6EA' }, 
        { hue: '#8BE000' }, 
        { hue: '#222' },
      ],
    };
  },
  props: ['product'],
  components: { CatalogItemColor },
};
</script>