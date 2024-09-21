<template>
  <main class="home-view">
    <QuotesviewVue />
    <BlogElementVue />
    <WhyMe />
    <Banki />
    <Options />
  </main>
</template>

<script setup>
import BlogElementVue from "./HomeViewElements/BlogElement.vue";
import QuotesviewVue from "./HomeViewElements/Quotesview.vue";
import WhyMe from "./HomeViewElements/WhyMe.vue";
import Banki from "./HomeViewElements/Banki.vue";
import Options from "./HomeViewElements/Opinions.vue";
</script>

<style scoped>
.home-view {
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
