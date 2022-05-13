<template>
  <v-dialog :value="true" persistent width="500">
    <v-card>
      <v-card-title>Créer votre nouveau CV !</v-card-title>
      <v-card-text>
        <v-container fluid fill-height>
          <v-layout align-center justify-center>
            <v-btn :ripple="false" color="blue" @click="createDefault">Thème par défaut</v-btn>
            <v-btn :ripple="false" plain disabled>Choisir un thème</v-btn>
          </v-layout>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn plain rounded icon :ripple="false" color="red" to="/dashboard">
          <v-icon>fa-xmark</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  methods: {
    async createDefault() {
      let data = await this.$api.cv.create({ preset: 'default' })
      this.$router.push(`/dashboard/${data.id}/edit`)
    }
  }
})
</script>