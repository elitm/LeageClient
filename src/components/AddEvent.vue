<template>
    <div>
      <h1> Add Event to Game</h1>
        <form>
        <div class="form-group">
            <label>Game ID</label>
            <input type="number" class="form-control" id="gameId" v-model="gameId" required>
        </div>
        <div class="form-group">
            <label>Date & Time</label>
            <input type="datetime-local" class="form-control" id="date" v-model="date" required>
        </div>
        <div class="form-group">
            <label>Minute</label>
            <input type="number" class="form-control" id="min" v-model="minute" required>
        </div>
        <div class="form-group">
            <label>Event Type</label>
            <select required v-model="type">
                <option>goal</option>
                <option>injury</option>
                <option>offense</option>
                <option>offside</option>
                <option>redcard</option>
                <option>yellowcard</option>
                <option>substitution</option>
            </select>  
        </div>
        <div class="form-group">
            <label>Description</label>
            <input type="text" class="form-control" id="description" v-model="description" required>
        </div>
        <button type="submit" class="btn btn-primary" @click="addEvent()">Submit</button>
        </form>
    </div>
</template>

<script>
export default {
  name: "AddEvent",
  components: {

  }, 
  data() {
    return {
        gameId: "",
        date: "",
        minute: "",
        type: "",
        description: ""
    };
  },
  methods: {
    async addEvent(){
     try {
       console.log("add event");
        this.axios.defaults.withCredentials = true;
        await this.axios.post(
          "http://localhost:3003/manage/addEvent",
          {
            game_id: this.gameId,
            event_time: this.date.replace("T", " "),
            minute_in_game: this.minute,
            event_description: this.description,
            type: this.type
          }
        );
      } 
      catch (error) {
        console.log("error in add event")
        console.log(error);
      }
  }
  },

};

</script>

<style scoped>

</style>