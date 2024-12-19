<template class>
  <div v-if="showLogin" class="login">
    <p>login</p>
    <input v-model="username" class="username" type="text" />
    <p>hasło</p>
    <input v-model="password" class="passwoe" type="password" />
    <button @click="loginUser">zaloguj</button>
  </div>

  <transition name="popupMessage">
    <div v-if="showMessage" class="popup-message">
      <h3>{{ popupTitle }}</h3>
      <p>{{ popupDescription }}</p>
    </div>
  </transition>

  <div class="blog-manager">
    <div
      class="blog-manager-buttons"
      :class="{ 'mutables-sellected': showMutables }"
    >
      <button @click="changeView">posty</button>
      <div class="blog-manager-button-selector">
        <img
          v-if="showMutables"
          class="mutables-shown"
          src="@/assets/icons/dot.png"
          alt="dot icon"
        />

        <img
          v-if="showPosts"
          class="posts-shown"
          src="@/assets/icons/dot.png"
          alt="dot icon"
        />
      </div>
      <button @click="changeView">zmienne</button>
    </div>

    <div v-if="mutables.data && showMutables" class="mutables-container">
      <h2>STRONA GŁÓWNA</h2>
      <label for="strona_glowna_cytat">Cytat na stronę główną:</label>
      <textarea
        v-model="mutables.data.strona_glowna_cytat"
        id="strona_glowna_cytat"
        name="strona_glowna_cytat"
        rows="4"
      ></textarea>
      <label for="opinia1">Opinia 1:</label>
      <textarea
        id="opinia1"
        name="opinia1"
        rows="2"
        v-model="mutables.data.opinia1"
      ></textarea>

      <label for="opinia1_autor">Autor opinii 1:</label>
      <input
        type="text"
        id="opinia1_autor"
        name="opinia1_autor"
        v-model="mutables.data.opinia1_autor"
      />

      <label for="opinia2">Opinia 2:</label>
      <textarea
        v-model="mutables.data.opinia2"
        id="opinia2"
        name="opinia2"
        rows="2"
      ></textarea>

      <label for="opinia2_autor">Autor opinii 2:</label>
      <input
        v-model="mutables.data.opinia2_autor"
        type="text"
        id="opinia2_autor"
        name="opinia2_autor"
      />

      <label for="opinia3">Opinia 3:</label>
      <textarea
        v-model="mutables.data.opinia3"
        id="opinia3"
        name="opinia3"
        rows="2"
      ></textarea>

      <label for="opinia3_autor">Autor opinii 3:</label>
      <input
        v-model="mutables.data.opinia3_autor"
        type="text"
        id="opinia3_autor"
        name="opinia3_autor"
      />
      <button @click="submitChanges" type="submit">ZAPISZ</button>

      <h2>BLOG</h2>

      <label for="blog_tytul">Tytuł bloga:</label>
      <input
        v-model="mutables.data.blog_tytul"
        type="text"
        id="blog_tytul"
        name="blog_tytul"
      />

      <label for="blog_podtytul">Podtytuł bloga:</label>
      <input
        v-model="mutables.data.blog_podtytul"
        type="text"
        id="blog_podtytul"
        name="blog_podtytul"
      />
      <button @click="submitChanges" type="submit">ZAPISZ</button>

      <h2>O MNIE</h2>

      <label for="o_mnie_tytul">Tytuł o mnie:</label>
      <input
        v-model="mutables.data.o_mnie_tytul"
        type="text"
        id="o_mnie_tytul"
        name="o_mnie_tytul"
      />
      <label for="o_mnie_cytat">Cytat o mnie:</label>
      <textarea
        v-model="mutables.data.o_mnie_cytat"
        id="o_mnie_cytat"
        name="o_mnie_cytat"
        rows="4"
      ></textarea>

      <label for="o_mnie_obraz">zdjęcie o mnie:</label>
      <img :src="mutables.data.o_mnie_obraz" alt="moje zdjeciec" />

      <label for="adres">adres zdjęcia o mnie</label>
      <input
        v-model="mutables.data.o_mnie_obraz"
        type="text"
        id="adres"
        name="adres"
      />
      <button @click="submitChanges" type="submit">ZAPISZ</button>

      <h2>KONTAKT</h2>

      <label for="adres">Adres:</label>
      <input
        v-model="mutables.data.adres"
        type="text"
        id="adres"
        name="adres"
      />

      <label for="email">Email:</label>
      <input
        v-model="mutables.data.email"
        type="email"
        id="email"
        name="email"
      />

      <label for="facebook">Facebook:</label>
      <input
        v-model="mutables.data.facebook"
        type="url"
        id="facebook"
        name="facebook"
      />

      <label for="telefon">Telefon:</label>
      <input
        v-model="mutables.data.telefon"
        type="tel"
        id="telefon"
        name="telefon"
      />

      <label for="kontakt_cytat">Cytat kontaktowy:</label>
      <textarea
        v-model="mutables.data.kontakt_cytat"
        id="kontakt_cytat"
        name="kontakt_cytat"
        rows="4"
      ></textarea>

      <button @click="submitChanges" type="submit">ZAPISZ</button>
    </div>
    <div v-if="posts.data && showPosts" class="post-list">
      <div v-for="(post, index) in posts.data" :key="index" class="post-item">
        <img class="post-image" :src="post.image" alt="post image" />
        <div class="post-body">
          <h4 class="post-title">{{ post.title }}</h4>
          <p class="post-description">{{ post.description }}</p>
        </div>
        <div class="post-control-buttons">
          <img
            v-if="post.isActiv === 'TRUE'"
            c
            @click="activatePost(post.id)"
            src="@/assets/icons/switch-on.png"
            alt="activ icon"
          />
          <img
            v-else
            @click="activatePost(post.id)"
            src="@/assets/icons/switch-off.png"
            alt="inactiv icon"
          />
          <img
            class="edit-button"
            @click="editPost(post)"
            src="@/assets/icons/pen.png"
            alt="edit button"
          />

          <img
            class="edit-button"
            @click="goTo(post.id)"
            src="@/assets/icons/file.png"
            alt="edit button"
          />
        </div>
      </div>
    </div>
    <button v-show="showPosts" @click="writePost" class="write-post">
      NAPISZ POST
    </button>
    <div v-show="showNewPost" class="new-post-container">
      <input
        v-model="postData.title"
        class="new-post-title"
        placeholder="Tytuł posta"
      />
      <textarea
        v-model="postData.description"
        class="new-post-description"
        placeholder="Opis posta"
        cols="3"
        rows="5"
      ></textarea>
      <img
        v-if="postData.image"
        class="title-img"
        :src="postData.image"
        alt="image placeholder"
      />
      <img
        v-else
        class="placeholder-img"
        src="@/assets/backgrounds/placeholder.jpg"
        alt="image placeholder"
      />

      <input
        v-model="postData.image"
        class="image-url"
        placeholder="link do obrazu"
      />

      <select v-model="postData.category" class="select-category">
        <option value="UBEZPIECZENIA">UBEZPIECZENIA</option>
        <option value="FINANSE">FINANSE</option>
        <option value="KREDYTY HIPOTECZNE">KREDYTY HIPOTECZNE</option>
      </select>
      <div id="sample">
        <Editor
          @init="onEditorInit"
          api-key="k0efnljtvefg89se78os1oopj0hhvfyohqfko19nnrqo5x7j"
          :init="{
            toolbar_mode: 'sliding',
            plugins:
              'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount',
            toolbar:
              'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat',
            height: 700,
            statusbar: false,
            selector: 'textarea',
          }"
        />
      </div>
      <div class="new-post-controls">
        <button v-if="currentEditID" class="cancle-post" @click="updatePost">
          EDIT
        </button>
        <button v-else class="commit-post" @click="getPostContent">
          ZAPISZ
        </button>

        <button class="cancle-post" @click="canclePost">ANULUJ</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import Editor from "@tinymce/tinymce-vue";

