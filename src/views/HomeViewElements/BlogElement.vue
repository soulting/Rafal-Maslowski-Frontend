<template>
  <section class="blog-element" id="blog-element-observe-target">
    <transition name="blogElement">
      <h2 v-if="showElement[0]">Ostatnie wpisy</h2></transition
    >
    <div class="posts-container">
      <div
        v-for="(post, index) in posts.posts"
        :key="index"
        class="post-container"
      >
        <transition name="blogElement">
          <img
            v-show="showElement[index]"
            class="post-image"
            :src="post.image"
            alt="post image"
          />
        </transition>
        <transition name="blogElement">
          <div v-show="showElement[index]" class="post-body">
            <h4 class="post-title">{{ post.title }}</h4>
            <p class="post-description">{{ post.description }}</p>
          </div>
        </transition>
      </div>
    </div>

    <carousel
      class="carousel"
      :items-to-show="1"
      :wrap-around="true"
      snapAlign="center"
    >
      <slide
        v-for="(post, index) in posts.posts"
        :key="index"
        class="carousel-posts-container"
      >
        <div class="carousel-item">
          <img class="post-image" :src="post.image" alt="post image" />
          <div class="post-body">
            <h4 class="post-title">{{ post.title }}</h4>
            <p class="post-description">{{ post.description }}</p>
          </div>
        </div>
      </slide>
    </carousel>
    <transition name="blogElement">
      <button v-if="showElement[3]" class="more-articles">
        Więcej wpisów
      </button></transition
    >
  </section>
</template>

<script setup>
import { onMounted, ref } from "vue";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

const posts = ref({
  posts: [
    {
      title: "Wprowadzenie do JavaScript",
      description:
        "Poznaj podstawy języka JavaScript i jego zastosowania w tworzeniu interaktywnych stron internetowych.",
      image: require("@/assets/backgrounds/image1.png"),
    },
    {
      title: "Zalety Programowania Funkcyjnego",
      description:
        "Dowiedz się, dlaczego programowanie funkcyjne zyskuje na popularności i jakie są jego główne zalety.",
      image: require("@/assets/backgrounds/image2.png"),
    },
    {
      title: "Tworzenie Responsywnych Stron",
      description:
        "Jak budować strony internetowe, które działają na różnych urządzeniach dzięki technikom responsywności.",
      image: require("@/assets/backgrounds/image3.png"),
    },
  ],
});

const showElement = ref([false, false, false, false]);

onMounted(() => {
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

.non-carousel {
  display: none;
}

.carousel {
  width: 100%;
}

.carousel-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  background-color: white;
}

.carousel-item:hover {
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
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

.post-image {
  height: 250px;
  width: 350px;
  object-fit: cover;
  object-position: center;
}

.post-body {
  height: 200px;
  padding: 20px;
  box-sizing: border-box;
}

.post-title {
  border-bottom: solid rgb(150, 150, 150) 0.5px;
  font-size: 20px;
  font-weight: 300;
  padding-bottom: 10px;
  text-align: left;
  margin: 0 0 20px 0;
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
}

.more-articles:hover {
  font-size: 18px;
  background-color: #2c3e50;
  color: #ffffff;
}

.post-description {
  font-size: 15px;
  font-weight: 300;
  text-align: left;
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
    /* justify-content: center; */
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
    /* background-color: white; */
    width: 300px;
    height: 350px;
    margin: 25px 0;
    transition: all 0.3s ease;
  }

  .post-container:hover {
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }

  .post-image {
    height: 150px;
    width: 300px;
    object-fit: cover;
    object-position: center;
  }

  .post-body {
    height: 200px;
    padding: 20px;
    box-sizing: border-box;
    background-color: white;
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
