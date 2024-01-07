<template>
  <Transition name="title" appear>
    <div class="page-title">
      <h1>Trygve Jørgensen</h1>
      <img src="ProfilePic.jpg" alt="Profile picture"/>
    </div>
  </Transition>

  <Transition name="grid" appear>
    <div>
      <div class="card-container">
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

      <InformationNavBar/>
      <CustomFooter/>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import {defineComponent, ref} from "vue";

import CardTemplate from "@/components/CardTemplate.vue";
import CustomFooter from "@/components/CustomFooter.vue";
import MarkdownRenderer from "@/components/MarkdownRenderer.vue";
import InformationNavBar from "@/components/InformationNavBar.vue";

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

.page-title {
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

.card-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

@media screen and (min-width: 480px) {
  :root{
    --horizontal-padding: 5%;
  }

  .page-title {
    h1 {
      font-size: 3em;
    }
    img {
      height: 100px;
      border-radius: 50px;
    }
  }

  .card-container {
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
  .card-container {
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
