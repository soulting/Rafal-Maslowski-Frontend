<template>
  <footer class="footer">
    <div class="footer-content">
      <div v-if="mutables.data" class="footer-section contact-info">
        <h3>Kontakt</h3>
        <p>
          Email:
          <a :href="`mailto:${mutables.data.email}`">{{
            mutables.data.email
          }}</a>
        </p>
        <p>
          Telefon:
          <a :href="`tel:${mutables.data.telefon}`"
            >+{{ mutables.data.telefon }}</a
          >
        </p>

        <p>
          Adres:
          <a
            :href="`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              mutables.data.adres
            )}`"
            target="_blank"
            >{{ mutables.data.adres }}</a
          >
        </p>
        <p>
          Facebook:
          <a :href="mutables.data.facebook" target="_blank">Rafał Masłowski</a>
        </p>
      </div>

      <div class="footer-section navigation">
        <h3>Nawigacja</h3>
        <div @click="goTo('/')">Strona główna</div>
        <div @click="goTo('/blog')">Blog</div>
        <div @click="goTo('/about')">O Mnie</div>
        <div @click="goTo('/privacy-policy')">Kontakt</div>
      </div>

      <div class="footer-section legal">
        <h3>Informacje prawne</h3>
        <div @click="goTo('/privacy-policy')">Polityka prywatności</div>
      </div>
    </div>

    <div class="footer-bottom">
      <p>© 2024 Rafał Masłowski. Wszelkie prawa zastrzeżone.</p>
    </div>
  </footer>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useMutables } from "@/stores/mutables";
import { ref, onMounted } from "vue";

const mutables = useMutables();

const router = useRouter();

const goTo = (informationSite) => {
  router.push(informationSite);
};
</script>

<style scoped>
.footer {
  background-color: #1a1a1a;
  color: #f4f4f4;
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.footer-content {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  text-align: left;
  gap: 10px;
}

.footer-section {
  display: flex;
  flex-direction: column;
  margin: 0 15px;
  gap: 5px;
  justify-content: start;
}

.footer-section h3 {
  font-size: 1.4em;
  margin-bottom: 15px;
  color: #e0e0e0;
}

.footer-section p {
  margin: 0;
  line-height: 1.6;
}

.info-link {
  text-decoration: none;
  color: #f4f4f4;
  transition: color 0.2s ease;
}

.info-link:hover {
  cursor: pointer;
  color: #007bff;
}

.navigation {
  display: none;
}

.legal div,
.navigation div {
  cursor: pointer;
  transition: color 0.2s;
  color: #f4f4f4;
}

.legal div:hover,
.navigation div:hover {
  cursor: pointer;
  color: #007bff;
}

.footer-bottom {
  margin-top: 30px;
  text-align: center;
  font-size: 0.9em;
  color: #a0a0a0;
  border-top: 1px solid #333;
  padding-top: 15px;
}
a {
  text-decoration: none;
  color: #f4f4f4;
}

a:hover {
  cursor: pointer;
  color: #007bff;
}

@media (min-width: 500px) {
  .footer-section {
    margin: 0 50px;
  }
}

@media (min-width: 825px) {
  .footer-content {
    justify-content: center;
    gap: 20px;
  }
}

@media (min-width: 1050px) {
  .navigation {
    display: flex;
  }
}
</style>
