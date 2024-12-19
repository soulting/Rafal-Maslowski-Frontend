<template>
  <section class="post-view-post-container-loader">
    <img src="@/assets/RM_logo.png" alt="Loading..." class="loading-image" />

    <div class="dot-container">
      <img class="dot" id="first" src="@/assets/icons/dot.png" alt="dot" />
      <img class="dot" id="second" src="@/assets/icons/dot.png" alt="dot" />
      <img class="dot" id="third" src="@/assets/icons/dot.png" alt="dot" />
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.loading-image {
  width: 150px;
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
  position: fixed;
  z-index: 2;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: white;
}
</style>
