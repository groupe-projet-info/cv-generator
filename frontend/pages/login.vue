<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
          <v-toolbar dark color="accent" elevation="0">
            <v-toolbar-title>Connexion</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field v-model="username" :rules="nameRules" required prepend-icon="fa-user" name="username"
                label="Identifiant" type="text" />
              <v-text-field v-model="password" :rules="passwordRules" required prepend-icon="fa-lock" name="password"
                label="Mot de passe" type="password" />
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn :loading="loading" :ripple="false" color="primary" @click="login">Se connecter</v-btn>
              </v-card-actions>
            </v-form>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  head: {
    title: 'Connexion'
  },
  data() {
    return {
      loading: false,
      valid: true,
      username: '',
      nameRules: [
        (v: any) => !!v || 'L\'identifiant est requis'
      ],
      password: '',
      passwordRules: [
        (v: any) => !!v || 'Le mot de passe est requis'
      ],
      checkbox: false,
    }
  },
  methods: {
    login(e: Event) {
      e.preventDefault();
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 500)
    }
  }
})
</script>