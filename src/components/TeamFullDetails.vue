<template>
  <div class="team-full-details">
    <div :title="teamName" class="team-title">
      <b>{{ teamName }}</b> 
    </div >
    <br>
   Players:
       <br>
        <PlayerPreview
            v-for="p in players"
            :name="p.name"
            :imageUrl="p.image"
            :position="p.position"
            :src="p.image"
            :key="p.name">
        </PlayerPreview>
        <br>
    Past Games:
         <br>
        <GamePreview
            v-for="g in pastGames"
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
     <br>
     Future Games:
     <br>
        <GamePreview
            v-for="g in futureGames"
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
      pastGames: [], 
      futureGames: []
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
        
        console.log(response.data[1])

        if (response.data[1]) // if this team has games
        {  
            if (response.data[1][0]) // past games
            { const pastGames = response.data[1][0]
                this.pastGames = [];
                this.pastGames.push(...pastGames);}
         
            if (response.data[1][1]) // future games
            { const futureGames = response.data[1][1]
                this.futureGames = [];
                this.futureGames.push(...futureGames);}
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
.team-full-details .team-title {
  text-align: center;
  text-transform: uppercase;
  font-size: 35px;
  color:  rgb(79, 146, 115);
}
</style>