import { getBlogPosts } from "@/composables/getBlogPosts.js";
import { postBlogPost } from "@/composables/postBlogPost.js";
import { activateBlogPost } from "@/composables/activateBlogPost.js";
import { editBlogPost } from "@/composables/editBlogPost.js";
import { usePosts } from "@/stores/posts";
import { useMutables } from "@/stores/mutables";
import Cookies from "js-cookie";
import { login } from "@/composables/login.js";
import { postMutables } from "@/composables/postMutables.js";

import { jwtDecode } from "jwt-decode";

const router = useRouter();

const showPosts = ref(true);
const showMutables = ref(false);

const changeView = () => {
  showPosts.value = !showPosts.value;
  showMutables.value = !showMutables.value;
};

// Reactive references
const posts = usePosts();
const postData = ref({
  title: null,
  description: null,
  image: null,
  code: null,
  category: null,
  isActive: false,
});

const mutables = useMutables();

const showMessage = ref(false);
const popupTitle = ref("");
const popupDescription = ref("");

const username = ref(null);
const password = ref(null);

const showLogin = ref(true);
const token = ref(null);
const currentEditID = ref(null);
const showNewPost = ref(false);
const editorInstance = ref(null);

const submitChanges = async () => {
  const response = await postMutables(mutables.data);
  if (response.status === "success") {
    popupTitle.value = "Powodzenie";
    popupDescription.value = "Twoje zmienne zostały pomyślnie zmienione";
  } else {
    popupTitle.value = "Wystąpił problem";
    popupDescription.value = "Nie udało się zmienić danych";
  }
  showMessage.value = true;
  setTimeout(() => {
    showMessage.value = false;
  }, 2500);
};

