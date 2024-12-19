<template>
  <main class="home-view">
    <Quote
      v-if="mutables.data"
      :quote="mutables.data.strona_glowna_cytat"
      @videoHomeLoaded="showSection"
    />
    <BlogElement v-if="posts.data" :posts="posts" />
    <WhyMe />
    <Opinions v-if="mutables.data" :opinions="mutables.data" />
    <Banks />
    <Contact />
    <Loader v-if="!posts.data || !mutables.data || showLoader" />
    <Footer />
  </main>
</template>

<script setup>
import BlogElement from "./HomeViewElements/BlogElement.vue";
import Quote from "./HomeViewElements/Quote.vue";
import WhyMe from "./HomeViewElements/WhyMe.vue";
import Banks from "./HomeViewElements/Banks.vue";
import Opinions from "./HomeViewElements/Opinions.vue";
import Contact from "./HomeViewElements/Contact.vue";
import Loader from "./SharedElements/Loader.vue";
import Footer from "./SharedElements/Footer.vue";
import { onMounted, onUnmounted, ref } from "vue";
import { usePosts } from "@/stores/posts";
import { useMutables } from "@/stores/mutables";

const showLoader = ref(true);

const posts = usePosts();
const mutables = useMutables();

const showSection = () => {
  showLoader.value = false;
};

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

.loading-image {
  width: 150px; /* Dostosuj rozmiar logo */
}

.dot-container {
  display: flex;
  gap: 30px;
}

.dot {
  height: 20px;
  width: auto;
}

#first {
  animation: dot-animation 1.5s infinite;
  animation-delay: 0.25s;
}

#second {
  animation: dot-animation 1.5s infinite;
  animation-delay: 0.5s;
}

#third {
  animation: dot-animation 1.5s infinite;
  animation-delay: 0.75s;
}

@keyframes dot-animation {
  0% {
    scale: 1;
  }
  50% {
    scale: 1.7;
  }
  100% {
    scale: 1;
  }
}
.post-view-post-container-loader {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  position: fixed;
  z-index: 2;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: white;
}
</style>
