<template>
    <div :class="headerClass" class="h-[72.5px] bg-deep-blue flex items-center justify-center fixed top-0 w-full z-50">
        <div class="max-w-[1140px] w-full items-center  justify-between flex flex-row
        ">
            <a class="text-[30px] uppercase text-white" href="">momotec llc</a>

            <div class="w-[50%] flex flex-row justify-around items-center">
                <a href="" class="text-[15px] text-white hover:text-sky-blue font-medium">Home</a>
                <a href="" class="text-[15px] text-white hover:text-sky-blue font-medium">About</a>
                <a href="" class="text-[15px] text-white hover:text-sky-blue font-medium">Services</a>
                <a href="" class="text-[15px] text-white hover:text-sky-blue font-medium">Contact</a>
                <a href="" class="text-white text-[14px] py-[6px] px-[25px] border-[1px] rounded-[20px] border-sky-blue hover:bg-sky-blue transition duration-200 ease-in font-semibold
                    
                    ">Get
                    Started</a>
            </div>
        </div>
    </div>
</template>

<script setup>
const headerClass = ref('bg-transparent')
const handleScroll = () => {
    if(window.scrollY > 50) {
        headerClass.value = 'bg-deep-blue bg-opacity-90 transition duration-200 ease-in'
    }else {
        headerClass.value = 'bg-transparent transition duration-200 ease-in'
    }
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
    window.addEventListener('scroll', handleScroll)
})

</script>

<style lang="scss" scoped>

</style>