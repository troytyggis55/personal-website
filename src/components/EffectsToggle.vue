<script setup lang="ts">
import { useStore } from "vuex";
import {ref} from "vue";

const store = useStore();
let state = ref(store.state.showEffects);

const toggleButton = () => {
  store.commit("toggleEffects");
}

store.watch(() => store.state.showEffects, (newVal) => {
  state.value = newVal;
}, {immediate: true});

</script>


<template>
<div :class="{ offBack: state }">
  <button @click="toggleButton" :class="{ offFront: state }">
    <img src="sparkle.svg" alt="sparkle" />
  </button>
</div>
</template>

<style scoped>
div {
  position: fixed;
  bottom: 20px;
  right: 5%;
  z-index: 1;

  width: 70px;
  height: 70px;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgb(150, 150, 150);
  transition: all 0.5s ease;
}

button {
  width: 50px;
  height: 50px;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: aliceblue;
  box-shadow: 0 0 8px 8px rgba(0, 0, 0, 0.2);

  transition: all 0.5s ease;
}

button:hover {
  background-color: aliceblue;
}

img {
  width: 40px;
  height: 40px;
}

.offBack {
  background-color: rgb(80, 200, 120)
}

.offFront {
  transform: rotate(360deg);
}
</style>