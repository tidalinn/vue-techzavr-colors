<template>
  <main class="content container">
    <div class="content__top">
      <ul class="breadcrumbs">
        <li class="breadcrumbs__item">
          <router-link class="breadcrumbs__link" :to="{name: 'main'}">Каталог</router-link>
        </li>
        <li class="breadcrumbs__item">
          <router-link class="breadcrumbs__link" :to="{name: 'main'}">{{ category.title }}</router-link>
        </li>
        <li class="breadcrumbs__item">
          <a class="breadcrumbs__link">{{ product.title }}</a>
        </li>
      </ul>
    </div>

    <section class="item">
      <div class="item__pics pics">
        <div class="pics__wrapper">
          <img width="300" :src="product.image" :alt="product.title">
        </div>

        <!-- Gallery -->
        <!-- <ul class="pics__list">
          <li class="pics__item">
            <a href="" class="pics__link pics__link--current">
              <img width="98" height="98" src="img/phone-square-1.jpg" srcset="img/phone-square-1@2x.jpg 2x" alt="Название товара">
            </a>
          </li>
        </ul> -->
      </div>

      <div class="item__info">
        <span class="item__code">Артикул: {{ product.id }}</span>
        <h2 class="item__title">{{ product.title }}</h2>
        <h3 class="item__author">{{ product.author }}</h3>
        <div class="item__form">
          <form class="form" action="#" method="POST" @submit.prevent="addToCart">
            <b class="item__price">{{ product.price | numberFormat }} ₽</b>

            <!-- Colors -->
            <fieldset class="form__block">
              <legend class="form__legend">Цвет:</legend>
              <BaseColors :colors="actualColors" @change-color="getColor" />
            </fieldset>

            <div class="item__row">
              <BaseAddReduceAmount v-model.number="productAmount" :amount="productAmount" :width="12" />
              <button class="button button--primery" type="submit">В корзину</button>
            </div>
          </form>
        </div>
      </div>

      <div class="item__desc">
        <ul class="tabs">
          <li class="tabs__item">
            <a class="tabs__link tabs__link--current">Описание</a>
          </li>
          <li class="tabs__item">
            <a class="tabs__link" href="#">Характеристики</a>
          </li>
          <li class="tabs__item">
            <a class="tabs__link" href="#">Гарантия</a>
          </li>
          <li class="tabs__item">
            <a class="tabs__link" href="#">Оплата и доставка</a>
          </li>
        </ul>

        <div class="item__content">
          <p>{{ product.description }}</p>
          
          <a href="#">Все характеристики</a>

          <div class="item__details">
            <p>Автор: <span>{{ product.author }}</span></p>
            <p>Обложка: <span>{{ product.cover }}</span></p>
            <p>Издательство: <span>{{ product.publisher }}</span></p>
            <p>Количество страниц: <span>{{ product.pages }}</span></p>
            <p>Год издания: <span>{{ product.year }} год</span></p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import BaseColors from '@/components/BaseColors.vue';
import BaseAddReduceAmount from '@/components/BaseAddReduceAmount.vue';
import catalog from '@/data/catalog';
import categories from '@/data/categories';
import colors from '@/data/colors';
import gotoPage from '@/helpers/gotoPage';
import numberFormat from '@/helpers/numberFormat';
import filteredColors from '@/helpers/filteredColors';

export default {
  data() {
    return {
      colorFromChildConponent: null,
      productAmount: 1,
    };
  },
  components: { BaseColors, BaseAddReduceAmount },
  filters: {
    numberFormat,
  },
  methods: {
    getColor(color) {
      this.colorFromChildConponent = color;
    },
    addToCart() {
      this.$store.commit(
        'addProductToCart',
        { productId: this.product.id, amount: this.productAmount },
      );
    },
    gotoPage,
  },
  computed: {
    product() {
      return catalog.find((product) => product.id === +this.$route.params.id);
    },
    category() {
      return categories.find((category) => category.id === this.product.categoryId);
    },
    actualColors() {
      return filteredColors(colors, this.product);
    },
  },
};
</script>