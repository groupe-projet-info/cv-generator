<template>
  <v-card>
    <v-skeleton-loader type="image, article"></v-skeleton-loader>
    <!-- Edit/Export/Delete Actions -->
    <v-card-actions>
      <v-spacer />
      <v-btn plain rounded icon :ripple="false" disabled>
        <v-icon>fa-eye</v-icon>
      </v-btn>
      <v-btn plain rounded icon :ripple="false" color="blue" disabled>
        <v-icon>fa-pencil</v-icon>
      </v-btn>
      <v-btn plain rounded icon :ripple="false" color="green" disabled>
        <v-icon>fa-solid fa-download</v-icon>
      </v-btn>
      <v-btn plain rounded icon :ripple="false" color="red" disabled>
        <v-icon>fa-trash</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
})
</script>