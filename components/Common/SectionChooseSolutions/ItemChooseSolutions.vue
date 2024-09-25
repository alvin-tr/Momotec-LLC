<template>
  <div>
    <div
      @click="togglevisibility"
      v-show="!isVisible"
      class="px-[20px] py-[20px] rounded-[6px] flex flex-row justify-between bg-white mt-[15px] group transition duration-300"
    >
      <div class="flex flex-row items-center">
        <p class="text-[18px] text-[#47B2E4] mr-[10px] font-semibold">
          {{ ord }}
        </p>
        <p
          v-show="!isVisible"
          class="text-[20px] font-normal group-hover:text-[#47B2E4]"
        >
          {{ title }}
        </p>
        <p v-if="isVisible" class="text-[20px] font-normal text-[#47B2E4]">
          {{ title }}
        </p>
      </div>

      <div class="flex flex-row items-center">
        <UIcon
          v-if="!isVisible"
          name="mdi:chevron-down"
          class="text-[23px] group-hover:text-[#47B2E4] transition duration-300"
        />
        <UIcon
          v-if="isVisible"
          name="mdi:chevron-up"
          class="text-[23px] text-[#47B2E4] transition duration-300"
        />
      </div>
    </div>

    <div
      @click="togglevisibility"
      v-show="isVisible"
      class="px-[20px] py-[20px] rounded-b-[0px] rounded-t-[6px] flex flex-row justify-between bg-white mt-[15px] group transition duration-300"
    >
      <div class="flex flex-row items-center">
        <p class="text-[18px] text-[#47B2E4] mr-[10px] font-semibold">
          {{ ord }}
        </p>
        <p
          v-show="!isVisible"
          class="text-[20px] font-normal group-hover:text-[#47B2E4]"
        >
          {{ title }}
        </p>
        <p v-show="isVisible" class="text-[20px] font-normal text-[#47B2E4]">
          {{ title }}
        </p>
      </div>

      <div class="flex flex-row items-center">
        <UIcon
          v-show="!isVisible"
          name="mdi:chevron-down"
          class="text-[23px] group-hover:text-[#47B2E4] transition duration-300"
        />
        <UIcon
          v-show="isVisible"
          name="mdi:chevron-up"
          class="text-[23px] text-[#47B2E4] transition duration-300"
        />
      </div>
    </div>

    <div
      v-show="isVisible"
      class="overflow-hidden rounded-b-[6px] px-[20px] py-[5px] bg-white"
    >
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script setup>
const isVisible = ref(false);

const togglevisibility = () => {
  isVisible.value = !isVisible.value;
};

const props = defineProps({
  ord: Number,
  title: String,
  description: String,
});
</script>

<style scoped></style>
