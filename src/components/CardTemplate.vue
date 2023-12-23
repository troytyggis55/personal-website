<template>
  <div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
div {
  background-color: #83b0e498;
  border-radius: 20px;
  transition: 0.2s;
  animation: fadeInCard 1.6s;
  display: block;
  padding-left: 20px;
  padding-right: 20px;
}
</style>