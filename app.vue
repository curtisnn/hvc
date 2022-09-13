<script>
import "@/assets/css/tailwind.css";

import Navbar from "./components/Navbar.vue";

export default {
  components: {
    Navbar,
  },
};
</script>

<template>
  <div>
    <Navbar />
    <NuxtPage />
  </div>
</template>
