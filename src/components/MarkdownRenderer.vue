<template>
  <div class="details">
    <p v-if="metaData.date !== ''">{{ metaData.date }}</p>
    <p v-if="metaData.repo !== ''">Github: <a :href="metaData.repo">{{ metaData.repo }}</a></p>
    <p v-if="metaData.category !== ''">{{ metaData.category }}</p>
  </div>

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
  date?: string;
  repo?: string;
  category?: string;
}

const markdown = new MarkdownIt();
const markdownContent = ref('');
const metaData = ref<FrontMatter>({ date: '', repo: '', category: '' });

onMounted( () => {
  fetch(props.source)
    .then(response => response.text())
    .then(text => {
      const { body, attributes } = frontmatter<FrontMatter>(text);
      markdownContent.value = body;
      metaData.value = {
        date: attributes.date ?? '',
        repo: attributes.repo ?? '',
        category: attributes.category ?? ''
      }
    })
});
</script>

<style scoped>
.details {
  margin-top: 10px;
  margin-bottom: 0;
}

.details p {
  margin: 0;
  font-size: 0.8rem;
  color: #dcdcdc;
}

.details p a {
  color: #dcdcdc;
}
</style>