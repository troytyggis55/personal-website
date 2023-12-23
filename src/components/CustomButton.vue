<template>
  <button>{{ buttonText }}</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CustomButton',
  data() {
    return {
      buttonText: 'Click Me'
    };
  }
});
</script>

<style>
button {
  background-color: blue;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
