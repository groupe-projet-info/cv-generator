<template>
  <v-card>
    <!-- Thumbnail -->
    <v-sheet light>
      <div style="height: 200px; overflow: hidden; border-top-left-radius: 4px; border-top-right-radius: 4px;">
        <iframe :id="`thumbnail-${cv._id}`" :src="`/${cv._id}/thumbnail`"
          style="height: 200px; overflow: hidden; border: 0;  border-top-left-radius: 4px; border-top-right-radius: 4px;"
          scrolling="no"></iframe>
      </div>
    </v-sheet>
    <!-- Card title - Last Modified -->
    <v-card-title>
      {{ cv.jobTitle }}
    </v-card-title>
    <v-card-subtitle>
      {{ cv.preset || 'Aucun template' }} | modifié maintenant
    </v-card-subtitle>
    <!-- Edit/Export/Delete Actions -->
    <v-card-actions>
      <v-spacer />
      <v-btn plain rounded icon :ripple="false" :to="`/dashboard/${cv._id}/view`">
        <v-icon>fa-eye</v-icon>
      </v-btn>
      <v-btn plain rounded icon :ripple="false" color="blue" :to="`/dashboard/${cv._id}/edit`">
        <v-icon>fa-pencil</v-icon>
      </v-btn>
      <v-btn plain rounded icon :ripple="false" color="green">
        <v-icon>fa-solid fa-download</v-icon>
      </v-btn>
      <v-btn plain rounded icon :ripple="false" color="red">
        <v-icon>fa-trash</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: ['cv']
})
</script>