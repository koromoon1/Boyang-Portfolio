<template>
  <div class="experience-card">
    <div
      class="card mb-5 shadow-lg p-3 ps-4"
      style="max-width: 780px; width: 50rem"
    >
      <div class="row g-0">
        <!-- Logo -->
        <div class="col-md-4 img-container">
          <span class="helper"></span>
          <img
            :src="i.logoUrl"
            :alt="`Company Logo of ${i.logoName}`"
            class="rounded-start my-auto"
          />
        </div>
        <!-- End of Logo -->

        <!-- Details -->
        <div class="col-md-8">
          <div class="card-body">
            <!-- Company Name -->
            <h5 class="card-title">{{ i.companyName }}</h5>
            <!-- Title -->
            <h6 class="card-subtitle mb-2 text-muted">{{ i.title }}</h6>
            <!-- Duration -->
            <h6 class="card-subtitle mb-2 text-muted">
              {{
                `${startMonth} ${startYear} ${
                  finishMonth && finishYear
                    ? "-" + " " + finishMonth + " " + finishYear
                    : "-" + " " + "Present"
                }`
              }}
            </h6>
            <!-- Description -->
            <ul class="list-group list-group-flush mt-3">
              <li
                v-for="(description, index) in i.jobDescription"
                :key="index"
                class="description-text"
              >
                {{ "-" + " " + description }}
              </li>
            </ul>
          </div>
        </div>
        <!-- End of Details -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["i"],
  data() {
    return {
      startMonth: this.i.startMonth,
      startYear: this.i.startYear,
      finishMonth: this.i.finishMonth,
      finishYear: this.i.finishYear,
    };
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
}

h5 {
  color: #333;
  font-weight: 700;
  font-size: 1.5rem;
}

h6 {
  font-size: 1.2rem;
}

.img-container {
  text-align: center;
}

.helper {
  display: inline-block;
  height: 100%;
  vertical-align: middle;
}

.description-text {
  color: #333;
  line-height: 1.6rem;
  font-size: 1.2rem;
}
</style>
