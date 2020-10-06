<template>
  <li class="colors__item">
    <label class="colors__label">
      <input class="colors__radio sr-only" type="radio" name="color" :value="color.id" v-model.number="valueColor">
      <span class="colors__value" :style="{'background-color': color.color}">
      </span>
    </label>
  </li>
</template>

<script>
export default {
  props: ['valueColor', 'color'],
};
</script>