import axios from 'axios';
import {
  createStore
} from 'vuex';

import lastGameModule from './modules/lastgame/index.js';

export default createStore({
  modules: {
    lastGame: lastGameModule
  },
  state() {
    return {
      username: '',
      puuid: '',
      region: '',
      APIkey: '',
    }
  },
  getters: {
    username(state) {
      return state.username;
    },
    apikey(state) {
      return state.APIkey;
    },
    puuid(state) {
      return state.puuid;
    }
  },
  actions: {
    setUsername(context, payload) {
      context.commit('setUsername', payload);
    },
    setRegion(context, payload) {
      context.commit('setRegion', payload)
    },
    async fetchPUUID(context, payload) {
      const apiKey = context.rootGetters.apikey;
      const summonerName = payload;
      const url = `http://localhost:8080/lol/summoner/v4/summoners/by-name/${summonerName}`
      const response = await axios.get(url, {
        params: {
          api_key: apiKey
        }
      });
      if (response.statusText !== 'OK') {
        console.log("actions.js: BAD RESPONSE");
        const error = new Error("Response returned with the following status: " + response.status);
        throw error;
      }

      const puuid = response.data.puuid;
      context.commit('setPUUID', puuid)
    }
  },
  mutations: {
    setUsername(state, payload) {
      state.username = payload;
    },
    setPUUID(state, payload) {
      state.puuid = payload;
    },
    setRegion(state, payload) {
      state.region = payload;
    }
  },
});