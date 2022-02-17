<template>
  <div class="tools-badge-wall">
    <div class="badge-list d-flex justify-content-start">
      <div class="badge-item mx-3" v-for="tech in techStack" :key="tech.id">
        <!-- {{ tech.name }} -->
        <ToolsBadgeImage :i="tech" />
      </div>
    </div>
  </div>
</template>

<script>
import ToolsBadgeImage from "../ToolsBadgeImage.vue";

export default {
  name: "ToolsBadgeWall",
  props: ["techStack"],
  components: { ToolsBadgeImage },
};
</script>

<style scoped>
.badge-item {
  width: 70px;
  height: 70px;
  display: inline-block;
  background: #ddd;
  padding: 0.3rem;
  border-radius: 5px;
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.15);
}
</style>
