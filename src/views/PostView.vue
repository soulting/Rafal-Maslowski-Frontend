<template>
  <section v-if="!blogPost.isLoading" class="post-view-post-container">
    <h1 class="title-section">{{ blogPost.post.title }}</h1>
    <p>Opublikowano 08/10/2024 przez R. Masłowski</p>
    <hr />
    <div class="body-section" v-html="blogPost.post.code"></div>
    <hr />
    <div class="fotter-section"></div>
  </section>
  <section v-else>Nie mogę załadować danych</section>
  <Contact />
</template>

<script setup>
import getBlogPost from "@/composables/getBlogPost";
import router from "@/router";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import Contact from "@/views/HomeViewElements/Contact.vue";

const route = useRoute();

const blogPost = ref({
  id: null,
  isLoading: true,
  post: null,
});

blogPost.value.id = route.query.id;
getBlogPost(blogPost);

onMounted(async () => {});
</script>

<style>
.post-view-post-container img {
  max-width: 100%;
  height: auto;
}

.post-view-post-container {
  /* text-align: justify; */
  padding: 10px;
  padding-top: 100px;
  box-sizing: border-box;
  overflow-wrap: break-word;
}

.post-view-post-container h1 {
  font-size: 25px;
}

.post-view-post-container h1 h2 h3 h4 h5 h6 span {
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
    padding: 30px;
  }
}

@media (min-width: 768px) {
  .post-view-post-container {
    padding: 80px;
  }
}

@media (min-width: 1000px) {
  .post-view-post-container {
    padding: 150px;
  }
}

@media (min-width: 1300px) {
  .post-view-post-container {
    padding: 200px;
  }
}
</style>
