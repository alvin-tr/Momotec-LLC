<template>
  <div class="py-[60px] w-full flex justify-center">
    <div
      class="max-w-[1140px] flex flex-row w-full max-lg:px-[30px] max-md:flex-col"
    >
      <!-- 1 -->
      <div
        data-aos="fade-up-right"
        data-aos-duration="1000"
        data-aos-once="true"
        class="w-[50%] px-[15px] max-lg:flex max-lg:items-center max-md:w-full max-md:flex max-md:items-center max-md:justify-center max-md:min-w-[690px] max-xs:flex max-xs:items-center max-xs:min-w-[300px]"
      >
        <img
          class="max-lg:max-w-[410px] max-md:w-full max-md:max-w-[690px] max-xs:max-w-[375px]"
          src="/img/skills.png"
          alt=""
        />
      </div>

      <!-- 2 -->
      <div
        data-aos="fade-up-left"
        data-aos-duration="1000"
        data-aos-once="true"
        class="w-[50%] px-[15px] max-md:w-full max-md:py-[24px]"
      >
        <h3
          class="text-[32px] text-dark-blue mb-[8px] font-bold font-[Poppins] max-xs:text-[25px]"
        >
          Technologies we use
        </h3>
        <p class="text-[16px] mb-[16px] text-[#444444] italic">
          Here are some of the techmologies that we use in our project.
        </p>

        <CommonSectionTechUsePercentTage
          v-for="(item, index) in percent"
          :key="item.label"
          :label="item.label"
          :quantity="item.quantity"
          :aos-type="fade - right"
          :delay="index * 500"
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
