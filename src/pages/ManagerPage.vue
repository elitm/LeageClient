<template>
  <div class="container">
    <h1 class="title">Admin Page</h1>
    <AddScore></AddScore>
    <br>
    <AddGame></AddGame>
    <br>
    <AddEvent></AddEvent>

  </div>
</template>

<script>
import AddScore from "../components/AddScore";
import AddGame from "../components/AddGame";
import AddEvent from "../components/AddEvent";

export default {
  components: {
    AddScore,
    AddGame,
    AddEvent
  }
};
</script>

<style lang="scss" scoped>
</style>
