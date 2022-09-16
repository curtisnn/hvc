<script setup>
/* esling-disable no-undef */
import { computed, ref, onMounted } from "vue";

import { Loader } from "@googlemaps/js-api-loader";
import axios from "axios";

const route = useRoute();
const query = ref(route.query.query);
const state = ref(route.query.state);

// const googleMapsApiKey = ref(process.env.GOOGLE_MAPS_API_KEY);
const googleMapsApiKey = ref("AIzaSyBFMT3msL8vjYdZ96iSumDYpHyhWyq-OjQ");

const mapDiv = ref(null);

let map = ref(null);
let marker = ref(null);
const latitude = ref(null);
const longitude = ref(null);

const loader = new Loader({
  apiKey: googleMapsApiKey.value,
});

// axios
//   .get(
//     "https://maps.googleapis.com/maps/api/geocode/json?address=" +
//       address +
//       "a&key=" +
//       googleMapsApiKey.value
//   )
//   .then((response) => response.json())
//   .then((data) => {
//     latitude.value = data.results.geometry.location.lat;
//     longitude.value = data.results.geometry.location.lng;
//     console.log({ latitude, longitude });
//   });

// getCoordinates("6644 East Baywood Avenue, mesa, arizona")

const currPos = computed(() => ({
  lat: 33.4010924,
  lng: -111.6884308,
}));
const adress = computed(() => "6644 East Baywood Avenue, mesa, arizona");
onMounted(async () => {
  // await axios
  //   .get(
  //     "https://maps.googleapis.com/maps/api/geocode/json?address=6644&20East&20Baywood&20Avenue,&20mesa,&20arizona&key=" +
  //       googleMapsApiKey.value
  //   )
  //   .then((response) => response.json())
  //   .then((data) => {
  //     latitude.value = data.results.geometry.location.lat;
  //     longitude.value = data.results.geometry.location.lng;
  //     console.log({ latitude, longitude });
  //   });
  await loader.load();
  map.value = new google.maps.Map(mapDiv.value, {
    center: currPos.value,
    zoom: 10,
  });
});
</script>

<template>
  <div class="mt-5 max-w-5xl mx-auto">
    <nuxt-link :to="'states?query=' + query + '&state=' + state" class="mb-5">
      hospital list
    </nuxt-link>

    <ContentDoc v-slot="{ doc }">
      <div class="flex">
        <div ref="mapDiv" id="hvc-map" class="w-2/3 h-96"></div>
        <div class="w-1/3 px-10">
          <h1 class="text-2xl">{{ doc.title }}</h1>
        </div>
      </div>

      <ContentRenderer :value="doc" />
    </ContentDoc>
  </div>
</template>
