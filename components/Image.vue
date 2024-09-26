<template>
  <img class="w-full h-auto object-contain" :src="props.src" />
</template>

<script setup>
const props = defineProps({ src: String });
</script>

<style lang="scss" scoped></style>
