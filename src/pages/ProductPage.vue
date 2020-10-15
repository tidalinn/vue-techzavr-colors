<template>
  <main class="content container">
    <div class="content__top">
      <ul class="breadcrumbs">
        <li class="breadcrumbs__item">
          <a class="breadcrumbs__link" href="#" @click.prevent="gotoPage('main')">Каталог</a>
        </li>
        <li class="breadcrumbs__item">
          <a class="breadcrumbs__link" href="#" @click.prevent="gotoPage('main')">{{ category.title }}</a>
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
          <form class="form" action="#" method="POST">
            <b class="item__price">{{ product.price | numberFormat }} ₽</b>

            <!-- Colors -->
            <fieldset class="form__block">
              <legend class="form__legend">Цвет:</legend>
              <ul class="colors">
                <CatalogColors v-for="color in actualColors" :key="color.id" :valueColor="color.color" 
                               @select="selectColor" :selected-color="selectedColor" />
              </ul>
            </fieldset>

            <div class="item__row">
              <div class="form__counter">
                <button type="button" aria-label="Убрать один товар">
                  <svg width="12" height="12" fill="currentColor">
                    <use xlink:href="#icon-minus"></use>
                  </svg>
                </button>

                <input type="text" value="1" name="count">

                <button type="button" aria-label="Добавить один товар">
                  <svg width="12" height="12" fill="currentColor">
                    <use xlink:href="#icon-plus"></use>
                  </svg>
                </button>
              </div>

              <button class="button button--primery" type="submit">
                В корзину
              </button>
            </div>
          </form>
        </div>
      </div>

      <div class="item__desc">
        <ul class="tabs">
          <li class="tabs__item">
            <a class="tabs__link tabs__link--current">
              Описание
            </a>
          </li>
          <li class="tabs__item">
            <a class="tabs__link" href="#">
              Характеристики
            </a>
          </li>
          <li class="tabs__item">
            <a class="tabs__link" href="#">
              Гарантия
            </a>
          </li>
          <li class="tabs__item">
            <a class="tabs__link" href="#">
              Оплата и доставка
            </a>
          </li>
        </ul>

        <div class="item__content">
          <p>{{ product.description }}</p>
          
          <a href="#">
            Все характеристики
          </a>

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
import CatalogColors from '@/components/catalog/CatalogColors.vue';
import catalog from '@/data/catalog';
import categories from '@/data/categories';
import colors from '@/data/colors';
import gotoPage from '@/helpers/gotoPage';
import numberFormat from '@/helpers/numberFormat';
import filteredColors from '@/helpers/filteredColors';

export default {
  data() {
    return {
      selectedColor: null,
    };
  },
  props: ['pageParams'],
  components: { CatalogColors },
  filters: {
    numberFormat,
  },
  methods: {
    selectColor(valueColor) {
      this.selectedColor = valueColor;
    },
    gotoPage, // defining the helper in methods
  },
  computed: {
    product() {
      return catalog.find((product) => product.id === this.pageParams.id);
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