<template>
  <li class="colors__item" @click="select">
    <label class="colors__label colors__label--catalog">
      <input class="colors__radio sr-only" type="radio" :value="valueColor.color">
      <span class="colors__value" :class="{'colors__value--selected': isSelected}" :style="{'background-color': valueColor.color}"></span>
    </label>
  </li>
</template>

<script>
export default {
  props: ['valueColor', 'selectedColor'],
  computed: {
    isSelected() {
      return this.valueColor.id === this.selectedColor.id;
    },
  },
  methods: {
    select() {
      this.$emit('select', this.valueColor);
    },
  },
};
</script>