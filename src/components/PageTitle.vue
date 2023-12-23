<template>
  <h1>{{ msg }}</h1>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

// Define your props directly using defineProps
defineProps({
  msg: String
})
</script>

<style scoped>
h1 {
  font-style: italic;
  font-size: 300%;
  animation: fadeInBanner 1s;
}
</style>