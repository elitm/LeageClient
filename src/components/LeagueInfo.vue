<template>
    <div class="league-preview">
      <b-card
      img-alt="Image"
      tag="article"
      style="max-width: 20rem;"
      class="mb-2"
    >
      <b-card-title>{{leagueName}}</b-card-title>
      <b-card-text> 
        Season: {{ season }}
        <br>
        Stage: {{ stage }}
        <br>
        Next Game: <GamePreview 
          :id="nextGame.game_id"
          :hostTeam="nextGame.local_team" 
          :guestTeam="nextGame.visitor_team" 
          :hostId="nextGame.local_team_id"
          :guestId="nextGame.visitor_team_id"
          :date="nextGame.game_date" 
          :hour="nextGame.game_date"
          :field="nextGame.field"
        ></GamePreview>
      </b-card-text>
      <b-button href="#" variant="primary">Go somewhere</b-button>
    </b-card>
  </div>
</template>

<script>
import GamePreview from "./GamePreview.vue";
export default {
    name: "LeagueInfo",
    components: {
    GamePreview
  }, 
 data() {
    return {
      leagueName: "", 
      season: "", 
      stage: "",
      nextGame: {}
    };
  },
  methods:{
    async LeagueDetails(){
      try{
        console.log("league Info From Server");
        this.axios.defaults.withCredentials = true;
            const response = await this.axios.get(
            "http://localhost:3003/league/getDetails",);

        this.leagueName = response.data.league_name;
        this.season = response.data.current_season_name;
        this.stage = response.data.current_stage_name;
        this.nextGame = response.data.next_game[0];
      }
      catch (error) {
        console.log("error in league info")
        console.log(error);
    }
  }},
  mounted(){
    this.LeagueDetails();
     }
};
</script>

<style>
.league-preview {
  display: inline-block;
  width: 250px;
  height: 200px;
  position: relative;
  margin: 10px 10px;
  border-style: solid;
  border-radius: 10px;
  border-width: 5px;
  border-color:rgb(44, 89, 116);
}

.league-preview .league-title {
  text-align: center;
  text-transform: uppercase;
  color:  rgb(111, 155, 197);
}

.league-preview .league-content {
  width: 100%;
  overflow: hidden;
}

</style>