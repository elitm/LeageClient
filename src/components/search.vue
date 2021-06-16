<template>
    <div>    
    <h1 class="title">Search Page</h1>
    <!-- <b-form @submit.prevent="onSearch" @reset.prevent="onReset"> -->
    <b-input-group prepend="Search Query:" id="search-input">
      <b-form-input v-model="searchQuery"></b-form-input>
      <b-input-group-append>
        <b-button 
        type="submit"
        variant="success"
        >Search</b-button>
      </b-input-group-append>
    </b-input-group>
      <br/>
      Your search Query: {{ searchQuery }}
    <span v-if="!{searchQuery}">
        <Player>
            v-for="p in players"
            :name="p.name"
            :imageUrl="p.imageUrl"
            :position="p.position"
            :key="p.position" 
            <!-- todo - fix key -->
        </Player>
    </span>
    </div>
</template>

<script>
import Player from "./PlayerPreview";    
export default {
    name: "Search",
    components:{
        Player
    },
    data(){
        return{
            players: []
        };
    },
    methods:{
        async newSearch(){
            let name = "Sten";
            console.lo("start searching at the server");
            try{
                const response = await this.axios.get(
                    `http://localhost:3003/search/${name}`,
                );
                const Players = response.data[0];
                this.players = [];
                this.Players.push(...players);
            }catch (error){
                console.log("error in search");
                console.log(error);
            }
        },

        onSearch(){
           console.log("neaSearch method was called");
           this.newSearch(); 
        }

    }
}
</script>

<style lang="scss" scoped>
    
</style>