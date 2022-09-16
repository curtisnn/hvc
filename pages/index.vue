<script>
import Navbar from "@/components/Navbar.vue";
import SectionHero from "@/components/SectionHero.vue";

export default {
  components: {
    Navbar,
    SectionHero,
  },
  setup() {
    return {};
  },
};
</script>

<template>
  <div>
    <SectionHero />
    <SectionResources />
  </div>
</template>

<style lang="scss" scoped></style>
