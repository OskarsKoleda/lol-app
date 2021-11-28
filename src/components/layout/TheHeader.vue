<template>
  <header>
    <nav>
      <h1><router-link to="/">Troll Detector</router-link></h1>
      <base-big-button link v-if="isLoggedIn" to="/ratelastgame"
        >Rate Game</base-big-button
      >
      <base-big-button link v-if="isLoggedIn" to="/"
        >Champion Select</base-big-button
      >
      <base-big-button link v-if="!isLoggedIn" to="/auth"
        >Login</base-big-button
      >
      <base-big-button @click="logout" v-else>Logout</base-big-button>
    </nav>
  </header>
</template>

<script>
import BaseBigButton from '../ui/BaseBigButton.vue';
export default {
  components: { BaseBigButton },
  computed: {
    isLoggedIn() {
      return this.$store.getters['auth/isAuthenticated'];
    },
  },
  methods: {
    logout() {
      this.$store.dispatch('auth/logout');
      this.$router.replace('/auth');
    },
  },
};
</script>

<style scoped>
header {
  width: 100%;
  height: 5rem;
  background-color: #103d3d;
  display: flex;
  justify-content: center;
  align-items: center;
}

header a {
  text-decoration: none;
}

h1 {
  margin: 0;
}

h1 a {
  color: white;
  margin: 0;
}

header nav {
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
