import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "Products",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ProductsAllView.vue"),
  },
  {
    path: "/products/:id",
    name: "ProductDetail",
    props: true,
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ProductDetailView.vue"),
  }
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
