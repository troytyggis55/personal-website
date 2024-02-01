<template>
  <Transition name="title" appear>
    <div class="pageTitle">
      <h1>Trygve Jørgensen</h1>
      <img src="KvadratProfilbilde.jpeg" alt="Profile picture" id="profilePicture"/>
    </div>
  </Transition>

  <Transition name="grid" appear>
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
  </Transition>

  <Transition name="info" appear>
    <div>
      <InformationCards/>
    </div>
  </Transition>

  <Transition name="footer" appear>
    <CustomFooter/>
  </Transition>
</template>

<script setup lang="ts">
import {defineComponent, ref} from "vue";

import CardTemplate from "@/components/CardTemplate.vue";
import CustomFooter from "@/components/CustomFooter.vue";
import MarkdownRenderer from "@/components/MarkdownRenderer.vue";
import InformationCards from "@/components/InformationCards.vue";

defineComponent({
  name: 'App',
  components: {
    CustomFooter
  }
});

function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

const isMobile = ref(isMobileDevice());
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

.info-enter-active, .info-leave-active {
  transition: all 1.5s ease 1s;
}

.info-enter-from, .info-leave-to {
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

:root {
  --horizontal-padding: 5%;
}

#app {
  padding-left: var(--horizontal-padding);
  padding-right: var(--horizontal-padding);
}

h1 {
  font-size: 2.2em;
}

.pageTitle {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0;
}

#profilePicture {
  height: 70px;
  border-radius: 35px;
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

.v-enter-active, .v-leave-active {
  transition: opacity 0.5s;
}

.v-enter-from, .v-leave-to {
  opacity: 0;
}


@media screen and (min-width: 600px) {
  :root{
    --horizontal-padding: 5%;
  }

  .pageTitle h1 {
    font-size: 3em;
  }

  #profilePicture {
    height: 100px;
    border-radius: 50px;
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

@media screen and (min-width: 900px) {
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

@media screen and (min-width: 2000px) {
  #app {
    padding-left: calc((100vw - 2000px) / 2);
    padding-right: calc((100vw - 2000px) / 2);
  }
}
</style>
