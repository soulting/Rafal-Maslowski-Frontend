<template>
  <div class="carousel-item">
    <img class="post-image" :src="posts.posts[id].image" alt="post image" />
    <div class="post-body">
      <h4 class="post-title">{{ posts.posts[id].title }}</h4>
      <p class="post-description">{{ posts.posts[id].description }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({ id: Number });

const posts = await fetchPosts();

async function fetchPosts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
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
    }, 3000);
  });
}
</script>

<style scoped>
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

.post-description {
  font-size: 15px;
  font-weight: 300;
  text-align: left;
}

@media (min-width: 768px) {
  .carousel-item {
    width: 300px;
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
</style>
