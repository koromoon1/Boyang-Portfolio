import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home";
// import Experience from "../pages/Experience";
// import Projects from "../pages/Projects";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/experience",
    component: () => import("../pages/Experience"),
  },
  {
    path: "/projects",
    component: () => import("../pages/Projects"),
  },
  {
    path: "/projects/:projectId",
    // component: ProjectDetail,
    component: () => import("../pages/ProjectDetail"),
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

// router.afterEach(() => {
//   window.scrollTo(0, 0);
// });

export default router;
