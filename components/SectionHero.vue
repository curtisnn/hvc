<script>
import ButtonMain from "@/components/ButtonMain.vue";
export default {
  components: {
    ButtonMain,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
<template>
  <div class="bg-gray-50">
    <div class="relative overflow-hidden">
      <div class="absolute inset-y-0 h-full w-full" aria-hidden="true">
        <div class="relative h-full">
          <img
            src="~/assets/images/HeroImage.png"
            alt="Avatar"
            class="object-cover w-full h-full"
          />
        </div>
      </div>

      <div class="relative">
        <div class="mx-auto max-w-7xl">
          <div class="text-left font-roboto w-1/2 p-20 space-y-4">
            <h6 class="text-xl tracking-tight text-gray-900">
              Hospital Vendor Credentialing
            </h6>
            <h3
              class="text-3xl tracking-tight text-gray-900 sm:text-4xl md:text-4xl"
            >
              Directory for reaching healthcare customers fast
            </h3>
            <p>
              Trying to keep up with which hospital uses which vendor
              credentialing program, who the right contacts are. Now in one
              place, you can find all of this information for your hospital
              customers and log right in.
            </p>
            <ButtonMain />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
