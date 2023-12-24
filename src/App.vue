<template>
  <div class="page-title">
    <DynamicTitle msg="Trygve Jørgensen"
                  level="1"/>
    <img :src="require('./assets/ProfilePic.jpg')" alt="Profile picture"/>
  </div>
  <div class="g-container">
    <CardTemplate style="grid-area: 1 / 1 / 1 / 1">
      <MarkdownRenderer source="OmMeg.md"/>
    </CardTemplate>
    <CardTemplate style="grid-area: 2 / 1 / 3 / 1">
    </CardTemplate>

    <CardTemplate style="grid-area: 1 / 2 / 3 / 2">
      <DynamicTitle msg="CV" level="3"/>
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
  --horizontal-padding: 150px;
}
#app {
  padding-left: var(--horizontal-padding);
  padding-right: var(--horizontal-padding);
}
.g-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 200px);
  gap: 50px;
  overflow: visible;
}
.page-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.page-title img {
  height: 100px;
  border-radius: 50px;
}
</style>
