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

async function callMap(lati, lngi) {
  // const currPos = {
  //   lat: lat,
  //   lng: lng,
  // };
  await loader.load();
  map.value = new google.maps.Map(mapDiv.value, {
    center: {
      lat: lati,
      lng: lngi,
    },
    zoom: 10,
  });
}

const adress = computed(() => "6644 East Baywood Avenue, mesa, arizona");
onMounted(async () => {
  await callMap(33.4010924, -111.6884308);
});
</script>

<template>
  <div class="mt-5 max-w-5xl mx-auto">
    <nuxt-link
      :to="'states?query=' + query + '&state=' + state"
      class="mb-5 flex py-0.5 items-center px-2 bg-blue-400 text-white text-center w-36 rounded-full"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-4 h-4"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15.75 19.5L8.25 12l7.5-7.5"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-4 h-4 mr-2 -ml-2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15.75 19.5L8.25 12l7.5-7.5"
        />
      </svg>
      hospital list
    </nuxt-link>

    <ContentDoc v-slot="{ doc }">
      <div class="flex">
        <div ref="mapDiv" id="hvc-map" class="w-3/5 h-96"></div>
        <div class="w-2/5 pl-10 flex flex-col">
          <h1 class="text-3xl font-bold text-ghx-blue-900">
            {{ doc.title }}
          </h1>
          <div class="text-gray-600 mt-3">
            {{ doc.address }}, {{ doc.city }}, {{ doc.state }}
          </div>
          <div class="text-gray-600 mt-1">{{ doc.size }} beds</div>
          <div class="mt-5">
            <p
              v-if="doc.credentialingProvider"
              class="text-base text-gray-900 mt-1"
            >
              <span class="text-base text-gray-400 mr-2 font-thin"
                >credentialing provided by </span
              ><br />
              <span
                :class="
                  doc.credentialingProvider == 'Vendormate Credentialing'
                    ? 'text-orange-500 font-semibold'
                    : 'text-gray-900 font-medium'
                "
              >
                {{ doc.credentialingProvider }}
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
          <div
            v-if="doc.ratings"
            class="mt-3 bg-gray-100 border border-gray-200 px-6 py-4"
          >
            <ul>
              <li
                v-for="(rating, index) in doc.ratings"
                :key="index"
                class="flex"
              >
                <div class="w-3/5">
                  {{ rating.name }}
                </div>

                <div class="w-2/5">
                  <ul class="flex space-x-0.5 text-gray-600">
                    <li v-for="(star, index) in 5" :key="index">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        :fill="index < rating.value ? 'currentColor' : 'none'"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6 text-ghx-blue-500"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                      </svg>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </ContentDoc>
    <div class="mt-6 bg-gray-200 border border-gray-300 py-4 px-10">
      <div class="flex flex-wrap">
        <div class="w-full text-gray-400 text-lg pl-6">
          GHX authenticated user
        </div>
        <ul class="mt-4 text-gray-600 font-medium">
          <li class="flex items-center py-0.5">
            <span class="w-44"> Exchange Services </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5 ml-3 text-green-600 flex-1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </li>
          <li class="flex items-center py-0.5">
            <span class="w-44"> ePay </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5 ml-3 text-green-600 flex-1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </li>
          <li class="flex items-center py-0.5">
            <span class="w-44"> CDP Intergration </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5 ml-3 text-red-600 flex-1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </li>
          <li class="flex items-center py-0.5">
            <span class="w-44"> Explorer </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5 ml-3 text-red-600 flex-1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </li>
          <li class="flex items-center py-0.5">
            <span class="w-44"> Lumere </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5 ml-3 text-green-600 flex-1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </li>
          <li class="flex items-center py-0.5">
            <span class="w-44"> Data Connect </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5 ml-3 text-green-600 flex-1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </li>
          <li class="flex items-center py-0.5">
            <span class="w-44"> Vendormate </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5 ml-3 text-green-600 flex-1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
