<template>
  <div
    class="aboutMe container d-flex flex-column align-items-center text-center pb-5 mb-5"
  >
    <div class="contact-title-container py-0 py-sm-5">
      <h2 class="section-title"><i class="bi bi-person-check"></i> About Me</h2>
    </div>
    <h3 class="mb-4">I'm opening for job now!</h3>
    <p>
      I'm self-motivated <i class="bi bi-alarm"></i>, willing to learn
      <i class="bi bi-stars"></i>
      and full of passion <i class="bi bi-person-hearts"></i>
    </p>
    <p>Want to know more about my achievements?</p>
    <div class="btn-container my-4 mb-5">
      <div class="myBtn-container">
        <router-link class="myBtn-dark myBtn-lg" to="/experience"
          >Work Experience</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
};
</script>

<style scoped>
h2 {
  color: #333;
}

h3 {
  font-weight: 700;
}

p {
  font-size: 1.5rem;
  color: #333;
}
</style>
