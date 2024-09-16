<script setup>
const items = ref([
    {
        title: "your github",
        path: "https://twitter.com/nuxt_js",
        icon: "uiw:github"
    }, {
        title: "your linkedin",
        path: "http:linkedin",
        icon: "mdi:linkedin"
    }, {
        title: "weizhengliang@gmail.com",
        path: "mailto:weizhengliang@gmail.com",
        icon: "line-md:email"
    }
])
</script>

<template>
    <div>
        <h2>Contact</h2>
        <p>Would you like to work with me? Awesome!</p>

        <div class="py-4">
            <div class="grid gap-y-2">
                <NuxtLink :to="item.path" v-for="item in items" :key="item.title"
                class="flex items-center gap-2 px-2 py-1 transition rounded cursor-pointer hover:bg-neutral-100">
                    <Icon size="20" :name="item.icon" color="black" />
                    <span>{{ item.title }}</span>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>