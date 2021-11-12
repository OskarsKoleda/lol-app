<template>
  <section>
    <h3>Select Game</h3>
    <label for="gameid">Game</label>
    <select id="gameid" v-model="selectedOption">
      <option v-for="(item, index) in gameIDs" :key="index"
        >{{ item }}</option
      >
    </select>
  </section>
</template>

<script>
export default {
  data() {
    return {
      selectedOption: '',
    };
  },
  computed: {
    gameIDs() {
      return this.$store.getters['lastGame/getTenGames'];
    },
  },
  watch: {
    selectedOption() {
      this.$store.dispatch('lastGame/fetchGameData', this.selectedOption);
    },
  },
};
</script>
