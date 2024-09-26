<template>
  <div
    ref="background"
    class="w-full bg-cover bg-center"
    :style="{
      backgroundImage: `url('/img/cta-bg.jpg')`,
      backgroundPositionY: backgroundPosition,
    }"
  >
    <div
      class="w-full h-full flex items-center justify-center py-[120px] bg-gradient-to-b from-[#283a5ae6] to-[#283a5ae6]"
    >
      <div
        data-aos="zoom-in"
        data-aos-duration="1000"
        class="max-w-[1140px] w-full flex items-center justify-between max-xl:px-[45px]"
      >
        <div class="w-full">
          <p class="text-[28px] text-white font-semibold mb-[8px]">
            Get in Touch
          </p>
          <p class="text-[16px] text-white">
            Contact us today to discuss how Develop Solutions can empower your
            business in the digital age.
          </p>
        </div>

        <a
          class="py-[12px] px-[40px] border-[2px] rounded-full whitespace-nowrap text-white text-[16px] font-medium hover:bg-sky-blue transition-all duration-500"
          href="https://docs.google.com/forms/d/e/1FAIpQLSdL9W0b123r1qqKnK7ANbyqSexqsk1FghTdPWKeIFo3KPA6SA/viewform"
          >Get in Touch</a
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

// Biến lưu vị trí nền
const backgroundPosition = ref("center");

// Hàm xử lý hiệu ứng parallax
const handleScroll = () => {
  // Tính toán vị trí mới của background khi cuộn
  const scrollY = window.scrollY;
  backgroundPosition.value = `${scrollY * 0.8}px`;
};

// Lắng nghe sự kiện cuộn khi component được mount
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

// Bỏ sự kiện cuộn khi component bị unmount
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped></style>
