<template>
  <div >
    <base-dialog :show="!!error" title="An error occured" @close="handleError">
      <p>{{ error }}</p>
    </base-dialog>

    <actions-menu></actions-menu>

    <div v-if="tenGamesAreLoading">
      <base-spinner></base-spinner>
    </div>
    <select-game-form
      @game-was-changed="loadGameData"
      v-else-if="gameIdsLength > 0 && !tenGamesAreLoading && !error"
    ></select-game-form>

    <div v-if="gameDataIsLoading">
      <base-spinner></base-spinner>
    </div>
    <teams-section
      v-else-if="teams && !gameDataIsLoading"
      :teams="teams"
    ></teams-section>
  </div>
</template>

<script>
import ActionsMenu from '../../components/lastgame/ActionsMenu.vue';
import SelectGameForm from '../../components/lastgame/SelectGameForm.vue';
import BothTeams from '../../components/lastgame/BothTeamsLayout.vue';
export default {
  components: {
    ActionsMenu,
    SelectGameForm,
    TeamsSection: BothTeams,
  },
  data() {
    return {
      error: null,
      tenGamesAreLoading: false,
      gameDataIsLoading: false,
    };
  },
  watch: {
    puuid() {
      this.getLastTenGames();
    },
  },
  methods: {
    handleError() {
      this.error = null;
    },
    async loadGameData(selectedOption) {
      this.gameDataIsLoading = true;
      try {
        await this.$store.dispatch('lastGame/fetchOneGameData', selectedOption);
      } catch (error) {
        this.error = error.message || 'Could not retrieve game data';
      }
      this.gameDataIsLoading = false;
    },
    async getLastTenGames() {
      this.tenGamesAreLoading = true;
      try {
        await this.$store.dispatch('lastGame/fetchLastTenGames');
      } catch (error) {
        this.error = error.message || 'Something went wrong!';
        this.$store.dispatch('reset');
      }
      this.tenGamesAreLoading = false;
    },
  },
  computed: {
    teams() {
      return this.$store.getters['lastGame/getOneGameData'];
    },
    puuid() {
      return this.$store.getters['puuid'];
    },
    gameIdsLength() {
      return this.$store.getters['lastGame/getLengthOfGamesList'];
    },
  },
};
</script>

<style scoped>
</style>
