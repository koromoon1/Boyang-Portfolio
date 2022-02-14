<template>
  <div class="contact d-flex flex-column align-items-center container">
    <div class="contact-title-container p-5 mt-5">
      <h2 class="contact-title">
        <i class="bi bi-envelope-fill"></i> Contact Me
      </h2>
    </div>
    <p>
      Feel free to send a email to me, whether it's a project, job opportunity,
      or just a chat.
    </p>
    <p>I will get back to you as soon as possible. Let's get in touch!</p>
    <div class="contact-btn-container mt-5">
      <a class="contact-btn" href="mailto:eqboyang@gmail.com">Send An Email</a>
    </div>
  </div>
</template>

<style scoped>
h2 {
  color: #333;
  font-size: 2.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 3px;
}

p {
  font-size: 1.5rem;
}

.contact-btn-container {
  text-align: center;
}

.contact-btn {
  padding: 1.2rem 3rem;
  font-size: 1.4rem;
  background: #eee;
  color: #333;
  text-transform: uppercase;
  letter-spacing: 2px;
  display: inline-block;
  font-weight: 700;
  border-radius: 5px;
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.15);
  transition: all 0.3s;
}
.contact-btn:hover {
  transform: translateY(-5px);
  color: #0d6efd;
  background-color: azure;
}
</style>
