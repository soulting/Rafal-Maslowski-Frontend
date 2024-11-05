<template>
  <main>
    <img
      class="navbar-img-shadow"
      src="@/assets/RM_logo.svg"
      alt="icon shadow"
      @load="showSection"
    />
    <nav :style="{ visibility: showLoader ? 'hidden' : 'visible' }">
      <router-link to="/">
        <img class="navbar-img" src="@/assets/RM_logo.svg" alt="icon image" />
      </router-link>
      <div class="tab-container">
        <router-link class="router-link" to="/blog">Blog </router-link>
        <router-link class="router-link" to="/about">O Mnie </router-link>
        <router-link class="router-link" to="/contact-information"
          >Kontakt
        </router-link>
        <!-- <router-link class="router-link" to="/about">Kredyt </router-link>
        <router-link class="router-link" to="/about">Przydatne </router-link> -->
      </div>
      <button
        class="tab-hamburger-menu"
        @click="changeMenu()"
        :class="{ 'open-menu': menuOpen }"
      >
        <span class="line-1"></span>
        <span class="line-2"></span>
        <span class="line-3"></span>
      </button>
    </nav>
    <transition name="dropdownmenuExpansion">
      <div v-if="menuOpen" class="dropdown-tabs">
        <router-link @click="changeMenu()" class="router-link" to="/blog"
          >Blog
        </router-link>
        <router-link @click="changeMenu()" class="router-link" to="/about"
          >O Mnie
        </router-link>
        <router-link
          @click="changeMenu()"
          class="router-link"
          to="/contact-information"
          >Kontakt
        </router-link>
        <!-- <router-link @click="changeMenu()" class="router-link" to="/about"
          >Kredyt
        </router-link>
        <router-link @click="changeMenu()" class="router-link" to="/about"
          >Przydatne
        </router-link> -->
      </div>
    </transition>

    <router-view />
  </main>
  <Loader class="home-view-loader" :isVisible="showLoader" />
</template>

<script setup>
import Loader from "@/views/SharedElements/Loader.vue";
import { onMounted, ref } from "vue";

const menuOpen = ref(false);

const showLoader = ref(true);

const showSection = () => {
  showLoader.value = false;
};

const changeMenu = () => {
  menuOpen.value = !menuOpen.value;
};
</script>

<style>
body {
  margin: 0;
}

body::-webkit-scrollbar {
  display: none;
}

#app {
  font-family: "Quicksand", sans-serif;
  font-optical-sizing: auto;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
}

nav {
  width: 100vw;
  box-sizing: border-box;
  height: 70px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0 10px 0 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
}

.navbar-img {
  height: 100px;
  position: relative;
}

.navbar-img-shadow {
  height: 100px;
  position: fixed;
  top: 0;
  left: 10px;
  filter: drop-shadow(0px 3px 4px rgb(0, 0, 0, 0.1));
  z-index: 10;
}

.tab-container {
  display: none;
  align-items: center;
  height: 70px;
}

.tab-hamburger-menu {
  height: 35px;
  width: 35px;
  padding: 0;
  margin-top: 17px;
  margin-right: 17px;
  background-color: rgb(255, 255, 255);
  border: none;
  position: relative;
}

.tab-hamburger-menu span {
  background-color: rgb(0, 0, 0);
  position: absolute;
  width: 100%;
  height: 3px;
  border-radius: 3px;
  top: 50%;
  left: 50%;
  transition: all 0.5s;
}

.line-1 {
  transform: translate(-50%, -13px);
}
.line-2 {
  transform: translate(-50%, -50%);
}
.line-3 {
  transform: translate(-50%, 10px);
}

.open-menu .line-1 {
  transform: translate(-50%, -50%) rotate(-45deg);
}

.open-menu .line-2 {
  width: 0;
}

.open-menu .line-3 {
  transform: translate(-50%, -50%) rotate(45deg);
}

.router-link {
  text-decoration: none;
  color: black;
  font-size: 15px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  padding: 10px;
}

.router-link:hover {
  color: rgb(67, 149, 209);
  font-size: 17px;
}

.dropdown-tabs {
  display: flex;
  top: 70px;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 50px 15px 0 15px;
  gap: 10px;
  background-color: white;
  flex-direction: column;
  align-items: center;
  position: fixed;
  z-index: 9;
}

.dropdown-tabs .router-link {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-size: 20px;
  font-weight: 300;
}

.home-view-loader {
  position: absolute;
  z-index: 10;
}

.dropdownmenuExpansion-enter-from,
.dropdownmenuExpansion-leave-to {
  opacity: 0;
  transform: translateY(-100%);
}

.dropdownmenuExpansion-enter-active,
.dropdownmenuExpansion-leave-active {
  transition: all 0.7s ease;
}

.dropdownmenuExpansion-enter-to,
.dropdownmenuExpansion-leave-from {
  opacity: 1;
  transform: translateY(0%);
}

@media (min-width: 450px) {
  nav {
    padding: 0 30px 0 30px;
  }

  .navbar-img-shadow {
    left: 30px;
  }
}

@media (min-width: 768px) {
  nav {
    padding: 0 60px 0 60px;
  }

  .navbar-img-shadow {
    left: 60px;
  }
  .tab-container {
    display: flex;
  }

  .dropdown-tabs,
  .tab-hamburger-menu {
    display: none;
  }
}
</style>
