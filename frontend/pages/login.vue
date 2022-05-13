<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
          <v-toolbar dark color="accent" elevation="0">
            <v-toolbar-title>Connexion</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form ref="form" v-model="valid" lazy-validate @submit.prevent="login">
              <v-text-field v-model="userName" :rules="nameRules" required prepend-icon="fa-user" name="userName"
                label="Identifiant" type="text" @input="$refs.form.resetValidation(); success = true" autofocus />
              <v-text-field v-model="password" :rules="passwordRules" required prepend-icon="fa-lock" name="password"
                label="Mot de passe" type="password" @input="$refs.form.resetValidation(); success = true" />
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn type="submit" :loading="loading" :ripple="false" color="primary">Se connecter</v-btn>
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
      userName: '',
      password: '',
      checkbox: false,
      success: true
    }
  },
  computed: {
    nameRules() {
      return [
        (v: any) => !!v || 'L\'identifiant est requis',
        // same as in method login
        () => { return !!(this as any).success || 'Identifiant ou mot de passe invalide' }
      ]
    },
    passwordRules() {
      return [
        (v: any) => !!v || 'Le mot de passe est requis',
        // same as in method login
        () => { return !!(this as any).success || 'Identifiant ou mot de passe invalide' }
      ]
    },
  },
  methods: {
    async login() {
      // Shut up the ts compiler about potential undefined as VForm is unknown at compile-time
      if ((this.$refs.form as any).validate()) {
        this.loading = true
        this.success = await this.$api.auth.login(this.userName, this.password)
        this.loading = false
        if (this.success) {
          this.$router.push('/')
        } else {
          (this.$refs.form as any).validate()
        }
      }
    }
  }
})
</script>