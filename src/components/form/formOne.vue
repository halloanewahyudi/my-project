<script setup>
import { Field, Form } from 'vee-validate';
import { useFormStore } from '../../stores/form-store';
import { useSelectStore } from '../../stores/select-store';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import { useRouter } from 'vue-router';
import { watchEffect } from 'vue';
const router = useRouter()
const selectStore = useSelectStore()
const formStore = useFormStore()

watchEffect(() => {
   
    selectStore.getKabupaten
})
const onSubmiting = (values) => {
    if (values) {
        setTimeout(() => {
            router.push({ path: 'step-two' })
        }, 1000);
    }
    console.log(JSON.stringify(values, null, 2));
}
</script>
<template>



    <div id="stepOne" class="step-one flex flex-col gap-5">
     
        <form @submit.prevent="onSubmiting" class="flex flex-col gap-5">
            <div class="form-group">
                <label for="skema">Skema Sertifikasi</label>
                <select class="form-select" name="" id="" v-model="formStore.stepOne.selectedSkema">
                    <option v-for="(item, index) in selectStore.skema" :key="index" :value="item">
                        {{ item.nama }}
                    </option>
                </select>
            </div>
            <div class="form-group">
                <label for="skema">Pendftaran <span class="text-red-500">*</span> </label>
                <select class="form-select" name="" id="" v-model="formStore.stepOne.selectedPendaftar" required>
                    <option v-for="(item, index) in selectStore.pendaftar" :key="index" :value="item">
                        {{ item.nama }}
                    </option>
                </select>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <div class="form-group">
                    <label for="nama">Nama Lengkap (Sesuai KTP) <span class="text-red-500">*</span></label>
                    <input type="text" v-model="formStore.stepOne.nama" class="form-control" required>
                </div>
                <div class="form-group">
                    <label for="nik">NIK <span class="text-red-500">*</span></label>
                    <input type="text" v-model="formStore.stepOne.nik" class="form-control" required>
                </div>
            </div><!-- / end grid -->

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <div class="form-group">
                    <label for="tempat-lahir">Tempat Lahir <span class="text-red-500">*</span></label>
                    <input type="text" v-model="formStore.stepOne.tempatLahir" class="form-control" required>
                </div>
                <div class="form-group">
                    <label for="ttl">Tanggal Lahir <span class="text-red-500">*</span></label>
                    <VueDatePicker v-model="formStore.stepOne.tanggalLahir" :enable-time-picker="false"
                        aria-required="true">
                    </VueDatePicker>
                </div>
            </div> <!-- / end grid -->

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <div class="form-group">
                    <label for="jenis-kelamin">Jenis Kelamin</label>
                    <select class="form-select" name="" id="" v-model="formStore.stepOne.jenisKelamin">
                        <option v-for="(item, index) in selectStore.opsiJenisKelamin" :key="index" :value="item">
                            {{ item.nama }}
                        </option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="Kewarganegaraan">Kewarganegaraan <span class="text-red-500">*</span></label>
                    <select class="form-select" id="" v-model="formStore.stepOne.wargaNegara">
                        <option v-for="(item, index) in selectStore.opsiWargaNegara" :key="index" :value="item">
                            {{ item.nama }}
                        </option>
                    </select>
                </div>
            </div> <!-- / end grid -->

            <div class="form-group">
                <label for="alamat">Alamat <span class="text-red-500">*</span></label>
                <textarea name="" id="" cols="30" rows="3" v-model="formStore.stepOne.alamat" class="form-control"
                    required></textarea>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <div class="form-group">
                    <label for="provinsi">Provinsi <span class="text-red-500">*</span></label>
                    <select @change="selectStore.getProvinsiId = formStore.stepOne.provinsi.id" class="form-select"
                        id="" v-model="formStore.stepOne.provinsi" required>
                        <option v-for="(item, index) in selectStore.provinsi" :key="index" :value="item">
                            {{ item.name }}
                        </option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="jenis-kelamin">Kabupaten <span class="text-red-500">*</span></label>
                    <select class="form-select" name="" id="" v-model="formStore.stepOne.kabupaten" required>
                        <option v-for="(item, index) in selectStore.kabupaten" :key="index" :value="item">
                            {{ item.name }}
                        </option>
                    </select>
                </div>
            </div> <!-- / end grid -->

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <div class="form-group">
                    <label for="kode-pos">Kode Pos</label>
                    <input type="text" v-model="formStore.stepOne.kodePos" class="form-control">
                </div>
                <div class="form-group">
                    <label for="hp">No Hp <span class="text-red-500">*</span></label>
                    <input type="text" v-model="formStore.stepOne.hp" class="form-control" required>
                </div>
            </div> <!-- / end grid -->

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <div class="form-group">
                    <label for="kode-pos">Email <span class="text-red-500">*</span> </label>
                    <input type="email" v-model="formStore.stepOne.email" class="form-control" required>
                </div>
                <div class="form-group">
                    <label for="hp">Pendidikan Terakhir <span class="text-red-500">*</span></label>
                    <select class="form-select" name="" id="" v-model="formStore.stepOne.pendidikanTerakhir" required>
                        <option v-for="(item, index) in selectStore.pendidikan" :key="index" :value="item">
                            {{ item.nama }}
                        </option>
                    </select>
                </div>
            </div> <!-- / end grid -->
            <div class="flex gap-5 items-center submit-wrap my-5">
                <button class="submit" @click="$router.forward"> Selanjutnya</button>
            </div>
        </form>
    </div>
</template>