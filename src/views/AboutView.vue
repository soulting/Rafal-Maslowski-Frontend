<template>
  <section class="about">
    <div class="upper-image-container">
      <img
        src="@/assets/backgrounds/kevin-rajaram-ULwzqOnPem0-unsplash.jpg"
        alt="background-image"
      />
      <div class="name-container"><h1>Rafał Masłowski</h1></div>
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
      <img
        src="@/assets/backgrounds/428523336_7659326927521439_9053629739761281834_n.jpg"
        alt="profile picture"
      />
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
  width: 450px;
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
  display: flex;
  align-items: center;
  justify-content: center;
}

.about-main-section img {
  width: 100%;
  border-radius: 5px;
  display: none;
}

.name-container {
  height: 100px;
  width: 300px;
  position: absolute;
  background-color: rgba(19, 19, 19, 0.6);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  left: 50%;
  bottom: 20px;
  z-index: 5;
  transform: translateX(-50%);
}

.name-container h1 {
  color: white;
  font-size: 30px;
  margin: 0;
}

.description-section {
  text-align: justify;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  margin-bottom: 30px;
  cursor: pointer;
}

.description-section button:hover {
  font-size: 18px;
  background-color: #2c3e50;
  color: #ffffff;
}

@media (min-width: 450px) {
  .upper-image-container {
    height: 250px;
  }

  .upper-image-container img {
    width: 650px;
    bottom: -75px;
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
    width: 768px;
    bottom: -100px;
  }

  .about-main-section {
    padding: 40px;
  }
}

@media (min-width: 768px) {
  .name-container {
    height: 100px;
    width: 400px;
  }
  .upper-image-container img {
    width: 950px;
    bottom: -110px;
  }

  .about-main-section img {
    display: block;
    flex: 1;
    max-width: 450px;
  }

  .about-main-section {
    padding-top: 75px;
    padding-bottom: 75px;
    gap: 30px;
  }

  .description-section {
    flex: 1;
    max-width: 450px;
  }
}

@media (min-width: 950px) {
  .upper-image-container img {
    width: 1200px;
    bottom: -250px;
  }
  .about-main-section {
    padding-top: 100px;
    padding-bottom: 100px;
    gap: 45px;
  }

  .name-container {
    height: 120px;
    width: 500px;
  }

  .name-container h1 {
    font-size: 35px;
  }
}

@media (min-width: 1200px) {
  .upper-image-container {
    height: 350px;
  }
  .upper-image-container img {
    width: 1400px;
    bottom: -350px;
  }
  .about-main-section {
    gap: 65px;
    padding-top: 150px;
    padding-bottom: 150px;
  }
}

@media (min-width: 1400px) {
  .upper-image-container {
    height: 400px;
  }
  .upper-image-container img {
    width: 1600px;
    bottom: -365px;
  }
  .about-main-section {
    gap: 85px;
  }
}

@media (min-width: 1600px) {
  .upper-image-container {
    height: 400px;
  }
  .upper-image-container img {
    width: 1800px;
    bottom: -450px;
  }
}

@media (min-width: 1600px) {
  .upper-image-container {
    height: 450px;
  }
  .upper-image-container img {
    width: 2000px;
    bottom: -450px;
  }
}
</style>