const goTo = (postId) => {
  router.push({ name: "post", query: { id: postId } });
};

const canclePost = () => {
  currentEditID.value = null;

  postData.value.title = null;
  postData.value.description = null;
  postData.value.image = null;
  postData.value.code = null;
  postData.value.category = null;
  postData.value.isActive = false;

  editorInstance.value.setContent("");

  showNewPost.value = false;
};

const writePost = () => {
  if (showNewPost.value) {
    if (currentEditID.value) {
      currentEditID.value = null;

      postData.value.title = null;
      postData.value.description = null;
      postData.value.image = null;
      postData.value.code = null;
      postData.value.category = null;
      postData.value.isActive = false;

      editorInstance.value.setContent("");
    }
  } else showNewPost.value = true;
};

const loginUser = async () => {
  if (username.value && password.value) {
    const loginData = { username: username.value, password: password.value };
    const response = await login(loginData);
    if (response.status === "success") {
      Cookies.set("access_token", response.token, {
        secure: true,
        sameSite: "Strict",
      });
      popupTitle.value = "Zalogowano";
      popupDescription.value = "Za chwilę zostaniesz przekierowany do strony";
    } else {
      popupTitle.value = "Wystąpił problem";
      popupDescription.value = "login albo hasło są niepoprawne";
      username.value = "";
      password.value = "";
    }
    showMessage.value = true;
    setTimeout(() => {
      showMessage.value = false;
      if (response.status === "success") {
        showLogin.value = false;
      }
    }, 2500);
  }
};

// Methods for post actions
const activatePost = async (postID) => {
  try {
    const response = await activateBlogPost(postID);
    if (response.status === "success") {
      posts.getPosts();
    }
    console.log(response.message);
  } catch (error) {
    console.error("Error activating post:", error);
  }
};

const updatePost = async (postID) => {
  try {
    postData.value.code = editorInstance.value.getBody().outerHTML;
    const response = await editBlogPost(currentEditID.value, postData.value);
    if (response.status === "success") {
      posts.getPosts();

      canclePost();
    }
    console.log(response.message);
  } catch (error) {
    console.error("Error updating post:", error);
  }
};

const getPostContent = async () => {
  try {
    postData.value.code = editorInstance.value.getBody().outerHTML;
  } catch (error) {
    console.error(error);
  }

  if (
    !postData.value.title ||
    !postData.value.description ||
    !postData.value.image ||
    !postData.value.code ||
    !postData.value.category
  ) {
    alert("Uzupełnij wszystkie pola");
    return;
  } else {
    try {
      const response = await postBlogPost(postData.value);
      if (response.status === "success") {
        posts.getPosts();
        canclePost();
      }
      console.log(response.message);
    } catch (error) {
      console.error("Error updating post:", error);
    }
  }
};

// Editor methods
const onEditorInit = (evt) => {
  editorInstance.value = evt.target;
};

// Edit post method
const editPost = (post) => {
  if (!showNewPost.value) {
    showNewPost.value = true;
  }
  currentEditID.value = post.id;
  postData.value.title = post.title;
  postData.value.description = post.description;
  postData.value.image = post.image;
  postData.value.category = post.category;
  postData.value.isActive = post.isActive;
  editorInstance.value.setContent(`${post.code}`);
};

// Lifecycle hooks
onMounted(() => {
  token.value = Cookies.get("access_token");
  if (token.value) {
    const timeLeft = jwtDecode(token.value).exp;
    if (timeLeft - Math.floor(Date.now() / 1000) > 0) {
      showLogin.value = false;
    }
  }
});
</script>

<style scoped>
.blog-manager {
  padding-top: 130px;
  background-color: rgb(245, 245, 245);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding-bottom: 50px;
}

.blog-manager-buttons {
  display: flex;
  flex-direction: row;
  margin: 25px 15px;
}

.blog-manager-buttons button,
.mutables-container button {
  background-color: white;
  border: solid black 0.5px;
  border-radius: 25px;
  color: #2c3e50;
  cursor: pointer;
  font-family: "Quicksand", sans-serif;
  font-optical-sizing: auto;
  font-size: 16px;
  font-weight: 500;
  height: 50px;
  margin-bottom: 30px;
  margin-top: 30px;
  padding: 0 15px;
  text-align: center;
  transition: all 1s ease;
}

.blog-manager-buttons button:hover,
.mutables-container button:hover {
  background-color: #2c3e50;
  color: #ffffff;
}

.blog-manager-button-selector {
  border: none;
  height: 50px;
  width: 75px;
  margin-bottom: 30px;
  margin-top: 30px;
  padding: 0;
  transition: all 1s ease;
  display: flex;
  align-items: center;
}

