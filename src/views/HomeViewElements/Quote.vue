<template>
  <section class="quote-backgrounds" id="quote-observe-target">
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

const showQuotes = ref(false);

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
});
</script>

<style scoped>
.quote-backgrounds {
  height: 250px;
  width: 100vw;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  animation: changeBackground 30s infinite;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-attachment: fixed;
}

@keyframes changeBackground {
  0% {
    background-image: url("@/assets/backgrounds/bohater.png");
  }
  50% {
    background-image: url("@/assets/backgrounds/bohater3.png");
  }
  100% {
    background-image: url("@/assets/backgrounds/bohater.png");
  }
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
    height: 300px;
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
}
</style>
