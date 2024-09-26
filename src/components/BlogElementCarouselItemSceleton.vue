<template>
  <div class="carousel-item">
    <div class="post-image"></div>
    <div class="post-body">
      <h4 class="post-title">Lorem ipsum dolor</h4>
      <p class="post-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. harum,
      </p>
      <p class="post-description">Lorem ipsum dolor sit amet consectetur</p>
    </div>
  </div>
</template>

<script setup></script>

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
  background-color: rgb(243, 243, 243);
  animation: pulse-bg 1.5s infinite;
}

.post-body {
  height: 200px;
  padding: 20px;
  box-sizing: border-box;
}

.post-title {
  user-select: none;
  color: transparent;
  background-color: rgb(243, 243, 243);
  animation: pulse-bg 1.5s infinite;
}

.post-description {
  color: rgb(243, 243, 243);
  color: transparent;
  background-color: rgb(243, 243, 243);
  animation: pulse-bg 1.5s infinite;
}

@keyframes pulse-bg {
  0% {
    background-color: rgb(243, 243, 243);
  }
  50% {
    background-color: rgb(247, 247, 247);
  }
  100% {
    background-color: rgb(243, 243, 243);
  }
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
