<template>
  <section class="opinions-section" id="opinion-element-observe-target">
    <transition name="opinionElement">
      <h2 v-show="showElement[0]">Co o mnie mówią moi klienci</h2>
    </transition>
    <div class="opinions">
      <div
        v-for="(opinion, index) in opinions"
        :key="index"
        class="outer-opinion-containe"
      >
        <transition name="opinionElement">
          <div
            v-show="showElement[index + 1]"
            class="inner-opinion-container"
            :id="index"
          >
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
          }, i * 350);
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
  padding: 0 0 30px 0;
  background-color: rgb(250, 250, 250, 1);
  background-image: url("@/assets/backgrounds/bohater.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.opinions {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 30px;
}

h2 {
  margin: 30px 0 30px 0;
}

.inner-opinion-container {
  padding: 0 30px 0 30px;
  box-sizing: border-box;
  font-style: italic;
  border: solid black 0.5px;
  border-radius: 25px;
  background-color: rgb(255, 255, 255);
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
  /* width: 100%; */
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

@media (min-width: 768px) {
  .opinions-section {
    padding: 0 0 50px 0;
  }

  h2 {
    margin: 40px 0 40px 0;
  }
  .opinions {
    gap: 50px;
  }
  .outer-opinion-containe {
    padding: 0 75px 0 75px;
    box-sizing: border-box;
  }
  .inner-opinion-container {
    width: 650px;
  }

  #\31 {
    margin-left: auto;
  }
}

@media (min-width: 1100px) {
  h2 {
    margin: 50px 0 50px 0;
  }
}

@media (min-width: 1200px) {
  .opinions {
    gap: 50px;
  }
  .outer-opinion-containe {
    padding: 0 150px 0 150px;
    box-sizing: border-box;
  }
  .inner-opinion-container {
    width: 650px;
  }
}
</style>
