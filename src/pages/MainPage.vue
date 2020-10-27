<template>
  <main class="content container">
    <div class="content__top content__top--catalog">
      <h1 class="content__title">Каталог</h1>
      <span class="content__info">{{ countProducts }} {{ countProducts | wordDecline(['товар', 'товара', 'товаров']) }}</span>
    </div>
    <div class="content__catalog"> 
      <CatalogFilter :price-from.sync="filterPriceFrom" 
                     :price-to.sync="filterPriceTo" 
                     :category-id.sync="filterCategoryId"
                     :color-code.sync="filterColor" />
      <section class="catalog">
        <h4 class="catalog__void" v-if="products.length === 0">Упс, здесь ничего нет</h4>
        <CatalogList :catalog="products" />
        <BasePagination v-model="page" :page="page" :count="countProducts" :per-page="productsPerPage" />  
      </section>
    </div>
  </main>
</template>

<script>
import catalog from '@/data/catalog';
import CatalogList from '@/components/catalog/CatalogList.vue';
import BasePagination from '@/components/BasePagination.vue';
import CatalogFilter from '@/components/catalog/CatalogFilter.vue';
import wordDecline from '@/helpers/wordDecline';

export default {
  components: { CatalogList, BasePagination, CatalogFilter },
  data() {
    return {
      page: 1,
      productsPerPage: 6,
      filterPriceFrom: 0,
      filterPriceTo: 0,
      filterCategoryId: 0,
      filterColor: 0,
    };
  },
  filters: { wordDecline },
  computed: {
    filteredCatalog() {
      let filteredCatalog = catalog;

      if (this.filterPriceFrom > 0) {
        filteredCatalog = filteredCatalog.filter((product) => product.price > this.filterPriceFrom);
      }
      if (this.filterPriceTo > 0) {
        filteredCatalog = filteredCatalog.filter((product) => product.price < this.filterPriceTo);
      }
      if (this.filterCategoryId > 0) {
        filteredCatalog = filteredCatalog.filter((product) => product.categoryId === this.filterCategoryId);
      }
      if (this.filterColor !== 0) {
        filteredCatalog = filteredCatalog.filter((product) => product.colorsId.includes(this.filterColor));
      }
      return filteredCatalog;
    },
    products() {
      const offset = (this.page - 1) * this.productsPerPage;
      return this.filteredCatalog.slice(offset, offset + this.productsPerPage);
    },
    countProducts() {
      return this.filteredCatalog.length;
    },
  },
};
</script>