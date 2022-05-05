<template>
  <span>Hello World !</span>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  created() {
    console.log(this.$test())
  }
})
</script>