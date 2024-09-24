<template>
    <div class="bg-light-blue w-full h-[80vh] flex items-center justify-center">
        <div class="max-w-[1140px] w-full flex flex-row">
            <div class="w-[50%] px-[15px] flex flex-col items-start justify-center ">
                <p class=" text-white text-[48px] mb-[10px] font-[700] leading-[56px]

                ">Welcome to Momotec LLC</p>
                <p class="text-[24px] text-[#FFFFFF99] mb-[50px] ">Empowering Businesses in the Digital Age.</p>
                <a class="text-[16px] text-white mt-[10px] px-[28px] py-[11px] bg-sky-blue rounded-[50px]" href="">Get
                    Started</a>
            </div>

            <div class="w-[50%] px-[15px]">
                <div class="w-full">
                    <img class="up-down-animation" src="/img/banner-home.png" alt="Banner">
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>

</script>

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