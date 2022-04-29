<template>
  <div class="home">
    <Featured />
    <WhyUs />
  </div>
</template>

<script>
import Featured from "@/components/FeaturedProjects.vue";
import WhyUs from "@/components/WhyUs.vue";
export default {
  name: "HomeView",
  components: {
    WhyUs,
    Featured,
  },
};
</script>
