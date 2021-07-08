<template>
  <div>
    <b-container>
      <b-row>
        <b-col>
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
      :events="g.events"
      :key="g.game_id"></GamePreview>
      </b-col>
      <b-col>
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
      </b-col>
      </b-row>
    </b-container>
      
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
      // events: []
    };
  },
  methods: {
    async updateAllGames(){
      try {
        const response = await this.axios.get(
          "http://localhost:3003/games/viewGames",
        );
        console.log(response.data);

        const past_games = response.data[0][0];
        const future_games = response.data[0][1];
        this.past_games = [];
        this.future_games = [];

        this.past_games.push(...past_games);
        this.future_games.push(...future_games);

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
