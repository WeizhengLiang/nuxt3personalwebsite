<template>
    <div class="code-block">
      <div class="code-header flex justify-between items-center">
        <span class="text-sm font-medium">{{ title }}</span>
        <div class="flex gap-2">
          <span class="text-xs text-gray-400">{{ language }}</span>
        </div>
      </div>
      <pre class="!m-0"><code :class="`language-${language}`" v-html="highlightedCode"></code></pre>
    </div>
  </template>
  
  <script setup lang="ts">
  import { computed, onMounted } from 'vue'
  
  const props = defineProps({
    code: {
      type: String,
      required: true
    },
    language: {
      type: String,
      default: 'csharp'
    },
    title: {
      type: String,
      required: true
    }
  })
  </script>