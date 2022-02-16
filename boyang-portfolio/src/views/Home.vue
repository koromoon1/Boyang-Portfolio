<template>
  <div id="home" class="home">
    <Header />

    <Hero id="hero" />

    <SocialLinkSideBar :page="'home'" />

    <Experience id="experience" class="my-5" />

    <Skills id="skills" class="my-5 pb-5" />

    <Contact id="contact" class="pb-5" />

    <Footer id="footer" />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Hero from "../components/Home/Hero.vue";
import Experience from "../components/Home/Experience.vue";
import Skills from "../components/Home/Skills.vue";
import Contact from "../components/Home/Contact.vue";
import Footer from "../components/Footer.vue";
import SocialLinkSideBar from "../components/SocialLinkSideBar.vue";
export default {
  name: "Home",
  components: {
    Header,
    Hero,
    Experience,
    Skills,
    Contact,
    Footer,
    SocialLinkSideBar,
  },
  props: {},
  methods: {
    toAboutPage() {
      this.$router.push("/about");
    },
    toProjectsPage() {
      this.$router.push("/projects");
    },
  },
};
</script>
