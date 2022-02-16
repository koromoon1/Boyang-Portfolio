<template>
  <div id="experiencePage">
    <!-- Header -->
    <Header />

    <MyExperience id="myExperience" class="my-5" />

    <Skills id="skills" class="my-5 pb-5" />

    <!-- Social Links Side Bar -->
    <SocialLinkSideBar />

    <!-- Contact -->
    <Contact id="contact" class="mt -5 pb-5" />

    <!-- Footer -->
    <Footer id="footer" />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import MyExperience from "../components/Experience/MyExperience.vue";
import Skills from "../components/Experience/Skills.vue";
import SocialLinkSideBar from "../components/SocialLinkSideBar.vue";
import Contact from "../components/Contact.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "About",
  components: {
    Header,
    MyExperience,
    Skills,
    SocialLinkSideBar,
    Contact,
    Footer,
  },
  props: {},
};
</script>
