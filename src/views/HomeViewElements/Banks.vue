<template>
  <section class="banks" id="bank-element-observe-target">
    <transition name="bankElement">
      <h2 v-if="showElement[0]">Banki, z którymi współpracuję</h2>
    </transition>
    <div class="grid-container">
      <div
        class="bank"
        v-for="(bank, index) in banks"
        :key="index"
        @click="goToBank(bank.link)"
      >
        <transition name="bankElement">
          <img
            v-if="showElement[index]"
            class="bank-image"
            :src="bank.img"
            alt="bank logo"
          />
        </transition>
        <transition name="bankElement">
          <img
            v-if="showElement[index]"
            class="bank-image-selected"
            :src="bank.imgSelected"
            alt="bank logo"
        /></transition>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from "vue";

const showElement = ref([
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
]);

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        for (let i = 0; i < 15; i++) {
          setTimeout(() => {
            showElement.value[i] = true;
          }, i * 250);
        }
      }
    });
  });
  const target = document.getElementById(`bank-element-observe-target`);
  observer.observe(target);
});

const banks = ref([
  {
    img: require("@/assets/banks/bank_01.png"),
    imgSelected: require("@/assets/banks/bank_01_selected.png"),
    link: "https://www.santander.pl",
  },
  {
    img: require("@/assets/banks/bank_02.png"),
    imgSelected: require("@/assets/banks/bank_02_selected.png"),
    link: "https://www.rbinternational.com.pl",
  },
  {
    img: require("@/assets/banks/bank_03.png"),
    imgSelected: require("@/assets/banks/bank_03_selected.png"),
    link: "https://www.ing.pl",
  },
  {
    img: require("@/assets/banks/bank_04.png"),
    imgSelected: require("@/assets/banks/bank_04_selected.png"),
    link: "https://www.pocztowy.pl/",
  },
  {
    img: require("@/assets/banks/bank_05.png"),
    imgSelected: require("@/assets/banks/bank_05_selected.png"),
    link: "https://www.bnpparibas.pl/",
  },
  {
    img: require("@/assets/banks/bank_06.png"),
    imgSelected: require("@/assets/banks/bank_06_selected.png"),
    link: "https://www.pkobp.pl/",
  },
  {
    img: require("@/assets/banks/bank_07.png"),
    imgSelected: require("@/assets/banks/bank_07_selected.png"),
    link: "https://www.bankmillennium.pl",
  },
  {
    img: require("@/assets/banks/bank_08.png"),
    imgSelected: require("@/assets/banks/bank_08_selected.png"),
    link: "https://www.aliorbank.pl/",
  },
  {
    img: require("@/assets/banks/bank_09.png"),
    imgSelected: require("@/assets/banks/bank_09_selected.png"),
    link: "https://www.bosbank.pl/",
  },
  {
    img: require("@/assets/banks/bank_10.png"),
    imgSelected: require("@/assets/banks/bank_10_selected.png"),
    link: "https://ikanobank.pl/",
  },
  {
    img: require("@/assets/banks/bank_11.png"),
    imgSelected: require("@/assets/banks/bank_11_selected.png"),
    link: "https://www.bankbps.pl/",
  },
  {
    img: require("@/assets/banks/bank_12.png"),
    imgSelected: require("@/assets/banks/bank_12_selected.png"),
    link: "https://www.velobank.pl/",
  },
  {
    img: require("@/assets/banks/bank_13.png"),
    imgSelected: require("@/assets/banks/bank_13_selected.png"),
    link: "https://www.mbank.pl/",
  },
  {
    img: require("@/assets/banks/bank_14.png"),
    imgSelected: require("@/assets/banks/bank_14_selected.png"),
    link: "https://www.pekao.com.pl/",
  },
  {
    img: require("@/assets/banks/bank_15.png"),
    imgSelected: require("@/assets/banks/bank_15_selected.png"),
    link: "https://www.citibank.pl/",
  },
]);

const goToBank = (bank_url) => {
  window.open(bank_url);
};
</script>

<style scoped>
.banks {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 25px 0 50px 0;
  position: relative;
  background-color: white;
  width: 100%;
  height: 100%;
}
h2 {
  margin: 30px 0 30px 0;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 120px);
  grid-template-rows: repeat(5, 100px);
}

.bank {
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: solid rgb(115, 115, 115) 0.0125px;
  border-left: solid rgb(115, 115, 115) 0.0125px;
  cursor: pointer;
  position: relative;
  transition: all 1s ease;
}

.bank:nth-child(3n + 1) {
  border-left: none;
}

.bank:nth-child(n + 13) {
  border-bottom: none;
}

.bank-image {
  width: 85%;
  height: 85%;
  object-fit: contain;
  position: absolute;
  z-index: 1;
}

.bank-image-selected {
  width: 85%;
  height: 85%;
  object-fit: contain;
  position: absolute;
  z-index: 0;
  opacity: 0;
}

.bankElement-enter-from,
.bankElement-leave-to {
  opacity: 0;
}

.bankElement-enter-active,
.bankElement-leave-active {
  transition: all 1.5s ease;
}

.bankElement-enter-to,
.bankElement-leave-from {
  opacity: 1;
}

@media (min-width: 450px) {
  .grid-container {
    grid-template-columns: repeat(3, 150px);
    grid-template-rows: repeat(5, 120px);
  }
}

@media (min-width: 768px) {
  h2 {
    margin: 40px;
  }
  .grid-container {
    grid-template-columns: repeat(5, 155px);
    grid-template-rows: repeat(3, 145px);
  }

  .bank:nth-child(3n + 1),
  .bank:nth-child(n + 13) {
    border-bottom: solid rgb(115, 115, 115) 0.0125px;
    border-left: solid rgb(115, 115, 115) 0.0125px;
  }

  .bank:nth-child(5n + 1) {
    border-left: none;
  }

  .bank:nth-child(n + 11) {
    border-bottom: none;
  }

  .bank:hover .bank-image-selected {
    width: 95%;
    height: 95%;
    opacity: 1;
    /* transition: all 1s ease; */
  }

  .bank-image,
  .bank-image-selected {
    width: 80%;
    height: 80%;
    object-fit: contain;
    transition: all 1s ease;
  }

  .bank:hover .bank-image {
    width: 95%;
    height: 95%;
    opacity: 0;
  }
}

@media (min-width: 1100px) {
  h2 {
    margin: 50px;
  }
  .grid-container {
    grid-template-columns: repeat(5, 175px);
    grid-template-rows: repeat(3, 160px);
  }
}

@media (min-width: 1300px) {
  .grid-container {
    grid-template-columns: repeat(5, 200px);
    grid-template-rows: repeat(3, 175px);
  }
}
</style>
