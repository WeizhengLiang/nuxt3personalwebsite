import { defineNuxtPlugin } from '#app'
import VueMermaidString from 'vue-mermaid-string'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueMermaidString)
})