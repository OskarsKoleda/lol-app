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
  created() {
    this.$store.dispatch('auth/tryLogin');
  },
  computed: {
    didAutoLogout() {
      return this.$store.getters['auth/didAutoLogout']
    }
  },
  watch: {
    didAutoLogout(currentValue, oldValue) {
      if (currentValue && currentValue !== oldValue) {
        this.$router.replace('auth');
      }
    }
  }
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
  padding: 0;
  background-color: #e4e9de;
  color: #923e43;
}
</style>
