<template>
  <section class="quote-backgrounds" id="quote-observe-target">
    <video
      class="background-video"
      src="@/assets/video_backgrounds/Timeline 2.mp4"
      type="video/mp4"
      autoplay
      loop
      muted
      ref="videoElamentHome"
    ></video>
    <transition name="quotesTransition">
      <div v-show="showQuotes" class="quotes-container">
        <p class="quote">
          Szukasz nieruchomości, potrzebujesz finansowania i ubezpieczenia?
          Trafiłeś w odpowiednie miejsce. Oszczędź swój czas i pieniądze,
          skorzystaj z porad doświadczonego Eksperta. Zapraszam serdecznie do
          współpracy.
        </p>
        <p class="quote signature">Rafał Masłowski</p>
      </div>
    </transition>
  </section>
</template>

<script setup>
import { onMounted, ref } from "vue";

const emit = defineEmits(["videoHomeLoaded"]);

const showQuotes = ref(false);
const videoElamentHome = ref(null);

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        showQuotes.value = true;
      }
    });
  });
  const target = document.getElementById(`quote-observe-target`);
  observer.observe(target);

  if (videoElamentHome.value) {
    videoElamentHome.value.addEventListener("canplaythrough", () => {
      emit("videoHomeLoaded");
    });
  }
});
</script>

<style scoped>
.quote-backgrounds {
  height: 250px;
  width: 100vw;
  transition: all 0.3s ease;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  background-attachment: fixed;
}

.background-video {
  position: fixed;
  display: flex;
  top: 0;
  bottom: 0;
  z-index: -1;
}
.background-video::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.2);
  z-index: -1;
}

.quotes-container {
  background-color: rgb(47, 46, 46, 0.7);
  margin: 0 5px 15px 5px;
  border-radius: 3px;
  padding: 15px;
}

.quotesTransition-enter-from,
.quotesTransition-leave-to {
  opacity: 0;
  transform: translateY(100%);
}

.quotesTransition-enter-active,
.quotesTransition-leave-active {
  transition: all 1s ease;
}

.quotesTransition-enter-to,
.quotesTransition-leave-from {
  opacity: 1;
  transform: translateY(0%);
}

.quote {
  width: 100%;
  font-size: 15px;
  line-height: 22px;
  color: white;
  font-style: italic;
  padding: 0 10px 0 10px;
  font-weight: 300;
  box-sizing: border-box;
}

.quote.signature {
  padding: 0 25px 0 25px;
  text-align: end;
  box-sizing: border-box;
}

@media (min-width: 450px) {
  .quote-backgrounds {
    height: 350px;
  }

  .quotes-container {
    margin: 0 15px 50px 15px;
  }

  .quote {
    padding: 0 20px 0 20px;
  }

  .quote.signature {
    padding: 0 60px 0 10px;
  }
}

@media (min-width: 768px) {
  .quote {
    max-width: 1000px;
    padding: 0 60px 0 60px;
    font-size: 17px;
    font-weight: 400;
    line-height: 25px;
  }

  .quote.signature {
    max-width: 1000px;
    padding-right: 220px;
  }

  .background-video {
    height: 550px;
  }
}

@media (min-width: 950px) {
  .quote-backgrounds {
    height: 450px;
  }

  .quotes-container {
    margin: 0 15px 100px 15px;
  }

  .background-video {
    height: 650px;
    top: 70px;
    bottom: -220px;
  }
}

@media (min-width: 1150px) {
  .background-video {
    height: 750px;
  }
}

@media (min-width: 1300px) {
  .background-video {
    height: 850px;
  }
}

@media (min-width: 1500px) {
  .background-video {
    height: 950px;
  }
}

@media (min-width: 1650px) {
  .background-video {
    height: 1100px;
    bottom: -280px;
  }
}
</style>
