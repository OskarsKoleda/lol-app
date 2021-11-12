<template>
  <div class="main-container">
    <div v-if="summonerName" class="buttons-container">
      <base-big-button @click="this.$emit('get-last-game-data')"
        >Last Game</base-big-button
      >
      <base-big-button>Save Rates</base-big-button>
      <base-big-button>Clear</base-big-button>
    </div>
    <div v-else class="buttons-container">
      <h2>Please enter summoner name!</h2>
    </div>
    <div class="form-container">
      <enter-nickname-form></enter-nickname-form>
    </div>
  </div>
</template>

<script>
import EnterNicknameForm from './EnterNicknameForm.vue';

export default {
  components: {
    EnterNicknameForm,
  },
  emits: ['get-last-game-data'],
  computed: {
    summonerName() {
      return this.$store.getters['username'];
    },
  },
};
</script>

<style scoped>
.main-container {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 0 5rem 0 5rem;
}

.buttons-container {
  display: flex;
  flex-basis: 60%;
  align-items: center;
  justify-content: center;
}

h2 {
  margin: 0 auto;
}
</style>
