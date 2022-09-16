<script>
export default {
  setup() {
    return {};
  },
};
</script>
<template>
  <nuxt-link to="/states">
    <button
      type="button"
      class="inline-flex items-center mt-6 rounded-sm bg-ghxGold-500 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-ghxGold-400"
    >
      Find a Hospital
      <!-- Heroicon name: mini/envelope -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5"
        />
      </svg>
    </button>
  </nuxt-link>
</template>

<style scoped>
.bg-ghxGold-500 {
  background-color: #f5bc3d;
}
.mt-8 {
  margin-top: 2rem !important;
}
</style>
