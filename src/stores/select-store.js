import axios from 'axios'
import { defineStore } from 'pinia'
import { onMounted, ref, computed } from 'vue'


export const useSelectStore = defineStore('selectItem', () => {

    const stepOne = ref({})
    const stepTwo = ref({})
    const stepThree = ref({})
    
    const skema = ref([
        { nama: 'Skema Sertifikasi Okupasi Penulis Artikel Ilmiah' },
        { nama: 'Skema Sertifikasi Okupasi Penulis Buku Text' },
        { nama: 'Skema Sertifikasi Okupasi Penulis Buku Ilmiah Populer' },
        { nama: 'Skema Sertifikasi Okupasi Penelaah Karya Tulis Ilmiah' },
        { nama: 'Skema Sertifikasi Okupasi Penulis Buku Text' },
        { nama: 'Skema Sertifikasi Okupasi Editor Buku Ilmiah' },
        { nama: 'Skema Sertifikasi Okupasi Pengelola Penerbitan Ilmiah' }
    ])


    const pendaftar = ref([
        { nama: 'Umum (PSKK)' },
        { nama: 'Mahasiswa (PSKK)' },
        { nama: ' Umum ' }
    ])
    const opsiJenisKelamin = ref([
        { nama: 'Laki-laki' },
        { nama: 'Perempuan' }
    ])
    const opsiWargaNegara = ref([
        { nama: 'WNI' },
        { nama: 'WNA' }
    ])

    const provinsi = ref([])
    const getProvinsi = () => {
        const url = 'https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json'
        axios.get(url)
            .then((res) => {
                provinsi.value = res.data
            })
    }
    const getProvinsiId = ref()
    const kabupaten = ref([])
    const getKabupaten = computed(() => {
        const url = `https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${getProvinsiId.value}.json`
        const kab = []
        axios.get(url)
            .then((res) => {
                kabupaten.value = res.data
            })
        return kabupaten
    })
    onMounted(getProvinsi)

    const pendidikan = ref([
        { nama: 'SD' },
        { nama: 'SMP' },
        { nama: 'SMA / Sederajat' },
        { nama: 'D2' }
    ])


    const pekerjaan = ref([
        { nama: 'Belum / Tidak Bekerja ' },
        { nama: ' Mengurus Rumah Tangga' },
        { nama: 'Pelajar / Mahasiswa' },
        { nama: 'Pensiunan' },
        { nama: 'Pegawai Negri Sipil (PNS)' },
        { nama: 'TNI' },
        { nama: 'POLRI' },
        { nama: 'Pedagang' },
        { nama: 'Petani' },
        { nama: 'Peternak' },
        { nama: 'Nelayan' },
        { nama: 'Sopir' },
        { nama: 'Seniman' },
        { nama: 'Lainnya' }
    ])

    const sumberAnggaran = ref([
        {nama:' APBN'},
        {nama:' APBD'},
        {nama:'Biaya Mandiri'},
        { nama:'Dari Perusahaan'}
    ])
    const pemberiAnggaran = ref([
        {nama:'Kementerian Koordinator Bidang Politik, Hukum, dan Keamanan'},
        {nama:'Kementerian Koordinator Bidang Perekonomian'},
        {nama:'Kementerian Koordinator Bidang Pembangunan Manusia dan Kebudayaan'},
        {nama:'Kementerian Koordinator Bidang Kemaritiman'},
        {nama:'Kementerian Dalam Negeri'},
        {nama:'Kementerian Luar Negeri'},
        {nama:'Kementerian Pertahanan'},
        {nama:'Kementerian Agama'},
        {nama:'Kementerian Hukum dan Hak Asasi Manusia'},
        {nama:'Kementerian Keuangan'},
        {nama:'Kementerian Pendidikan dan Kebudayaan'},
        {nama:'Kementerian Riset, Teknologi, dan Pendidikan Tinggi'},
        {nama:'Kementerian Sosial'},
        {nama:'Kementerian Kesehatan'},
        {nama:'Kementerian Ketenagakerjaan'},
        {nama:'Kementerian Perindustrian'},
        {nama:'Kementerian Perdagangan'}
    ])

    const tempatUjiKopetensi = ref([
        {nama:'Di Rumah'},
        {nama:'Universitas Lambung Mangkurat'},
        {nama:'IKIP SILIWANGI'},
        {nama:'UNIVERSITAS SEBELAS MARET'},
        {nama:'Universitas Islam Malang'},
        {nama:'Universitas Muhammadiyah Purwokerto'},
        {nama:'Universitas Dr. Soetomo'},
        {nama:'UNIVERSITAS AIRLANGGA'}
    ])

    const jadwalUjiKopetensi = ref([
        {nama:'-'}
    ])

   const getData = ref({})
    return {
        skema,
        pendaftar,
        opsiJenisKelamin,
        opsiWargaNegara,
        provinsi,
        getProvinsi,
        getProvinsiId,
        kabupaten,
        getKabupaten,
        pendidikan,
        pekerjaan,
        sumberAnggaran,
        pemberiAnggaran,
        tempatUjiKopetensi,
        jadwalUjiKopetensi,
        getData
    }

})