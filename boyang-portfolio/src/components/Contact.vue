<template>
  <div class="contact d-flex flex-column align-items-center">
    <div class="contact-title-container p-5 mt-5">
      <h2 class="section-title">
        <i class="bi bi-envelope-fill"></i> Contact Me
      </h2>
    </div>
    <p>
      Feel free to send a email to me, whether it's a project, job opportunity,
      or just a chat.
    </p>
    <p>
      Send an email to me! I will get back to you as soon as possible. Let's get
      in touch!
    </p>
    <div class="btn-container my-5">
      <a class="myBtn myBtn-lg" href="mailto:eqboyang@gmail.com"
        >Send An Email</a
      >
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
  color: #eee;
}

p {
  font-size: 1.5rem;
  color: #eee;
}

.contact {
  /* Background Image with Linear Gradient Overlay */
  background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.7) 50vw,
      rgba(0, 0, 0, 0.5)
    ),
    url("../assets/jpg/background-4.jpg");
  background-size: fit;
  background-position: center;
}
</style>
