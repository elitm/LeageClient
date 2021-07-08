<template>
  <div class="player-preview">
    <div :title="name" class="player-title">
       <router-link :to="{ name: 'player' , params: {id: `${this.playerId}`}}">
          <b>{{ name }}</b> 
       </router-link>
    </div >
    <div class="player-content">
    <img :src= imageUrl >
    <!-- <p> {{ imageUrl}} </p> -->
    <p> position: {{ position }} </p>
    <p> teamName: {{ teamName }} </p> 
    </div>
  </div>
</template>

<script>
export default {
  name: "PlayerPreview",
  props: {
      playerId: {
        type: Number,
        required: true
      },
      name: {
        type: String,
        required: true
      },
      imageUrl: {
        type: String,
        required: true
      },
      position: {
        type: Number,
        required: true
      },
      teamName: {
        type: String,
      }
  }, 
  mounted(){
    console.log("player preview mounted")
  } 
};
</script>

<style>
.player-preview {
  display: inline-block;
  width: 275px;
  height: 250px;
  position: relative;
  margin: 10px 10px;
  border-style: solid;
  border-radius: 10px;
  border-width: 5px;
  border-color:cadetblue;
}

.player-preview .player-title {
  text-align: center;
  text-transform: uppercase;
  color:  rgb(111, 197, 157);
}

.player-preview .player-content {
  width: 100%;
  overflow: hidden;
}



</style>
