<template>
  <div id="projectShowcase">
    <!-- Header -->
    <Header />
    <!-- Title -->
    <h2>Projects Showcase</h2>
    <button @click="toProjects">Back to Projects Page</button>
    <!-- Project -->
    <div class="project-showed">
      <h4>Project Name: {{ projectName }}</h4>
      <p>Tech Stack:</p>
      <ul>
        <li v-for="tech in techStack" :key="tech.id">
          {{ tech.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Header from "../Header.vue";
export default {
  name: "ProjectShowcase",
  inject: ["projects", "technologies"],
  props: ["projectId"],
  components: { Header },
  data() {
    return {
      projectName: "",
      techStack: [],
    };
  },
  created() {
    // Get project id by router params
    const projectId = this.$route.params.projectId;
    // Select project by id
    const selectedProject = this.projects.find(
      (project) => project.id === projectId
    );
    // Get tech stack from selected project
    const techStack = selectedProject.techStack;
    // empty array for collecting technologies in tech stack
    const selectedTechStack = [];
    // loop out all technologies that id match the tech stack item
    for (const tech of techStack) {
      const selectedTechnology = this.technologies.find(
        (technology) => technology.id === tech
      );
      // store technology in the array
      selectedTechStack.push(selectedTechnology);
    }
    this.techStack = selectedTechStack;
    this.projectName = selectedProject.name;
  },
  methods: {
    toProjects() {
      this.$router.push("/projects");
    },
  },
};
</script>
