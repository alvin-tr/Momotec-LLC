<template>
  <div class="py-[60px] w-full flex flex-col items-center bg-light-gray">
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-once="true"
      class="max-w-[1140px] w-full max-lg:px-[45px]"
    >
      <div
        class="w-full mb-[30px] flex flex-col items-center justify-center relative"
      >
        <p
          class="text-[#37517E] text-[32px] uppercase font-bold relative mb-[20px]"
        >
          contact
        </p>

        <div
          class="h-[1px] w-[130px] bg-[#dadada] flex items-center justify-center"
        >
          <div class="relative h-[2px] w-[35%] bg-sky-blue top-[-1px]"></div>
        </div>
      </div>

      <div class="w-full shadow-2xl">
        <div
          class="border-y-2 px-[15px] border-y-sky-blue py-[30px] flex flex-col"
        >
          <CommonSectionContactItem
            v-for="item in contact"
            :key="item.label"
            :icon="item.icon"
            :label="item.label"
            :content="item.content"
          >
          </CommonSectionContactItem>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const contact = [
  {
    icon: "/icons/location.svg",
    label: "Location",
    content: "530 B Harkle Rd Ste 100, Sante FE, New Mexico, US, 87505",
  },
  {
    icon: "/icons/email.svg",
    label: "Email",
    content: "vanthanh.motech@gmail.com",
  },
  {
    icon: "/icons/phone.svg",
    label: "Call",
    content: "+1 2058987764",
  },
];
</script>

<style scoped></style>
