export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', 'shadcn-nuxt', "@nuxt/icon"],

  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  },

  icon: {
    serverBundle: {
      collections: ['uil', 'mdi'] // <!--- this
    }
  },

  compatibilityDate: '2024-09-17',
  plugins: [
    '~/plugins/mermaid.js',
    { src: '~/plugins/prism.js', mode: 'client' }
  ],

  css: [
    '@/components/ui/code-block/styles.css',
    'prismjs/themes/prism-tomorrow.css'
  ],
})