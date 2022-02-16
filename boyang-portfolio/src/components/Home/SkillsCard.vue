<template>
  <div class="skill-card p-2 m-3">
    <img :src="imgUrl" alt="icon of ${i.iconFileName}" />
  </div>
</template>

<script>
export default {
  name: "SkillsCard",
  props: ["i"],
  data() {
    return {
      imgUrl: require(`../../assets/svg/nox/${this.i.iconFileName}-brands.svg`),
    };
  },
};
</script>

<style scoped>
.skill-card {
  width: 50px;
  height: 50px;
  display: inline-block;
  /* padding: 0.5rem;
  margin-bottom: 1.5rem;
  margin-right: 1.5rem; */
  background: #eee;
  border-radius: 5px;
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.15);
}

img {
  width: 100%;
  height: 100%;
  color: #eee;
}
</style>
