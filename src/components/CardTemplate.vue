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
  overflow: hidden;
}

div:hover {
  box-shadow: 0 0 30px 1px rgba(0, 0, 0, 0.3);
}
</style>