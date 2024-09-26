<template>
  <div class="flex flex-row group">
    <div
      class="w-[44px] h-[44px] mb-[20px] bg-light-blue rounded-full flex items-center justify-center"
    >
      <Image class="w-[22px] max-w-[22px]" :src="props.icon" />
      <!-- <SvgLocation 
        :isHover = "isHover" 
        :color = "" -->
      <!-- /> -->
    </div>

    <div class="pl-[20px] flex flex-col">
      <p class="text-[22px] text-dark-blue font-semibold">{{ label }}:</p>
      <p class="text-[16px] text-[#6182BA] mb-[20px]">{{ content }}</p>
    </div>
  </div>
</template>

<script setup>
const isHover = ref(false);
const props = defineProps({
  icon: "",
  label: String,
  content: String,
});
</script>

<style scoped></style>
