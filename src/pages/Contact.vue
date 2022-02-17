<template>
  <div id="contactPage">
    <!-- Header -->
    <Header />

    <!-- Title -->
    <h2 class="section-title">Contact Page</h2>

    <!-- Social Links Side Bar -->
    <SocialLinkSideBar />

    <!-- Contact Form -->
    <ContactForm />

    <!-- Footer -->
    <Footer id="footer" />

    <!-- violet-background -->
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import SocialLinkSideBar from "../components/SocialLinkSideBar.vue";
import ContactForm from "../components/Contact/ContactForm.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "About",
  components: { Header, SocialLinkSideBar, Footer, ContactForm },
  props: {},
};
</script>
