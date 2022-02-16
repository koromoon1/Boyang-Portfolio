import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
import Home from "./views/Home";
import Experience from "./views/Experience";
import Projects from "./views/Projects";
import ProjectShowcase from "./components/Projects/ProjectShowcase";
import Contact from "./views/Contact";
// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap";
// Font Awesome
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// library.add(faHtml5);

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

createApp(App)
  .use(router)
  // .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
