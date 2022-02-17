<template>
  <div class="tools-badge-wall">
    <div
      class="badge-list d-flex justify-content-center justify-content-lg-start"
    >
      <div
        class="badge-item p-2 mx-2 mx-sm-3"
        v-for="tech in techStack"
        :key="tech.id"
      >
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
  border-radius: 5px;
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.15);
}
</style>
