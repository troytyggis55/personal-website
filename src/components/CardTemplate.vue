<template>
  <div class="outer" :class="{outerWithHover: props.reactToHover}">
    <div class="inner">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import {defineProps} from "vue";

  const props = defineProps({
    reactToHover: {
      type: Boolean,
      required: false,
      default: true
    }
  });
</script>

<style scoped>
h1, h2, h3, h4, h5, h6 {
  position: sticky;
}

.outer {
  background-color: #83b0e498;
  border-radius: 20px;
  overflow: hidden;
  transition: 0.3s;
  width: 100%;
}

.outerWithHover:hover {
  box-shadow: 0 0 30px 1px rgba(0, 0, 0, 0.3);
  transform: scale(1.01);

}

.outerWithHover:hover ::-webkit-scrollbar-thumb {
  background: rgba(134, 150, 220, 0.77);
}

.inner {
  height: 100%;
  padding-left: 20px;
  padding-right: 20px;
  overflow: auto;
  overflow-wrap: break-word;
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
</style>