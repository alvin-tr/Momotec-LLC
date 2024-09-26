<template>
  <div ref="animatedBar" class="flex flex-col mb-[15px]">
    <div class="flex flex-row w-full justify-between mb-[10px]">
      <p class="text-[12px] text-dark-blue uppercase font-semibold">
        {{ label }}
      </p>
      <p class="text-[12px] text-dark-blue">{{ quantity }}</p>
    </div>
    <!-- thanh -->
    <div class="w-full h-[10px] bg-[#E8EDF5]">
      <div
        data-aos="fade-right"
        data-aos-delay="700"
        :style="{
          width: isAnimated ? width : '0%',
          transition: `width 1s ease-in-out `,
        }"
        class="h-[10px] bg-dark-blue percent-bar"
      ></div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  label: String,
  quantity: String,
  aosType: { type: String, default: "fade-right" },
  delay: { type: Number, default: 0 },
});

const width = computed(() => {
  const numericValue = parseFloat(props.quantity);
  return `${numericValue}%`;
});

const isAnimated = ref(false);

onMounted(() => {
  isAnimated.value = true;
});

let observer = null;

onMounted(() => {
  const animatedBar = document.querySelector(".percent-bar");

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isAnimated.value = true;
        } else {
          isAnimated.value = false;
        }
      });
    },
    { threshold: 0.5 } // Kích hoạt khi phần tử xuất hiện 50% trên màn hình
  );

  if (animatedBar) {
    observer.observe(animatedBar);
  }
});

onBeforeUnmount(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>

<style scoped>
.percent-bar {
  width: 0;
  transition: width 1s ease-in-out;
}
</style>
