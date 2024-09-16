<script setup>
import img1 from '@/public/images/test.gif'

const items = ref([
    {
        title: "About me",
        des: "Deploy your new project in one-click.",
        tags: ['C#', 'Unity', 'PhotoShop', 'Vue3', 'Nuxt3'],
        imgUrl: img1,
        intro: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero rem sit soluta magni quod illum illo velit expedita unde iste. Veniam eius eos iste, a dolore rerum delectus hic at?",
        aliveUrl: "@/blogs/aliveDemo",
        SourceUrl: "@/blogs/SourceDemo",
        id: 1,
    }, {
        title: "Projects",
        des: "Deploy your new project in one-click.",
        tags: ['C#', 'Unity', 'PhotoShop', 'Vue3', 'Nuxt3'],
        imgUrl: img1,
        intro: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero rem sit soluta magni quod illum illo velit expedita unde iste. Veniam eius eos iste, a dolore rerum delectus hic at?",
        aliveUrl: "@/blogs/aliveDemo",
        SourceUrl: "@/blogs/SourceDemo",
        id: 1,
    }, {
        title: "Contact",
        des: "Deploy your new project in one-click.",
        tags: ['C#', 'Unity', 'PhotoShop', 'Vue3', 'Nuxt3'],
        imgUrl: img1,
        intro: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero rem sit soluta magni quod illum illo velit expedita unde iste. Veniam eius eos iste, a dolore rerum delectus hic at?",
        aliveUrl: "@/blogs/aliveDemo",
        SourceUrl: "@/blogs/SourceDemo",
        id: 1,
    }, {
        title: "More",
        des: "Deploy your new project in one-click.",
        tags: ['C#', 'Unity', 'PhotoShop', 'Vue3', 'Nuxt3'],
        imgUrl: img1,
        intro: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero rem sit soluta magni quod illum illo velit expedita unde iste. Veniam eius eos iste, a dolore rerum delectus hic at?",
        aliveUrl: "@/blogs/aliveDemo",
        SourceUrl: "@/blogs/SourceDemo",
        id: 1,
    }
])

const tagClass = {
    "C#": "text-yellow-600 border-solid border-2 border-yellow-600 rounded px-2",
    "Unity": "text-sky-600 border-solid border-2 border-sky-600 rounded px-2",
    "PhotoShop": "text-green-600 border-solid border-2 border-green-600 rounded px-2",
    "Vue3": "text-indigo-600 border-solid border-2 border-indigo-600 rounded px-2",
    "Nuxt3": "text-lime-600 border-solid border-2 border-lime-600 rounded px-2",
}

</script>

<template>
    <div class="w-full">
        <h2>Projects</h2>
        <div v-for="(item, index) in items" :key="index" class="card-box">
            <Card class="w-full max-w-3xl mt-4 mb-8 card-container">
                <div class="img-container">
                    <img :src="item.imgUrl" class="img" alt="image info" />
                </div>
                <div>
                    <CardHeader>
                        <CardTitle>{{ item.title }}</CardTitle>
                        <CardDescription>{{ item.des }}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div class="flex gap-2">
                            <template v-for="tag in item.tags" :key="tag">
                                <div :class="tagClass[tag]">{{ tag }}</div>
                            </template>
                        </div>
                        <p>{{ item.intro }}</p>
                    </CardContent>
                    <CardFooter class="flex gap-4 justify-between px-6 pb-6">
                        <NuxtLink :to="`/blogs/${item.id}`">
                            <Button variant="outline">
                                see more
                            </Button>
                        </NuxtLink>
                        <div>
                            <Button class="mr-4" variant="outline">Source Code</Button>
                            <Button>
                                See Alive
                            </Button>
                        </div>
                    </CardFooter>
                </div>
            </Card>
        </div>
    </div>
</template>

<style lang="css" scoped>
.card-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.card-container {
    display: flex;
}
.img-container {
  overflow: hidden;
  width: 100%;
  /* height: 100px; */
}

.img-container img {
  object-fit: cover;
  width: 100%;
  min-height: 100%;
}
@media screen and (max-width: 838px) {
    .card-container {
        display: block;
        max-width: 600px;
    }
}
@media screen and (min-width: 838px) {
    .card-container {
        display: flex;
    }
}
</style>