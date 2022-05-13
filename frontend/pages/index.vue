<template>
  <div>
    <v-parallax src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <v-container fluid>
            <h1 class="text-h4 font-weight-thin mb-4">CV Generator</h1>
            <h4 class="subheading mb-4">Construisez votre CV simplement !</h4>
            <v-btn elevate="0" :ripple="false" to="/login" color="primary" v-if="!loggedIn">Se connecter</v-btn>
            <v-btn text :ripple="false" to="/register" v-if="!loggedIn">S'inscrire</v-btn>
            <v-btn elevate="0" :ripple="false" to="/dashboard" color="primary" v-else>Accéder à mes CVs</v-btn>
          </v-container>
        </v-col>
      </v-row>
    </v-parallax>
    <v-container fluid class="d-flex">
      <v-sheet color="grey" rounded height="380" width="800">
        <v-img src="edit.png"></v-img>
      </v-sheet>
      <v-divider class="mx-4" vertical></v-divider>
      <v-card>
        <v-container fill-height>
          <v-list-item class="mt-4">
            <v-list-item-icon>
              <v-icon>fa-angle-right</v-icon>
            </v-list-item-icon>
            <v-list-item-content two-line>
              <v-list-item-title>Simple, clair</v-list-item-title>
              <v-list-item-subtitle>Pas besoin d'être un expert pour avoir un bon CV !</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>fa-angle-right</v-icon>
            </v-list-item-icon>
            <v-list-item-content two-line>
              <v-list-item-title>Rapidité</v-list-item-title>
              <v-list-item-subtitle>
                En quelques clics, vous avez un fichier prêt à télécharger !
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>fa-angle-right</v-icon>
            </v-list-item-icon>
            <v-list-item-content four-line>
              <v-list-item-title>Original</v-list-item-title>
              <v-list-item-subtitle>
                Vous pouvez créer votre propre mise en page
              </v-list-item-subtitle>
              <v-list-item-subtitle>pour que votre CV ne ressemble à aucun autre !</v-list-item-subtitle>
              <v-list-item-subtitle>
                <i>Bientôt</i>
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-container>
      </v-card>
      <div style="height: 200px" />
    </v-container>
    <v-parallax src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="text-h4 font-weight-thin mb-4">Remplissez vos informations</h1>
          <h4 class="subheading">On s'occupe de la mise en page pour vous !</h4>
        </v-col>
      </v-row>
    </v-parallax>
    <v-carousel cycle height="600" hide-delimiter-background show-arrows-on-hover>
      <v-carousel-item v-for="(slide, i) in slides" :key="i">
        <v-sheet :color="colors[i]" height="100%">
          <v-row class="fill-height" align="center" justify="center">
            <div class="text-h2">
              {{ slide }} Slide
            </div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  head: {
    title: "Accueil",
  },
  data() {
    return {
      loggedIn: false,
      colors: [
        'indigo',
        'warning',
        'pink darken-2',
        'red lighten-1',
        'deep-purple accent-4',
      ],
      slides: [
        'First',
        'Second',
        'Third',
        'Fourth',
        'Fifth',
      ],
    }
  },
  async fetch() {
    this.loggedIn = await this.$api.auth.test()
  },
  fetchOnServer: false
});
</script>