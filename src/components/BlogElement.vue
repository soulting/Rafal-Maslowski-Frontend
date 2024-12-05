<template>
  <div @click="goTo(post.id)" class="item">
    <img
      class="post-image"
      :src="post.image"
      alt="post image"
      :class="{ homePageBlogElement: props.homePage }"
    />
    <div class="post-body" :class="{ homePageBlogElement: props.homePage }">
      <h4 class="post-title" :class="{ homePageBlogElement: props.homePage }">
        {{ post.title }}
      </h4>
      <p
        class="post-description"
        :class="{ homePageBlogElement: props.homePage }"
      >
        {{ post.description }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { usePosts } from "@/stores/posts";

const router = useRouter();
const posts = usePosts();

const props = defineProps({
  post: Object,
  homePage: Boolean,
});

const goTo = (postId) => {
  router.push({ name: "post", query: { id: postId } });
};

onMounted(() => {
  if (posts.isLoading) {
    posts.getPosts();
  }
});
</script>

<style scoped>
/* Podstawowe style */
.item {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  height: 100%;
}

.post-image {
  width: 100%;
  object-fit: cover;
  object-position: center;
}

.post-body {
  padding: 20px;
  box-sizing: border-box;
}

.post-title {
  min-height: 40px;
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

/* Modyfikatory dla .homePageBlogElement */
.item.homePageBlogElement {
  width: 350px;
}

.post-image.homePageBlogElement {
  height: 250px;
  width: 350px;
}

.post-body.homePageBlogElement {
  height: 200px;
  width: 100%;
}

/* Media queries dla większych ekranów (min-width: 768px) */
@media (min-width: 768px) {
  .post-image {
    object-fit: cover;
    object-position: center;
  }

  .post-body {
    padding: 20px;
    box-sizing: border-box;
    background-color: white;
  }

  .item.homePageBlogElement {
    width: 300px;
  }

  .post-image.homePageBlogElement {
    height: 150px;
    width: 300px;
  }

  .post-body.homePageBlogElement {
    height: 200px;
  }
}
</style>
