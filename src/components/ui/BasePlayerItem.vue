<template>
  <div :class="mode">
    <header>
      <h3>{{ summonerName }}</h3>
      <h3>{{ championName }}</h3>
    </header>
    <main><slot name="marks"></slot></main>
    <footer><slot name="notes"></slot></footer>
  </div>
</template>

<script>
export default {
  props: ['summonerName', 'championName', 'mode'],
};
</script>

<style scoped>
div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 1rem auto;
  max-width: 40rem;
}

h3 {
  margin: 0.5rem auto;
}
.blueTeam {
  background-color: #fff;
}
.redTeam {
  background-color: #fff;
}
</style>
