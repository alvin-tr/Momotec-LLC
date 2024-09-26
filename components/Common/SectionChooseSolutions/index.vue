<template>
  <div class="w-full bg-[#F3F5FA] py-[60px] flex justify-center">
    <div class="max-w-[1800px] w-full py-[60px] flex flex-row justify-center">
      <!-- 1 -->
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        class="px-[100px] flex flex-col w-[60%]"
      >
        <p class="text-[34px] text-[#37517E] mb-[8px] font-normal">
          Why Choose Momotec LLC as Your Partner?
        </p>
        <p class="text-[15px] mb-[16px] text-[#848484]">
          At Momotec LLC, we understand the importance of choosing the right
          partner for your business needs. Here are a few reasons why we believe
          we are the ideal choice:
        </p>

        <CommonSectionChooseSolutionsItemChooseSolutions
          v-for="(item, index) in titleChooseSolutions"
          :key="index"
          :ord="index + 1"
          :title="item.title"
          :description="item.description"
        >
        </CommonSectionChooseSolutionsItemChooseSolutions>
      </div>
      <!-- 2 -->
      <div
        data-aos="zoom-in"
        data-aos-duration="1000"
        class="w-[40%] px-[15px] flex item-center justify-centermax-xl: items-center"
      >
        <div
          class="w-full h-full flex item-center justify-center max-xl: items-center"
        >
          <img
            class="max-h-[600px] max-w-[658px] w-full max-xl:max-w[500px] max-xl:max-h-[400px]"
            src="/img/why-us.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Title
const titleChooseSolutions = [
  {
    title: " Expertise and Experience",
    description:
      "With over 15 years of experience in software consultancy,software development, and digital marketing, our team brings a wealth of expertise to the table. We have successfully delivered numerous projects, helping businesses achieve their goals and drive growth.",
  },
  {
    title: " Customized Solutions",
    description:
      "We take a tailored approach to every client's needs. Our team works closely with you to understand your unique business requirements and design customized solutions that align with your goals. We believe in delivering solutions that fit your business like a glove.",
  },
  {
    title: " Cutting-Edge Technology",
    description:
      "We stay up to date with the latest advancements in technology and leverage them to create innovative solutions for our clients. Our developers are skilled in using industry-leading tools and frameworks, ensuring that your software is built using the most advanced and efficient technologies available.",
  },
  {
    title: " Comprehensive Services",
    description:
      "Develop Solutions offers a wide range of services to cater to all your digital needs. From software consultancy to software development and digital marketing, we provide end-to-end solutions that cover every aspect of your business's digital transformation.",
  },
  {
    title: " Customer Satisfaction",
    description:
      "We prioritize customer satisfaction above all else. Our team is dedicated to delivering exceptional services and ensuring that our clients are satisfied with the results. We believe in building long-term relationships with our clients based on trust, transparency, and mutual success.",
  },
  {
    title: " Proven Track Record",
    description:
      "Our track record speaks for itself. We have a strong portfolio of successful projects and satisfied clients across various industries. We have helped businesses of all sizes, from startups to established enterprises, achieve their digital goals and drive tangible results.",
  },
];
// content
</script>

<style lang="scss" scoped></style>
