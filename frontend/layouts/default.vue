<template>
  <v-app>
    <!-- Must have the app property -->
    <v-app-bar app elevate-on-scroll rounded>
      <v-toolbar-title>
        <v-btn plain to="/">CV Generator</v-btn>
      </v-toolbar-title>
      <v-spacer />
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn text :ripple="false" to="/login" color="primary" v-if="!loggedIn">Se connecter</v-btn>
        <v-divider vertical v-if="!loggedIn" />
        <v-btn text :ripple="false" to="/register" v-if="!loggedIn">S'inscrire</v-btn>
        <v-btn :ripple="false" to="/dashboard/config" v-else>{{ $store.state.user.username }}</v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      loggedIn: false
    }
  },
  async fetch() {
    this.loggedIn = await this.$api.auth.test()
  },
  fetchOnServer: false
})
</script>