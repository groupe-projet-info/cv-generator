<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
          <v-toolbar dark color="accent" elevation="0">
            <v-toolbar-title>Déconnexion</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            Vous êtes déconnecté !
          </v-card-text>
          <v-card-actions>
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
  }
})
</script>