<template>
  <li class="colors__item">
    <label class="colors__label colors__label--catalog">
      <input class="colors__radio sr-only" type="radio" :value="valueColor" v-model="currentColorId">
      <span class="colors__value" :style="{'background-color': valueColor}"></span>
    </label>
  </li>
</template>

<script>
export default {
  data() {
    return {
      currentColorId: 0,
    };
  },
  props: ['valueColor', 'checkColor'],
  metods: {
    increment() {
      this.$emit('update:checkColor', this.currentColorId);
    },
  },
};
</script>