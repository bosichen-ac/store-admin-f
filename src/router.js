import { createWebHistory, createRouter } from "vue-router";
import OrderList from "./components/OrderList";
import OrderDetail from "./components/OrderDetail";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import ProductForm from "./components/ProductForm";
import HistoryList from "./components/HistoryList.vue";
import OrderDetailReadonly from "./components/OrderDetailReadonly.vue";

const routes = [
  { path: "/", component: OrderList },
  { path: "/orders", component: OrderList },
  { path: "/order/:id", component: OrderDetail },
  { path: "/history", component: HistoryList },
  { path: "/history/:id", component: OrderDetailReadonly },
  { path: "/products", component: ProductList },
  { path: "/product/:id", component: ProductDetail },
  { path: "/product/:id/edit", component: ProductForm },
  { path: "/product/add", component: ProductForm },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;