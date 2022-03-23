<template>
  <div class="hero-content p-5 d-flex flex-column justify-content-center">
    <!-- Title -->
    <div class="hero-title">
      <h2 class="main-title">Hey, I'm Boyang Qian</h2>
      <!-- <p>{{ windowScroll }}</p> -->
    </div>
    <!-- Text -->
    <div class="hero-text my-5">
      <p class="main-title-sub">A self-taught Front-End Web Developer</p>
      <p class="main-title-sub">Living in Toronto, Canada</p>
      <!-- <p>From Shanghai, China</p> -->
    </div>
    <!-- Project Btn -->
    <div class="myBtn-container mt-2">
      <router-link class="myBtn" to="/projects">Projects</router-link>
    </div>

    <!-- Mouse Scroll Animation -->
    <MouseScrollAnimation class="align-self-center" v-if="windowWidth >= 768" />
  </div>
</template>

<script>
import MouseScrollAnimation from "../Animation/MouseScrollAnimation.vue";
export default {
  name: "Hero",
  components: { MouseScrollAnimation },
  data() {
    return {
      windowWidth: window.innerWidth,
    };
  },
  watch: {
    // Update window height when resize
    windowWidth(newWidth) {
      this.windowWidth = newWidth;
      console.log("New window height = " + this.windowWidth);
    },
  },
  mounted() {
    // Get Window Width
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
  },
  methods: {
    onResize() {
      this.windowWidth = window.innerWidth;
    },
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

/* Hero Background */
#hero {
  /* Background Image with Linear Gradient Overlay */
  background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.6) 50vw,
      rgba(0, 0, 0, 0.5)
    ),
    url("../../assets/png/hero-background.png");
  background-size: cover;
  background-position: center;
  height: calc(100vh - 76px);
  /* Header is 76px high */
  color: #fff;
}

/* Hero Title */

.hero-content {
  height: 100%;
  text-align: center;
}

/* Project Button */
a.myBtn:hover {
  color: #666;
}
</style>
