<template>
  <div class="outer">
    <div class="inner">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
h1, h2, h3, h4, h5, h6 {
  position: sticky;
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: transparent;
  border-radius: 10px 0 0 10px;
}

.outer {
  background-color: #83b0e498;
  border-radius: 20px;
  overflow: hidden;
  transition: 0.3s;
  width: 100%;
  -webkit-backdrop-filter: blur(3px);  /* Safari 9+ */
  backdrop-filter: blur(3px); /* Chrome and Opera */
}

.outer:hover ::-webkit-scrollbar-thumb {
  background: rgba(134, 150, 220, 0.77);
}

.inner {
  height: 100%;
  padding-left: 20px;
  padding-right: 20px;
  overflow: auto;
  overflow-wrap: break-word;
}
</style>