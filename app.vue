<script>
import Navbar from "./components/Navbar.vue";

export default {
  components: {
    Navbar,
  },
};
</script>

<template>
  <div class="bg-gray-50">
    <Navbar />
    <div class="relative mb-12 mx-auto w-full max-w-7xl lg:text-left">
      <NuxtPage />
    </div>
  </div>
</template>
