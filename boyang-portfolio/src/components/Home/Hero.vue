<template>
  <div class="hero-content p-5 d-flex flex-column justify-content-center">
    <!-- Title -->
    <div class="hero-title">
      <h2>Hey, I'm Boyang Qian</h2>
      <!-- <p>{{ windowScroll }}</p> -->
    </div>
    <!-- Text -->
    <div class="hero-text my-5">
      <p>A self-taught Front-End Web Developer</p>
      <p>Living in Toronto, Canada</p>
      <!-- <p>From Shanghai, China</p> -->
    </div>
    <!-- Project Btn -->
    <div class="myBtn-container mt-2">
      <router-link class="myBtn" to="/projects">Projects</router-link>
    </div>

    <!-- Mouse Scroll Animation -->
    <MouseScrollAnimation class="align-self-center" />
  </div>
</template>

<script>
import MouseScrollAnimation from "../Animation/MouseScrollAnimation.vue";
export default {
  name: "Hero",
  components: { MouseScrollAnimation },
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

p {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
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
h2 {
  font-size: 4rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 3px;
}

.hero-content {
  height: 100%;
  text-align: center;
}

/* Project Button */
a.myBtn:hover {
  color: #333;
}
</style>
