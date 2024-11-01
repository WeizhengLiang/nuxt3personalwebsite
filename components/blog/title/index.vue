<script setup>
const props = defineProps({
  title: {
    type: Object,
    required: true,
    default: () => ({
      title: '',
      date: '',
      image: '',
      imageStyle: {}
    })
  }
})

const backgroundStyle = computed(() => ({
  backgroundImage: `url(${props.title.image})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  aspectRatio: '16/9',
  width: '100%',
  maxHeight: '600px',
  ...props.title.imageStyle
}))
</script>

<template>
  <header class="header-back relative" :style="backgroundStyle">
    <div class="title-back">
      <h2 class="text-3xl font-bold">{{ props.title.title }}</h2>
      <p class="italic">Created during {{ props.title.date }}</p>
    </div>
  </header>
</template>

<style lang="css" scoped>
.header-back {
  height: 600px;
  background-repeat: no-repeat;
}

.title-back {
  position: absolute;
  max-width: 480px;
  margin-top: 160px;
  padding: 12px 24px;
  background-color: rgb(250, 250, 250);
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
</style>