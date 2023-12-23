<template>
  <DynamicTitle msg="Trygve Jørgensen" level="1"/>

  <div class="g-container">
    <CardTemplate style="grid-area: 1 / 1 / 1 / 1">
      <DynamicTitle msg="Om meg" level="3"/>
      <p>Student på Gløshaugen som er glad i problemløsning og alt av teknologi. Har
        omfattende erfaring i områder som programmering, småelektronikk, 3D printing osv.</p>
    </CardTemplate>
    <CardTemplate style="grid-area: 2 / 1 / 3 / 1">
      <p>Test</p>
    </CardTemplate>

    <CardTemplate style="grid-area: 1 / 2 / 3 / 2">
      <DynamicTitle msg="CV" level="3"/>
    </CardTemplate>
  </div>
</template>

<script setup lang="ts">
import {defineComponent} from "vue";

import DynamicTitle from "@/components/DynamicTitle.vue";
import CardTemplate from "@/components/CardTemplate.vue";

defineComponent({
  name: 'App',
  components: {
    DynamicTitle,
    CardTemplate,
  }
});
</script>

<style>
#app {
  border: 2px solid yellow;
  padding-left: 50px;
  padding-right: 50px;
}
.g-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(5, 200px);
  gap: 40px;
}
</style>
