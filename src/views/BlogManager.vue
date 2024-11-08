<template class>
  <div class="blog-manager">
    <div v-if="!posts.isLoading" class="post-list">
      <div v-for="(post, index) in posts.posts" :key="index" class="post-item">
        <img class="post-image" :src="post.image" alt="post image" />
        <div class="post-body">
          <h4 class="post-title">{{ post.title }}</h4>
          <p class="post-description">{{ post.description }}</p>
        </div>
        <div class="post-control-buttons">
          <img
            v-if="post.isActiv === 'TRUE'"
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
            src="@/assets/icons/pen.png"
            alt="edit button"
          />
        </div>
      </div>
    </div>
    <div v-else class="post-list">
      <div
        v-for="(post, index) in 3"
        :key="index"
        id="placeholder"
        class="post-item"
      >
        <img
          class="post-image"
          src="@/assets/backgrounds/placeholder-image.png"
          alt="post image"
        />
        <div class="post-body">
          <div class="post-title"></div>
          <div class="post-description"></div>
        </div>
      </div>
    </div>
    <button @click="switchEditor" class="write-post">NAPISZ POST</button>
    <div v-if="showNewPost" class="new-post-container">
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
          api-key="vub20t3qw4otb7xs5d814g23718qwwfa3e25b1kigbl57qcl"
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
        <button class="commit-post" @click="getPostContent">ZAPISZ</button>
        <button class="cancle-post" @click="switchEditor">ANULUJ</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import Editor from "@tinymce/tinymce-vue";
import { onMounted, ref } from "vue";
import { getBlogPosts } from "@/composables/getBlogPosts.js";
import { useRouter } from "vue-router";
import { postBlogPost } from "@/composables/postBlogPost.js";
import { usePosts } from "@/stores/posts";
import { activateBlogPost } from "@/composables/activateBlogPost.js";

const router = useRouter();

const posts = usePosts();

const postData = ref({
  title: null,
  description: null,
  image: null,
  code: null,
  category: null,
  isActive: false,
});

const showNewPost = ref(false);

const editorInstance = ref(null);

const activatePost = async (postID) => {
  try {
    const response = await activateBlogPost(postID);

    if (response.message === "Post status changed successfully") {
      posts.getPosts();
      console.log("Posts reloaded successfully");
    } else {
      console.error("Failed to activate post");
    }
  } catch (error) {
    console.error("Error activating post:", error);
  }
};

onMounted(() => {
  if (posts.isLoading) {
    posts.getPosts();
  }
});

const onEditorInit = (evt) => {
  editorInstance.value = evt.target;
};

const getPostContent = () => {
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
    postBlogPost(postData.value);
    location.reload(true);
  }
};

const showPrew = () => {
  try {
    sessionStorage.setItem("content", content.value);
    window.open("/preview", "_blank");
  } catch (error) {
    console.error(error);
  }
};

const switchEditor = () => {
  showNewPost.value = !showNewPost.value;
};
</script>

<style scoped>
.post-control-buttons img {
  height: 50px;
  margin: 10px;
  cursor: pointer;
}

.post-control-buttons .edit-button {
  height: 40px;
}

.post-control-buttons {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.blog-manager {
  padding-top: 130px;
  background-color: rgb(245, 245, 245);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
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
  /* margin-top: 200px; */
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
</style>
