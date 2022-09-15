import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({

	modules: [
        "@nuxtjs/algolia",
		'@nuxtjs/tailwindcss'
    ],
	
    algolia: {
        apiKey: "ba7574dc8421c397b97e80a09fb3b5f2",
        applicationId: "U0PRF4GLR6",
		instantSearch: {      
			theme: 'algolia'    
		}
    },
	build: {
		postcss: {
			postcssOptions: require("./postcss.config.js"),
		},
	},
	
	
});
