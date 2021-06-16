<template>
  <div class="container">
    <h1 class="title">Main Page</h1>
    <LoginPage v-if="!$root.store.username"></LoginPage>
    <FavoriteGames v-else></FavoriteGames>
    <LeagueInfo></LeagueInfo>
  </div>
</template>

<script>
import LeagueInfo from "../components/LeagueInfo";
import FavoriteGames from "../components/FavoriteGames";
import LoginPage from "../pages/LoginPage";
export default {
  components: {
    LeagueInfo, 
    LoginPage, 
    FavoriteGames
  }
};
</script>

<style lang="scss" scoped>
</style>
