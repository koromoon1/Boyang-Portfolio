<template>
  <div id="projectsIntro">
    <!-- Project Info -->
    <div
      class="projects-content row row-cols-1 row-cols-xl-2 g-xl-5 justify-content-center"
    >
      <!-- Project Image -->
      <div class="project-content-img-container col mb-xl-5">
        <img class="mockup-img" :src="imageUrl" alt="Software Screenshot" />
        <!-- <p class="overlayText" v-if="!projectHasInfo">Coming Soon</p> -->
      </div>
      <!-- Project Info Text -->
      <div
        class="project-content-info d-flex flex-column justify-content-center align-items-center align-items-xl-start text-center text-xl-start col mb-5 pb-5 pb-xl-3 pt-5 pt-xl-0 px-5 px-lg-0"
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
        <router-link
          :to="projectLink"
          class="myBtn myBtn-dark"
          :class="{ disabled: !this.projectHasInfo }"
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

.project-content-info {
  max-width: 30rem;
}

.project-content-info-title {
  font-size: 2rem;
  font-weight: 700;
}

.project-content-info-text {
  font-size: 1.3rem;
  color: grey;
  max-width: 60rem;
  line-height: 1.7;
}
</style>
