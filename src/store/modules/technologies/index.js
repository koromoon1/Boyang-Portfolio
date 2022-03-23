import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

export default {
  namespaced: true,
  state() {
    return {
      technologies: [
        {
          id: "tech1",
          name: "HTML5",
          type: "Markup Language",
          iconFileName: "html5",
        },
        {
          id: "tech2",
          name: "CSS3",
          type: "Markup Language",
          iconFileName: "css3-alt",
        },
        {
          id: "tech3",
          name: "Javascript",
          type: "Programming Language",
          iconFileName: "js-square",
        },
        {
          id: "tech4",
          name: "Bootstrap",
          type: "Framework",
          iconFileName: "bootstrap",
        },
        { id: "tech5", name: "Vue", type: "Framework", iconFileName: "vuejs" },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
