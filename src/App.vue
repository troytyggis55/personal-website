<template>
  <div class="page-title">
    <DynamicTitle msg="Trygve Jørgensen" level="1"/>
    <img :src="require('../public/ProfilePic.jpg')" alt="Profile picture"/>
  </div>

  <div class="g-container">
    <CardTemplate style="grid-area: 1 / 1 / 1 / 3">
      <MarkdownRenderer source="AboutMe.md"/>
    </CardTemplate>

    <CardTemplate style="grid-area: 1 / 3 / 3 / 5">
      <MarkdownRenderer source="CV.md"/>
      <embed src="/CV.pdf"/>
    </CardTemplate>

    <CardTemplate style="grid-area: 2 / 1 / 2 / 1">
      <MarkdownRenderer source="Skills.md"/>
    </CardTemplate>

    <CardTemplate style="grid-area: 2 / 2 / 2 / 2">

    </CardTemplate>
  </div>


  <CustomFooter/>
</template>

<script setup lang="ts">
import {defineComponent} from "vue";

import DynamicTitle from "@/components/DynamicTitle.vue";
import CardTemplate from "@/components/CardTemplate.vue";
import CustomFooter from "@/components/CustomFooter.vue";
import MarkdownRenderer from "@/components/MarkdownRenderer.vue";

defineComponent({
  name: 'App',
  components: {
    DynamicTitle,
    CardTemplate,
    MarkdownRenderer
  }
});
</script>

<style>
:root{
  --horizontal-padding: 200px;
}
#app {
  padding-left: var(--horizontal-padding);
  padding-right: var(--horizontal-padding);
}
.g-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 200px);
  gap: 40px;
  overflow: visible;
}
.page-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0;
}
.page-title img {
  height: 100px;
  border-radius: 50px;
}
embed {
  width: 100%;
  height: 100%;
}
</style>
