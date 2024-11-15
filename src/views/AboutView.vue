<template>
  <section class="about">
    <div class="upper-image-container">
      <img
        src="@/assets/backgrounds/kevin-rajaram-ULwzqOnPem0-unsplash.jpg"
        alt="background-image"
      />
      <h1>Rafał Masłowski</h1>
    </div>
    <div class="about-main-section">
      <div class="description-section">
        <h2>Doradca kredytowy</h2>
        <p>
          Wiedzę i doświadczenie zdobyłem od podszewki, pracując w banku. W
          życiu zawodowym kieruję się przede wszystkim dobrem klienta. Stawiam
          na indywidualne podejście, co w moim przekonaniu jest kluczem do
          skutecznego prowadzenia całego procesu kredytowego. Dzielę się swoją
          wiedzą, staram się też przybliżyć dobre praktyki eksperta kredytowego.
        </p>
        <button>Skontaktuj się</button>
      </div>
      <img src="" alt="profile picture" />
    </div>
  </section>
  <Contact /><Footer />
</template>

<script setup>
import Footer from "./SharedElements/Footer.vue";
import Contact from "@/views/HomeViewElements/Contact.vue";
</script>

<style scoped>
.about {
  margin-top: 70px;
}

.upper-image-container {
  height: 200px;
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  color: white;
}

.upper-image-container img {
  height: 300px;
  position: absolute;
  left: 0;
  right: 0;
  z-index: -1;
}

.about-main-section {
  background-color: white;
  padding: 20px;
  font-style: italic;
  line-height: 25px;
}

.description-section {
  text-align: justify;
}

.description-section button {
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
  cursor: pointer;
}

.description-section button:hover {
  font-size: 18px;
  background-color: #2c3e50;
  color: #ffffff;
}
</style>
