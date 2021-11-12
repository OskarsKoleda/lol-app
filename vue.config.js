module.exports = {
  devServer: {
    proxy: {
      '^/lol/match': {
        target: 'https://europe.api.riotgames.com/',
        changeOrigin: true,
        logLevel: "debug",
      },
      '^/lol/summoner': {
        target: 'https://eun1.api.riotgames.com/',
        changeOrigin: true,
        logLevel: "debug",
      },
    }
  }
}