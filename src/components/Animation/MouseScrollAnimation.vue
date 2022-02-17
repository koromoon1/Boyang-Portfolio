<template>
  <div class="mouse-container">
    <div class="mouse mb-1"></div>
    <!-- <div><span>Scroll Down</span></div> -->
  </div>
</template>

<script>
export default {
  name: "MouseScrollAnimation",
};
</script>

<style scoped>
/* Mouse Scroll Animation */
.mouse-container {
  position: absolute;
  bottom: 3%;
}

.mouse {
  width: 25px;
  height: 40px;
  border: 2px solid #eee;
  border-radius: 60px;
  position: relative;
  left: calc(50% - 12.5px);
}

.mouse::before {
  content: "";
  width: 5px;
  height: 5px;
  border: 0.1px solid #eee;
  border-radius: 50px;
  position: absolute;
  top: 7px;
  left: 50%;
  transform: translateX(-50%);
  background: #eee;
  opacity: 1;
  animation: wheel 1.3s infinite;
}

@keyframes wheel {
  to {
    opacity: 0;
    top: 27px;
  }
}
</style>
