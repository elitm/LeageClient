<template>
<div id="allNav">
    <div id="nav">
      <b-navbar class="navbar navbar-light" style="background-color: #e6e6e6;">
        <b-navbar-brand>
          <img
            src="../assets/soccer.png"
            width="90"
            height="80"
            alt
          />
        </b-navbar-brand>

        <!-- <Navigator /> -->
        <button class="btn navB" type="button">
          <router-link :to="{ name: 'main' }">Home Page</router-link>
        </button>
        <button class="btn navB" type="button">
          <router-link :to="{ name: 'search' }">Search</router-link>
        </button>
        <button class="btn navB" type="button">
          <router-link :to="{ name: 'about' }">About</router-link>
        </button>
        <span v-if="!$root.store.username">
          <button class="btn navB" type="button">
            <router-link :to="{ name: 'register' }">Register</router-link>
          </button>
          <B>Hello Guest</B>
          <button class="btn navB" type="button">
            <router-link :to="{ name: 'login' }">Login</router-link>
          </button>
          
        </span>
        <span v-else>
          <b-dropdown id="dropdown-1"  text="My Profile" class="mr-3" variant="light" >
            <b-dropdown-item :to="{ name: 'FavoriteGames' }">My Favorite Games</b-dropdown-item>
            <b-dropdown-item class="btn navB" @click="Logout">Logout</b-dropdown-item>
          </b-dropdown>
         <B>Hello {{ $root.store.username }}</B>
          
        </span>
      </b-navbar>
    </div>
    <router-view />
  </div>
</template>

<script>
  export default {
    components:{
    },
    methods:{
        Logout() {
        console.log("try to logging out");
        const response = this.logoutFromServer();
        response.withCredentials = true;
        this.$root.store.logout();
        this.$root.toast("Logout", "User logged out successfully", "success");
        this.$router.push("/").catch(() => {
        this.$forceUpdate();
        });
    }, 
      async logoutFromServer(){
            await this.axios.get(
            "http://localhost:3003/logout",
        );
    }  
  }};
</script>

<style lang="scss" scoped>
</style>