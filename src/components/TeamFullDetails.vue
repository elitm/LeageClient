<template>
  <div class="team-full-details">
    <b-card
      img-alt="Image"
      tag="article"
      style="max-width: 20rem;"
      class="mb-2"
    >
      <b-card-title>{{teamName}}</b-card-title>
     
    <b-card-text> Players:
        <PlayerPreview
            v-for="p in players"
            :name="p.name"
            :imageUrl="p.imageUrl"
            :position="p.position"
            :key="p.name">
        </PlayerPreview>
    </b-card-text>

      <b-card-text> Games:
        <GamePreview
            v-for="g in games"
            :id="g.game_id" 
            :hostTeam="g.local_team" 
            :guestTeam="g.visitor_team" 
            :date="g.game_date.split('T')[0]" 
            :hour="g.game_date.split('T')[1].substring(0,5)"
            :hostTeamScore="g.local_team_score"
            :guestTeamScore="g.visitor_team_score"
            :field="g.field"
            :key="g.game_id">
        </GamePreview>
      </b-card-text>
    </b-card>

  </div>
</template>

<script>
import GamePreview from "./GamePreview.vue";
import PlayerPreview from './PlayerPreview.vue';
export default {
    name: "TeamFullDetails",
    components: {
        GamePreview,
        PlayerPreview
  }, 
 data() {
    return {
      teamName: "", 
      players: [],
      games:[]
    };
  },
  methods:{
    async TeamDetails(){
      let teamNumber = 85;
      try{
        console.log("team Info From Server");
        // this.axios.defaults.withCredentials = true;
            const response = await this.axios.get(
            `http://localhost:3003/teams/teamFullDetails/${teamNumber}`,);
 
        const players = response.data[0];
        this.players = [];
        this.players.push(...players);

        this.teamName = response.data[0][0].team_name;
        if (response.data[1]) // if this team has games
         {  
            const games = response.data[1][0]
            this.games = [];
            this.games.push(...games);
         }
      }
      catch (error) {
        console.log("error in team full details")
        console.log(error);
    }
  }},
  mounted(){
    this.TeamDetails(); 
     }
};
</script>

<style>

</style>
