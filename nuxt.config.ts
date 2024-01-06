import { resolve } from 'path'
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
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
  modules: ['nuxt-swiper', 'nuxt-graphql-client', [
    'yandex-metrika-module-nuxt3',
    {
      id: '95761109',
      webvisor: true,
    }
  ], "@nuxt/image", '@nuxtjs/apollo'],
  runtimeConfig: {
    public: {
      GQL_HOST: 'https://indaparts.ru/graphql'
    }
  },

  apollo: {
    clients: {
      default: {
        httpEndpoint: 'https://indaparts.ru/graphql',
        useGETForQueries: true
      }
    },
  },
  app: {
    head: {
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.ico"
        }
      ]
    }
  }

})