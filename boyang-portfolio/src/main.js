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
// Font Awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
// import { faJsSquare } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faHtml5);
// library.add(faJsSquare);

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home,
      // children: [
      //   {
      //     path: "experience",
      //     component: Experience,
      //   },
      //   {
      //     path: "skills",
      //     component: Skills,
      //   },
      //   {
      //     path: "contact",
      //     component: Contact,
      //   },
      // ],
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
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
