import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/LoginPage.vue"),
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("@/views/HomePage.vue"),
  },
  {
    path: "/new",
    name: "New",
    component: () => import("@/views/NewPage.vue"),
  },
  {
    path: "/details/:id",
    name: "Detail",
    component: () => import("@/views/DetailsPage.vue"),
  },
  {
    path: "/other-page",
    name: "Other",
    component: () => import("@/views/OtherPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
