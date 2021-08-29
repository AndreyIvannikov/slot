import VueRouter from "vue-router";
const routes = [
  {
    path: "/statistick",
    name: "statistick",
    component: () => import("@/components/views/statistick"),
  },
  {
    path: "/home",
    name: "home",
    component: () => import("@/components/views/intro.vue"),
  },
  {
    path: "/education",
    name: "education",
    component: () => import("@/components/views/Education"),
  },
  {
    path: "/auth",
    name: "регистрация",
    component: () => import("@/components/views/Education/components/Form"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
