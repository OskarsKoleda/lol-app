import axios from 'axios';

export default {
    async fetchOneGameData(context, payload) {
        const matchEndpoint = process.env.VUE_APP_RIOT_MATCH_DATA_BY_MATCH_ID;
        const apiKey = process.env.VUE_APP_API_KEY;
        const url = `http://localhost:8080${matchEndpoint}${payload}`
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

        const twoTeams = {
            blueTeam: [],
            redTeam: []
        };

        for (const participant of response.data.info.participants) {

            if (participant.teamId === 100) {
                twoTeams.blueTeam.push({
                    summonerName: participant.summonerName,
                    championName: participant.championName
                })
            } else {
                twoTeams.redTeam.push({
                    summonerName: participant.summonerName,
                    championName: participant.championName
                })
            }
        };
        context.commit('setLastGameData', twoTeams)
    },
    async fetchLastTenGames(context) {
        const apiKey = process.env.VUE_APP_API_KEY;
        const matchIdEndpoint = process.env.VUE_APP_RIOT_MATCH_IDS_BY_PUUID;
        const userPUUID = context.rootGetters.puuid;
        const url = `http://localhost:8080${matchIdEndpoint}${userPUUID}/ids`
        const response = await axios.get(url, {
            params: {
                api_key: apiKey,
                count: '10'
            }
        });

        if (response.statusText !== 'OK') {
            console.log("actions.js: BAD RESPONSE");
            const error = new Error("Response returned with the following status: " + response.status);
            throw error;
        }
        const lastTenGamesObj = response.data;
        context.commit('setLastTenGames', lastTenGamesObj)
    },

    async saveSummonerCommentToDB(_, payload) {
        const summoner = payload.summoner;
        const endpoint = process.env.VUE_APP_FIREBASE_SUMMONERSCOMMENTS_URL;
        const url = `${endpoint}${summoner}.json`;

        const response = await axios.post(url,
            payload.formData
        );

        if (response.statusText !== 'OK') {
            const error = new Error("Could not save the summoner comment: " + response.status)
            throw error;
        }
    }
};