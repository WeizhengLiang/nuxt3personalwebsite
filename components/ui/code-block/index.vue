<template>
  <div class="code-block rounded-lg overflow-hidden border border-gray-200">
    <div class="code-header bg-gray-100 px-4 py-2 flex justify-between items-center">
      <span class="text-sm font-medium text-gray-700">{{ title }}</span>
      <div class="flex gap-2">
        <span class="text-xs text-gray-500">{{ language }}</span>
      </div>
    </div>
    <div class="code-content bg-white">
      <pre class="!m-0 p-4 overflow-x-auto max-h-[400px] overflow-y-auto">
        <code :class="`language-${language}`" v-html="highlightedCode"></code>
      </pre>
    </div>
  </div>
</template>

<style scoped>
.code-block {
  margin: 1rem 0;
  background-color: white;
}

.code-content pre {
  /* 自定义滚动条样式 */
  scrollbar-width: thin;
  scrollbar-color: #cbd5e1 transparent;
}

.code-content pre::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

.code-content pre::-webkit-scrollbar-track {
  background: transparent;
}

.code-content pre::-webkit-scrollbar-thumb {
  background-color: #cbd5e1;
  border-radius: 4px;
}

/* 覆盖 highlight.js 的默认样式 */
:deep(pre code.hljs) {
  background-color: white !important;
  color: #374151 !important;
  padding: 0;
}

:deep(.hljs-keyword) { color: #7c3aed !important; }
:deep(.hljs-string) { color: #059669 !important; }
:deep(.hljs-comment) { color: #6b7280 !important; }
:deep(.hljs-function) { color: #2563eb !important; }
:deep(.hljs-number) { color: #db2777 !important; }
:deep(.hljs-title) { color: #0369a1 !important; }
</style>

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

// 添加 highlight.js
import hljs from 'highlight.js'

// 计算属性：高亮处理后的代码
const highlightedCode = computed(() => {
  if (!props.code) return ''
  
  try {
    const result = hljs.highlight(props.code, {
      language: props.language
    })
    return result.value
  } catch (e) {
    console.error('代码高亮处理失败:', e)
    return props.code
  }
})
</script>