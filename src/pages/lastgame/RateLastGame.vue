<template>
  <actions-menu @get-last-game-data="loadLastGameData"></actions-menu>
  <select-game-form v-if="puuid && !tenGamesAreLoading">
    
  </select-game-form>
  <div v-if="teams" class="main-container">
    <div class="teams-container blue-team">
      <ul>
        <base-player-item
          v-for="player in teams.blueTeam"
          :key="player.summonerName"
          :summonerName="player.summonerName"
          :championName="player.championName"
          mode="blueTeam"
        ></base-player-item>
      </ul>
    </div>
    <div class="teams-container red-team">
      <ul>
        <base-player-item
          v-for="player in teams.redTeam"
          :key="player.summonerName"
          :summonerName="player.summonerName"
          :championName="player.championName"
          mode="redTeam"
        ></base-player-item>
      </ul>
    </div>
  </div>
</template>

<script>
import ActionsMenu from '../../components/lastgame/ActionsMenu.vue';
import SelectGameForm from '../../components/lastgame/SelectGameForm.vue';
export default {
  components: {
    ActionsMenu,
    SelectGameForm,
  },
  data() {
    return {
      tenGamesAreLoading: false,
    };
  },
  watch: {
    puuid() {
      console.log('PUUID CHANGED');
      this.getLastTenGame();
    },
  },
  methods: {
    async loadLastGameData() {
      try {
        await this.$store.dispatch('lastGame/fetchLastGameData');
      } catch (error) {
        console.log('THERE WAS AN ERROR: ' + error);
      }
    },
    async getLastTenGame() {
      this.tenGamesAreLoading = true;
      try {
        await this.$store.dispatch('lastGame/fetchLastTenGames');
      } catch (error) {
        console.log(error);
      }
      this.tenGamesAreLoading = false;
    },
  },
  computed: {
    teams() {
      return this.$store.getters['lastGame/getTeams'];
    },
    puuid() {
      return this.$store.getters['puuid'];
    },
  },
};
</script>

<style scoped>
.main-container {
  display: flex;
}
.teams-container {
  width: 50%;
}

.blue-team {
  background-color: rgb(94, 202, 202);
}

.red-team {
  background-color: rgb(202, 77, 102);
}

ul {
  padding: 20px 0;
}
</style>
