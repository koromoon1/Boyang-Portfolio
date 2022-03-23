<template>
  <div>
    <!-- Header -->
    <Header></Header>

    <!-- Router View -->
    <router-view></router-view>

    <!-- Social Link Side Bar -->
    <SocialLinkSideBar :page="'home'" />

    <!-- Contact -->
    <ContactSection id="contact" class="pb-5" />

    <!-- Footer -->
    <Footer id="footer" />
  </div>
</template>

<script>
import Header from "./components/Header";
import ContactSection from "./components/ContactSection.vue";
import Footer from "./components/Footer.vue";
import SocialLinkSideBar from "./components/SocialLinkSideBar.vue";

export default {
  name: "App",
  components: { Header, ContactSection, Footer, SocialLinkSideBar },
  data() {
    return {
      projects: [
        {
          id: "project1",
          name: "Find a Coach",
          techStack: ["Vue", "Javascript", "CSS3"],
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
          techStack: ["HTML5", "CSS3", "Javascript"],
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
          techStack: ["CSS3", "Javascript", "Bootstrap", "Vue"],
          imgName: "",
          imgType: "",
          description: "",
        },
      ],
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
  provide() {
    return {
      projects: this.projects,
      technologies: this.technologies,
    };
  },
};
</script>

<style></style>
