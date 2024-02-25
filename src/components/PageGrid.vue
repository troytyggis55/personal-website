<template>
  <div id="gridCardContainer">
    <ContainerCard id="aboutme">
      <MarkdownRenderer source="markdown/AboutMe.md"/>
    </ContainerCard>

    <ContainerCard id="cv">
      <MarkdownRenderer source="markdown/CV.md"/>
      <embed v-if="!isMobile" src="CV.pdf#toolbar=0&view=fitH" alt="CV"/>
      <img v-if="isMobile" src="images/CV.png" alt="CV"/>
    </ContainerCard>

    <ContainerCard id="skills">
      <MarkdownRenderer source="markdown/Skills.md"/>
    </ContainerCard>

    <ContainerCard id="aboutthissite">
      <MarkdownRenderer source="markdown/AboutThisSite.md"/>
    </ContainerCard>
  </div>
</template>

<script setup lang="ts">
import ContainerCard from "@/components/ContainerCard.vue";
import MarkdownRenderer from "@/components/MarkdownRenderer.vue";

const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
</script>

<style scoped>
embed {
  width: 100%;
  height: 100%;
}

img {
  width: 100%;
}

#gridCardContainer {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

@media screen and (min-width: 600px) {
  #gridCardContainer {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 200px);
    gap: 20px;
    overflow: visible;
  }

  #aboutme {
    grid-area: 1 / 1 / 1 / 4;
  }

  #cv {
    grid-area: 2 / 1 / 2 / 3;
  }

  #aboutthissite {
    grid-area: 3 / 1 / 3 / 4;
  }

  #skills {
    grid-area: 2 / 3 / 2 / 4;
  }
}

@media screen and (min-width: 900px) {
  #gridCardContainer {
    grid-template-columns: repeat(4, 1fr);
  }

  #aboutme {
    grid-area: 1 / 1 / 1 / 3;
  }

  #cv {
    grid-area: 1 / 3 / 3 / 5;
  }

  #aboutthissite {
    grid-area: 2 / 1 / 2 / 1;
  }

  #skills {
    grid-area: 2 / 2 / 2 / 2;
  }
}
</style>