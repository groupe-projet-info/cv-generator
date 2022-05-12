<template>
  <div>
    <v-dialog :value="true" persistent width="80vw" height="80vh">
      <v-card>
        <div class="container">
          <iframe :id="`view-${$route.params.cv}`" :src="`/${$route.params.cv}/render`" class="responsive-iframe"
            scrolling="no"></iframe>
        </div>
      </v-card>
    </v-dialog>
    <div class="d-flex flex-column" style="position: fixed; bottom: 2vw; right: 2vw; z-index: 99999999">
      <v-btn fab :ripple="false" class="mb-2" color="blue" :to="`/dashboard/${$route.params.cv}/edit`">
        <v-icon>fa-pencil</v-icon>
      </v-btn>
      <v-btn fab :ripple="false" class="mb-2" color="green">
        <v-icon>fa-solid fa-download</v-icon>
      </v-btn>
      <v-btn fab :ripple="false" class="mb-2" color="red">
        <v-icon>fa-trash</v-icon>
      </v-btn>
      <v-btn fab :ripple="false" color="red" to="/dashboard">
        <v-icon>fa-xmark</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  middleware: 'auth'
})
</script>

<style scoped>
.container {
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 141.42%;
  /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */
}

/* Then style the iframe to fit in the container div with full height and width */
.responsive-iframe {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  border: 0;
}
</style>