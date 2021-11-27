<template>
  <section>
    <h4>Select Game</h4>
    <select id="gameid" v-model="selectedOption">
      <option v-for="(item, index) in gameIDs" :key="index">{{ item }}</option>
    </select>
  </section>
</template>

<script>
export default {
  emits: ['game-was-changed'],
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
      this.$emit('game-was-changed', this.selectedOption)
    },
  },
};
</script>

<style scoped>
h4 {
  margin: 0 1rem;
}
section {
  margin: 1rem auto;
  display: flex;
  justify-content: center;
}
</style>
