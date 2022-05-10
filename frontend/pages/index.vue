<template>
  <div>
    <v-parallax src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <v-container fluid>
            <h1 class="text-h4 font-weight-thin mb-4">CV Generator</h1>
            <h4 class="subheading mb-4">Construisez votre CV simplement !</h4>
            <v-btn elevate="0" :ripple="false" to="/login" color="primary">Se connecter</v-btn>
            <v-btn text :ripple="false" to="/register">S'inscrire</v-btn>
          </v-container>
        </v-col>
      </v-row>
    </v-parallax>
    <v-container>
      <span>{Screenshot remplissage CV}</span>
      <v-divider class="mx-4" vertical></v-divider>
      <span>{Selling points}</span>
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
    <v-container>
      Caroussel de templates
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  head: {
    title: "Accueil",
  },
});
</script>