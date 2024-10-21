<template>
  <section class="posts-container">
    <!-- <div class="posts-large-view"></div> -->
    <div v-if="!posts.isLoading" class="posts-small-view">
      <div
        v-for="(item, index) in posts.posts"
        :key="index"
        class="post-element"
      >
        <img :src="item.image" alt="post image" />
        <h2>{{ item.title }}</h2>
        <p>{{ item.description }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { usePosts } from "@/stores/posts";
import { computed } from "vue";

const props = defineProps({
  category: String,
});

const posts = usePosts();

const filteredPosts = computed((list) => {});
</script>

<style scoped>
.posts-container {
  background-color: rgb(248, 248, 248);
  padding: 20px 0;
}

.posts-small-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 35px;
}

.post-element {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 350px;
  background-color: white;
  padding-bottom: 15px;
}

.post-element img {
  width: 350px;
  height: auto;
}

.post-element h2 {
  width: 325px;
  text-align: left;
  padding: 15px 0;
  border-bottom: solid rgb(150, 150, 150) 0.5px;
}

.post-element p {
  width: 325px;
  text-align: left;
}
</style>
