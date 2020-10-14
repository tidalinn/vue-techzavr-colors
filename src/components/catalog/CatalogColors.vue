<template>
  <ul class="colors">
    <CatalogColorsItem v-for="color in colors" :key="color.id" :valueColor="color.color" 
                       @select="selectColor" :selected-color="selectedColor" />
  </ul>
</template>

<script>
import CatalogColorsItem from './CatalogColorsItem.vue';

export default {
  data() {
    return {
      selectedColor: null,
    };
  },
  props: ['colors'],
  components: { CatalogColorsItem },
  methods: {
    selectColor(valueColor) {
      this.selectedColor = valueColor;
    },
  },
};
</script>