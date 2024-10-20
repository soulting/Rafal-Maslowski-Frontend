<template>
  <section class="post-selector">
    <div class="selector-container">
      <button class="selector">WSZYSTKIE WPISY</button>
      <button class="selector">UBEZPIECZENIA</button>
      <button class="selector">FINANSE</button>
      <button class="selector">KREDYTY HIPOTECZNE</button>
    </div>
    <div class="selector-container-dropdown" @click="changeBox">
      <div class="selector-dropdown-lable">
        <p class="dropdown-lable">{{ selectedCategory }}</p>
        <!-- <img v-if="showBox" src="@/assets/icons/up-arrow.png" alt="up arrow" />
        <img v-else src="@/assets/icons/down-arrow.png" alt="down arrow" /> -->
      </div>

      <div v-if="showBox" class="dropnown-select-box">
        <button
          v-for="(item, index) in filterCategories"
          :key="index"
          class="selector"
        >
          {{ item }}
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from "vue";

const categories = [
  "WSZYSTKIE WPISY",
  "UBEZPIECZENIA",
  "FINANSE",
  "KREDYTY HIPOTECZNE",
];

const filterCategories = computed(() => {
  return categories.filter((element) => element !== selectedCategory.value);
});

const showBox = ref(false);
const selectedCategory = ref("WSZYSTKIE WPISY");

const changeBox = () => {
  showBox.value = true;
};
</script>

<style>
.post-selector {
  height: 70px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 50px;
  box-sizing: border-box;
}

.selector-container-dropdown {
  position: relative;
  font-size: 16px;
  height: 30px;
  margin: 0;
  cursor: pointer;
}

.selector-dropdown-lable {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  /* justify-content: space-between; */
  width: 200px;
  margin: 0;
  padding: 0 15px;
}

.selector-dropdown-lable img {
  height: 25px;
}

.dropdown-lable {
  height: 30px;
  margin: 0 0 0 0px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.dropnown-select-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 15px 15px 10px 15px;
  gap: 15px;
  width: 210px;
  z-index: 4;
  left: -5px;
  /* border: solid rgb(0, 0, 0) 0.3px; */
  border-radius: 5px;
  box-shadow: 4px 12px 14px -10px rgba(66, 68, 90, 0.5);
}

.dropnown-select-box button {
  text-align: left;
  font-size: 18px;
  font-family: "Quicksand", sans-serif;
  color: #2c3e50;
}

.selector-container {
  display: none;
  align-items: center;
  justify-items: center;
  gap: 15px;
}

.selector {
  border: none;
  background-color: white;
  font-size: 10px;
}
</style>
