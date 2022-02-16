<template>
  <div class="skill-card p-2 my-4 mx-5">
    <img :src="imgUrl" alt="icon of ${i.iconFileName}" />
  </div>
</template>

<script>
export default {
  name: "SkillsCard",
  props: ["i"],
  data() {
    return {
      imgUrl: require(`../../assets/svg/${this.i.iconFileName}-brands.svg`),
    };
  },
};
</script>

<style scoped>
.skill-card {
  width: 100px;
  height: 100px;
  display: inline-block;
  background: #ddd;
  border-radius: 5px;
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.15);
}

img {
  width: 100%;
  height: 100%;
  color: #eee;
}
</style>
