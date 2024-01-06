<template>
  <div class="header">
    <h2 class="title">{{ metaData.title }}</h2>
    <div class="details">
      <p v-if="metaData.date !== ''">{{ new Date(metaData.date).toDateString() }}</p>
      <p v-if="metaData.repo !== ''"><a :href="metaData.repo" target="_blank">Github</a></p>
      <p v-if="metaData.category !== ''">{{ metaData.category }}</p>
    </div>
  </div>

  <div class="md" v-html="markdown.render(markdownContent)" />
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
  title?: string;
  date?: string;
  repo?: string;
  category?: string;
}

const markdown = new MarkdownIt();
const markdownContent = ref('');
const metaData = ref<FrontMatter>({ title: '', date: '', repo: '', category: '' });

onMounted( () => {
  fetch(props.source)
    .then(response => response.text())
    .then(text => {
      const { body, attributes } = frontmatter<FrontMatter>(text);
      markdownContent.value = body;
      metaData.value = {
        title: attributes.title ?? '',
        date: attributes.date ?? '',
        repo: attributes.repo ?? '',
        category: attributes.category ?? ''
      }
    })
});
</script>

<style scoped>
.header {
  margin-top: 20px;
}

.title {
  margin: 0;
  padding: 0;
}

.details {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 0 20px;
}

.details p, .details p a {
  margin: 0;
  padding: 0;
  font-size: 0.8rem;
  color: #dcdcdc;
}
</style>

<style>
.md img {
  width: 100%;
  height: 100%; /* changed to 100% */
  max-width: 500px;
  max-height: 500px;
  object-fit: contain; /* ensures aspect ratio is maintained */
  display: block;
  margin-left: auto;
  margin-right: auto;
}

</style>