<template>
  <section class="opinions-section" id="opinion-element-observe-target">
    <transition name="opinionElement">
      <h2 v-if="showElement[0]">Co o mnie mówią moi klienci</h2>
    </transition>
    <div class="opinions">
      <div
        v-for="(opinion, index) in opinions"
        :key="index"
        class="outer-opinion-containe"
      >
        <transition name="opinionElement">
          <div v-if="showElement[index + 1]" class="inner-opinion-container">
            <p class="opinion-text">„{{ opinion.review }}”.</p>
            <p class="opinion-autor">{{ opinion.author }}</p>
          </div>
        </transition>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from "vue";

const opinions = ref([
  {
    author: "Anna Kowalska",
    review:
      "Pan Rafał Masłowski pomógł mi uzyskać kredyt na mieszkanie w szybki i bezproblemowy sposób. Jego wiedza i profesjonalizm zrobiły na mnie duże wrażenie",
  },
  {
    author: "Piotr Nowak",
    review:
      "Dzięki panu Rafałowi udało mi się wybrać najkorzystniejszą ofertę kredytową. Jestem bardzo zadowolony z jego indywidualnego podejścia i cierpliwości",
  },
  {
    author: "Magdalena Wiśniewska",
    review:
      "Pan Rafał to doradca, który naprawdę dba o klienta. Jego porady były konkretne i rzeczowe, a cały proces przebiegł szybko i bez komplikacji",
  },
]);

const showElement = ref([false, false, false, false]);

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        for (let i = 0; i < 4; i++) {
          setTimeout(() => {
            showElement.value[i] = true;
          }, i * 250);
        }
      }
    });
  });
  const target = document.getElementById(`opinion-element-observe-target`);
  observer.observe(target);
});
</script>

<style scoped>
.opinions-section {
  width: 100vw;
  margin: 50px 0 50px 0;
}

.opinions {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 30px;
}

h2 {
  margin-bottom: 50px;
}

.inner-opinion-container {
  padding: 0 30px 0 30px;
  box-sizing: border-box;
  font-style: italic;
  border: solid black 0.5px;
  border-radius: 25px;
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

.opinionElement-enter-to,
.opinionElement-leave-from {
  opacity: 1;
  transform: translateY(0%);
}
</style>
