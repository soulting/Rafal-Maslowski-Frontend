<template>
  <section class="post-selector">
    <div class="selector-container">
      <button
        v-for="(item, index) in categories"
        :key="index"
        class="selector"
        @click="selectCategory(item)"
        :style="{
          color: item === selectedCategory ? 'rgb(67, 149, 209)' : '#2c3e50',
        }"
      >
        {{ item }}
      </button>
    </div>
    <div
      ref="target"
      class="selector-container-dropdown"
      :style="{ backgroundColor: showBox ? 'rgb(235, 235, 235)' : 'white' }"
      @click="changeBox"
    >
      <div class="selector-dropdown-lable">
        <p class="dropdown-lable">{{ selectedCategory }}</p>
      </div>

      <div v-if="showBox" class="dropdown-select-box">
        <button
          v-for="(item, index) in filterCategories"
          :key="index"
          class="selector"
          @click="selectCategory(item)"
        >
          {{ item }}
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
import { onClickOutside } from "@vueuse/core";

// Refs
const target = ref(null);
const showBox = ref(false);
const selectedCategory = ref("WSZYSTKIE WPISY");

// Categories
const categories = [
  "WSZYSTKIE WPISY",
  "UBEZPIECZENIA",
  "FINANSE",
  "KREDYTY HIPOTECZNE",
];

// Computed Property
const filterCategories = computed(() => {
  return categories.filter((element) => element !== selectedCategory.value);
});

// Click Outside
onClickOutside(target, () => {
  showBox.value = false;
});

// Methods
const changeBox = () => {
  showBox.value = !showBox.value;
};

const selectCategory = (category) => {
  selectedCategory.value = category;
};
</script>

<style>
/* Main container */
.post-selector {
  height: 70px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 0 0 15px;
  box-sizing: border-box;
}

/* Dropdown container */
.selector-container-dropdown {
  position: relative;
  font-size: 16px;
  height: 50px;
  margin: 0;
  cursor: pointer;
  user-select: none;
  background-color: rgb(235, 235, 235);
  border-radius: 5px;
  display: flex;
  align-items: center;
}

/* Label within dropdown */
.selector-dropdown-lable {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left; /* Align items to the left */
  width: 200px;
  margin: 0;
  padding: 0 15px;
}

/* Image in dropdown label */
.selector-dropdown-lable img {
  height: 25px;
}

/* Dropdown label text */
.dropdown-lable {
  height: 30px;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Dropdown select box */
.dropdown-select-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 15px 15px 10px 15px;
  gap: 15px;
  width: 200px;
  z-index: 4;
  top: 50px;
  left: 0px;
  border-radius: 5px;
  box-shadow: 4px 12px 14px -10px rgba(66, 68, 90, 0.5);
}

/* Buttons in dropdown select box */
.dropdown-select-box button {
  text-align: left;
  font-size: 16px;
  font-family: "Quicksand", sans-serif;
  color: #2c3e50;
}

/* Selector container for category buttons */
.selector-container {
  display: none;
  align-items: center;
  justify-items: center;
  gap: 15px;
}

/* Individual selector buttons */
.selector {
  border: none;
  background-color: white;
  font-size: 12px;
}

.selector:hover {
  color: rgb(67, 149, 209);
}

@media (min-width: 600px) {
  .post-selector {
    justify-content: center;
    padding: 0 0 0 0;
  }

  .selector {
    font-size: 12px;
  }

  .selector-container {
    display: flex;
  }

  .selector-container-dropdown {
    display: none;
  }
}
</style>
