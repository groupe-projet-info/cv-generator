<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
          <v-toolbar dark color="accent" elevation="0">
            <v-toolbar-title>Inscription</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form ref="form" v-model="valid">
              <v-text-field v-model="username" :rules="nameRules" required prepend-icon="fa-user" name="username"
                label="Identifiant" type="text" @input="$refs.form.resetValidation()" />
              <v-text-field v-model="password" :rules="passwordRules" required prepend-icon="fa-lock" name="password"
                label="Mot de passe" type="password" @input="$refs.form.resetValidation()" />
              <v-text-field v-model="confirmPassword" :rules="confirmPasswordRules" required prepend-icon="fa-lock"
                name="confirm-password" label="Confirmation du mot de passe" type="password"
                @input="$refs.form.resetValidation()" />
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn :loading="loading" :ripple="false" color="primary" @click="register">Se connecter</v-btn>
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
import 'vue-async-computed'

export default Vue.extend({
  head: {
    title: 'Connexion'
  },
  data() {
    return {
      success: true,
      loading: false,
      valid: true,
      username: '',
      defaultNameRules: [
        (v: any) => !!v || 'L\'identifiant est requis',
      ],
      password: '',
      passwordRules: [
        (v: any) => !!v || 'Le mot de passe est requis'
      ],
      confirmPassword: '',
      checkbox: false,
    }
  },
  asyncComputed: {
    async asyncNameRules() {
      let canRegister = await this.$api.auth.canRegister(this.$data.username)
      return [
        (v: any) => !!v || 'L\'identifiant est requis',
        (_v: any) => !!canRegister || 'Ce nom d\'utilisateur n\'est pas disponible'
      ]
    }
  },
  computed: {
    nameRules() {
      return (this as any).asyncNameRules ? (this as any).asyncNameRules : this.$data.defaultNameRules
    },
    confirmPasswordRules() {
      return [
        (v: any) => !!v || 'La confirmation du mot de passe est requise',
        (v: any) => v == this.$data.password || 'Les mots de passe ne correspondent pas',
      ]
    }
  },
  methods: {
    async register() {
      // Shut up the ts compiler about potential undefined as VForm is unknown at compile-time
      if ((this.$refs.form as any).validate()) {
        this.loading = true
        this.success = await this.$api.auth.register(this.username, this.password, this.confirmPassword)
        this.loading = false
        if (this.success) {
          this.$router.push('/login')
        }
      }
    }
  }
})
</script>