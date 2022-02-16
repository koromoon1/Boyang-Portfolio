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
          name: "Project 1",
          techStack: ["tech1", "tech2", "tech3"],
        },
        {
          id: "project2",
          name: "Project 2",
          techStack: ["tech1", "tech2", "tech4"],
        },
        {
          id: "project3",
          name: "Project 3",
          techStack: ["tech2", "tech3", "tech4", "tech5"],
        },
      ],
      technologies: [
        { id: "tech1", name: "HTML5", type: "Markup Language" },
        { id: "tech2", name: "CSS3", type: "Markup Language" },
        { id: "tech3", name: "Javascript", type: "Programming Language" },
        { id: "tech4", name: "Bootstrap", type: "Framework" },
        { id: "tech5", name: "Vue", type: "Framework" },
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

/* Section Title */
.section-title {
  color: #333;
  font-size: 2.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 3px;
}
</style>
