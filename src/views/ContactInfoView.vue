<template>
  <section class="contact-section">
    <img
      src="@/assets/backgrounds/pexels-photos-by-rugeen-67119324-16028559.jpg"
      alt="background image"
    />
    <div class="inner-content-section">
      <h2>Kontakt</h2>
      <p>Skontaktuj się ze mną, a odpowiem jak najszybciej.</p>
      <div class="contact-info">
        <h3>Moje dane kontaktowe:</h3>
        <p>
          Email:
          <a href="mailto:example@example.com">rafal.maslowski@phinance.pl</a>
        </p>
        <p>Telefon: <a href="tel:+48737327636">+48 737 327 636</a></p>
        <p>
          Facebook:
          <a
            href="https://www.facebook.com/profile.php?id=100003326232034"
            target="_blank"
            >Rafał Masłowski</a
          >
        </p>
        <p>
          Adres:
          <a
            href="https://www.google.com/maps/search/?api=1&query=Stanisława+Żółkiewskiego+5/5,+87-100+Toruń"
            target="_blank"
            >Stanisława Żółkiewskiego 5/5, 87-100 Toruń</a
          >
        </p>
      </div>
    </div>
  </section>
  <div class="separator"></div>
  <Contact />
  <Footer />
</template>

<script setup>
import Contact from "./HomeViewElements/Contact.vue";
import Loader from "./SharedElements/Loader.vue";
import Footer from "./SharedElements/Footer.vue";
import { ref } from "vue";

const showLoader = ref(true);

const showSection = () => {
  showLoader.value = false;
};
</script>

<style scoped>
.contact-section {
  color: white;
  margin-top: 70px;
  position: relative;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 100px;
}

.separator {
  height: 100px;
  width: 100%;
  background-color: white;
}

.inner-content-section {
  display: flex;
  flex-direction: column;
  border-radius: 8px;

  margin-top: 50px;
  width: 50%;
  height: 400px;
  background-color: rgba(0, 0, 0, 0.4);
}
.contact-section img {
  position: fixed;
  width: 100vw;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
}

h2 {
  font-size: 1.8em;
  margin-bottom: 10px;
}

p {
  line-height: 1.5;
}

.contact-info {
  margin-top: 20px;
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
</style>
