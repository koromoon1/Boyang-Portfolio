<template>
  <div id="header" class="">
    <nav class="navbar navbar-expand-lg navbar-light">
      <!-- ===== Logo Brand ===== -->
      <div class="container-fluid justify-content-start">
        <a class="navbar-brand" href="#">
          <span class="logo-container d-inline-block align-text-top">
            <img
              src="../assets/jpg/icon.jpg"
              alt="not found"
              class="logo-img"
            />
          </span>
        </a>
        <span>Hi, I'm Boyang</span>
      </div>

      <!-- ===== Nav Items ===== -->
      <div class="container-fluid">
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarToggler"
        >
          <ul class="navbar-nav me-5 mb-2 mb-lg-0">
            <!-- ===== Home Page ===== -->
            <li class="nav-item">
              <router-link class="nav-link" to="/"> Home </router-link>
            </li>

            <!-- ===== About ===== -->
            <li class="nav-item">
              <router-link class="nav-link" to="/about"> About </router-link>
            </li>
            <!-- ===== Projects ===== -->
            <li class="nav-item">
              <router-link class="nav-link" to="/projects">
                Projects
              </router-link>
            </li>

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
          class="navbar-toggler me-3"
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
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {};
  },
  methods: {
    // changeLang() {
    //   this.$i18n.locale = lang;
    // },
  },
};
</script>

<style scoped>
a:hover,
a:active,
a.active {
  color: #f1a80a !important;
  border-color: red;
  background-color: grey;
}

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
</style>
