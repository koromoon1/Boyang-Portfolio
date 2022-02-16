<template>
  <div id="projectsIntro">
    <!-- Project Info -->
    <div class="projects-content row g-5 px-5">
      <!-- Project Image -->
      <div class="project-content-img-container col-7 mb-5">
        <img class="mockup-img" :src="imageUrl" alt="Software Screenshot" />
        <p class="overlayText" v-if="!projectHasInfo">Coming Soon</p>
      </div>
      <!-- Project Info Text -->
      <div
        class="project-content-info col-5 d-flex flex-column justify-content-center align-items-start"
      >
        <!-- Info Title -->
        <h3 v-if="projectHasInfo" class="project-content-info-title">
          {{ project.name }}
        </h3>
        <h3 v-else class="project-content-info-title">Project Coming Soon</h3>
        <!-- Description -->
        <p v-if="projectHasInfo" class="project-content-info-text my-4">
          {{ project.description }}
        </p>
        <p v-else class="project-content-info-text my-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt ad,
          fuga architecto reiciendis omnis sit aspernatur molestias dolorum.
          Magni, reiciendis!
        </p>
        <!-- Project Link -->
        <router-link :to="projectLink" class="myBtn myBtn-dark"
          >Project Detail</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectList",
  props: ["project"],
  computed: {
    projectLink() {
      return "/projects/" + this.project.id;
    },
    projectHasInfo() {
      if (
        this.project.description !== "" &&
        this.project.imgName !== "" &&
        this.project.imgType !== ""
      ) {
        return true;
      } else {
        return false;
      }
    },

    imageUrl() {
      if (this.project.imgName !== "" && this.project.imgType !== "") {
        return require("../../assets/projects/" +
          this.project.imgName +
          "." +
          this.project.imgType);
      } else {
        return require("../../assets/jpeg/project-mockup-example.jpeg");
      }
    },
  },
};
</script>

<style scoped>
.mockup-img {
  display: block;
  width: 100%;
  object-fit: cover;
}

.project-content-img-container {
  position: relative;
}

.overlayText {
  font-size: 2.5rem;
  font-weight: 700;
  position: absolute;
  top: 40%;
  left: calc(50% - 116.28px);
}

.project-content-info-title {
  font-weight: 700;
}

.project-content-info-text {
  font-size: 1.1rem;
  color: grey;
  max-width: 60rem;
  line-height: 1.7;
  margin-bottom: 3rem;
}
</style>
