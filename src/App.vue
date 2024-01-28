<template>
  <Transition name="title" appear>
    <div class="pageTitle">
      <h1>Trygve Jørgensen</h1>
      <img src="ProfilePic.jpg" alt="Profile picture"/>
    </div>
  </Transition>

  <Transition name="grid" appear>
    <div>
      <div class="gridCardContainer">
        <CardTemplate class="aboutme">
          <MarkdownRenderer source="AboutMe.md"/>
        </CardTemplate>

        <CardTemplate class="cv">
          <MarkdownRenderer source="CV.md"/>
          <embed v-if="!isMobile" src="CV.pdf#toolbar=0&view=fitH" class="CVpdf" alt="CV"/>
          <img v-if="isMobile" src="CV.png" class="CVpng" alt="CV"/>
        </CardTemplate>

        <CardTemplate class="skills">
          <MarkdownRenderer source="Skills.md"/>
        </CardTemplate>

        <CardTemplate class="aboutthissite">
          <MarkdownRenderer source="AboutThisSite.md"/>
        </CardTemplate>
      </div>

      <h2 style="text-align: center; padding-top: 30px;">Projects and Experiences</h2>
      <InformationNavBar @infoStateEmit="updateInfoState"/>

      <div class="infoContainer" v-if="infoState === 'academic'">
        <CardTemplate class="infoCard" :react-to-hover="false">
          <MarkdownRenderer source="Pathfinding.md"/>
        </CardTemplate>
      </div>

      <div class="infoContainer" v-if="infoState === 'personal'">
        <CardTemplate class="infoCard" :react-to-hover="false">
          <MarkdownRenderer source="FluidSim.md"/>
        </CardTemplate>

        <CardTemplate class="infoCard" :react-to-hover="false">
          <MarkdownRenderer source="Bezier.md"/>
        </CardTemplate>
      </div>

      <CustomFooter/>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import {defineComponent, ref} from "vue";

import CardTemplate from "@/components/CardTemplate.vue";
import CustomFooter from "@/components/CustomFooter.vue";
import MarkdownRenderer from "@/components/MarkdownRenderer.vue";
import InformationNavBar from "@/components/InfoNavBar.vue";

defineComponent({
  name: 'App',
  components: {
    CardTemplate,
    MarkdownRenderer,
    CustomFooter,
    InformationNavBar
  }
});

function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

const isMobile = ref(isMobileDevice());
const infoState = ref("academic");

const updateInfoState = (newState: string) => {
  infoState.value = newState;
}
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

:root {
  --horizontal-padding: 5%;
}

#app {
  padding-left: var(--horizontal-padding);
  padding-right: var(--horizontal-padding);
}

.pageTitle {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0;

  h1 {
    font-size: 2.2em;
  }

  img {
    height: 70px;
    border-radius: 35px;
  }
}

.CVpdf {
  width: 100%;
  height: 100%;
}

.CVpng {
  width: 100%;
}

.gridCardContainer {
  display: flex;
  flex-direction: column;
  gap: 20px;
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

.v-enter-active, .v-leave-active {
  transition: opacity 0.5s;
}

.v-enter-from, .v-leave-to {
  opacity: 0;
}


@media screen and (min-width: 480px) {
  :root{
    --horizontal-padding: 5%;
  }

  .pageTitle {
    h1 {
      font-size: 3em;
    }
    img {
      height: 100px;
      border-radius: 50px;
    }
  }

  .gridCardContainer {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 200px);
    gap: 20px;
    overflow: visible;
  }

  .aboutme {
    grid-area: 1 / 1 / 1 / 4;
  }

  .cv {
    grid-area: 2 / 1 / 2 / 3;
  }

  .aboutthissite {
    grid-area: 3 / 1 / 3 / 4;
  }

  .skills {
    grid-area: 2 / 3 / 2 / 4;
  }
}

@media screen and (min-width: 768px) {
  .gridCardContainer {
    grid-template-columns: repeat(4, 1fr);
  }

  .aboutme {
    grid-area: 1 / 1 / 1 / 3;
  }

  .cv {
    grid-area: 1 / 3 / 3 / 5;
  }

  .aboutthissite {
    grid-area: 2 / 1 / 2 / 1;
  }

  .skills {
    grid-area: 2 / 2 / 2 / 2;
  }
}
</style>
