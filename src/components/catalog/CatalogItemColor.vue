<template>
  <li class="colors__item">
    <label class="colors__label colors__label--catalog">
      <input class="colors__radio sr-only" type="radio" :value="valueColor" v-model="checkColor">
      <span class="colors__value" :style="{'background-color': valueColor}"></span>
    </label>
  </li>
</template>

<script>
export default {
  props: ['valueColor', 'checkColor'],
};
</script>