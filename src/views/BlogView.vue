<template>
  <Title
    v-if="mutables.data"
    :mutables="mutables.data"
    @videoLoaded="videoIsLoaded = true"
  />
  <Selectors @changeCategory="changeCategory" />
  <Posts v-if="posts.data" :posts="posts" :category="category" />
  <Contact />
  <Loader v-if="!posts.data || !mutables.data || !videoIsLoaded" />
  <Footer />
</template>

<script setup>
import Contact from "@/views/HomeViewElements/Contact.vue";
import Title from "@/views/BlogViewElements/Title.vue";
import Selectors from "@/views/BlogViewElements/PostSelector.vue";
import Posts from "@/views/BlogViewElements/Posts.vue";
import Loader from "./SharedElements/Loader.vue";
import Footer from "./SharedElements/Footer.vue";
import { computed, onMounted, onUnmounted, ref } from "vue";
import { usePosts } from "@/stores/posts";
import { useMutables } from "@/stores/mutables";

const posts = usePosts();
const mutables = useMutables();

const category = ref("WSZYSTKIE WPISY");

const videoIsLoaded = ref(false);

const changeCategory = (item) => {
  category.value = item;
};

onMounted(() => {
  window.scrollTo(0, 0);
});
</script>

<style scoped>
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
