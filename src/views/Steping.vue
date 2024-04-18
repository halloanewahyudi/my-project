<script setup>
import { computed } from 'vue';
import CardIcon from '../components/element/CardIcon.vue';
import { useSelectStore } from '../stores/select-store';
import { useRoute, useRouter, } from 'vue-router';
import { useFormStore } from '../stores/form-store';
const formStore = useFormStore()
const route = useRoute()
const router = useRouter()
const selecStore = useSelectStore()

</script>
<template>
    <div class="w-full flex flex-col-reverse lg:flex-row">
        <div class="p-6 lg:p-10 w-full lg:w-1/2">
            <div v-if="$route.meta" class="divide-title text-2xl text-brand-2 font-medium mb-5 border-b-2 border-brand-2 pb-3 "> 
                {{ $route.meta.description }}
            </div>
            <p class="mb-5">
                Pada bagian ini, cantumkan data pribadi, data pendidikan formal, serta data pekerjaan Anda pada saat
                ini. Untuk bagian yang bertanda (*) wajib diisi.
            </p>
           
            <router-view></router-view>
        </div>
        <div class="w-full lg:w-1/2 bg-brand-3 flex flex-col  items-center min-h-[calc(100vh-67px)] ">
            <div class="p-6 lg:p-10 w-full relative h-full ">
               
                <div class="step-nav  shrink-0 flex flex-col gap-5 mx-auto max-w-[420px] xl:sticky xl:top-32">
                        <router-link :to="{ name: 'Step One' }">
                            <card-icon title="Step One" body="Rincian Data Pemohon Sertifikasi" class="cursor-pointer">
                                <div class="w-10 h-10 rounded-lg bg-brand-5 text-2xl font-semibold">
                                    1
                                </div>
                            </card-icon>
                        </router-link>
                        <router-link :to="{ name: 'Step Two' }" >
                            <card-icon title="Step Two" body="Data Pekerjaan Sekarang" class="cursor-pointer ">
                                <div class="w-10 h-10 rounded-lg bg-brand-5 text-2xl font-semibold">
                                    2
                                </div>
                            </card-icon>
                        </router-link>
                        <router-link :to="{ name: 'Step Three' }">
                            <card-icon title="Step Three" body="Data Sertifikasi" class="cursor-pointer">
                                <div class="w-10 h-10 rounded-lg bg-brand-5 text-2xl font-semibold">
                                    3
                                </div>
                            </card-icon>
                        </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.step-nav a{
    @apply opacity-50;
}
.step-nav .router-link-active{
    @apply !opacity-100; 
}
</style>