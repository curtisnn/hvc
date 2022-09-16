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
    <div class="relative mb-12 mx-auto lg:text-left">
      <NuxtPage />
    </div>
  </div>
</template>

<style>
.page-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
