<template>
  <nav id="header" class="navbar navbar-expand-lg sticky-top bg-light">
    <div class="container">
      <!-- ===== Logo Brand ===== -->
      <div class="justify-content-start d-flex align-items-center">
        <router-link class="navbar-brand" to="/">
          <span class="logo-container d-inline-block align-text-top">
            <img
              src="../assets/jpg/icon.jpg"
              alt="not found"
              class="logo-img"
            />
          </span>
        </router-link>
        <router-link class="logo-text" to="/">Hi, I'm Boyang</router-link>
      </div>

      <!-- ===== Nav Items ===== -->
      <div
        class="collapse navbar-collapse justify-content-end"
        id="navbarToggler"
      >
        <ul class="navbar-nav mb-2 mb-lg-0">
          <!-- ===== Home Page ===== -->
          <li class="nav-item">
            <router-link
              class="nav-link"
              to="/"
              @click="homePageScrollTop()"
              :class="{
                active: this.$route.fullPath === '/',
              }"
              >Home</router-link
            >
          </li>

          <!-- ===== About ===== -->
          <!-- <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
          </li> -->

          <!-- ===== Experience ===== -->
          <li class="nav-item">
            <router-link class="nav-link" to="/experience"
              >Experience</router-link
            >
          </li>

          <!-- ===== Projects ===== -->
          <li class="nav-item">
            <router-link class="nav-link" to="/projects">
              Projects
            </router-link>
          </li>

          <!-- ===== Resume ===== -->
          <li class="nav-item">
            <a href="Boyang_Qian_Resume.pdf" target="_blank" class="nav-link"
              >Resume<i class="pdf-icon bi bi-file-earmark-pdf-fill"></i
            ></a>
          </li>

          <!-- ===== Contact ===== -->
          <!-- <li class="nav-item">
            <router-link class="nav-link" to="/contact"> Contact </router-link>
          </li> -->

          <!-- Language Changing -->
          <!-- <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="dropdownLangMenu"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                >lang(语言)
              </a>
              <ul class="dropdown-menu" aria-labelledby="dropdownLangMenu">
                <li
                  v-for="locale in $i18n.availableLocales"
                  :key="`locale-${locale}`"
                >
                  <a class="dropdown-item langBtn" @click="changeLang(locale)"
                    >中/英</a
                  >
                </li>
              </ul>
            </li> -->
        </ul>
      </div>

      <!-- ===== Hamburger Menu Button ===== -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarToggler"
        aria-controls="navbarToggler"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <!-- Menu Button Icon -->
        <i class="bi bi-list"></i>
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      currentPage: "",
    };
  },
  methods: {
    homePageScrollTop() {
      if (this.$route.path === "/") window.scrollTo(0, 0);
    },
    activeLication(id) {
      this.currentPage = id;
    },
  },
};
</script>

<style scoped>
/* Logo */
.logo-container {
  width: 3rem;
  height: 3rem;
  border-radius: 50px;
  overflow: hidden;
}

.logo-img {
  width: 100%;
  height: 100%;
  /* object-fit: cover;
  object-position: center; */
  display: block;
}

.logo-text {
  color: #333;
  font-size: 1.2rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* Nav Link */
.nav-link {
  display: inline-block;
  padding: 0 !important;
  margin-left: 1.1rem !important;
  margin-right: 1.1rem !important;
  font-size: 1.1rem;
  color: #333;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 700;
  position: relative;
}

.nav-link i {
  margin-left: 0.3rem;
}

.pdf-icon {
  color: #f40f02;
}

/* Nav Link Animation */
.nav-link:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 2.7px;
  bottom: -2.7px;
  left: 0;
  width: 0;
  background-color: #333;
  visibility: hidden;
  transition: all 0.3s ease-in-out 0s;
}

a:hover,
a.active {
  color: #333;
}

a:hover:before,
a.active:hover:before,
a.active:before {
  visibility: visible;
  width: 100%;
}
</style>
