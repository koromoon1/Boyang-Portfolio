<template>
  <footer class="footer bg-light">
    <div class="container d-flex flex-column">
      <!-- Upper Container -->
      <div
        class="footer-upper py-5 d-flex flex-column flex-sm-row justify-content-between align-items-center"
      >
        <!-- Heading -->
        <div class="footer-info my-3 my-sm-auto ps-sm-3">
          <h4>Boyang's Portfolio</h4>
        </div>
        <!-- Social Links -->
        <div class="footer-social">
          <ul class="social-icon-list d-flex justify-content-center">
            <li class="social-icon-link">
              <a
                class="social-icon"
                target="_blank"
                href="https://www.linkedin.com/in/boyang-qian/"
                ><i class="bi bi-linkedin"></i
              ></a>
            </li>
            <li class="social-icon-link">
              <a
                class="social-icon"
                target="_blank"
                href="https://github.com/koromoon1"
                ><i class="bi bi-github"></i
              ></a>
            </li>
            <li class="social-icon-link">
              <a
                class="social-icon"
                target="_blank"
                href="https://twitter.com/BoyangQian"
                ><i class="bi bi-twitter"></i
              ></a>
            </li>
            <li class="social-icon-link">
              <a
                class="social-icon"
                target="_blank"
                href="mailto:eqboyang@gmail.com"
                ><i class="bi bi-envelope-fill"></i
              ></a>
            </li>
          </ul>
        </div>
      </div>
      <!-- Copyright -->
      <div class="footer-lower py-4">
        <div class="main-footer__lower">
          &copy; Copyright 2021. Inspired by Dopefolio
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

h4 {
  font-weight: 700;
}

.footer-social {
  text-align: end;
}

.social-icon-link {
  font-size: 1.5rem;
  padding: 0.3rem 0.65rem;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  /* Bootstrap Icons has little margin vertically, setting extra horizontal margin/padding is needed for being square */
  transition: transform 0.3s;
}

.social-icon-link:hover {
  color: #333;
  transform: translateY(-5px);
}

.social-icon {
  color: #333;
}

.footer-lower {
  border-top: 1px solid #444;
  color: #333;
  font-size: 0.9rem;
  text-align: center;
}
</style>
