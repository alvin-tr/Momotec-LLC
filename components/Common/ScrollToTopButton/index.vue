<template>
  <div
    class="fixed bottom-5 right-5 w-[40px] h-[40px] bg-sky-blue rounded-full flex items-center justify-center"
    @click="toTop"
  >
    <UIcon
      class="text-white text-[30px] font-[600]"
      name="material-symbols-light:arrow-upward-alt"
    />
    <!-- <img class="w-[24px]" src="/icons/arrow-top.svg" alt="" /> -->
  </div>
</template>

<script setup>
const toTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
</script>

<style lang="scss" scoped></style>
