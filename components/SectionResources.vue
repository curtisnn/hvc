<script>
export default {
  setup() {
    const resources = ref([
      {
        image: "",
        title: "Background Check",
        text: "Need background checks to get compliant?",
        linkText: "Access Now",
        link: "",
      },
      {
        image: "",
        title: "Training",
        text: "Need training certificates to get compliant?",
        linkText: "Access Now",
        link: "",
      },
      {
        image: "",
        title: "N95 Fitting",
        text: "Need N95 fitting to get compliant?",
        linkText: "Access Now",
        link: "",
      },
      {
        image: "",
        title: "Summit",
        text: "Denied Hospital access means lost sales opportunities and lost sales opportunities leads to lost revenue. Regardless of the size of your company, Vendormate has the right access plan for you.",
        linkText: "Access Now",
        link: "",
      },
    ]);
    return { resources };
  },
};
</script>
<template>
  <div class="max-w-4xl m-auto pb-20">
    <div class="text-center p-8 text-2xl">
      Take advantage of these resources
    </div>
    <div class="space-y-4">
      <div
        v-for="resource in resources"
        :key="resource.title"
        class="bg-ghx-blue p-2"
      >
        <div class="">
          <div class="grid grid-cols-2">
            <div class="w-full">
              <img
                class="object-cover w-full h-48"
                src="https://images.unsplash.com/photo-1502581827181-9cf3c3ee0106?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=420&amp;q=80"
                alt="Flower and sky"
              />
            </div>
            <div class="bg-white space-y-4 p-4">
              <h6 class="font-bold">
                {{ resource.title }}
              </h6>
              <p>{{ resource.text }}</p>
              <ButtonMain :title="resource.linkText" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
