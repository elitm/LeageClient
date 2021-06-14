<template>
  <div class="player-preview">
    <div :title="name" class="player-title">
      <b>{{ name }}</b> 
    </div >
    <ul class="player-content">
    <img src=imageUrl>
    <li> position: {{ position }} </li>
    <!-- <p> teamName: {{ teamName }} </p>  -->
    </ul>
  </div>
</template>

<script>
export default {
  name: "PlayerPreview",
  props: {
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
    //   teamName: {
    //     type: String,
    //   }
  }, 
  mounted(){
    console.log("player preview mounted")
  } 
};
</script>

<style>
.player-preview {
  display: inline-block;
  width: 250px;
  height: 200px;
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
