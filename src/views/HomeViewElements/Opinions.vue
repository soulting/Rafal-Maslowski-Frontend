<template>
  <section class="opinions-section" id="opinion-element-observe-target">
    <img
      class="paralax-image"
      id="paralax"
      src="@/assets/backgrounds/hand-shake2.jpg"
      alt=""
    />
    <transition name="opinionElement">
      <h2 v-if="showElement">Co o mnie mówią moi klienci</h2>
    </transition>
    <div class="opinions">
      <div
        v-for="(opinion, index) in opinions"
        :key="index"
        class="outer-opinion-containe"
      >
        <transition name="opinionElement">
          <div
            v-if="showElement"
            class="inner-opinion-container"
            :id="`element${index}`"
          >
            <p class="opinion-text">„{{ opinion.review }}”.</p>
            <p class="opinion-autor">{{ opinion.author }}</p>
          </div>
        </transition>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";

const props = defineProps({
  opinions: {
    type: Object,
    required: true,
  },
});

const opinions = ref([
  {
    author: props.opinions.opinia1_autor,
    review: props.opinions.opinia1,
  },
  {
    author: props.opinions.opinia2_autor,
    review: props.opinions.opinia2,
  },
  {
    author: props.opinions.opinia3_autor,
    review: props.opinions.opinia3,
  },
]);

const showElement = ref(false);

const handleParalax = () => {
  let scrollPosition = window.pageYOffset;

  document.getElementById("paralax").style.transform = `translateY(${
    scrollPosition * 0.3 - 500
  }px)`;
};

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        showElement.value = true;
      }
    });
  });
  const target = document.getElementById(`opinion-element-observe-target`);
  observer.observe(target);

  window.addEventListener("scroll", handleParalax);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleParalax);
});
</script>

<style scoped>
.opinions-section {
  width: 100vw;
  padding: 0 0 30px 0;
  overflow: hidden;
  position: relative;
  min-height: 500px;
}

.paralax-image {
  object-fit: cover;
  width: 100%;
  height: 130%;
  position: absolute;
  left: 0;
}

.opinions-section::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.3);
  z-index: 1;
}

.opinions {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 30px;
}

h2 {
  margin: 30px 0 30px 0;
  position: relative;
  z-index: 2;
}

.inner-opinion-container {
  padding: 0 30px 0 30px;
  box-sizing: border-box;
  font-style: italic;
  border: solid black 0.5px;
  border-radius: 25px;
  background-color: rgb(255, 255, 255, 0.7);
  position: relative;
  z-index: 2;
}

.opinion-text {
  font-size: 16px;
  text-align: start;
  line-height: 26px;
}

.opinion-autor {
  font-size: 18px;
  text-align: end;
  font-weight: 500;
}

.outer-opinion-containe {
  padding: 0 15px 0 15px;
  /* width: 100%; */
}

.opinionElement-enter-from,
.opinionElement-leave-to {
  opacity: 0;
  transform: translateY(100%);
}

.opinionElement-enter-active,
.opinionElement-leave-active {
  transition: all 1s ease;
}

#element0.opinionElement-enter-active {
  transition-delay: 0.35s;
}
#element1.opinionElement-enter-active {
  transition-delay: 0.7s;
}
#element2.opinionElement-enter-active {
  transition-delay: 1.05s;
}

.opinionElement-enter-to,
.opinionElement-leave-from {
  opacity: 1;
  transform: translateY(0%);
}

@media (min-width: 768px) {
  .opinions-section {
    padding: 0 0 50px 0;
  }

  h2 {
    margin: 40px 0 40px 0;
  }
  .opinions {
    gap: 50px;
  }
  .outer-opinion-containe {
    padding: 0 75px 0 75px;
    box-sizing: border-box;
  }
  .inner-opinion-container {
    width: 650px;
  }

  #element1 {
    margin-left: auto;
  }
}

@media (min-width: 1100px) {
  h2 {
    margin: 50px 0 50px 0;
  }
}

@media (min-width: 1200px) {
  .opinions {
    gap: 50px;
  }
  .outer-opinion-containe {
    padding: 0 150px 0 150px;
    box-sizing: border-box;
  }
  .inner-opinion-container {
    width: 650px;
  }
}
</style>
