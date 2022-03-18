import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home";
import Experience from "../pages/Experience";
import Projects from "../pages/Projects";
// import ProjectShowcase from "../components/Projects/ProjectShowcase";
import Contact from "../pages/Contact";

const routes = [
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
    // component: ProjectShowcase,
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../components/Projects/ProjectShowcase"
      ),
  },
  {
    path: "/contact",
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active",
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return {
        left: 0,
        top: 0,
      };
    }
  },
});

export default router;
