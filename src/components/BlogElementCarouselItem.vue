<template>
  <div @click="goTo(post.id)" class="item">
    <img class="post-image" :src="post.image" alt="post image" />
    <div class="post-body">
      <h4 class="post-title">{{ post.title }}</h4>
      <p class="post-description">{{ post.description }}</p>
    </div>
  </div>
</template>

<script setup>
import { getBlogPost } from "@/composables/getBlogPost.js";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const props = defineProps({ post: Object });

const goTo = (postID) => {
  router.push({ name: "post", query: { id: postID } });
};
</script>

<style scoped>
.item {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* width: 350px; */
  background-color: white;
  height: 100%;
}

.post-image {
  /* height: 250px;
  width: 350px; */
  width: 100%;
  object-fit: cover;
  object-position: center;
}

.post-body {
  /* height: 200px;
  width: 100%; */
  padding: 20px;
  box-sizing: border-box;
}

.post-title {
  min-height: 50px;
  border-bottom: solid rgb(150, 150, 150) 0.5px;
  font-size: 20px;
  font-weight: 300;
  padding-bottom: 10px;
  text-align: left;
  margin: 0 0 20px 0;
}

.post-description {
  font-size: 14px;
  font-weight: 300;
  text-align: left;
  line-height: 20px;
}

@media (min-width: 768px) {
  .item {
    /* width: 300px; */
  }

  .post-image {
    /* height: 150px;
    width: 300px; */
    object-fit: cover;
    object-position: center;
  }

  .post-body {
    /* height: 200px; */
    padding: 20px;
    box-sizing: border-box;
    background-color: white;
  }
}
</style>
