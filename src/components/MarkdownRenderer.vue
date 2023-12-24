<template>
  <div v-html="markdown.render(markdownContent)" />
</template>

<script setup lang="ts">
import { defineProps, onMounted, ref } from 'vue';
import MarkdownIt from "markdown-it";

const props = defineProps({
  source: {
    type: String,
    default: ""
  }
});

const markdown = new MarkdownIt();
const markdownContent = ref('');

onMounted( () => {
  fetch(props.source)
    .then(response => response.text())
    .then(text => {
      markdownContent.value = text;
    })
});
</script>
