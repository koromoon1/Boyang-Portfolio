<template>
  <div id="project-showcase">
    <!-- Header -->
    <Header />

    <!-- Project Showcase -->
    <div class="project-detail">
      <!-- Hero -->
      <div class="project-detail-hero d-flex flex-column align-items-center">
        <!-- Heading -->
        <div class="project-detail-title-container mb-5">
          <h2 class="main-title">{{ projectName }}</h2>
        </div>
        <div class="project-detail-title-sub mb-5">
          <p class="main-title-sub">
            A fun game for two players to keep rolling a dice in their round to
            collect points. Each time a <b>1</b> is rolled, the round is over
            and the dice is handed to the other player.
          </p>
          <p class="main-title-sub">
            Who first collect <b>100</b> ponts
            <b>wins</b>
            the game!
          </p>
        </div>
        <!-- Live Link -->
        <!-- <div class="project-live-link">
          <a href="#" class="myBtn myBtn-dark" target="_blank" disabled
            >Live Link</a
          >
        </div> -->
        <!-- Code Link -->
        <div class="link-container d-inline">
          <a
            href="https://github.com/koromoon1/pig-game"
            class="myBtn myBtn-dark"
            target="_blank"
            >Code Link</a
          >
        </div>
      </div>

      <!-- Project Detail Content -->
      <div class="project-detail-content container">
        <!-- Showcase Image -->
        <div class="project-detail-showcase-container">
          <div class="project-detail-showcase-img">
            <img :src="imageUrl" alt="Showcase image of the project" />
          </div>
        </div>
        <!-- Main Content -->
        <div class="project-detail-content-main">
          <!-- overview -->
          <div class="project-detail-content-overview mb-5">
            <div class="overview-title-container mb-5">
              <h3 class="section-title-sm">Project Overview</h3>
            </div>
            <div class="overview-text">
              <p class="section-subtitle-sm">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Provident rerum est culpa quasi neque fugiat. Maxime id deserunt
                cupiditate. Eum sed, quia praesentium saepe soluta ullam
                repellendus iure nostrum quas temporibus adipisci voluptates
                quos distinctio nisi a eligendi expedita eaque?
              </p>
              <p class="section-subtitle-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                consequuntur harum veniam voluptatibus cupiditate incidunt, illo
                dolore, ea assumenda optio aspernatur accusamus. Odio optio
                incidunt sint eum neque tenetur dolorum? Perspiciatis molestiae
                ipsum accusantium et deserunt culpa quae. Eveniet facilis amet
                veniam quidem ratione! Molestias doloribus libero esse illum
                asperiores consequatur autem perspiciatis, obcaecati cupiditate
                quidem, nulla nihil. Distinctio, tempora!
              </p>
            </div>
          </div>
          <!-- Tools Used -->
          <div class="project-detail-content-tools">
            <div class="tools-title mb-5">
              <h3 class="section-title-sm">Tools Used</h3>
            </div>
            <ToolsBadgeWall :techStack="techStack" />
          </div>
          <!-- See Live -->
          <div class="project-detail-links">
            <!-- Live Link -->
            <div class="link-container d-inline me-3">
              <a href="#" class="myBtn disabled" target="_blank">Live Link</a>
            </div>
            <!-- Code Link -->
            <div class="link-container d-inline">
              <a
                href="https://github.com/koromoon1/pig-game"
                class="myBtn myBtn-dark"
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
import ToolsBadgeWall from "./ToolsBadgeWall.vue";
export default {
  name: "ProjectShowcase",
  inject: ["projects", "technologies"],
  props: ["projectId"],
  components: { Header, ToolsBadgeWall },
  data() {
    return {
      selectedProject: null,
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
    this.selectedProject = selectedProject;
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
  computed: {
    imageUrl() {
      return require("../../assets/projects/" +
        this.selectedProject.imgName +
        "." +
        this.selectedProject.imgType);
    },
  },
  methods: {
    toProjects() {
      this.$router.push("/projects");
    },
  },
};
</script>

<style scoped>
/* ==== Heading ==== */
.project-detail-hero {
  padding: 5rem 30rem;
}

.project-detail-title-sub {
  text-align: center;
  font-size: 1.3rem;
  color: #666;
  line-height: 1.7;
  max-width: 700px;
}

/* ==== Content Section ==== */
/* .project-detail-content {
  padding: 2rem 15rem;
} */

/* Image */
.project-detail-showcase-container {
  margin: 0 8rem;
}

img {
  width: 100%;
}

/* ==== Main Content ==== */
.project-detail-content-main {
  margin: 4rem 17rem;
}
/* Tools Used */
.project-detail-content-tools {
  margin-bottom: 4.5rem;
}
</style>
