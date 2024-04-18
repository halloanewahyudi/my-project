<script setup>
import { useRouter } from 'vue-router';
import { useFormStore } from '../../stores/form-store';
import { useSelectStore } from '../../stores/select-store';
const router = useRouter()
const selectStore = useSelectStore()
const formStore = useFormStore()
const onSubmiting = (values) => {
    setTimeout(() => {
        router.push({path:'step-three'})
    }, 1000);
    console.log(JSON.stringify(values, null, 2));
}
</script>

<template>
    <div>
        <div id="stepTwo" class="step-two flex flex-col gap-5">
            <form @submit.prevent="onSubmiting" action="" class="flex flex-col gap-5">
                <div class="form-group">
                    <label for="pekerjaan"> Pekerjaan <span class="text-red-500">*</span></label>
                    <select class="form-select" name="" id="" v-model="formStore.stepTwo.pekerjaan" required>
                        <input type="search" v-model="formStore.stepTwo.pekerjaan" autocomplete="">
                        <option v-for="(item, index) in selectStore.pekerjaan" :key="index" :value="item">
                            {{ item.nama }}
                        </option>
                    </select>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    <div class="form-group">
                        <label for="kode-pos">Nama Sekolah / perguruan tinggi </label>
                        <input type="text" v-model="formStore.stepTwo.namaSekolah" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="hp">Program studi<span class="text-red-500">*</span></label>
                        <input type="text" v-model="formStore.stepTwo.programStudi" class="form-control">
                    </div>
                </div> <!-- / end grid -->

                <div class="form-group">
                    <label for="alamat-sekolah">Alamat Sekolah / Perguruan Tinggi </label>
                    <input type="text" v-model="formStore.stepTwo.alamatInstantsi" class="form-control">
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    <div class="form-group">
                        <label for="kode-pos">No Tel Perusahaan/ Lembaga </label>
                        <input type="text" v-model="formStore.stepTwo.noTelLembaga" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="email-lembaga">Email Perusahaan / Lembaga</label>
                        <input type="email" v-model="formStore.stepTwo.emailLembaga" class="form-control">
                    </div>
                </div> <!-- / end grid -->
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    <div class="form-group">
                        <label for="pekerjaan"> SUmber Anggaran <span class="text-red-500">*</span></label>
                        <select class="form-select" name="" id="" v-model="formStore.stepTwo.sunberAnggaran" required>
                            <option v-for="(item, index) in selectStore.sumberAnggaran" :key="index" :value="item">
                                {{ item.nama }}
                            </option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="sumber-angaran"> Sumber Anggaran <span class="text-red-500">*</span></label>
                        <select class="form-select" name="" id="" v-model="formStore.stepTwo.pemberiAnggaran" required>
                            <option v-for="(item, index) in selectStore.pemberiAnggaran" :key="index" :value="item">
                                {{ item.nama }}
                            </option>
                        </select>
                    </div>
                </div> <!-- / end grid -->
                <div class="flex gap-5 items-center submit-wrap my-5">
                    <button class="submit" @click="router.go(-1)"> Sebelumnya</button>
                    <button class="submit"> Selanjutnya</button>
                </div>
            </form>
        </div> <!-- end stepTwo -->
    </div>
</template>