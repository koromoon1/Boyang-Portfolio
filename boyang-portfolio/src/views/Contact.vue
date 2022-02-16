<template>
  <div id="contactPage">
    <!-- Header -->
    <Header />
    <h1>Contact Page</h1>

    <!-- Social Links Side Bar -->
    <SocialLinkSideBar />

    <!-- Footer -->
    <Footer id="footer" />

    <!-- violet-background -->
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import SocialLinkSideBar from "../components/SocialLinkSideBar.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "About",
  components: { Header, SocialLinkSideBar, Footer },
  props: {},
};
</script>
