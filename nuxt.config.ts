// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ['@/assets/scss/main.scss'],
  app: {
    head: {
      title: 'Paralax',
      htmlAttrs: {
        lang: 'ru',
      },
      meta: [
        { charset: 'utf-8' },
        {
          name: 'Paralax',
          content: 'width=device-width, initial-scale=1',
        },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/logo.png' }],
    },
  },
  build: {
    transpile: ["gsap"],
  },
})
