import { defineStore } from "pinia";
import { getBlogPosts } from "@/composables/getBlogPosts";

export const usePosts = defineStore("posts", {
  state: () => {
    return { isLoading: true, posts: null };
  },
  actions: {
    async getPosts() {
      const posts = await getBlogPosts();
      console.log(posts);
      if (posts.status === "success") {
        this.posts = posts.data;
      }
      this.isLoading = false;
    },
  },
});
