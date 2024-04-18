<script setup>
import { computed, onMounted, ref, watchEffect } from 'vue';
import { useSelectStore } from '../stores/select-store';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

import {
    Combobox,
    ComboboxInput,
    ComboboxOptions,
    ComboboxOption,
} from '@headlessui/vue'

const selectStore = useSelectStore()

const dataForm = ref({
    selectedSkema: '',
    selectedPendaftar: '',
    nama: '',
    nik: '',
    tempatLahir: '',
    tanggalLahir: '',
    jenisKelamin: '',
    wargaNegara: '',
    alamat: '',
    provinsi: '',
    kabupaten: '',
    kodePos: '',
    hp: '',
    email: '',
    pendidikanTerakhir: '',
    pekerjaan: '',
    namaSekolah: '',
    programStudi: '',
    alamatInstantsi: '',
    noTelLembaga: '',
    emailLembaga: '',
    sunberAnggaran: '',
    pemberiAnggaran: '',
    tujuanAsesmen: '',
    tempatUjiKopetensi: '',
    jadwalUjiKopetensi: '',
})

watchEffect(() => {
    dataForm.value
    selectStore.getKabupaten
})
onMounted(()=>{
    selectStore.getData = dataForm.value
})
</script>
<template>

    <form action="" class="flex flex-col gap-5">
        <div class="divide-title text-xl text-brand-2 font-medium   border-brand-2 pt-3 ">Rincian Data Pemohon Sertifikasi </div>
<div id="stepOne" class="step-one">
        <div class="form-group">
            <label for="skema">Skema Sertifikasi</label>
            <select class="form-select" name="" id="" v-model="dataForm.selectedSkema">
                <option v-for="(item, index) in selectStore.skema" :key="index" :value="item">
                    {{ item.nama }}
                </option>
            </select>
        </div>
        <div class="form-group">
            <label for="skema">Pendftaran <span class="text-red-500">*</span> </label>
            <select class="form-select" name="" id="" v-model="dataForm.selectedPendaftar" required>
                <option v-for="(item, index) in selectStore.pendaftar" :key="index" :value="item">
                    {{ item.nama }}
                </option>
            </select>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div class="form-group">
                <label for="nama">Nama Lengkap (Sesuai KTP) <span class="text-red-500">*</span></label>
                <input type="text" v-model="dataForm.nama" class="form-control" required>
            </div>
            <div class="form-group">
                <label for="nik">NIK <span class="text-red-500">*</span></label>
                <input type="text" v-model="dataForm.nik" class="form-control" required>
            </div>
        </div><!-- / end grid -->

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div class="form-group">
                <label for="tempat-lahir">Tempat Lahir <span class="text-red-500">*</span></label>
                <input type="text" v-model="dataForm.tempatLahir" class="form-control" required>
            </div>
            <div class="form-group">
                <label for="ttl">Tanggal Lahir <span class="text-red-500">*</span></label>
                <VueDatePicker v-model="dataForm.tanggalLahir" :enable-time-picker="false" aria-required="true">
                </VueDatePicker>
            </div>
        </div> <!-- / end grid -->

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div class="form-group">
                <label for="jenis-kelamin">Jenis Kelamin</label>
                <select class="form-select" name="" id="" v-model="dataForm.jenisKelamin">
                    <option v-for="(item, index) in selectStore.opsiJenisKelamin" :key="index" :value="item">
                        {{ item.nama }}
                    </option>
                </select>
            </div>
            <div class="form-group">
                <label for="Kewarganegaraan">Kewarganegaraan <span class="text-red-500">*</span></label>
                <select class="form-select" id="" v-model="dataForm.wargaNegara">
                    <option v-for="(item, index) in selectStore.opsiWargaNegara" :key="index" :value="item">
                        {{ item.nama }}
                    </option>
                </select>
            </div>
        </div> <!-- / end grid -->

        <div class="form-group">
            <label for="alamat">Alamat <span class="text-red-500">*</span></label>
            <textarea name="" id="" cols="30" rows="3" v-model="dataForm.alamat" class="form-control"
                required></textarea>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div class="form-group">
                <label for="provinsi">Provinsi <span class="text-red-500">*</span></label>
                <select @change="selectStore.getProvinsiId = dataForm.provinsi.id" class="form-select" id=""
                    v-model="dataForm.provinsi" required>
                    <option v-for="(item, index) in selectStore.provinsi" :key="index" :value="item">
                        {{ item.name }}
                    </option>
                </select>
            </div>
            <div class="form-group">
                <label for="jenis-kelamin">Kabupaten <span class="text-red-500">*</span></label>
                <select class="form-select" name="" id="" v-model="dataForm.kabupaten" required>
                    <option v-for="(item, index) in selectStore.kabupaten" :key="index" :value="item">
                        {{ item.name }}
                    </option>
                </select>
            </div>
        </div> <!-- / end grid -->

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div class="form-group">
                <label for="kode-pos">Kode Pos</label>
                <input type="text" v-model="dataForm.kodePos" class="form-control">
            </div>
            <div class="form-group">
                <label for="hp">No Hp <span class="text-red-500">*</span></label>
                <input type="text" v-model="dataForm.hp" class="form-control" required>
            </div>
        </div> <!-- / end grid -->

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div class="form-group">
                <label for="kode-pos">Email <span class="text-red-500">*</span> </label>
                <input type="email" v-model="dataForm.email" class="form-control" required>
            </div>
            <div class="form-group">
                <label for="hp">Pendidikan Terakhir <span class="text-red-500">*</span></label>
                <select class="form-select" name="" id="" v-model="dataForm.pendidikanTerakhir" required>
                    <option v-for="(item, index) in selectStore.pendidikan" :key="index" :value="item">
                        {{ item.nama }}
                    </option>
                </select>
            </div>
        </div> <!-- / end grid -->
    </div> <!-- end stepone -->
    
    <div id="stepTwo" class="step-two">
        <div class="divide-title text-xl text-brand-2 font-medium   border-brand-2 pt-3">Data
            Pekerjaan Sekarang </div>

        <div class="form-group">
            <label for="pekerjaan"> Pekerjaan <span class="text-red-500">*</span></label>
            <select class="form-select" name="" id="" v-model="dataForm.pekerjaan" required>
                <input type="search" v-model="dataForm.pekerjaan" autocomplete="">
                <option v-for="(item, index) in selectStore.pekerjaan" :key="index" :value="item">
                    {{ item.nama }}
                </option>
            </select>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div class="form-group">
                <label for="kode-pos">Nama Sekolah / perguruan tinggi </label>
                <input type="text" v-model="dataForm.namaSekolah" class="form-control">
            </div>
            <div class="form-group">
                <label for="hp">Program studi<span class="text-red-500">*</span></label>
                <input type="text" v-model="dataForm.programStudi" class="form-control">
            </div>
        </div> <!-- / end grid -->

        <div class="form-group">
            <label for="alamat-sekolah">Alamat Sekolah / Perguruan Tinggi </label>
            <input type="text" v-model="dataForm.alamatInstantsi" class="form-control">
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div class="form-group">
                <label for="kode-pos">No Tel Perusahaan/ Lembaga </label>
                <input type="text" v-model="dataForm.noTelLembaga" class="form-control">
            </div>
            <div class="form-group">
                <label for="email-lembaga">Email Perusahaan / Lembaga</label>
                <input type="email" v-model="dataForm.emailLembaga" class="form-control">
            </div>
        </div> <!-- / end grid -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div class="form-group">
                <label for="pekerjaan"> SUmber Anggaran <span class="text-red-500">*</span></label>
                <select class="form-select" name="" id="" v-model="dataForm.sunberAnggaran" required>
                    <option v-for="(item, index) in selectStore.sumberAnggaran" :key="index" :value="item">
                        {{ item.nama }}
                    </option>
                </select>
            </div>
            <div class="form-group">
                <label for="sumber-angaran"> Sumber Anggaran <span class="text-red-500">*</span></label>
                <select class="form-select" name="" id="" v-model="dataForm.pemberiAnggaran" required>
                    <option v-for="(item, index) in selectStore.pemberiAnggaran" :key="index" :value="item">
                        {{ item.nama }}
                    </option>
                </select>
            </div>
        </div> <!-- / end grid -->
    </div> <!-- end stepTwo -->
        <div class="divide-title text-xl text-brand-2 font-medium   border-brand-2 pt-3">Data
            Sertifikasi </div>
