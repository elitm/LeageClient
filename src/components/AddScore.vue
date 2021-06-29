<template>
    <div>
      <h1> Add Score to Game</h1>
        <form>
        <div class="form-group">
            <label>Game ID</label>
            <input type="number" class="form-control" id="gameId" v-model="gameId" required>
        </div>
        <div class="form-group">
            <label>Host Team Score</label>
            <input type="number" class="form-control" id="hostScore" v-model="hostScore" required>
        </div>
                <div class="form-group">
            <label>Guest Team Score</label>
            <input type="number" class="form-control" id="guestScore" v-model="guestScore" required>
        </div>
        <button type="submit" class="btn btn-primary" @click="addScores()">Submit</button>
        </form>
    </div>
</template>

<script>
export default {
  name: "AddScore",
  components: {

  }, 
  data() {
    return {
        gameId: "",
        hostScore: "",
        guestScore: "",
    };
  },
  methods: {
    async addScores(){
     try {
       console.log("add score");
        this.axios.defaults.withCredentials = true;
        await this.axios.post(
          "http://localhost:3003/manage/updateGameScores",
          {
            game_id: this.gameId,
            local_team_score: this.hostScore,
            visitor_team_score: this.guestScore
          }
        );
      } 
      catch (error) {
        console.log("error in add score")
        console.log(error);
      }
  }
  },

  mounted(){
    console.log("add score mounted");
      }
};

</script>

<style scoped>

</style>