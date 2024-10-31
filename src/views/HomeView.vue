<template>
  <main class="home-view">
    <Quote />
    <BlogElement />
    <WhyMe />
    <Options />
    <Banks />
    <Contact />
  </main>
</template>

<script setup>
import BlogElement from "./HomeViewElements/BlogElement.vue";
import Quote from "./HomeViewElements/Quote.vue";
import WhyMe from "./HomeViewElements/WhyMe.vue";
import Banks from "./HomeViewElements/Banks.vue";
import Options from "./HomeViewElements/Opinions.vue";
import Contact from "./HomeViewElements/Contact.vue";
import { onMounted, onUnmounted } from "vue";

onMounted(() => {
  window.scrollTo(0, 0);
});
</script>

<style scoped>
.home-view {
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
}
</style>
