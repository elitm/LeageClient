<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-brand :to="{ name: 'main' }">Superliga</b-navbar-brand>
            <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
            <b-nav-item :to="{ name: 'search' }">Search</b-nav-item>
            </b-navbar-nav>
            <b-navbar-nav>
                <b-nav-item :to="{ name: 'about' }">About</b-nav-item>
            </b-navbar-nav>

            <b-nav-text v-if="!$root.store.username"> Hello Guest </b-nav-text>
            <b-nav-text v-else> Hello {{$root.store.username}} </b-nav-text>

            <b-nav-item-dropdown right>
                <b-nav-item :to="{ name: 'register' }">Register</b-nav-item>
                <b-navbar-nav v-if="!$root.store.username">
                    <b-nav-item :to="{ name: 'login' }">Login</b-nav-item>
                
                </b-navbar-nav>
                <b-navbar-nav v-else> Privat
                <!-- <template #button-content>
                    User
                </template> -->
                    <b-dropdown-item href="#">FavoriteGames</b-dropdown-item>
                    <b-dropdown-item @click="Logout">Log Out</b-dropdown-item>
            </b-nav-item-dropdown>
            </b-collapse>
        </b-navbar>
    </div>
</template>


<script>
export default {
    methods:{
    Logout() {
      this.$root.store.logout();
      this.$root.toast("Logout", "User logged out successfully", "success");

      this.$router.push("/").catch(() => {
        this.$forceUpdate();
      });
    }
    }
}
</script>

<style>
</style>
