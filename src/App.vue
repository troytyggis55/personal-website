<template>
  <Transition name="network" appear>
    <CanvasNetwork v-if="state" />
  </Transition>
  <ControlNetwork/>

  <Transition name="title" appear>
    <PageHeader/>
  </Transition>

  <Transition name="grid" appear>
    <PageGrid/>
  </Transition>

  <Transition name="list" appear>
    <PageList/>
  </Transition>

  <Transition name="footer" appear>
    <PageFooter/>
  </Transition>
</template>

<script setup lang="ts">
import {useStore} from "vuex";
import {ref} from "vue";
import CanvasNetwork from "@/components/CanvasNetwork.vue";
import ControlNetwork from "@/components/ControlNetwork.vue";
import PageHeader from "@/components/PageHeader.vue";
import PageGrid from "@/components/PageGrid.vue";
import PageList from "@/components/PageList.vue";
import PageFooter from "@/components/PageFooter.vue";

const store = useStore();
let state = ref(store.state.showEffects);

store.watch(() => store.state.showEffects, (newVal) => {
  state.value = newVal;
});
</script>

<style>
.title-enter-active, .title-leave-active {
  transition: all 1.5s ease;
}

.title-enter-from, .title-leave-to {
  opacity: 0;
  transform: translateX(50px);
}

.grid-enter-active, .grid-leave-active {
  transition: all 1.5s ease 0.5s;
}

.grid-enter-from, .grid-leave-to {
  opacity: 0;
  transform: translateY(50px);
}

.list-enter-active, .list-leave-active {
  transition: all 1.5s ease 1s;
}

.list-enter-from, .list-leave-to {
  opacity: 0;
  transform: translateY(50px);
}

.footer-enter-active, .footer-leave-active {
  transition: all 1.5s ease 1.5s;
}

.footer-enter-from, .footer-leave-to {
  opacity: 0;
  transform: translateY(50px);
}

.network-enter-active, .network-leave-active {
  transition: 0.5s;
}

.network-enter-from, .network-leave-to {
  opacity: 0;
}

:root {
  --horizontal-padding: 5%;
}

#app {
  padding-left: var(--horizontal-padding);
  padding-right: var(--horizontal-padding);
}

@media screen and (min-width: 2000px) {
  #app {
    padding-left: calc((100vw - 2000px) / 2);
    padding-right: calc((100vw - 2000px) / 2);
  }
}
</style>

