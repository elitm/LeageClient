<template>
    <div> 
      <b-container> 
    <h1 class="title">Search Page</h1>
    <b-form @submit.prevent="onSearch" @reset.prevent="onReset">
    <b-input-group prepend="Search Query:" id="search-input">
      <b-form-input v-model="query" id="query"></b-form-input>
      <b-input-group-append>
        <b-button 
        type="submit"
        variant="info"
        >Search</b-button>
      </b-input-group-append>
    </b-input-group>
    </b-form>
      <br/>
      Your search Query: {{ query }}
      <br/>
        <span v-if="{query}">
            <span v-if="!players.length && !teams.length">
                    There are No elements to return
            </span>
            <span v-else>
                <SearchPlayers :items="players"></SearchPlayers>
                <SearchTeams :items="teams"> </SearchTeams>
            </span>
        </span>
    </b-container>
    </div>
</template>

<script>

import SearchPlayers from "./SearchPlayers";
import SearchTeams from "./SearchTeams";
export default {
    name: "Search",
    components:{
        SearchPlayers,
        SearchTeams
    },
    data(){
        return{
            players: [],
            teams: [],
            query: "",
            filter_team: ""
        };
    },
    methods:{
        async newSearch(){
            console.log(this.query);
            console.log("start searching at the server");
            try{
                const response = await this.axios.get(
                    `http://localhost:3003/search/${this.query}`,);
                const players = response.data.players;
                const teams = response.data.teams;
                console.log(teams);

                this.players = [];
                this.players.push(...players);
                console.log(this.players);
                this.teams = [];
                this.teams.push(...teams);
            }catch (error){
                console.log("error in search");
                console.log(error);
            }
        },

        onSearch(){
           console.log("neaSearch method was called");
           this.newSearch(); 
        },

        onReset(){
            console.log("reset before new search");
            this.$v.$reset();
        },

        TeamFilter(){
            this.$emit('this.players', 'filter_team', this.filter_team)
        }
    }
        
}
</script>

<style lang="scss" scoped>


</style>