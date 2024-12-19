import { defineStore } from "pinia";
import { getBlogPosts } from "@/composables/getBlogPosts";

export const usePosts = defineStore("posts", {
  state: () => {
    return { data: null };
  },
  actions: {
    async getPosts() {
      try {
        const posts = await getBlogPosts();
        if (posts.status === "success") {
          this.data = posts.data;
        }
      } catch (error) {
        console.error("An error occured fetching posts");
      }
    },
  },
});
