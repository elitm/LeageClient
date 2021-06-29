<template>
  <div>
      <p> past games: </p>
    <GamePreview
      v-for="g in past_games"
      :id="g.game_id" 
      :hostTeam="g.local_team" 
      :guestTeam="g.visitor_team" 
      :hostId="g.local_team_id"
      :guestId="g.visitor_team_id"
      :date="g.game_date" 
      :hour="g.game_date"
      :hostTeamScore="g.local_team_score"
      :guestTeamScore="g.visitor_team_score"
      :field="g.field"
      :key="g.game_id"></GamePreview>

     <p> future games: </p>
    <GamePreview
      v-for="g in future_games"
      :id="g.game_id" 
      :hostTeam="g.local_team" 
      :guestTeam="g.visitor_team" 
      :hostId="g.local_team_id"
      :guestId="g.visitor_team_id"
      :date="g.game_date" 
      :hour="g.game_date"
      :field="g.field"
      :key="g.game_id"></GamePreview>

      
  </div>
</template>

<script>
import GamePreview from "./GamePreview.vue";
export default {
  name: "AllGames",
  components: {
    GamePreview
  }, 
  data() {
    return {
    //   games: [],
      past_games: [],
      future_games: [],
      events: []
    };
  },
  methods: {
    async updateAllGames(){
      console.log("response");
      try {
        const response = await this.axios.get(
          "http://localhost:3003/games/viewGames",
        );
        console.log(response.data);
        // const games = response.data[0];
        const past_games = response.data[0][0];
        const future_games = response.data[0][1];
        const events = response.data[1];
        // this.games = [];
        this.past_games = [];
        this.future_games = [];
        this.events = [];
        // this.games.push(...games);
        this.past_games.push(...past_games);
        this.future_games.push(...future_games);
        this.events.push(...events);

      } catch (error) {
        console.log("error in update games")
        console.log(error);
      }
    }
  }, 
  mounted(){
    console.log("all games mounted");
    this.updateAllGames(); 
  }
};
</script>

<style></style>
