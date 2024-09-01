export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@nuxt/eslint',
    '@pinia/nuxt',
  ],

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui',
  },

  compatibilityDate: '2024-09-01',
});
