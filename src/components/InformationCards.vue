<template>
  <h2 style="text-align: center; padding-top: 30px;">Education & Experience</h2>
  <InformationNavBar @infoStateEmit="updateInfoState"/>

  <div class="infoContainer" v-if="infoState === 'personal'">
    <CardTemplate class="infoCard" :react-to-hover="false">
      <MarkdownRenderer source="FluidSim.md"/>


      <PopupModal v-if="isPopupVisible" @close="isPopupVisible = false">
        <h2>Fluid Simulation</h2>
        <FluidSimulation/>
        <button @click="isPopupVisible = false">Close</button>
      </PopupModal>
      <div class="simulationButtonDiv" v-if="!isMobile">
        <button @click="isPopupVisible = true" class="simulationButton">Open Simulation</button>
      </div>
    </CardTemplate>

    <CardTemplate class="infoCard" :react-to-hover="false">
      <MarkdownRenderer source="Bezier.md"/>
    </CardTemplate>
  </div>

  <div class="infoContainer" v-if="infoState === 'academic'">
    <CardTemplate class="infoCard" :react-to-hover="false">
      <MarkdownRenderer source="Calculator.md"/>
      <div class="calculatorDiv">
        <CalculatorBody/>
      </div>
    </CardTemplate>

    <CardTemplate class="infoCard" :react-to-hover="false">
      <MarkdownRenderer source="Pathfinding.md"/>
    </CardTemplate>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import store from "@/store";
import CardTemplate from "@/components/CardTemplate.vue";
import MarkdownRenderer from "@/components/MarkdownRenderer.vue";
import InformationNavBar from "@/components/InfoNavBar.vue";
import CalculatorBody from "@/components/CalculatorBody.vue";
import PopupModal from "@/components/PopupModal.vue";
import FluidSimulation from "@/components/FluidSimulation.vue";

const isPopupVisible = ref(false);
const infoState = ref("academic");

const isMobile = store.state.isMobileDevice;

const updateInfoState = (newState: string) => {
  infoState.value = newState;
}
</script>

<style scoped>
.calculatorDiv {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

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

.simulationButtonDiv {
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
}

@media screen and (min-width: 600px) {
  :root {
    --horizontal-padding: 5%;
  }
}
</style>