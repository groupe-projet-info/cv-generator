<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md8>
        <v-card class="elevation-12">
          <v-toolbar dark color="accent" elevation="0">
            <v-toolbar-title>Changer mon mot de passe</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-stepper v-model="e1">
              <v-stepper-header>
                <v-stepper-step :complete="e1 > 1" step="1">
                  Confirmation du mot de passe
                </v-stepper-step>

                <v-divider></v-divider>

                <v-stepper-step :complete="e1 > 2" step="2">
                  Nouveau mot de passe
                </v-stepper-step>
              </v-stepper-header>

              <v-stepper-items>
                <v-stepper-content step="1">
                  <v-form ref="formStep1" @submit.prevent="submitStep1">
                    <v-text-field v-model="password" :rules="passwordRules" required prepend-icon="fa-lock"
                      name="password" label="Mot de passe actuel" type="password"
                      @input="$refs.formStep1.resetValidation()" />
                    <v-form-actions>
                      <v-btn type="submit" :ripple="false" color="primary">
                        Continue
                      </v-btn>
                    </v-form-actions>
                  </v-form>
                </v-stepper-content>

                <v-stepper-content step="2">
                  <v-form ref="formStep2" @submit.prevent="submitStep2">
                    <v-text-field v-model="newPassword" :rules="newPasswordRules" required prepend-icon="fa-lock"
                      name="password" label="Nouveau mot de passe" type="password"
                      @input="$refs.formStep2.resetValidation()" />
                    <v-text-field v-model="newPasswordConfirmation" :rules="confirmPasswordRules" required
                      prepend-icon="fa-lock" name="confirm-password" label="Confirmation du mot de passe"
                      type="password" @input="$refs.formStep2.resetValidation()" />
                    <v-form-actions>
                      <v-btn type="submit" :ripple="false" color="primary">
                        Continue
                      </v-btn>

                      <v-btn :ripple="false" text @click="e1 = 1">
                        Cancel
                      </v-btn>
                    </v-form-actions>
                  </v-form>
                </v-stepper-content>
              </v-stepper-items>
            </v-stepper>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  middleware: 'auth',
  head: {
    title: 'Paramètres'
  },
  data() {
    return {
      e1: 1,
      password: '',
      newPassword: '',
      newPasswordConfirmation: '',
      success: false
    }
  },
  computed: {
    passwordRules() {
      return [
        (v: any) => !!v || 'Le mot de passe est requis',
        // same as in method login
        () => { return !!(this as any).success || 'Identifiant ou mot de passe invalide' }
      ]
    },
    newPasswordRules() {
      return [
        (v: any) => !!v || 'Le mot de passe est requis',
        // same as in method login
        () => { return !!(this.$data.password == this.$data.newPassword) || 'Le nouveau mot de passe doit être différent du précédant' }
      ]
    },
    confirmPasswordRules() {
      return [
        (v: any) => !!v || 'La confirmation du mot de passe est requise',
        (v: any) => v == this.$data.newPassword || 'Les mots de passe ne correspondent pas',
      ]
    }
  },
  methods: {
    submitStep1() {
      this.e1 = 2
      //TODO: Implement logic, check if password is valid (via login ?)
    },
    submitStep2() {
      //TODO: Implement logic, change password
    }
  }
})
</script>