<template>
  <div
    class="w-full bg-white py-[60px] flex items-center justify-center max-lg:px-[30px]"
  >
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      class="max-w-[1140px] w-full"
    >
      <div
        class="w-full mb-[30px] flex flex-col items-center justify-center relative"
      >
        <p
          class="text-[#37517E] text-[32px] uppercase font-bold relative mb-[20px]"
        >
          about us
        </p>

        <div
          class="h-[1px] w-[130px] bg-[#dadada] flex items-center justify-center"
        >
          <div class="relative h-[2px] w-[35%] bg-sky-blue top-[-1px]"></div>
        </div>
      </div>

      <!-- des -->
      <div class="flex flex-row">
        <!-- 1 -->
        <div
          v-for="item in des"
          :key="item.title"
          class="max-w-[50%] px-[15px]"
        >
          <p
            class="text-[24px] text-[#444444] mb-[8px] leading-[28.8px] font-medium"
          >
            {{ item.title }}
          </p>
          <div class="flex flex-col">
            <div
              v-for="itemdes in item.description"
              :key="itemdes"
              class="flex flex-row items-center mt-[10px]"
            >
              <!-- Chỉ hiển thị ảnh icon nếu item.icon tồn tại -->
              <img
                v-if="item.icon"
                :src="item.icon"
                class="w-[20px] h-[20px] mr-[10px]"
                alt="Icon"
              />
              <p class="text-[16px] text-[#444444] break-keep">
                {{ itemdes }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const des = [
  {
    title: "Our Vision",
    description: [
      "At Momotec LLC, our vision is to empower businesses in the digital age by providing innovative software solutions, expert consultancy, and effective digital marketing services. We strive to be the trusted   increase profits, and thrive in the ever-evolving digital landscape. With our commitment to excellence and customer satisfaction, we aim to be the go-to choice for businesses seeking customized software solutions and  Together, let's transform your business and unlock its fullpotential in the digital world.",
    ],
  },
  {
    title: "Our Mission",
    icon: "/icons/check-double-line.svg",
    description: [
      "Transforming your business with innovative solutions and expert guidance.",
      "Providing a center of excellence to help our employees level up.",
      "Provide excellent state-of-the-art solutions that will fulfil the needs of our customer",
    ],
  },
];
</script>

<style lang="scss" scoped></style>
