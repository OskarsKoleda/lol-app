import axios from 'axios';


export default {
    async fetchGameData(context, payload) {
        const apiKey = context.rootGetters.apikey;
        const url = `http://localhost:8080/lol/match/v5/matches/${payload}`
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

        const teams = {
            blueTeam: [],
            redTeam: []
        };

        for (const participant of response.data.info.participants) {

            if (participant.teamId === 100) {
                teams.blueTeam.push({
                    summonerName: participant.summonerName,
                    championName: participant.championName
                })
            } else {
                teams.redTeam.push({
                    summonerName: participant.summonerName,
                    championName: participant.championName
                })
            }
        };
        context.commit('setLastGameData', teams)
    },
    async fetchLastTenGames(context) {
        const apiKey = context.rootGetters.apikey;
        const userPUUID = context.rootGetters.puuid;
        const url = `http://localhost:8080/lol/match/v5/matches/by-puuid/${userPUUID}/ids`
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

        console.log("COMMITING LAST TEN GAMES");
        let lastTenGamesObj = {
            ...response.data
        };

        context.commit('setLastTenGames', lastTenGamesObj)
    }
};