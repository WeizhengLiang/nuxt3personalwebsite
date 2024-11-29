<script setup>
import polyspell_img from '@/public/images/PolySpell/triangle.png'
import dungball_img from '@/public/images/DungBallDomination/mainmenu.png'
import MCS_img from '@/public/images/MCS/MCS_003.gif'

const items = ref([
    {
        title: "PolySpell",
        des: "Survive and Spell",
        tags: ['C#', 'Unity', 'PhotoShop'],
        imgUrl: polyspell_img,
        intro: "Dive into a world where your creativity and strategy shape the outcome, and every decision leads to a new adventure.",
        aliveUrl: "https://play.unity.com/en/games/1e487e88-1290-4639-9562-490eca0f9a66/polyspell-v01",
        SourceUrl: "https://github.com/WeizhengLiang/PolySpell",
        id: 2,
    }, {
        title: "Dungball Domination",
        des: "A Game Jam Adventure",
        tags: ['C#', 'Unity'],
        imgUrl: dungball_img,
        intro: "After your beloved dung ball being trampled by a farmer, your mission is to contaminate the farm to take revenge on the farmer!",
        aliveUrl: "https://ldjam.com/events/ludum-dare/56/dungball-domination",
        SourceUrl: "https://github.com/minnnpan/ShiKeLang",
        id: 3,
    }, {
        title: "Melee Combat System",
        des: "A modular combat framework for fighting games",
        tags: ['C#', 'Unity'],
        imgUrl: MCS_img,
        intro: "A Unity-based combat framework that demonstrates core mechanics of modern action games, featuring combo systems, weapon switching, and animation-driven gameplay.",
        aliveUrl: "https://github.com/WeizhengLiang/melee-combat-system/releases/tag/v0.1",
        SourceUrl: "https://github.com/WeizhengLiang/melee-combat-system/tree/main",
        id: 4,
    }, {
        title: "More",
        des: "Deploy your new project in one-click.",
        tags: ['C#', 'Unity', 'PhotoShop', 'Vue3', 'Nuxt3'],
        imgUrl: polyspell_img,
        intro: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero rem sit soluta magni quod illum illo velit expedita unde iste. Veniam eius eos iste, a dolore rerum delectus hic at?",
        aliveUrl: "",
        SourceUrl: "",
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
                            <a :href="item.SourceUrl" target="_blank" rel="noopener noreferrer">
                                <Button class="mr-4" variant="outline">Source Code</Button>
                            </a>
                            <a :href="item.aliveUrl" target="_blank" rel="noopener noreferrer">
                                <Button>
                                    See Alive
                                </Button>
                            </a>
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