<template>
  <section v-if="blogPost" class="post-view-post-container">
    <h1 class="title-section">{{ blogPost.title }}</h1>
    <p class="publication-date">
      Opublikowano
      <span class="highlight">{{ blogPost.date }}</span> przez
      <span class="highlight">R. Masłowski</span>
    </p>
    <hr />
    <div class="body-section" v-html="blogPost.code"></div>
    <hr />
  </section>
  <Loader v-if="!blogPost" />
  <Contact v-if="blogPost" />
</template>

<script setup>
import { getBlogPost } from "@/composables/getBlogPost";
import router from "@/router";
import { onMounted, ref, computed } from "vue";
import { useRoute } from "vue-router";
import Contact from "@/views/HomeViewElements/Contact.vue";
import { usePosts } from "@/stores/posts";
import Loader from "./SharedElements/Loader.vue";

const route = useRoute();
const posts = usePosts();

const blogPost = computed(() => {
  if (posts.data) {
    return posts.data.find((item) => item.id === Number(route.query.id));
  } else return null;
});

onMounted(async () => {
  window.scrollTo(0, 0);
});
</script>

<style>
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
}

.highlight {
  font-weight: bold;
  white-space: nowrap;
}

.publication-date {
  text-align: left;
}

.post-view-post-container img {
  max-width: 100%;
  height: auto;
}

.post-view-post-container {
  padding: 100px 20px 20px 20px;
  box-sizing: border-box;
  overflow-wrap: break-word;
}

.post-view-post-container h1 {
  font-size: 25px;
}

.post-view-post-container h1,
.post-view-post-container h2,
.post-view-post-container h3,
.post-view-post-container h4,
.post-view-post-container h5,
.post-view-post-container h6,
.post-view-post-container span,
.post-view-post-container li {
  text-align: left;
}

.post-view-post-container p {
  text-align: justify;
}

.post-view-post-container hr {
  border: solid rgb(200, 200, 200) 0.5px;
  margin: 35px 0;
}

.post-view-post-container a {
  text-decoration: none;
}

@media (min-width: 450px) {
  .post-view-post-container {
    padding: 100px 30px 30px 30px;
  }
}

@media (min-width: 768px) {
  .post-view-post-container {
    padding: 100px 80px 80px 80px;
  }
}

@media (min-width: 1000px) {
  .post-view-post-container {
    padding: 100px 150px 80px 150px;
  }
}

@media (min-width: 1300px) {
  .post-view-post-container {
    padding: 100px 200px 80px 200px;
  }
}
</style>
