import { defineStore } from "pinia";
import { getBlogPosts } from "@/composables/getBlogPosts";

export const usePosts = defineStore("posts", {
  state: () => {
    return { isLoading: true, posts: null };
  },
  actions: {
    async getPosts() {
      const posts = await getBlogPosts();
      if (posts) {
        this.posts = posts;
      }
      this.isLoading = false;
    },
  },
});
