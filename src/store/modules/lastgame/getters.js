export default {
    getOneGameData(state) {
        return state.lastGameData;
    },
    getTenGames(state) {
        return state.lastTenGames;
    },
    getLengthOfGamesList(_, getters) {
        return getters.getTenGames.length;
    }
};