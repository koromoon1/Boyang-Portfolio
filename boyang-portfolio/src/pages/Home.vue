<template>
  <div id="homePage" class="home">
    <Header />

    <Hero id="hero" />

    <AboutMe id="aboutMe" />

    <SocialLinkSideBar :page="'home'" />

    <ContactSection id="contact" class="pb-5" />

    <Footer id="footer" />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Hero from "../components/Home/Hero.vue";
import AboutMe from "../components/Home/AboutMe.vue";
import ContactSection from "../components/ContactSection.vue";
import Footer from "../components/Footer.vue";
import SocialLinkSideBar from "../components/SocialLinkSideBar.vue";
export default {
  name: "Home",
  components: {
    Header,
    Hero,
    AboutMe,
    ContactSection,
    Footer,
    SocialLinkSideBar,
  },
};
</script>
