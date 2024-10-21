<template>
  <Title />
  <Selectors @changeCategory="changeCategory" />
  <Posts :category="category" />
  <Contact />
</template>

<script setup>
import Contact from "@/views/HomeViewElements/Contact.vue";
import Title from "@/views/BlogViewElements/Title.vue";
import Selectors from "@/views/BlogViewElements/PostSelector.vue";
import Posts from "@/views/BlogViewElements/Posts.vue";
import { ref } from "vue";

const category = ref("WSZYSTKIE WPISY");

const changeCategory = (item) => {
  category.value = item;
};
</script>

<style scoped></style>
