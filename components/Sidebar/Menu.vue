<script setup>
const items = ref([
    {
        title: "About me",
        path: "/about-me",
        icon: "line-md:account"
    }, {
        title: "Projects",
        path: "/projects",
        icon: "ri:dashboard-line"
    }, {
        title: "Contact",
        path: "/contact",
        icon: "line-md:email"
    }
])
</script>

<template>
    <div class="fixed">
        <NuxtLink :href="'/'">
            <header class="flex items-center gap-2 p-4 hover:scale-[101%] transition cursor-pointer">
                <Logo />
                <div class="font-bold title-text">Weizheng Liang</div>
            </header>
        </NuxtLink>
        
        <div class="px-4 grow">
            <div class="grid gap-2">
                <NuxtLink :href="item.path" v-for="item in items" :key="item.title"
                class="flex items-center gap-2 px-2 py-1 transition rounded cursor-pointer hover:bg-neutral-100">
                    <Icon size="20" :name="item.icon" color="black" />
                    <span>{{ item.title }}</span>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>