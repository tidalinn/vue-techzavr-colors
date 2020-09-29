<template>
  <li class="colors__item">
    <label class="colors__label">
      <input class="colors__radio sr-only" type="radio" :value="valueColor" v-model="itemColor">
      <span class="colors__value" v-bind:style="{'background-color': valueColor}"></span>
    </label>
  </li>
</template>

<script>
export default {
  props: ['itemColor', 'valueColor'],
};
</script>