<div id="stepThree" class="step-three">
        <div class="form-group flex flex-col gap-2">
            <label for="Tujuan-asesmen">Tujuan Asesmen </label>
            <div class="radio-item flex gap-2 items-center">
                <input id="radio-1" type="radio" value="Sertifikasi" v-model="dataForm.tujuanAsesmen"  class="radio">
                <label for="radio-1"
                    class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Sertifikasi</label>
            </div>
            <div class="radio-item flex gap-2 items-center">
                <input id="radio-2" type="radio" value="Sertifikasi Ulang" v-model="dataForm.tujuanAsesmen" class="radio">
                <label for="radio-2"
                    class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Sertifikasi Ulang</label>
            </div>
            <div class="radio-item flex gap-2 items-center">
                <input id="radio-3" type="radio" value="Pengakuan Kompetensi Terkini (PKT)" v-model="dataForm.tujuanAsesmen" class="radio">
                <label for="radio-3"
                    class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Pengakuan Kompetensi Terkini (PKT)</label>
            </div>
            <div class="radio-item flex gap-2 items-center">
                <input id="radio-4" type="radio" value="Rekognisi Pembelajaran Lampau" v-model="dataForm.tujuanAsesmen" class="radio">
                <label for="radio-4"
                    class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Rekognisi Pembelajaran Lampau</label>
            </div>
            <div class="radio-item flex gap-2 items-center">
                <input id="radio-5" type="radio" value="Lainnya" v-model="dataForm.tujuanAsesmen" class="radio">
                <label for="radio-5"
                    class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Lainnya</label>
            </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div class="form-group">
                <label for="pekerjaan"> Tempat Uji Kompetensi <span class="text-red-500">*</span></label>
                <select class="form-select" name="" id="" v-model="dataForm.tempatUjiKopetensi" required>
                    <option v-for="(item, index) in selectStore.tempatUjiKopetensi" :key="index" :value="item">
                        {{ item.nama }}
                    </option>
                </select>
            </div>
            <div class="form-group">
                <label for="sumber-angaran"> Jadwal Uji Kompetensi <span class="text-red-500">*</span></label>
                <select class="form-select" name="" id="" v-model="dataForm.jadwalUjiKopetensi" required>
                    <option v-for="(item, index) in selectStore.jadwalUjiKopetensi" :key="index" :value="item">
                        {{ item.nama }}
                    </option>
                </select>
            </div>
        </div> <!-- / end grid -->
    </div>
        <button class="py-3 px-10 rounded-lg max-w-max bg-brand-1 text-brand-4 font-semibold hover:text-white hover:bg-brand-2 hover:ring-2 focus:ring-2 ring-brand-1 hover:shadow hover:shadow-brand-3 duration-300" > Selanjutnya </button>
    </form>
</template>
