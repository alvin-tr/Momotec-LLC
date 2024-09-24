// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxt/ui'],
  app: {
    head: {
      title: 'MOMOTEC LLC',
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap',
        },
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/img/momo-tech-logo.png',
        },
      ],
    },
  },
  css: ['~/assets/css/styles.css'],


})