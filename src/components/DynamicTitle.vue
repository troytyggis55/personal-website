<template>
  <component :is="'h' + level">
    {{ msg }}
  </component>
</template>

<script setup lang="ts">
import {defineProps} from 'vue'

const size = 300;

const props = defineProps({
  msg: String,
  level: {
    type: Number,
    default: 1,
  }
})
</script>

<style scoped>
h1, h2, h3 , h4, h5, h6 {
  font-style: italic;
}

h1 {
  font-size: 3em;
}

h2 {
  font-size: 2em;
  margin-top: -10px;
  margin-bottom: -10px
}

h3 {
  font-size: 1.5em;
  margin-top: 5px;
  margin-bottom: -3px;
}

h4 {
  font-size: 1em;
  margin-top: -1px;
  margin-bottom: -1px;}

</style>