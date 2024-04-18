import { defineStore } from "pinia";
import { ref } from "vue";

export const useFormStore = defineStore ('form-store',()=>{

    const stepOne = ref({})
    const stepTwo = ref({})
    const stepThree = ref({})
    
    return {
        stepOne,
        stepTwo,
        stepThree
    }
})