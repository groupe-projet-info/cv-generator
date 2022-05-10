<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
          <v-toolbar dark :color="success ? 'accent' : 'error'" elevation="0">
            <v-toolbar-title>Déconnexion</v-toolbar-title>
          </v-toolbar>
          <v-card-text v-if="success">
            Vous êtes déconnecté !
          </v-card-text>
          <v-card-text class="error--text text--lighten-1" v-else>
            Impossible de se déconnecter...
          </v-card-text>
          <v-card-actions v-if="success">
            <v-spacer />
            <v-btn plain :ripple="false" to="/">Retourner à l'accueil</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  head: {
    title: 'Déconnexion'
  },
  data() {
    return {
      success: false
    }
  },
  async asyncData({ $api }) {
    let success = await $api.auth.logout()
    return {
      success
    }
  }
})
</script>