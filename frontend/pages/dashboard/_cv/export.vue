<template>
  <div class="container">
    <iframe :src="`/${$route.params.cv}/render`" frameborder="0" width="100%" height="100%" id="render-frame"
      @load="exportPdf"></iframe>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import jsPdf from 'jspdf'

export default Vue.extend({
  middleware: 'auth',
  methods: {
    exportPdf() {
      const renderFrame = document.getElementById('render-frame')
      if (!renderFrame) {
        console.log("Calling too early")
        return
      }
      console.log("Exporting PDF")
      const doc = new jsPdf('p', 'pt', 'a4');
      const filename = `cv-${this.$route.params.cv}.pdf`
      let worker = doc.html(renderFrame, {
        callback(doc) {
          console.log("PDF Ready")
          doc.save(filename)
        },
        x: 0,
        y: 0,
      }).catch((reason) => {
        console.log(`Error: ${reason}`)
      })
    }
  }
})
</script>

<style>
.container {
  position: absolute;
  width: 21cm;
  height: 29.7cm;
}
</style>