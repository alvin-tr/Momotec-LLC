<template>
  <div class="py-[60px] w-full flex flex-col items-center bg-light-gray">
    <div class="max-w-[1140px] w-full">
      <div
        class="w-full mb-[30px] flex flex-col items-center justify-center relative"
      >
        <p
          class="text-[#37517E] text-[32px] uppercase font-bold relative mb-[20px]"
        >
          services
        </p>

        <div
          class="h-[1px] w-[130px] bg-[#dadada] flex items-center justify-center"
        >
          <div class="relative h-[2px] w-[35%] bg-sky-blue top-[-1px]"></div>
        </div>

        <div>
          <p class="text-[16px] text-[#444444] mt-[20px]">
            These are some of the services we offer.
          </p>
        </div>
        <!-- card -->
        <div class="flex flex-row justify-between">
          <CommonSectionServicesServiceCards
            v-for="item in cards"
            :key="item.title"
            :icon="item.icon"
            :title="item.title"
            :content="item.content"
          ></CommonSectionServicesServiceCards>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const cards = [
  {
    icon: "/icons/basketball.svg",
    title: "Software consultancy",
    content:
      "Our team of industry experts offers comprehensive software consultancy services to help you make informed decisions for your business. We analyze your needs, assess your current systems, and provide strategic recommendations to optimize your software infrastructure.",
  },
  {
    icon: "/icons/speed.svg",
    title: "Software Development",
    content:
      "We specialize in developing robust and scalable software solutions tailored to meet your unique business requirements. Our talented developers leverage the latest technologies and best practices to create efficient and user-friendly software applications that drive growth and productivity.",
  },
  {
    icon: "/icons/document.svg",
    title: "Digital Marketing Strategy",
    content:
      "In today's digital landscape, effective marketing strategies are crucial for success. Our digital marketing services are designed to enhance your online presence, attract targeted audiences, and drive conversions. From search engine optimization (SEO) and social media marketing to content creation and email campaigns, we help you reach your marketing goals.",
  },
];
</script>

<style scoped></style>
