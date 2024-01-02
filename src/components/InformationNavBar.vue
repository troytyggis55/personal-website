<template>
  <h2 style="text-align: center; padding-top: 30px;">Completed Projects</h2>
  <nav>
    <ul class="menu">
      <li><a @click="mode = 'academic'" :class="{selected: mode === 'academic'}">Academic</a></li>
      <li><a @click="mode = 'personal'" :class="{selected: mode === 'personal'}">Personal</a></li>
    </ul>
  </nav>

  <div class="container" v-if="mode === 'academic'" key="academic">
      <CardTemplate>
        <MarkdownRenderer source="academic/Dijkstra.md"/>
      </CardTemplate>
  </div>

  <div class="container" v-if="mode === 'personal'" key="personal">
    <CardTemplate>
      <MarkdownRenderer source="personal/Bezier.md"/>
    </CardTemplate>

    <CardTemplate>
      <MarkdownRenderer source="personal/FluidSim.md"/>
    </CardTemplate>
  </div>
</template>

<script setup lang="ts">
  import {ref} from "vue";
  import CardTemplate from "@/components/CardTemplate.vue";
  import MarkdownRenderer from "@/components/MarkdownRenderer.vue";

  const mode = ref("academic");
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 1000px;
  margin: 0 auto;
}

.v-enter-active, .v-leave-active {
  transition: opacity 0.5s;
}

.v-enter-from, .v-leave-to {
  opacity: 0;
}

/* Heavily copied from https://github.com/frontend-joe/css-navbars/blob/main/navbar-15/styles.css */
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

nav {
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
}

a {
  cursor: pointer;
}

.menu {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: stretch;
  height: 50px;
  gap: 20px;
}

.menu li {
  display: inline-block;
  width: 120px;
  transition: all 0.3s ease-in-out;
}

.menu > li:hover > a, .menu > li > a.selected {
  color: #3e95ff;
}

.menu > li:hover > a::before{
  visibility: visible;
  scale: 0.5 0.8;
}

.menu > li > a.selected::before {
  visibility: visible;
  scale: 1 1;
}


.menu > li a {
  color: aliceblue;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 7px;
  text-decoration: none;
  position: relative;
  height: 100%;

  transition: all 0.4s ease-in-out
}

.menu > li > a::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 3px;
  bottom: 3px;
  left: 0;
  background-color: #3e95ff;
  transition: all 0.4s ease-in-out;
  scale: 0 0;
  visibility: hidden;
}
</style>