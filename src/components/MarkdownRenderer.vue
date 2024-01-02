<template>
  <p v-if="metaData.date !== ''">
    <small>Updated: {{ metaData.date }}</small>
  </p>
  <div v-html="markdown.render(markdownContent)" />
</template>

<script setup lang="ts">
import { defineProps, onMounted, ref } from 'vue';
import MarkdownIt from "markdown-it";
import frontmatter from "front-matter";

const props = defineProps({
  source: {
    type: String,
    default: ""
  }
});

interface FrontMatter {
  date: string;
}

const markdown = new MarkdownIt();
const markdownContent = ref('');
const metaData = ref<FrontMatter>({ date: '' });

onMounted( () => {
  fetch(props.source)
    .then(response => response.text())
    .then(text => {
      const { body, attributes } = frontmatter<FrontMatter>(text);
      markdownContent.value = body;
      metaData.value = {
        date: attributes.date || ''
      }
    })
});
</script>
