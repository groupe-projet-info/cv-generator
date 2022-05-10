<template>
  <v-app>
    <!-- Must have the app property -->
    <v-app-bar app elevate-on-scroll rounded>
      <v-toolbar-title>
        <v-btn plain :ripple="false" to="/">CV Generator</v-btn>
      </v-toolbar-title>
      <v-btn plain :ripple="false" to="/dashboard" v-if="loggedIn">Mes CVs</v-btn>
      <v-spacer />
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn text :ripple="false" to="/login" color="primary" v-if="!loggedIn">Se connecter</v-btn>
        <v-divider vertical v-if="!loggedIn" />
        <v-btn text :ripple="false" to="/register" v-if="!loggedIn">S'inscrire</v-btn>
        <v-menu top offset-y v-else>
          <template v-slot:activator="{ on, attrs }">
            <v-btn text :ripple="false" v-bind="attrs" v-on="on">{{ $store.state.user.username }}</v-btn>
          </template>
          <v-list>
            <v-list-item to="/config">
              <v-list-item-title>Paramètres</v-list-item-title>
            </v-list-item>
            <v-list-item to="/logout">
              <v-list-item-title>Se déconnecter</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
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
  watch: {
    '$route': function (value) {
      this.$fetch()
    }
  },
  async fetch() {
    this.loggedIn = await this.$api.auth.test()
  },
  fetchOnServer: false
})
</script>