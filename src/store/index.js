import { createStore } from "vuex";
import projectsModules from "./modules/projects/index";
import technologiesModules from "./modules/technologies/index";

const store = createStore({
  modules: {
    // The key is the namespace config
    projects: projectsModules,
    techs: technologiesModules,
  },
});

export default store;
