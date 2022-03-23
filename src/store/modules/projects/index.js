import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

export default {
  namespaced: true,
  state() {
    return {
      projects: [
        {
          id: "project1",
          name: "Find a Coach",
          techUsed: ["Vue", "Javascript", "CSS3"],
          imgName: "findACoach",
          imgType: "png",
          description:
            "A posting website that allow people find or become a coach to help other people achieve their goal of becoming a developer.",
          liveLink: "https://myproject1-b5913.web.app/",
          codeLink: "https://github.com/koromoon1/Find-A-Coach-Project",
        },
        {
          id: "project2",
          name: "Pig Game",
          techUsed: ["HTML5", "CSS3", "Javascript"],
          imgName: "pigGame",
          imgType: "png",
          description:
            "A simple but super fun game for 2 players. Try it out with your friends and see who can win the game!",
          liveLink: "https://pig-game-b1eb4.web.app/",
          codeLink: "https://github.com/koromoon1/pig-game",
        },

        {
          id: "project3",
          name: "Project 3",
          techUsed: ["CSS3", "Javascript", "Bootstrap", "Vue"],
          imgName: "",
          imgType: "",
          description: "",
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
