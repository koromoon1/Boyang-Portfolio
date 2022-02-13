import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
import Home from "./components/views/Home";
import About from "./components/views/About";
import Projects from "./components/views/Projects";
import Project1 from "./components/Projects/Project1";
import Project2 from "./components/Projects/Project2";
// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/about",
      component: About,
    },
    {
      path: "/projects",
      component: Projects,
    },
    {
      path: "/projects/project1",
      component: Project1,
    },
    {
      path: "/projects/project2",
      component: Project2,
    },
  ],
  linkActiveClass: "active",
});

createApp(App).use(router).mount("#app");
