<script setup lang="ts">
</script>

<template>
<div class="">
    <div class="bg-white p-4 rounded-lg h-[90vh]">
      <div class="flex justify-between mb-4">
        <h2>Resume</h2>
        <NuxtLink to="/">
          <Button variant="ghost">
            <Icon size="20" name="stash:arrow-reply-solid" color="black" />
          </Button>
        </NuxtLink>
      </div>
      <iframe
        :src="'/weizheng_liang_resume.pdf'"
        class="w-full h-full"
        type="application/pdf"
      />
    </div>
  </div>
</template>