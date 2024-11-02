import { createRouter, createWebHistory } from "vue-router";

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

  {
    path: "/contact-information",
    name: "contact-information",
    component: () => import("../views/ContactInfoView.vue"),
  },
  {
    path: "//privacy-policy",
    name: "privacy-policy",
    component: () => import("../views/PrivacyView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
