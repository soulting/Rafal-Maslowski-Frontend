import { defineStore } from "pinia";
import { getMutables } from "@/composables/getMutables";

export const useMutables = defineStore("mutables", {
  state: () => {
    return { data: null };
  },
  actions: {
    async getMutables() {
      try {
        const mutables = await getMutables();
        if (mutables.status === "success") {
          this.data = mutables.data;
        }
      } catch (error) {
        console.error("An error occured fetching mutables");
      }
    },
  },
});
