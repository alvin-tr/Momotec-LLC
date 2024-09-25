<template>
  <div class="py-[60px] w-full flex justify-center">
    <div class="max-w-[1140px] flex flex-row">
      <!-- 1 -->
      <div class="w-[50%] px-[15px]">
        <img src="/img/skills.png" alt="" />
      </div>
      <!-- 2 -->
      <div class="w-[50%] px-[15px]">
        <h3
          class="text-[32px] text-light-blue mb-[8px] font-bold font-[Poppins]"
        >
          Technologies we use
        </h3>
        <p class="text-[16px] mb-[16px] text-[#444444] italic">
          Here are some of the techmologies that we use in our project.
        </p>

        <CommonSectionTechUsePercentTage
          v-for="item in percent"
          :key="item.label"
          :label="item.label"
          :quantity="item.quantity"
        >
        </CommonSectionTechUsePercentTage>
      </div>
    </div>
  </div>
</template>

<script setup>
const percent = [
  {
    label: "angular 16+",
    quantity: "75%",
  },
  {
    label: "nodejs",
    quantity: "60%",
  },
  {
    label: "flutter",
    quantity: "35%",
  },
  {
    label: "javascript",
    quantity: "75%",
  },
  {
    label: "photoshop",
    quantity: "55%",
  },
  {
    label: "html",
    quantity: "100%",
  },
  {
    label: "css",
    quantity: "90%",
  },
];
</script>

<style scoped></style>
