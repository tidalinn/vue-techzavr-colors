<template>
  <fieldset class="form__block">
    <legend class="form__legend">Категория</legend>
    <label class="form__label form__label--select">
      <select class="form__select" type="text" name="category" v-model.number="categoryId">
        <option value="0">Все категории</option>
        <option :value="category.id" v-for="category in categories" :key="category.id">{{ category.title }}</option>
      </select>
    </label>
  </fieldset>
</template>

<script>
import categories from '../../data/categories';

export default {
  props: ['categoryId'],
  computed: {
    categories() {
      return categories;
    },
  },
};
</script>