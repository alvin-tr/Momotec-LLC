<template>
  <div class="flex flex-col mb-[15px]">
    <div class="flex flex-row w-full justify-between mb-[10px]">
      <p class="text-[12px] text-light-blue uppercase font-semibold">
        {{ label }}
      </p>
      <p class="text-[12px] text-light-blue">{{ quantity }}</p>
    </div>
    <!-- thanh -->
    <div class="w-full h-[10px] bg-[#E8EDF5]">
      <div :style="{ width: quantity }" class="h-[10px] bg-light-blue"></div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  label: String,
  quantity: String,
});
</script>

<style scoped></style>
