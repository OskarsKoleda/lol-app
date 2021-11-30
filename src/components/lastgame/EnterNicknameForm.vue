<template>
  <div>
    <base-dialog :show="!!error" title="An error occured" @close="handleError">
      <p>{{ error }}</p>
    </base-dialog>
    <form @submit.prevent>
      <div class="form-elements">
        <div class="form-control">
          <label for="summonerName">Summoner Name</label>
          <input type="text" id="summonerName" v-model="summonerName" />
        </div>
        <div class="form-control">
          <label for="region">Region</label>
          <select id="region" v-model="selectedRegion">
            <option v-for="reg in regions" :key="reg.key">{{ reg.reg }}</option>
          </select>
        </div>
        <base-big-button @click="submitForm">Search</base-big-button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  emits: ['save-data'],
  data() {
    return {
      summonerName: 'Rogopop',
      regions: [
        { key: 1, reg: 'EUN1' },
        { key: 2, reg: 'EUW1' },
        { key: 3, reg: 'NA1' },
      ],
      selectedRegion: 'EUN1',
      error: null,
    };
  },
  methods: {
    handleError() {
      this.error = null;
    },
    ...mapActions({
      saveSummonerName: 'setUsername',
      saveRegion: 'setRegion',
      fetchPUUID: 'fetchPUUID',
    }),
    async submitForm() {
      this.saveSummonerName(this.summonerName);
      this.saveRegion(this.selectedRegion);
      try {
        await this.fetchPUUID(this.summonerName);
      } catch (error) {
        console.log(' ASDSDHKADKJAHDKAjdhs');
        this.error = error.message || 'Couldnt load PUUID';
      }
    },
  },
  computed: {
    summonerNameValue() {
      return this.$store.getters['username'];
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
}
.form-elements {
  display: flex;
  align-items: center;
}
.form-control {
  display: flex;
  align-items: center;
  margin: 0.5rem 0;
}

label {
  margin-right: 1rem;
  font-size: 8pt;
  font-weight: bold;
}

input {
  width: 50%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}
</style>
