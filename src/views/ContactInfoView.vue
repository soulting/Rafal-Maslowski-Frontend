<template>
  <section class="contact-section" id="contact-element-observe-target">
    <img
      src="@/assets/backgrounds/kevin-rajaram-ULwzqOnPem0-unsplash.jpg"
      alt="background image"
    />

    <transition name="contactElement">
      <div
        v-if="mutables.data && showElement"
        id="element0"
        class="inner-content-section"
      >
        <h2>Kontakt</h2>
        <p>Skontaktuj się ze mną, a odpowiem jak najszybciej.</p>
        <div class="contact-info">
          <h3>Moje dane kontaktowe:</h3>
          <p>
            Email:
            <a :href="`mailto:${mutables.data.email}`">{{
              mutables.data.email
            }}</a>
          </p>
          <p>
            Telefon:
            <a :href="`tel:${mutables.data.telefon}`"
              >+{{ mutables.data.telefon }}</a
            >
          </p>
          <p>
            Facebook:
            <a :href="mutables.data.facebook" target="_blank"
              >Rafał Masłowski</a
            >
          </p>
          <p>
            Adres:
            <a
              :href="`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                mutables.data.adres
              )}`"
              target="_blank"
              >{{ mutables.data.adres }}</a
            >
          </p>
        </div>
      </div>
    </transition>
  </section>

  <div class="separator">
    <transition name="contactElement">
      <div
        class="quote-container"
        v-if="mutables.data && showElement"
        id="element1"
      >
        <p>
          {{ mutables.data.kontakt_cytat }}
        </p>

        <p v-if="mutables.data" class="autograf">Rafał Masłowski</p>
      </div></transition
    >
  </div>

  <Contact />
  <Footer />
  <Loader v-if="!mutables.data" />
</template>

<script setup>
import Contact from "./HomeViewElements/Contact.vue";
import Loader from "./SharedElements/Loader.vue";
import Footer from "./SharedElements/Footer.vue";
import { ref, onMounted } from "vue";
import { useMutables } from "@/stores/mutables";

const mutables = useMutables();

const showElement = ref(false);

let observer = null;

onMounted(() => {
  window.scroll(0, 0);

  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        showElement.value = true;
      }
    });
  });

  const target = document.getElementById("contact-element-observe-target");
  if (target) observer.observe(target);
});
</script>

<style scoped>
.contact-section {
  color: white;
  margin-top: 70px;
  position: relative;
  height: 550px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 25px;
}

.quote-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
}

.separator {
  height: 400px;
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.autograf {
  padding-left: 35%;
}

.separator p {
  max-width: 100%;
  text-align: center;
  line-height: 24px;
  font-size: 20px;
  font-style: italic;
}

.inner-content-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin-top: 50px;
  /* width: 50%; */
  height: 400px;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 20px 20px 40px 20px;
}
.contact-section img {
  position: fixed;
  top: 0;
  z-index: -1;
  height: 100%;
  object-position: center;
}

h2 {
  font-size: 35px;
  margin-bottom: 10px;
}

p {
  font-size: 20px;
  line-height: 1.1;
}

.contact-info {
  margin-top: 10px;
}

.contact-info h3 {
  margin-bottom: 10px;
}

.contact-info a {
  color: #007bff;
  text-decoration: none;
}

.contact-info a:hover {
  text-decoration: underline;
}

#element0.contactElement-enter-active {
  transition-delay: 0.25s;
}
#element1.contactElement-enter-active {
  transition-delay: 0.75s;
}

.contactElement-enter-from,
.contactElement-leave-to {
  opacity: 0;
  transform: translateY(100%);
}

.contactElement-enter-active,
.contactElement-leave-active {
  transition: all 1s ease;
}

@media (min-width: 768px) {
  .contact-section {
    /* align-items: flex-start; */
    padding: 0 35px;
  }

  .separator {
    height: 350px;
  }

  .separator p {
    max-width: 80%;
  }

  .contact-section img {
    position: fixed;
    top: 0;
    z-index: -1;
    height: auto;
    width: 100%;
    left: 0;
    right: 0;
    object-position: center;
  }
}

@media (min-width: 1000px) {
  .contact-section {
    padding: 0 50px;
  }
  .separator p {
    max-width: 70%;
  }
}

@media (min-width: 1100px) {
  .contact-section {
    padding: 0 75px;
  }
}

@media (min-width: 1200px) {
  .contact-section {
    padding: 0 100px;
  }
  .separator p {
    max-width: 60%;
  }
}

@media (min-width: 1300px) {
  .contact-section {
    padding: 0 125px;
  }
}
</style>
