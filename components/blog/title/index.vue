<script setup>
const props = defineProps({
    title: {
        title: String,
        date: String,
        image: String
    }
})
const backgroundStyle = computed(() => ({
  backgroundImage: `url(${props.title.image})`,
}))
</script>

<template>
    <header class="header-back" :style="backgroundStyle" >
        <div class="bg-neutral-50 title-back">
            <h2>{{ props.title.title }}</h2>
            <p class="italic">Created during {{ props.title.date }}</p>
        </div>
    </header>
</template>

<style lang="css" scoped>
.header-back {
    height: 600px;
}
.title-back {
    position: absolute;
    max-width: 480px;
    margin-top: 160px;
    padding: 12px 24px;
}
</style>