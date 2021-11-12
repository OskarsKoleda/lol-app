<template>
  <the-header></the-header>
  <router-view></router-view>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
export default {
  components: {
    TheHeader,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Mochiy+Pop+P+One&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Mochiy Pop P One', sans-serif;
}

body {
  margin: 0;
  background-color: #e4e9de;
  color: #923e43;
}
</style>
