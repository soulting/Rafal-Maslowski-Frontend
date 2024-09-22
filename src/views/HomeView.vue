<template>
  <main class="home-view">
    <QuotesviewVue />
    <BlogElementVue />
    <WhyMe />
    <Options />
    <Banks />
  </main>
</template>

<script setup>
import BlogElementVue from "./HomeViewElements/BlogElement.vue";
import QuotesviewVue from "./HomeViewElements/Quotesview.vue";
import WhyMe from "./HomeViewElements/WhyMe.vue";
import Banks from "./HomeViewElements/Banks.vue";
import Options from "./HomeViewElements/Opinions.vue";
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
