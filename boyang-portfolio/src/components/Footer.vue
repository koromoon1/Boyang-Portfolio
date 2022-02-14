<template>
  <footer class="footer pt-5 mt-5">
    <div class="container d-flex flex-column">
      <div class="footer-upper pb-4 d-flex justify-content-between">
        <div class="footer-info">
          <h4 class="ps-3">Boyang's Portfolio</h4>
          <!-- <p>
            A Frontend focused Web Developer wants to contribute to the
            Front-end of Websites that lead to the success of products that
            makes the world a better place.
          </p> -->
        </div>
        <div class="footer-social">
          <!-- <h4 class="pe-3">Social Links</h4> -->
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
      </div>
      <div class="footer-lower">
        <div class="main-footer__lower">&copy; Copyright 2021</div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
a {
  color: #333;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

h4 {
  font-weight: 700;
}

.footer {
  width: 30%vh;
}

.footer-info {
  width: 40%;
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
}

.footer-lower {
  padding: 2rem 0;
  border-top: 1px solid #444;
  /* color: #eee; */
  color: #333;
  font-size: 1rem;
  text-align: center;
}
</style>
