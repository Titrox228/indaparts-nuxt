// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path'
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  // devServer: {
  //   port: 8000, // default: 3000     
  //   host: '192.168.1.106', // default: localhost   
  // },
  'graphql-client': {
    preferGETQueries: true
  },
  devtools: { enabled: true },
  alias: {
    '@': resolve(__dirname, '/')
  },
  css: [
    '~/assets/main.css'
  ],
  ssr: true,
  modules: [
    'nuxt-swiper',
    'nuxt-graphql-client'
  ],
  runtimeConfig: {
    public: {
      GQL_HOST: 'https://indaparts.ru/graphql'
    }
  },
  // nitro: { // was required to add this for the nuxt/simple-sitemap module
  //   prerender: {
  //     crawlLinks: true,
  //     routes: [
  //       '/',
  //       '/404.html' // was told online to try this, but didn't work
  //     ]
  //   }
  // }

})
