<template>
  <!-- ==== 这是一个完全没有必要的功能 :) ==== -->

  <!-- Social Links -->
  <div
    :class="[
      {
        heroSocial: this.sideBarIsLight,
      },
      {
        heroSocialDark: !this.sideBarIsLight || !pageIsHome,
      },
    ]"
  >
    <div class="socialIconContainer">
      <a
        :class="[
          {
            socialIconLink: this.sideBarIsLight,
          },
          {
            socialIconLinkDark: !this.sideBarIsLight,
          },
        ]"
        target="_blank"
        href="https://www.linkedin.com/in/boyang-qian/"
      >
        <img
          src="../assets/logo/linkedin-ico.png"
          alt="icon"
          class="socialIcon"
        />
        <!-- <i class="bi biLinkedin"></i> -->
      </a>
    </div>
    <div class="socialIconContainer">
      <a
        :class="[
          {
            socialIconLink: this.sideBarIsLight,
          },
          {
            socialIconLinkDark: !this.sideBarIsLight,
          },
        ]"
        target="_blank"
        href="https://github.com/koromoon1"
      >
        <img
          src="../assets/logo/github-ico.png"
          alt="icon"
          class="socialIcon"
        />
        <!-- <i class="bi bi-github"></i> -->
      </a>
    </div>
    <div class="socialIconContainer">
      <a
        :class="[
          {
            socialIconLink: this.sideBarIsLight,
          },
          {
            socialIconLinkDark: !this.sideBarIsLight,
          },
        ]"
        target="_blank"
        href="https://twitter.com/BoyangQian"
      >
        <img
          src="../assets/logo/twitter-ico.png"
          alt="icon"
          class="socialIcon"
        />
        <!-- <i class="bi bi-twitter"></i> -->
      </a>
    </div>
    <div class="socialIconContainer">
      <a
        :class="[
          {
            socialIconLink: this.sideBarIsLight,
          },
          {
            socialIconLinkDark: !this.sideBarIsLight,
          },
        ]"
        target="_blank"
        href="mailto:eqboyang@gmail.com"
      >
        <img src="../assets/logo/email-ico.png" alt="icon" class="socialIcon" />
        <!-- <i class="bi bi-envelope-fill"></i> -->
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: ["page"],
  data() {
    return {
      windowHeight: window.innerHeight,
      sideBarIsLight: true,
      scrollValue: 0,
      pageIsHome: this.page === "home",
    };
  },
  watch: {
    // Update window height when resize
    windowHeight(newHeight) {
      if (this.page === "home") {
        this.windowHeight = newHeight;
        console.log("New window height = " + this.windowHeight);
      }
    },
    // Update scroll value when window scroll
    scrollValue(newValue) {
      if (this.page === "home") {
        if (newValue > this.windowHeight / 2) {
          this.sideBarIsLight = false;
          // console.log("this.sideBarIsLight = " + this.sideBarIsLight);
        } else {
          this.sideBarIsLight = true;
          // console.log("this.sideBarIsLight = " + this.sideBarIsLight);
        }
      }
    },
  },
  mounted() {
    // Get Window Height
    if (this.page === "home") {
      this.$nextTick(() => {
        window.addEventListener("resize", this.onResize);
      });
      // Get Scroll Y
      window.addEventListener("scroll", () => {
        let scrollValue = document.documentElement.scrollTop;
        this.scrollValue = scrollValue;
        // console.log(this.scrollValue);
      });
    }
  },
  methods: {
    onResize() {
      this.windowHeight = window.innerHeight;
    },
  },
};
</script>

<style scoped>
/* Social Link */
.heroSocial {
  position: fixed;
  top: 45%;
  left: 0;
  border: 2px solid #fff;
}
.heroSocialDark {
  position: fixed;
  top: 45%;
  left: 0;
  border: 2px solid #fff;
  background-color: #333;
}

.socialIconContainer {
  width: 2.6rem;
}

.socialIconLink {
  font-size: 1.5rem;
  line-height: 1;
  width: 100%;
  display: block;
  border-bottom: 2px solid #fff;
  transition: background-color 0.3s;
  padding: 0.55rem;
}
.socialIconLinkDark {
  font-size: 1.5rem;
  line-height: 1;
  width: 100%;
  display: block;
  border-bottom: 2px solid #fff;
  transition: background-color 0.3s;
  padding: 0.55rem;
}

.socialIconLink:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.socialIconLinkDark:hover {
  background-color: rgba(51, 51, 51, 0.1);
}

.socialIconContainer:last-child a {
  border-bottom: none;
}

.socialIcon {
  width: 100%;
}
</style>
