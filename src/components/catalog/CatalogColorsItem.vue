<template>
  <li class="colors__item" @click="select">
    <label class="colors__label colors__label--catalog">
      <input class="colors__radio sr-only" type="radio" :value="valueColor">
      <span class="colors__value" :class="{'colors__value--selected': isSelected}" :style="{'background-color': valueColor}"></span>
    </label>
  </li>
</template>

<script>
export default {
  props: ['valueColor', 'selectedColor'],
  computed: {
    isSelected() {
      return this.valueColor === this.selectedColor;
    },
  },
  methods: {
    select() {
      this.$emit('select', this.valueColor);
    },
  },
};
</script>