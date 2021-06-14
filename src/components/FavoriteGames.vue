<template>
  <div>
    <GamePreview
      v-for="g in games"
      :id="g.id" 
      :hostTeam="g.local_team" 
      :guestTeam="g.visitor_team" 
      :date="g.game_date.split('T')[0]" 
      :hour="g.game_date.split('T')[1].substring(0,5)"
      :hostTeamScore="g.local_team_score"
      :guestTeamScore="g.visitor_team_score"
      :field="g.field"
      :key="g.id"></GamePreview>
  </div>
</template>

<script>
import GamePreview from "./GamePreview.vue";
export default {
  name: "FavoriteGames",
  components: {
    GamePreview
  }, 
  data() {
    return {
      games: []
    };
  },
  methods: {
    async updateFavGames(){
      console.log("response");
      try {
        const response = await this.axios.get(
          "http://localhost:3003/users/favoriteGames",
        );
        const games = response.data;
        this.games = [];
        this.games.push(...games);
      } catch (error) {
        console.log("error in update games")
        console.log(error);
      }
    }
  }, 
  mounted(){
    console.log("favorite games mounted");
    this.updateFavGames(); 
  }
};
</script>

<style></style>
