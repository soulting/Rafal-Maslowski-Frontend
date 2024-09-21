<template>
  <section class="opinions">
    <h2>Co o mnie mówią moi klienci</h2>
    <div class="opinions">
      <div
        v-for="(opinion, index) in opinions"
        :key="index"
        class="outer-opinion-containe"
      >
        <div class="inner-opinion-container">
          <p class="opinion-text">{{ opinion.review }}</p>
          <p class="opinion-autor">{{ opinion.author }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const opinions = ref([
  {
    author: "Anna Kowalska",
    review:
      "Pan Rafał Masłowski pomógł mi uzyskać kredyt na mieszkanie w szybki i bezproblemowy sposób. Jego wiedza i profesjonalizm zrobiły na mnie duże wrażenie.",
  },
  {
    author: "Piotr Nowak",
    review:
      "Dzięki panu Rafałowi udało mi się wybrać najkorzystniejszą ofertę kredytową. Jestem bardzo zadowolony z jego indywidualnego podejścia i cierpliwości.",
  },
  {
    author: "Magdalena Wiśniewska",
    review:
      "Pan Rafał to doradca, który naprawdę dba o klienta. Jego porady były konkretne i rzeczowe, a cały proces przebiegł szybko i bez komplikacji.",
  },
]);
</script>

<style></style>
