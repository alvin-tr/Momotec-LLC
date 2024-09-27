<template>
  <div
    class="bg-dark-blue w-full h-[80vh] flex items-center justify-center max-lg:px-[30px]"
  >
    <div
      class="max-w-[1140px] w-full flex flex-row max-md:flex-col max:md:justify-center"
    >
      <!-- 1 -->
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-once="true"
        class="w-[50%] px-[15px] flex flex-col items-start justify-center max-md:w-full max-md:items-center max-md:order-2 max-xs:w-full max-xs:items-center"
      >
        <p
          class="text-white text-[48px] mb-[10px] font-[700] leading-[56px] max-md:text-[28px] max-md:mb-0 max-xs:text-center max-xs:leading-[30px] max-xs:text-[25px] max-xs:mt-[20px] max-xs:w-full"
        >
          Welcome to Momotec LLC
        </p>
        <p
          class="text-[24px] text-[#FFFFFF99] mb-[50px] max-md:text-[18px] max-md:mb-[30px]"
        >
          Empowering Businesses in the Digital Age.
        </p>
        <a
          class="text-[16px] text-white mt-[10px] px-[28px] py-[11px] bg-sky-blue rounded-[50px]"
          href=""
          >Get Started</a
        >
      </div>
      <!-- 2 -->
      <div
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-once="true"
        class="w-[50%] px-[15px] max-md:flex max-md:items-center max-md:justify-center max-md:w-full max-md:max-w-full max-md:order-1"
      >
        <div class="w-full max-md:max-w-[483px]">
          <img
            class="up-down-animation"
            src="/img/banner-home.png"
            alt="Banner"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
@keyframes up-down {
  0% {
    transform: translateY(0);
    /* Vị trí ban đầu */
  }

  100% {
    transform: translateY(20px);
    /* Di chuyển lên hoặc xuống */
  }
}

.up-down-animation {
  animation: up-down 2s ease-in-out infinite alternate-reverse both;
}
</style>
