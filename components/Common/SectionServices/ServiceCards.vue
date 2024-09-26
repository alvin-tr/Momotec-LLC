<template>
  <div
    :data-aos="aosType"
    :data-aos-duration="duration"
    :data-aos-delay="delay"
    class="py-[50px] px-[30px] max-h-[413px] max-w-[350px] bg-white flex flex-col shadow-2xl group hover:transform-up hover:shadow-3xl transition duration-500 max-lg:max-w-full max-lg:mb-[20px] max-lg:shadow-sm"
  >
    <div class="flex mb-[10px] w-[36px]">
      <Image :src="props.icon" />
    </div>
    <p
      class="text-[24px] text-dark-blue mb-[15px] group-hover:text-sky-blue transition duration-500"
    >
      {{ title }}
    </p>
    <p class="text-[15px] leading-6">{{ content }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  icon: "",
  title: String,
  content: String,
  delay: Number,
  aosType: {
    type: String,
    default: "fade-up",
  },
  duration: {
    type: Number,
    default: 500,
  },
});
</script>

<style scoped>
.hover\:transform-up:hover {
  transform: translateY(-20px);
}
.hover\:shadow-3xl:hover {
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
}
</style>
