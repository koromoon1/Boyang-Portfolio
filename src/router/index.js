import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home";
import Experience from "../pages/Experience";
import Projects from "../pages/Projects";
// import ProjectShowcase from "../components/Projects/ProjectShowcase";
import Contact from "../pages/Contact";

// const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: Home
//   },
//   {
//     path: '/about',
//     name: 'About',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//   }
// ]

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

// scrollBehavior(to, from, savedPosition) {
//   if (savedPosition) {
//     return savedPosition;
//   } else {
//     return { top: 0 };
//   }
// },

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active",
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }
  },
});

export default router;
