<template>
  <div>
    <h2 style="text-align: center; padding-top: 30px;">Education & Experience</h2>
    <ControlList @infoStateEmit="updateInfoState"/>

    <div class="infoContainer" v-if="infoState === 'personal'">
      <ContainerCard class="infoCard">
        <MarkdownRenderer source="markdown/FluidSim.md"/>
      </ContainerCard>

      <ContainerCard class="infoCard">
        <MarkdownRenderer source="markdown/AboutMe.md"/>
      </ContainerCard>
    </div>

    <div class="infoContainer" v-if="infoState === 'academic'">
      <ContainerCard class="infoCard">
        <MarkdownRenderer source="markdown/Calculator.md"/>
        <div id="calculatorDiv">
          <ControlCalculator/>
        </div>
      </ContainerCard>

      <ContainerCard class="infoCard">
        <MarkdownRenderer source="markdown/Pathfinding.md"/>
      </ContainerCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import ControlList from "@/components/ControlList.vue";
import ControlCalculator from "@/components/ControlCalculator.vue";
import ContainerCard from "@/components/ContainerCard.vue";
import MarkdownRenderer from "@/components/MarkdownRenderer.vue";

const infoState = ref("academic");

const updateInfoState = (newState: string) => {
  infoState.value = newState;
}
</script>

<style scoped>
.infoContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  max-width: 1100px;
  max-height: 600px;
  margin: 0 auto;
  overflow: auto;
}

.infoContainer::-webkit-scrollbar-track {
  background: transparent;
}

.infoContainer::-webkit-scrollbar-thumb {
  border-radius: 10px;
}

.infoCard {
  max-width: 95%;
  flex-shrink: 0;
}

#calculatorDiv {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}
</style>