<template>
    <div>
        <playerFullDetails></playerFullDetails>
    </div>
</template>

<script>
    import playerFullDetails from "../components/PlayerFullDetails.vue"
    export default {
      components:{
          playerFullDetails
      } ,
      mounted(){
    // console.log(this.$route)
    }
    };

</script>

<style lang="scss" scoped>

</style>