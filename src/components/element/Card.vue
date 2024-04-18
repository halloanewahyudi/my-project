<script setup>
const props = defineProps({
    title:String,
    body:String,
})
</script>
<template>
    <div class="p-4 rounded-lg bg-white hover:shadow-xl duration-300 flex flex-col gap-3">
        <h4 class="text-xl font-semibold"> {{ props.title }}</h4>
        <div>{{ props.body }}</div>
        <slot />
    </div>
</template>