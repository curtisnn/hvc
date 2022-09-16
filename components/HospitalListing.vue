<script>
export default {
  props: ["hospital", "query", "state"],
  data() {
    return {
      openDrawer: false,
    };
  },
  methods: {
    string_to_slug(str) {
      str = str.replace(/^\s+|\s+$/g, ""); // trim
      str = str.toLowerCase();

      // remove accents, swap ñ for n, etc
      var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
      var to = "aaaaeeeeiiiioooouuuunc------";
      for (var i = 0, l = from.length; i < l; i++) {
        str = str.replace(new RegExp(from.charAt(i), "g"), to.charAt(i));
      }

      str = str
        .replace(/[^a-z0-9 -]/g, "") // remove invalid chars
        .replace(/\s+/g, "-") // collapse whitespace and replace by -
        .replace(/-+/g, "-"); // collapse dashes

      return str;
    },
  },
};
</script>

<template>
  <nuxt-link
    :to="string_to_slug(hospital.name) + '?query=' + query + '&state=' + state"
    class="block hover:bg-gray-100"
  >
    <div>
      <div class="flex justify-between items-center px-4 py-2 sm:px-6">
        <div class="flex flex-1 items-center justify-between">
          <div class="min-w-0 flex-1 px-4 flex items-center justify-between">
            <div class="w-2/3 leading-none">
              <p class="truncate font-medium text-blue-800 text-lg">
                {{ hospital.name }}
                <span class="font-normal text-sm text-gray-500"
                  >– {{ hospital.size }} beds
                </span>
              </p>
              <p class="mt-1 flex items-center text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-4 h-4 text-blue-300 mr-0.5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                    clip-rule="evenodd"
                  />
                </svg>

                <span class="truncate text-gray-500 mt-0.5"
                  >{{ hospital.address }}, {{ hospital.city }},
                  {{ hospital.state }}</span
                >
              </p>
            </div>
            <div class="hidden md:flex w-1/3 leading-tight justify-end">
              <div class="w-credentialing">
                <p
                  v-if="hospital.credentialingProvider"
                  class="text-base text-gray-900 mt-1"
                >
                  <span class="text-base text-gray-400 mr-2 font-thin"
                    >credentialing provided by </span
                  ><br />
                  <span
                    :class="
                      hospital.credentialingProvider ==
                      'Vendormate Credentialing'
                        ? 'text-orange-500 font-semibold'
                        : 'text-gray-900 font-medium'
                    "
                  >
                    {{ hospital.credentialingProvider }}
                  </span>
                </p>
                <p class="text-xs text-gray-400" v-else>
                  credentialing provider unknown<br />
                  <nuxt-link to="/contact" class="text-base">
                    <span class="text-blue-600 underline">let us know who</span>
                  </nuxt-link>
                </p>
                <p class="mt-2 flex items-center text-sm text-gray-500"></p>
              </div>
            </div>
          </div>
        </div>
        <!-- <div>
       
        <svg
          class="h-5 w-5 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
            clip-rule="evenodd"
          />
        </svg>
      </div> -->
      </div>
    </div>
    <div v-if="openDrawer" class="bg-gray-200 py-4 px-10 text-gray-600">YO</div>
  </nuxt-link>
</template>

<style>
.w-credentialing {
  width: 13rem;
}
</style>
