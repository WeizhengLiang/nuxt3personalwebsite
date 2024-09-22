<script setup>

</script>

<template>
   <div class="formatted-text lg:py-6 md:py-3 sm:py-1">
        <slot></slot>
    </div>
</template>

<style lang="css" scoped>
.formatted-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  text-align: left;
}
@media screen and (min-width: 680px) {
  .formatted-text {
    width: 100%;
  }
}
@media screen and (max-width: 680px) {
  .formatted-text {
    width: 680px;
  }
}
</style>