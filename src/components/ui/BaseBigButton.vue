<template>
  <button v-if="!link">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    link: {
      type: Boolean,
      required: false,
      default: false,
    }
  },
};
</script>

<style scoped>
button,
a {
  text-decoration: none;
  padding: 0.4rem 1rem;
  margin-left: 1rem;
  font: inherit;
  background-color: #3a0061;
  border: 1px solid #3a0061;
  color: white;
  cursor: pointer;
}

a:hover,
a:active,
button:hover,
button:active {
  background-color: #270041;
  border-color: #270041;
}


</style>