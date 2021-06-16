<template>
  <div class="game-preview">
    <div :title="id" class="game-title">
      <b>Game Id:</b> {{ id }}
    </div>
    <ul class="game-content">
      host: 
      <router-link :to="{ name: 'team' , params: {id: `${this.hostId}`}}">
         {{ hostTeam }}
      </router-link>
      <br>
      guest:
      <router-link :to="{ name: 'team' , params: {id: `${this.guestId}`}}"> 
         {{ guestTeam }}
      </router-link>
      <br>
      date: {{ date.split('T')[0] }}
      <br>
      time: {{ hour.split('T')[1].substring(0,5) }}
      <br>
      field: {{ field }}
      <br>
      <a v-if="!(hostTeamScore == undefined || hostTeamScore == null)"> host score: {{ hostTeamScore }}</a> 
      <br>
      <a v-if="!(guestTeamScore == undefined || guestTeamScore == null)"> guest score: {{ guestTeamScore }}</a>
      <br>
      <b-button v-if="this.$root._data.store.username !== undefined" @click="addFavGame(id)" class="btn btn-info btn-sm">Add to Favorites</b-button>

    </ul>
  </div>
</template>

<script>
export default {
  name: "GamePreview",
  props: {
      id: {
        type: Number,
        required: true
      },
      hostTeam: {
        type: String,
        required: true
      },
      guestTeam: {
        type: String,
        required: true
      },
      hostId: {
        type: Number,
        required: true
      },
      guestId: {
        type: Number,
        required: true
      },
      date: {
        type: String,
        required: true
      },
      hour: {
        type: String,
        required: true
      },
      hostTeamScore: {
        type: Number
      },
      guestTeamScore: {
        type: Number  
      },
      field: {
        type: String
      }
  }, 
  mounted(){
         console.log(this.$root._data.store.username)

  } ,
  methods: {
    async addFavGame(gameId){
     // check if game is already in players favorites 
     try {
       console.log("add favorite game")
        this.axios.defaults.withCredentials = true;
        await this.axios.post(
          "http://localhost:3003/users/favoriteGames",
          {
            gameID: gameId
          }
        );
      } catch (error) {
        console.log("error in add favorite game")
        console.log(error);
      }
    }

}
};
</script>

<style>
.game-preview {
  display: inline-block;
  width: 200px;
  height: 230px;
  position: relative;
  margin: 10px 10px;
  border-style: solid;
  border-radius: 10px;
  border-width: 5px;
  border-color:cadetblue;
}

.game-preview .game-title {
  text-align: center;
  text-transform: uppercase;
  color:  rgb(111, 197, 157);
}

.game-preview .game-content {
  width: 100%;
  overflow: hidden;
}



</style>