.mutables-shown {
  margin-left: auto;
}

.posts-shown {
  margin-right: auto;
}

.blog-manager-button-selector img {
  height: 50px;
}

.mutables-container {
  display: flex;
  flex-direction: column;
  width: 600px;
}

.mutables-container label {
  margin-top: 15px;
  margin-bottom: 3px;
  margin-right: auto;
}

.mutables-container img {
  width: 50%;
}

.mutables-container textarea {
  height: 150px;
  padding: 7px;
  font-family: "Quicksand", sans-serif;
  font-optical-sizing: auto;
  border-radius: 5px;
  border: solid black 0.5px;
}

.mutables-container input {
  height: 40px;
  padding: 0 7px;
  font-family: "Quicksand", sans-serif;
  font-optical-sizing: auto;
  font-size: 15px;
  border-radius: 5px;
  border: solid black 0.5px;
}

.login {
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: white;
  z-index: 2;
}

.login input {
  height: 30px;
  width: 200px;
  padding-left: 10px;
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: solid 1px black;
  outline: none;
}

.login button {
  background-color: white;
  border: solid black 0.5px;
  border-radius: 25px;
  color: #2c3e50;
  cursor: pointer;
  font-family: "Quicksand", sans-serif;
  font-optical-sizing: auto;
  font-size: 16px;
  font-weight: 500;
  height: 50px;
  margin-bottom: 30px;
  margin-top: 30px;
  padding: 0 15px;
  text-align: center;
  transition: all 1s ease;
}

.login button:hover {
  background-color: #2c3e50;
  color: #ffffff;
  font-size: 18px;
}

.post-list {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.post-item {
  display: flex;
  align-items: center;
  width: 750px;
  background-color: white;
}

#placeholder .post-title {
  background-color: rgb(245, 245, 245);
  width: 300px;
  height: 25px;
}

#placeholder .post-description {
  width: 450px;
  height: 25px;
  background-color: rgb(245, 245, 245);
}

.post-item:hover {
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.post-image {
  height: 150px;
  width: 250px;
  object-fit: cover;
  object-position: center;
}

.post-body {
  height: 150px;
  width: 600px;
  padding: 20px;
  box-sizing: border-box;
}

.post-title {
  border-bottom: solid rgb(150, 150, 150) 0.5px;
  font-size: 20px;
  font-weight: 300;
  padding-bottom: 10px;
  text-align: left;
  margin: 0 0 20px 0;
}

.post-description {
  font-size: 15px;
  font-weight: 300;
  text-align: left;
}

.new-post-container {
  margin: 30px;
  display: flex;
  flex-direction: column;
}

.new-post-title {
  height: 30px;
  padding-left: 20px;
  border-radius: 5px;
  border: solid black 0.5px;
  margin-bottom: 30px;
  width: 800px;
}

.new-post-description {
  padding: 20px;
  border-radius: 5px;
  border: solid black 0.5px;
  margin-bottom: 30px;
}

.placeholder-img,
.title-img {
  height: 200px;
  width: 300px;
  object-fit: cover;
  object-position: center;
  margin-bottom: 30px;
}

.image-url {
  height: 30px;
  padding-left: 20px;
  border-radius: 5px;
  border: solid black 0.5px;
  margin-bottom: 30px;
  width: 800px;
}

.select-category {
  height: 30px;
  width: 500px;
  margin-bottom: 30px;
}

.new-post-controls {
  display: flex;
}

.commit-post,
.cancle-post,
.write-post {
  height: 50px;
  width: 200px;
  border-radius: 25px;
  background: white;
  font-size: 14px;
  border: solid black 0.5px;
  margin: 20px;
  transition: 0.5s all ease;
}

.commit-post:hover,
.write-post:hover {
  color: white;
  background: rgb(0, 0, 0);
}

.cancle-post:hover {
  color: white;
  background: rgb(255, 38, 38);
  border-color: rgb(255, 38, 38);
}

.post-control-buttons {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.post-control-buttons img {
  height: 35px;
  margin: 7px;
  cursor: pointer;
}

.post-control-buttons .edit-button {
  height: 35px;
}

.popup-message {
  position: fixed;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.6);
  border: none;
  border-radius: 5px;
  padding: 0 25px 25px 25px;
  z-index: 4;
  color: white;
}

.popupMessage-enter-to,
.popupMessage-leave-from {
  opacity: 1;
  /* transform: translateY(0%); */
}

.popupMessage-enter-from,
.popupMessage-leave-to {
  opacity: 0;
  /* transform: translateY(-100%); */
}

.popupMessage-enter-active,
.popupMessage-leave-active {
  transition: all 1s ease;
}
</style>
