import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import BlogManager from "../views/BlogManager.vue";
import PreView from "../views/PreviewView.vue";
import BlogView from "../views/BlogView.vue";
import PostView from "../views/PostView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/r9W6IMlfjLrzVAUEl7bHLQMFALsbAIqJ",
    name: "blogManager",
    component: () => import("../views/BlogManager.vue"),
  },
  {
    path: "/preview",
    name: "preview",
    component: () => import("../views/PreviewView.vue"),
  },
  {
    path: "/blog",
    name: "blog",
    component: () => import("../views/BlogView.vue"),
  },
  {
    path: "/post",
    name: "post",
    component: () => import("../views/PostView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
