<template>
  <div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      projects: [
        {
          id: "project1",
          name: "Pig Game",
          techStack: ["tech1", "tech2", "tech3"],
          imgName: "pigGame",
          imgType: "png",
          description:
            "A simple but super fun game for 2 players. Try it out with your friends and see who can win the game!",
        },
        {
          id: "project2",
          name: "Project 2",
          techStack: ["tech1", "tech2", "tech4"],
          imgName: "",
          imgType: "",
          description: "",
        },
        {
          id: "project3",
          name: "Project 3",
          techStack: ["tech2", "tech3", "tech4", "tech5"],
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

<style>
/* Import Google Font */
@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;700&display=swap");

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: "Source Sans Pro", sans-serif;
}

a {
  text-decoration: none !important;
}

/* Buttons */
.disabled {
  pointer-events: none;
}

.myBtn,
.myBtn-dark,
.myBtn-lg {
  display: block;
  background: #eee;
  color: #333;
  text-transform: uppercase;
  letter-spacing: 2px;
  display: inline-block;
  font-weight: 700;
  border-radius: 5px;
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.15);
  transition: transform 0.3s;
  padding: 0.9rem 4.8rem;
  font-size: 1.2rem;
}
.myBtn-dark {
  background: #333;
  color: #eee;
}
.myBtn-lg {
  padding: 1.2rem 4rem;
  font-size: 1.4rem;
}
.myBtn:hover {
  color: #333;
  transform: translateY(-3px);
}
.myBtn-dark:hover {
  color: #eee;
}
.myBtn-lg:hover {
  transform: translateY(-5px);
}

/* Main Title */
.main-title {
  font-size: 4rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 3px;
}

.main-title-sub {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

/* Section Title */
.section-title {
  color: #333;
  font-size: 2.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 3px;
}

.section-title-sm {
  color: #333;
  font-size: 1.7rem;
  font-weight: 700;
  letter-spacing: 1px;
}

.section-subtitle-sm {
  font-size: 1.2rem;
  color: #666;
}

.section-title-description {
  text-align: center;
  font-size: 1.3rem;
  color: #666;
  line-height: 1.7;
}
</style>
