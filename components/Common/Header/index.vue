<template>
  <div
    :class="headerClass"
    class="h-[72.5px] bg-deep-blue flex items-center justify-center fixed top-0 w-full z-50 max-lg:px-[50px]"
  >
    <div
      class="max-w-[1140px] w-full items-center justify-between flex flex-row"
    >
      <a class="text-[30px] uppercase text-white font-[500]" href=""
        >momotec llc</a
      >

      <div class="w-[50%] flex flex-row justify-around items-center">
        <a
          href=""
          class="text-[15px] text-white hover:text-sky-blue font-normal font-sans max-md:hidden"
          >Home</a
        >
        <a
          href=""
          class="text-[15px] text-white hover:text-sky-blue font-normal max-md:hidden"
          >About</a
        >
        <a
          href=""
          class="text-[15px] text-white hover:text-sky-blue font-normal max-md:hidden"
          >Services</a
        >
        <a
          href=""
          class="text-[15px] text-white hover:text-sky-blue font-normal max-md:hidden"
          >Contact</a
        >
        <a
          href=""
          class="text-white text-[14px] py-[6px] px-[25px] border-[2px] rounded-[20px] border-sky-blue hover:bg-sky-blue transition duration-200 ease-in font-semibold max-md:mr-[-250px] max-md:py-[8px]"
          >Get Started</a
        >
      </div>

      <div class="hidden max-md:flex max-md:items-center max-md:justify-center">
        <UIcon class="text-white text-[30px]" name="mingcute:menu-fill" />
      </div>
    </div>
  </div>
</template>

<script setup>
const headerClass = ref("bg-transparent");
const handleScroll = () => {
  if (window.scrollY > 50) {
    headerClass.value =
      "bg-deep-blue bg-opacity-90 transition duration-200 ease-in";
  } else {
    headerClass.value = "bg-transparent transition duration-200 ease-in";
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.addEventListener("scroll", handleScroll);
});
</script>

<style lang="scss" scoped></style>
