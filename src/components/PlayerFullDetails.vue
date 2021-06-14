<template>
    <div class="player-full Details">
    <b-card
        img-alt="Image"
        tag="article"
        style="max-width: 30rem;"
        class="mb-2"
        >
        <b-card-title>Full Name: {{name}}</b-card-title>
        <b-card-text>
            Group: {{team_name}}
            <br/>
            Image: {{image}}
            <br/>
            Position Number: {{position}}
        </b-card-text>
    </b-card>
    </div>
</template>

<script>
    export default {
        name:"PlayerFullDetails" ,
        data(){
            return{
                name: "",
                team_name:"",
                image:"",
                position: ""
            };
        },
      methods:{
          async getPlayer(){
              let playerID = 1;
              console.log("uploadPlayer");
              try{
                const response = await this.axios.get(
                    `http://localhost:3003/players/PlayerFullDetails/${playerID}`,);
                this.name = response.data[0].name;
                this.team_name = response.data[0].team_name;
                this.image = response.data[0].image;
                this.position = response.data[0].position;
                console.log(this.position)
              }catch(error){
                  console.log(error);
              }
          }
    },
     mounted(){
         this.getPlayer();
     }
};
</script>

<style lang="scss" scoped>
.game-preview {
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