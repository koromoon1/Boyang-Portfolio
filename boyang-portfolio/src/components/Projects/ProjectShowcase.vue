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
    <!-- Test -->
    <div class="project-detail">
      <!-- Hero -->
      <div class="project-detail-hero container">
        <!-- Heading -->
        <div class="project-detail-title-container">
          <h2>Project Name</h2>
        </div>
        <div class="project-detail-title-sub">
          <p>project description</p>
        </div>
        <!-- Live Link -->
        <div class="project-live-link">
          <a href="#" class="myBtn" target="_blank" disabled>Live Link</a>
        </div>
      </div>
      <!-- Content -->
      <div class="project-detail-content">
        <!-- Showcase Image -->
        <div class="project-detail-showcase-container">
          <div class="project-detail-showcase-img">
            <img src="" alt="Showcase image of the project" />
          </div>
        </div>
        <!-- Main Content -->
        <div class="project-detail-content-main">
          <!-- overview -->
          <div class="project-detail-content-overview">
            <div class="overview-title">
              <h3>Project Overview</h3>
            </div>
            <div class="overview-text">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptatibus tenetur excepturi iste porro dicta explicabo
                exercitationem in pariatur nobis vero.
              </p>
            </div>
          </div>
          <!-- Tools Used -->
          <div class="project-detail-content-tools">
            <div class="tools-title">
              <h3>Tools Used</h3>
            </div>
            <div class="tools-icon-container">
              <div class="tools-icon">Loop Here</div>
            </div>
          </div>
          <!-- See Live -->
          <div class="project-detail-links">
            <!-- Live Link -->
            <div class="live-link-container">
              <a href="#" class="myBtn disabled" target="_blank">Live Link</a>
            </div>
            <!-- Code Link -->
            <div class="code-link-container">
              <a
                href="https://github.com/koromoon1/pig-game"
                class="myBtn"
                target="_blank"
                >Code Link</a
              >
            </div>
          </div>
        </div>
      </div>
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
