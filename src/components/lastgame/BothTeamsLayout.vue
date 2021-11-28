<template>
  <div>
    <div class="main-container">
      <div class="teams-container blue-team">
        <ul>
          <li v-for="player in teams.blueTeam" :key="player.summonerName">
            <base-player-item
              :summonerName="player.summonerName"
              :championName="player.championName"
              mode="blueTeam"
            >
              <template v-slot:ratings>
                <add-summoner-rating
                  :akey="player.summonerName"
                ></add-summoner-rating>
              </template>
              <template v-slot:notes>
                <add-summoner-comments-section
                  :summonerName="player.summonerName"
                >
                </add-summoner-comments-section>
              </template>
            </base-player-item>
          </li>
        </ul>
      </div>
      <div class="teams-container red-team">
        <ul>
          <li v-for="player in teams.redTeam" :key="player.summonerName">
            <base-player-item
              :summonerName="player.summonerName"
              :championName="player.championName"
              mode="redTeam"
            >
              <template v-slot:ratings>
                <add-summoner-rating
                  :akey="player.summonerName"
                ></add-summoner-rating>
              </template>
              <template v-slot:notes>
                <add-summoner-comments-section
                  :summonerName="player.summonerName"
                >
                </add-summoner-comments-section>
              </template>
            </base-player-item>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import AddSummonerCommentsSection from './AddSummonerComment.vue';
import AddSummonerRating from './AddSummonerRating.vue';
export default {
  components: {
    AddSummonerCommentsSection,
    AddSummonerRating,
  },
  props: ['teams'],
  data() {
    return { val: 'test' };
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

li {
  list-style: none;
}
</style>
