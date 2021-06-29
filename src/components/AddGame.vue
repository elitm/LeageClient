<template>
    <div>
      <h1> Add Game</h1>
        <form>
        <div class="form-group">
            <label>Host Team Id</label>
            <input type="number" class="form-control" id="hostId" v-model="hostId" required>
        </div>
        <div class="form-group">
            <label>Guest Team Id</label>
            <input type="number" class="form-control" id="guestId" v-model="guestId" required>
        </div>
        <div class="form-group">
            <label>Date & Time</label>
            <input type="datetime-local" class="form-control" id="date" v-model="date" required>
        </div>
        <div class="form-group">
            <label>Field</label>
            <input type="text" class="form-control" id="field" v-model="field" required>
        </div>
        <button type="submit" class="btn btn-primary" @click="addGame()">Submit</button>
        </form>
    </div>
</template>

<script>
export default {
  name: "AddGame",
  components: {

  }, 
  data() {
    return {
        hostId: "",
        guestId: "",
        date:"",
        field: "",
        referee: "" // get rid of this in backend (i think)

    };
  },
  methods: {
    async addGame(){
     try {
       console.log("add game");

        this.axios.defaults.withCredentials = true;
        await this.axios.post(
          "http://localhost:3003/manage/addGame",
          {
            local_team_id: this.hostId,
            visitor_team_id: this.guestId,
            game_date: this.date.replace("T", " "),
            field_name: this.field,
            referee_id: "2" //   get rid of this in backend (i think)

          }
        );
      } 
      catch (error) {
        console.log("error in add game")
        this.$root.toast("AddGame", error.response.data.errors, "error");

        console.log(error);
      }
  }
  },
};

</script>

<style scoped>

</style>