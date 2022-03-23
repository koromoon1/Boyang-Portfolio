<template>
  <div id="homePage" class="home">
    <!-- Hero -->
    <Hero id="hero" />

    <!-- About Me -->
    <AboutMe id="aboutMe" />
  </div>
</template>

<script>
import Hero from "../components/Home/Hero.vue";
import AboutMe from "../components/Home/AboutMe.vue";

export default {
  name: "Home",
  components: {
    Hero,
    AboutMe,
  },
};
</script>
