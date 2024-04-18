<script setup>

import { useRouter } from 'vue-router';
import { useFormStore } from '../../stores/form-store';
import { useSelectStore } from '../../stores/select-store';
const router = useRouter()

const selectStore = useSelectStore()
const formStore = useFormStore()

const onSubmiting = (values) => {
    setTimeout(() => {
        router.push({path:'thanks'})
    }, 1000);
    console.log(JSON.stringify(values, null, 2));
}
</script>
<template>
    <div>
        <div id="stepThree" class="step-three">

            <form action="" @submit.prevent="onSubmiting" class="flex flex-col gap-5">
                <div class="form-group flex flex-col gap-2">
                    <label for="Tujuan-asesmen">Tujuan Asesmen </label>
                    <div class="radio-item flex gap-2 items-center">
                        <input id="radio-1" type="radio" value="Sertifikasi" v-model="formStore.stepThree.tujuanAsesmen"
                            class="radio">
                        <label for="radio-1"
                            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Sertifikasi</label>
                    </div>
                    <div class="radio-item flex gap-2 items-center">
                        <input id="radio-2" type="radio" value="Sertifikasi Ulang"
                            v-model="formStore.stepThree.tujuanAsesmen" class="radio">
                        <label for="radio-2"
                            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Sertifikasi Ulang</label>
                    </div>
                    <div class="radio-item flex gap-2 items-center">
                        <input id="radio-3" type="radio" value="Pengakuan Kompetensi Terkini (PKT)"
                            v-model="formStore.stepThree.tujuanAsesmen" class="radio">
                        <label for="radio-3" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Pengakuan
                            Kompetensi Terkini (PKT)</label>
                    </div>
                    <div class="radio-item flex gap-2 items-center">
                        <input id="radio-4" type="radio" value="Rekognisi Pembelajaran Lampau"
                            v-model="formStore.stepThree.tujuanAsesmen" class="radio">
                        <label for="radio-4" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Rekognisi
                            Pembelajaran Lampau</label>
                    </div>
                    <div class="radio-item flex gap-2 items-center">
                        <input id="radio-5" type="radio" value="Lainnya" v-model="formStore.stepThree.tujuanAsesmen"
                            class="radio">
                        <label for="radio-5"
                            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Lainnya</label>
                    </div>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    <div class="form-group">
                        <label for="pekerjaan"> Tempat Uji Kompetensi <span class="text-red-500">*</span></label>
                        <select class="form-select" name="" id="" v-model="formStore.stepThree.tempatUjiKopetensi"
                            required>
                            <option v-for="(item, index) in selectStore.tempatUjiKopetensi" :key="index" :value="item">
                                {{ item.nama }}
                            </option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="sumber-angaran"> Jadwal Uji Kompetensi <span class="text-red-500">*</span></label>
                        <select class="form-select" name="" id="" v-model="formStore.stepThree.jadwalUjiKopetensi"
                            required>
                            <option v-for="(item, index) in selectStore.jadwalUjiKopetensi" :key="index" :value="item">
                                {{ item.nama }}
                            </option>
                        </select>
                    </div>
                </div> <!-- / end grid -->
                <div class="flex gap-5 items-center submit-wrap my-5">
                    <button class="submit" @click="$router.go(-1)"> Sebelumnya</button>
                    <button class="submit"> Submit</button>
                </div>
            </form>
        </div>
    </div>
</template>