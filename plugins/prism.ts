import Prism from 'prismjs'

// 导入 C# 语言支持
import 'prismjs/components/prism-csharp'

// 如果需要其他语言支持，也可以在这里导入
// import 'prismjs/components/prism-javascript'
// import 'prismjs/components/prism-typescript'

export default defineNuxtPlugin(() => {
  return {
    provide: {
      prism: Prism
    }
  }
})