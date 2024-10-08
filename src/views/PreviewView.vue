<template>
  <section class="preview" v-html="content"></section>
</template>

<script setup>
// import router from "@/router";
import { onMounted, ref } from "vue";
import {} from "vue-router";

const content = ref("");

onMounted(() => {
  content.value = sessionStorage.getItem("content");
  console.log(content);
});
</script>

<style>
.preview img {
  max-width: 100%;
  height: auto;
}

.preview {
  text-align: left;
  padding: 10px;
  box-sizing: border-box;
  overflow-wrap: break-word;
}

.preview a {
  text-decoration: none;
}

@media (min-width: 450px) {
  .preview {
    padding: 30px;
  }
}

@media (min-width: 768px) {
  .preview {
    padding: 80px;
  }
}

@media (min-width: 1000px) {
  .preview {
    padding: 150px;
  }
}

@media (min-width: 1300px) {
  .preview {
    padding: 200px;
  }
}
</style>
