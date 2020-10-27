<template>
  <ul class="colors" >
    <li class="colors__item" v-for="color in colors" :key="color.id">
      <label class="colors__label colors__label--catalog">
        <input class="colors__radio sr-only" type="radio" :value="color.id" v-model="currentColor">
        <span class="colors__value" :class="{'colors__value--selected': currentColor}" 
                                    :style="{'background-color': color.color}">
        </span>
      </label>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    colors: Array,
  },
  data() {
    return {
      currentColor: null,
    };
  },
  watch: {
    currentColor() {
      this.$emit('change-color', this.currentColor);
    },
  },
};
</script>