<template>
  <div class="home">
    <IntroView />
    <Featured />
    <WhyUs />
  </div>
</template>

<script>
import Featured from "@/components/FeaturedProjects.vue";
import WhyUs from "@/components/WhyUs.vue";
import IntroView from "@/components/IntroView.vue";
export default {
  name: "HomeView",
  components: {
    WhyUs,
    Featured,
    IntroView,
  },
};
</script>
