<template>
  <section class="about" id="about-element-observe-target">
    <div class="upper-image-container">
      <img
        src="@/assets/backgrounds/kevin-rajaram-ULwzqOnPem0-unsplash.jpg"
        alt="background-image"
      />

      <transition name="aboutElement">
        <div v-if="showElement" class="name-container" id="element0">
          <h1>DORADCA FINANSOWY</h1>
        </div></transition
      >
    </div>
    <div class="about-main-section">
      <transition name="aboutElement">
        <div v-if="showElement" class="description-section" id="element1">
          <p>
            Wiedzę i doświadczenie zdobyłem od podszewki, pracując w banku. W
            życiu zawodowym kieruję się przede wszystkim dobrem klienta. Stawiam
            na indywidualne podejście, co w moim przekonaniu jest kluczem do
            skutecznego prowadzenia całego procesu kredytowego. Dzielę się swoją
            wiedzą, staram się też przybliżyć dobre praktyki eksperta
            kredytowego.
          </p>
          <button @click="goTo">Skontaktuj się</button>
        </div>
      </transition>
      <transition name="aboutElement">
        <img
          v-if="showElement"
          id="element2"
          src="@/assets/backgrounds/DSC00434-Poprawione-Szum bez tła mniejszy rozmiar.png"
          alt="profile picture"
      /></transition>
    </div>
  </section>
  <Contact /><Footer />
</template>

<script setup>
import Footer from "./SharedElements/Footer.vue";
import Contact from "@/views/HomeViewElements/Contact.vue";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const showElement = ref(false);
let observer = null;

const goTo = () => {
  router.push("/contactinformation");
};

onMounted(() => {
  window.scroll(0, 0);
  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        showElement.value = true;
      }
    });
  });

  const target = document.getElementById("about-element-observe-target");
  if (target) observer.observe(target);
});
</script>

<style scoped>
.about {
  margin-top: 70px;
}

.upper-image-container {
  align-items: flex-end;
  color: white;
  display: flex;
  height: 200px;
  justify-content: center;
  position: relative;
}

.upper-image-container img {
  left: 0;
  position: absolute;
  right: 0;
  width: 450px;
  z-index: -1;
}

.about-main-section {
  align-items: center;
  background-color: white;
  display: flex;
  font-style: italic;
  justify-content: center;
  line-height: 25px;
  padding: 20px;
}

.about-main-section img {
  border-radius: 5px;
  display: none;
  width: 100%;
}

.name-container {
  align-items: center;
  background-color: rgba(19, 19, 19, 0.6);
  bottom: 20px;
  display: flex;
  flex-direction: column;
  height: 100px;
  justify-content: center;
  left: 50%;

  width: 300px;
  z-index: 5;
  margin-bottom: 75px;
}

.name-container h1 {
  color: white;
  font-size: 30px;
  margin: 0;
}

.description-section {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: justify;
}

.description-section button {
  background-color: white;
  border: solid black 0.5px;
  border-radius: 25px;
  color: #2c3e50;
  cursor: pointer;
  font-family: "Quicksand", sans-serif;
  font-optical-sizing: auto;
  font-size: 16px;
  font-weight: 500;
  height: 50px;
  margin-bottom: 30px;
  margin-top: 30px;
  padding: 0 15px;
  text-align: center;
  transition: all 1s ease;
}

.description-section button:hover {
  background-color: #2c3e50;
  color: #ffffff;
  font-size: 18px;
}

#element0.aboutElement-enter-active {
  transition-delay: 0.25s;
}
#element1.aboutElement-enter-active {
  transition-delay: 0.75s;
}

#element2.aboutElement-enter-active {
  transition-delay: 1.25s;
}

.aboutElement-enter-from,
.aboutElement-leave-to {
  opacity: 0;
  transform: translateY(100%);
}

.aboutElement-enter-active,
.aboutElement-leave-active {
  transition: all 1s ease;
}

/* Media Queries */
@media (min-width: 450px) {
  .upper-image-container {
    height: 250px;
  }

  .upper-image-container img {
    bottom: -75px;
    width: 650px;
  }

  .about-main-section {
    padding: 30px;
  }
}

@media (min-width: 650px) {
  .upper-image-container {
    height: 300px;
  }

  .upper-image-container img {
    bottom: -100px;
    width: 768px;
  }

  .about-main-section {
    padding: 40px;
  }
}

@media (min-width: 768px) {
  .about-main-section {
    gap: 30px;
    padding-bottom: 75px;
    padding-top: 75px;
    font-size: 18px;
    line-height: 30px;
  }

  .about-main-section img {
    display: block;
    flex: 1;
    max-width: 450px;
  }

  .description-section {
    flex: 1;
    max-width: 450px;
  }

  .name-container {
    height: 100px;
    width: 400px;
  }

  .upper-image-container img {
    bottom: -110px;
    width: 950px;
  }
}

@media (min-width: 950px) {
  .about-main-section {
    gap: 45px;
    padding-bottom: 100px;
    padding-top: 100px;
  }

  .name-container {
    height: 120px;
    width: 500px;
  }

  .name-container h1 {
    font-size: 35px;
  }

  .upper-image-container img {
    bottom: -250px;
    width: 1200px;
  }
}

@media (min-width: 1200px) {
  .about-main-section {
    gap: 65px;
    padding-bottom: 150px;
    padding-top: 150px;
  }

  .upper-image-container {
    height: 350px;
  }

  .upper-image-container img {
    bottom: -350px;
    width: 1400px;
  }
}

@media (min-width: 1400px) {
  .about-main-section {
    gap: 85px;
  }

  .upper-image-container {
    height: 400px;
  }

  .upper-image-container img {
    bottom: -365px;
    width: 1600px;
  }
}

@media (min-width: 1600px) {
  .upper-image-container {
    height: 450px;
  }

  .upper-image-container img {
    bottom: -450px;
    width: 2000px;
  }
}
</style>
