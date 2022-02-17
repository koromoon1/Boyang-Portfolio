import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import ProjectShowcase from "./components/Projects/ProjectShowcase";
import Contact from "./pages/Contact";
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
      path: "/experience",
      component: Experience,
    },
    {
      path: "/projects",
      component: Projects,
    },
    {
      path: "/projects/:projectId",
      component: ProjectShowcase,
    },
    {
      path: "/contact",
      component: Contact,
    },
  ],
  linkActiveClass: "active",
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }
  },
  // scrollBehavior(to, from, savedPosition) {
  //   if (savedPosition) {
  //     return savedPosition;
  //   } else {
  //     return { top: 0 };
  //   }
  // },
});

createApp(App).use(router).mount("#app");
