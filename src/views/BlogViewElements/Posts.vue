<template>
  <section class="posts-container">
    <div class="posts-large-view">
      <div class="large-view-collumn">
        <div
          v-for="(item, index) in evenPosts"
          :key="index"
          class="post-element"
        >
          <BlogElement :post="item" />
        </div>
      </div>
      <div class="large-view-collumn">
        <div
          v-for="(item, index) in oodPosts"
          :key="index"
          class="post-element"
        >
          <BlogElement :post="item" />
        </div>
      </div>
    </div>
    <div v-if="!posts.isLoading" class="posts-small-view">
      <div
        v-for="(item, index) in filteredPosts"
        :key="index"
        class="post-element"
      >
        <BlogElement :post="item" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { usePosts } from "@/stores/posts";
import { computed, onMounted } from "vue";
import BlogElement from "@/components/BlogElement.vue";

const props = defineProps({
  category: String,
});

const posts = usePosts();

const filteredPosts = computed(() => {
  if (props.category === "WSZYSTKIE WPISY") {
    return posts.posts;
  } else {
    return posts.posts.filter((element) => element.category === props.category);
  }
});

const evenPosts = computed(() => {
  if (filteredPosts.value) {
    return filteredPosts.value.filter((element, index) => index % 2 === 0);
  } else return null;
});

const oodPosts = computed(() => {
  if (filteredPosts.value) {
    return filteredPosts.value.filter((element, index) => index % 2 !== 0);
  } else return null;
});

onMounted(() => {
  if (posts.isLoading) {
    posts.getPosts();
  }
});
</script>

<style scoped>
.posts-container {
  background-color: rgb(248, 248, 248);
  padding: 20px 0;
}

.posts-large-view {
  display: none;
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
  transition: all ease 0.5s;
  cursor: pointer;
}

.post-element:hover {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

@media (min-width: 450px) {
  .post-element {
    width: 400px;
  }
}

@media (min-width: 768px) {
  .post-element {
    width: 300px;
  }

  .posts-small-view {
    display: none;
  }
  .posts-large-view {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 50px;
  }

  .large-view-collumn {
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;
    justify-content: center;
  }
}

@media (min-width: 1000px) {
  .post-element {
    width: 350px;
  }
}
</style>
