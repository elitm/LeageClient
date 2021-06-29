<template>
  <div>  
    <h1 class="title">Main Page</h1>
  <b-container class="container">
    <b-row>
      <b-col>
        <LeagueInfo></LeagueInfo>
      </b-col>
      <b-col>
        <LoginPage v-if="!$root.store.username"></LoginPage> 
        <span v-else>
          <h3>My Favorite Games:</h3>
          <FavoriteGames ></FavoriteGames>
        </span>
      </b-col>
    </b-row>
  </b-container>
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
