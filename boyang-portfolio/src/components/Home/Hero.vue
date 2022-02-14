<template>
  <div class="hero-content p-5 d-flex flex-column justify-content-center">
    <!-- Title -->
    <div class="hero-title">
      <h2>Hey, I'm Boyang Qian</h2>
    </div>
    <!-- Text -->
    <div class="hero-text my-5">
      <p>
        I'm a self-taught Front-End Web Developer living in Toronto, Canada.
      </p>
      <p>I enjoy building quality and functional websites</p>
      <p>and make them look cool!</p>
    </div>
    <!-- Social Links -->
    <div class="hero-social">
      <ul class="social-icon-list d-flex justify-content-center">
        <li class="social-icon-link">
          <a target="_blank" href="https://www.linkedin.com/in/boyang-qian/"
            ><i class="bi bi-linkedin"></i
          ></a>
        </li>
        <li class="social-icon-link">
          <a target="_blank" href="https://github.com/koromoon1"
            ><i class="bi bi-github"></i
          ></a>
        </li>
        <li class="social-icon-link">
          <a target="_blank" href="https://twitter.com/BoyangQian"
            ><i class="bi bi-twitter"></i
          ></a>
        </li>
        <li class="social-icon-link">
          <a target="_blank" href="mailto:eqboyang@gmail.com"
            ><i class="bi bi-envelope-fill"></i
          ></a>
        </li>
      </ul>
    </div>
    <!-- Mouse Scroll animation -->
    <div class="hero-mouse-container align-self-center flex-colomn">
      <div class="mouse mb-1"></div>
      <div><span>Scroll Down</span></div>
    </div>
  </div>
</template>

<style scoped>
a {
  color: #eee;
}

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
      rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 0.8) 50vw,
      rgba(0, 0, 0, 0.7)
    ),
    url("../../assets/jpg/hero-background.jpg");
  background-size: cover;
  background-position: center;
  height: 92vh;
  /* Header is 8vh, so hero needs to be 92vh */
  /* position: relative; */
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

/* Social Link */

.social-icon-link {
  font-size: 1.5rem;
  padding: 0.3rem 0.65rem;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  /* Bootstrap Icons has little margin vertically, setting extra horizontal margin/padding is needed for being square */
}

/* Mouse Scroll Animation */
.hero-mouse-container {
  position: absolute;
  bottom: 8%;
}

.mouse {
  width: 25px;
  height: 40px;
  border: 2px solid #eee;
  border-radius: 60px;
  position: relative;
  left: 34%;
}

.mouse::before {
  content: "";
  width: 5px;
  height: 5px;
  border: 0.1px solid #eee;
  border-radius: 50px;
  position: absolute;
  top: 7px;
  left: 53%;
  transform: translateX(-50%);
  background: #eee;
  opacity: 1;
  animation: wheel 1.3s infinite;
}

@keyframes wheel {
  to {
    opacity: 0;
    top: 27px;
  }
}
</style>
