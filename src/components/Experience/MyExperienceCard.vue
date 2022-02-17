<template>
  <div class="experience-card my-5">
    <div class="card shadow-lg p-0 p-sm-5" style="max-width: 780px">
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
          <div class="card-body py-3 px-5 px-xl-4 px-sm-5">
            <!-- Company Name -->
            <h5 class="section-title-sm">{{ i.companyName }}</h5>
            <!-- Title -->
            <p class="section-subtitle-sm fst-italic">{{ i.title }}</p>
            <!-- Duration -->
            <p class="section-subtitle-sm fst-italic">
              {{
                `${startMonth} ${startYear} ${
                  finishMonth && finishYear
                    ? "-" + " " + finishMonth + " " + finishYear
                    : "-" + " " + "Present"
                }`
              }}
            </p>
            <!-- Description -->
            <ul class="list-group list-group-flush mt-3">
              <li
                v-for="(description, index) in i.jobDescription"
                :key="index"
                class="description-text mb-3"
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
  name: "ExperienceCard",
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
p {
  margin-bottom: 0;
}

ul {
  list-style-type: none;
}

.card {
  border: none;
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
  color: #666;
  line-height: 1.7rem;
  font-size: 1.2rem;
}
</style>
