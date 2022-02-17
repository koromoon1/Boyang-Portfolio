<template>
  <img :src="imgUrl" :alt="'icon of ' + i.name" />
</template>

<script>
export default {
  name: "toolsBadgeImage",
  props: ["i"],
  data() {
    return {
      imgUrl: require(`../assets/svg/${this.i.iconFileName}-brands.svg`),
    };
  },
};
</script>

<style scoped>
img {
  width: 100%;
  height: 100%;
}
</style>
