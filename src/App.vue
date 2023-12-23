<template>
  <PageTitle msg="Trygve Jørgensen"></PageTitle>
  <CustomButton></CustomButton>
</template>

<script setup lang="ts">
import {defineComponent} from "vue";

import CustomButton from "@/components/CustomButton.vue";
import PageTitle from "@/components/PageTitle.vue";

defineComponent({
  name: 'App',
  components: {
    PageTitle,
    CustomButton,
  }
});
</script>

<style>
#app {
  text-align: center;
  border: 2px solid yellow;
}
</style>
