<script setup>
const props = defineProps({
    items: [{
        type: String, 
        text: Array
    }],
    intro: String
})
</script>

<template>
     <div class="introduction grid grid-cols-4 gap-2 my-8">
        <div class="lg:col-span-1 md:col-span-2 sm:col-span-4 grid grid-cols-2 gap-2" >
            <div v-for="item in props.items">
                <div class="font-black">
                    {{ item.type }}
                </div>
                <div>
                    <template v-for="i in item.text">
                        <p>
                            {{ i }}
                        </p>
                    </template>
                </div>
            </div>            
        </div>
        
        <div class="lg:col-span-3 md:col-span-2 sm:col-span-4">
            {{ props.intro }}
        </div>
    </div>
</template>