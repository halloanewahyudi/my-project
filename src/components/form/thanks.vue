<script setup>
import { useFormStore } from '../../stores/form-store';

 
const formstore = useFormStore()
</script>
<template>
    <div>
        <h1 class="text-xl font-semibold"> Terimakasih telah mengisi form</h1>
        <div class="font-mono p-6 rounded-lg bg-neutral-100">
            Code view : <br>
            {{ formstore.stepOne }} <br>
        {{ formstore.stepTwo }} <br>
        {{ formstore.stepThree }}
        </div>
    
    </div>
</template>