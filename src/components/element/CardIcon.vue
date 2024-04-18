<script setup>
defineProps({
    title:String,
    body:String
})
</script>
<template>
    <div class="flex gap-3 p-4 w-full rounded-lg items-start border bg-brand-4 border-white hover:shadow-lg duration-300">
        <div class="w-10 h-10 rounded-full flex flex-col justify-center items-center text-center">
            <slot />
        </div>
        <div>
        <h4 class="text-xl font-semibold leading-none"> {{ title }}</h4>
        <div>{{body }}</div>
        </div>
    </div>
</template>