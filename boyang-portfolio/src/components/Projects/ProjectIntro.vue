<template>
  <div id="projectsIntro">
    <!-- Project Info -->
    <div class="projects-content row px-5">
      <!-- Project Image -->
      <div class="project-content-img-container col-7 g-5 mb-5">
        <img
          class="mockup-img"
          src="../../assets/jpeg/project-mockup-example.jpeg"
          alt="Software Screenshot"
        />
        <p class="overlayText">Coming Soon</p>
      </div>
      <!-- Project Info Text -->
      <div
        class="project-content-info col-5 d-flex flex-column justify-content-center align-items-start"
      >
        <h3 class="project-content-info-title">{{ project.name }}</h3>
        <p class="project-content-info-text my-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae
          rem error dolorem id amet exercitationem nisi nobis repellat hic enim.
        </p>
        <!-- Project Link -->
        <router-link :to="projectLink" class="myBtn myBtn-dark"
          >Case Study</router-link
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
