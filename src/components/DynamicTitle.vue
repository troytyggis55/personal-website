<template>
  <component :is="'h' + level">
    {{ msg }}
  </component>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue';

defineProps({
  msg: String,
  level: {
    type: Number,
    default: 1,
  },
});
</script>

<style scoped>
</style>
