<script setup lang="ts">
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import AboutMe from './about-me.vue';
import Introduction from './introduction.vue';
import Projects from './projects.vue';
import Contact from './contact.vue';
</script>

<template>
    <div class="grid w-full h-screen gap-8">
        <header class="flex items-start justify-between">
            <div class="grow">
                <p class="title-text">Hi, welcome to <span class="font-[800] text-neutral-800">Weizheng Liang</span>'s portfolio website!</p>
            </div>
            <!-- <div class="w-[120px] h-[36px] bg-neutral-200"></div> -->
        </header>
        <main class="grid gap-2">
            <Introduction />
        </main>
        <section>
            <Projects />
        </section>
        <footer>
            <Contact />
        </footer>
    </div>
</template>