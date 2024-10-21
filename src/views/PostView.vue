<template>
  <section v-if="!blogPost.isLoading" class="post-view-post-container">
    <h1 class="title-section">{{ blogPost.post.title }}</h1>
    <p class="publication-date">
      Opublikowano
      <span class="highlight">{{ blogPost.post.date }}</span> przez
      <span class="highlight">R. Masłowski</span>
    </p>
    <hr />
    <div class="body-section" v-html="blogPost.post.code"></div>
    <hr />
  </section>
  <section class="post-view-post-container-loader" v-else>
    <img src="@/assets/RM_logo.png" alt="Loading..." class="loading-image" />

    <div class="dot-container">
      <img class="dot" id="first" src="@/assets/icons/dot.png" alt="dot" />
      <img class="dot" id="second" src="@/assets/icons/dot.png" alt="dot" />
      <img class="dot" id="third" src="@/assets/icons/dot.png" alt="dot" />
    </div>
  </section>
  <Contact v-if="!blogPost.isLoading" />
</template>

<script setup>
import { getBlogPost } from "@/composables/getBlogPost";
import router from "@/router";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import Contact from "@/views/HomeViewElements/Contact.vue";

const route = useRoute();

const blogPost = ref({
  id: route.query.id || null,
  isLoading: true,
  post: null,
});

onMounted(() => {
  getBlogPost(blogPost);
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
