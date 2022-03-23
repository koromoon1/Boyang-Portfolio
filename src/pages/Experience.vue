<template>
  <div id="experiencePage">
    <MyExperience id="myExperience" class="mb-5" />

    <Skills id="skills" class="my-5 pb-5" />
  </div>
</template>

<script>
import MyExperience from "../components/Experience/MyExperience.vue";
import Skills from "../components/Experience/Skills.vue";
export default {
  name: "About",
  components: {
    MyExperience,
    Skills,
  },
};
</script>
