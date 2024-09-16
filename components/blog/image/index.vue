<script setup>
const props = defineProps({
    image: [{
        url: String, 
        des: String
    }]
})
</script>

<template>
    <div class="blog-image lg:py-6 md:py-3 sm:py-1">
        <img :src="image.url" alt="logo">
        <p>{{ image.des }}</p>
    </div>
</template>

<style lang="css" scoped>
.blog-image {
    max-width: 800px;
}
</style>