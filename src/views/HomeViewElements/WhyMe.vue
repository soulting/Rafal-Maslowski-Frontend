<template>
  <section class="why-me" id="why-me-observe-target">
    <transition name="whyMeElement">
      <h2 v-if="showElement[0]" class="why-me-title">
        Dlaczego warto
      </h2></transition
    >
    <transition name="whyMeElement">
      <carousel
        class="carousel"
        v-if="showElement[0]"
        :items-to-show="1"
        :wrap-around="true"
        snapAlign="center"
      >
        <slide
          v-for="(reasons, index) in reasonsText"
          :key="index"
          class="carousel-reasonss-container"
        >
          <div class="carousel-item">
            <div class="reasons-body">
              <h4 class="reasons-title">{{ reasons.title }}</h4>
              <p class="reasons-description">{{ reasons.text }}</p>
            </div>
          </div>
        </slide>
        <template #addons>
          <Pagination />
        </template> </carousel
    ></transition>

    <div class="why-me-large-view">
      <div class="why-me-text-container">
        <transition name="whyMeElement">
          <div class="why-me-text-markers" v-show="showElement[0]">
            <div
              v-for="(marker, index) in reasonsText"
              :key="index"
              :id="index"
              class="marker-container"
              @click="changeMissionExplanationSelectedMarker(index)"
              :class="{ selected: missionExplanationSelectedMarker === index }"
            >
              <div class="marker-line"><div class="line"></div></div>
              <p class="marker">{{ marker.title }}</p>
            </div>
          </div>
        </transition>
        <transition name="whyMeElement">
          <div class="why-me-text-fragments" v-show="showElement[1]">
            <div
              v-for="(fragment, index) in reasonsText"
              :key="index"
              class="why-me-text-fragment-iterator"
            >
              <transition name="missionExplanationFragment">
                <div
                  v-show="missionExplanationSelectedMarker === index"
                  class="why-me-text-fragment"
                >
                  <h4 class="why-me-text-title">
                    {{ fragment.title }}
                  </h4>
                  <p class="why-me-text">
                    {{ fragment.text }}
                  </p>
                </div>
              </transition>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref, nextTick } from "vue";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

const reasonsText = ref([
  {
    title: "Kompleksowa obsługa",
    text: "Wszystko załatwisz w jednym miejscu od A do Z. Znajdę dla Ciebie nieruchomość, pomogę w uzyskaniu najlepszego kredytu, ubezpieczę Ciebie, Twój majątek oraz bliskich.",
  },
  {
    title: "Oszczędzasz czas",
    text: "Nie marnuj czasu na sprawdzanie ofert w każdym Banku – zrobię to za Ciebie. Współpracuję ze wszystkimi działającymi na rynku polskim. Nie chcesz odwiedzać mnie w biurze? Spotkajmy się online.",
  },
  {
    title: "Oszczędź pieniądze",
    text: "Pierwsza oferta z brzegu lub ta z Twojego Banku nie zawsze jest najlepszą i najtańszą, doświadczenie pokazało, że konkurencja nie śpi i można zyskać całkiem sporo. Różnicę wydasz na co chcesz.",
  },
  {
    title: "Podejście",
    text: "Poprowadzę Cię za rączkę w całym procesie. Powiem gdzie, co i jak. W branży jestem od 8 lat, procedury bankowe znam jak własną kieszeń. O nic nie musisz się martwić.",
  },
]);

const missionExplanationSelectedMarker = ref(1);

const showElement = ref([false, false]);

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        for (let i = 0; i < 2; i++) {
          setTimeout(() => {
            showElement.value[i] = true;
          }, i * 150);
        }
      }
    });
  });

  const target = document.getElementById(`why-me-observe-target`);
  observer.observe(target);
});

const changeMissionExplanationSelectedMarker = (marker) => {
  missionExplanationSelectedMarker.value = marker;
};
</script>

<style scoped>
.why-me {
  display: flex;
  flex-direction: column;
  margin: 30px 0 50px 0;
  width: 100vw;
}

h2 {
  margin: 0 0 25px 0;
  pointer-events: none;
  width: 100%;
  text-align: center;
}

.carousel {
  display: flex;
  flex-direction: column;
}

.carousel-item {
  padding: 0 25px 0 25px;
}

.why-me-large-view {
  display: none;
}

.why-me-image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-bottom: 25px;
}

.why-me-text-container {
  display: flex;
  width: 100vw;
  position: relative;
}

.why-me-text-markers {
  display: flex;
  flex-direction: column;
  width: 350px;
  margin: 0;
}

.marker-container {
  display: flex;
  flex-direction: row;
  cursor: pointer;
  margin: 10px;
}

.marker-line {
  width: 75px;
  display: flex;
  justify-content: end;
  align-items: center;
}

.line {
  height: 3px;
  width: 15px;
  background-color: rgb(90, 90, 90);
  transition: all 0.2s ease;
}

.marker-container:hover .line {
  width: 35px;
  background-color: black;
}

.marker {
  font-size: 14px;
  line-height: 18px;
  color: rgb(90, 90, 90);
  margin: 0;
  margin-left: 20px;
  transition: all 0.2s ease;
  letter-spacing: 1.4px;
}

.marker-container:hover .marker {
  color: black;
  font-size: 16px;
}

.selected .line {
  width: 100%;
  background-color: black;
}

.selected:hover .line {
  width: 100%;
  background-color: black;
}

.selected .marker {
  color: black;
  font-size: 16px;
}

.why-me-text-fragment {
  position: absolute;
}

.why-me-text-title {
  text-align: left;
  font-size: 18px;
  line-height: 24px;
  margin: 0 0 20px 0;
  font-weight: 700;
}

.why-me-text {
  text-align: left;
  font-size: 16px;
  line-height: 24px;
  width: auto;
}

.missionExplanationFragment-enter-from {
  transform: translateY(100%);

  opacity: 0;
}

.missionExplanationFragment-enter-to {
  transform: translateY(0%);

  opacity: 1;
}

.missionExplanationFragment-enter-active {
  transition: all 0.5s ease;
}

.missionExplanationFragment-leave-active {
  transition: all 0.5s ease;
}

.missionExplanationFragment-leave-from {
  opacity: 1;
  transform: translateY(0%);
}

.missionExplanationFragment-leave-to {
  opacity: 0;
  transform: translateY(-100%);
}

.why-me-text-fragment-iterator {
  height: auto;
  width: 100%;
}

.whyMeElement-enter-from,
.whyMeElement-leave-to {
  opacity: 0;
  transform: translateY(100%);
}

.whyMeElement-enter-active,
.whyMeElement-leave-active {
  transition: all 1s ease;
}

.whyMeElement-enter-to,
.whyMeElement-leave-from {
  opacity: 1;
  transform: translateY(0%);
}

/* @media (min-width: 450px) {
} */

@media (min-width: 768px) {
  h2 {
    margin: 25px 0 25px 100px;
    text-align: left;
  }

  .carousel {
    display: none;
  }

  .why-me-large-view {
    display: flex;
  }

  .why-me-text {
    width: 400px;
  }
}

@media (min-width: 900px) {
  .why-me-text {
    width: 500px;
  }
}

@media (min-width: 1000px) {
  .why-me-text {
    width: 600px;
  }
}

@media (min-width: 1100px) {
  h2 {
    margin: 25px 0 35px 100px;
  }
  .why-me-text {
    width: 750px;
  }

  @media (min-width: 1300px) {
    .why-me-text-fragment {
      margin-left: 200px;
    }
    .why-me-text {
      width: 750px;
    }
  }
}
</style>
