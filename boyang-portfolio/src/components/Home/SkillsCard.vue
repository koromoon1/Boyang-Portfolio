<template>
  <div class="skill-card">
    <span>{{ i }}</span>
  </div>
</template>

<script>
export default {
  props: ["i"],
};
</script>

<style scoped>
.skill-card {
  display: inline-block;
  text-align: center;
  padding: 0.8rem;
  margin-bottom: 1.5rem;
  margin-right: 1.5rem;
  font-size: 1.3rem;
  background: #666;
  border-radius: 5px;
  font-weight: 400;
  color: #eee;
}
</style>
