<template>
  <section class="blog-element" id="blog-element-observe-target">
    <transition name="blogElement">
      <h2 v-if="showElement[0]">Ostatnie wpisy</h2></transition
    >
    <div class="posts-container">
      <div v-for="(id, index) in 3" :key="index" class="post-container">
        <BlogElement
          v-if="!postsHeaders.isLoading"
          :post="postsHeaders.posts[id - 1]"
        />
        <BlogElementSceleton v-else />
      </div>
    </div>

    <carousel
      class="carousel"
      :items-to-show="1"
      :wrap-around="true"
      snapAlign="center"
    >
      <slide
        v-for="(id, index) in 3"
        :key="index"
        class="carousel-posts-container"
      >
        <BlogElement
          v-if="!postsHeaders.isLoading"
          :post="postsHeaders.posts[id - 1]"
        />
        <BlogElementSceleton v-else />
      </slide>
    </carousel>
    <transition name="blogElement">
      <button v-if="showElement[3]" @click="goToBlog" class="more-articles">
        Więcej wpisów
      </button></transition
    >
  </section>
</template>

<script setup>
import { onMounted, ref } from "vue";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import BlogElement from "@/components/BlogElementCarouselItem.vue";
import BlogElementSceleton from "@/components/BlogElementCarouselItemSceleton.vue";
import getPosts from "@/composables/getBlogPosts";
import { useRoute, useRouter } from "vue-router";

const postsHeaders = ref({
  isLoading: true,
  posts: [],
});

const router = useRouter();

const showElement = ref([false, false, false, false]);

const goToBlog = () => {
  router.push("/blog");
};

onMounted(() => {
  getPosts(postsHeaders);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        for (let i = 0; i < 4; i++) {
          setTimeout(() => {
            showElement.value[i] = true;
          }, i * 250);
        }
      }
    });
  });
  const target = document.getElementById(`blog-element-observe-target`);
  observer.observe(target);
});
</script>

<style scoped>
.blog-element {
  padding: 25px 0 25px 0;
  background-color: rgb(250, 250, 250);
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

h2 {
  margin: 0 0 25px 25px;
  pointer-events: none;
  width: 100%;
  text-align: left;
}

.carousel {
  width: 100%;
}

.posts-container {
  display: none;
}

.post-container {
  cursor: pointer;
  width: 350px;
  margin: 25px 0;
  transition: all 0.3s ease;
}

.more-articles {
  font-size: 16px;
  font-weight: 500;
  height: 50px;
  background-color: white;
  border: solid black 0.5px;
  border-radius: 25px;
  padding: 0 15px 0 15px;
  font-family: "Quicksand", sans-serif;
  font-optical-sizing: auto;
  text-align: center;
  color: #2c3e50;
  transition: all 1s ease;
  margin-top: 30px;
  cursor: pointer;
}

.more-articles:hover {
  font-size: 18px;
  background-color: #2c3e50;
  color: #ffffff;
}

.blogElement-enter-from,
.blogElement-leave-to {
  opacity: 0;
  transform: translateY(100%);
}

.blogElement-enter-active,
.blogElement-leave-active {
  transition: all 1s ease;
}

.blogElement-enter-to,
.blogElement-leave-from {
  opacity: 1;
  transform: translateY(0%);
}

@media (min-width: 450px) {
  h2 {
    text-align: center;
  }
}

@media (min-width: 768px) {
  h2 {
    margin: 25px;
  }

  .posts-container {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 50px;
    margin: auto;
    width: 650px;
  }

  .carousel {
    display: none;
  }

  .post-container {
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 350px;
    margin: 25px 0;
    transition: all 0.3s ease;
  }

  .post-container:hover {
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
}

@media (min-width: 1100px) {
  h2 {
    margin: 35px 0 35px 0;
  }
  .posts-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
}
</style>
