<template>
  <div class="skill-card p-2 my-4 mx-5">
    <ToolsBadgeImage :i="i" />
  </div>
</template>

<script>
import ToolsBadgeImage from "../ToolsBadgeImage.vue";

export default {
  name: "SkillsCard",
  props: ["i"],
  components: { ToolsBadgeImage },
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
  transition: transform 0.3s;
}

.skill-card:hover {
  transform: translateY(-3px);
}
</style>
