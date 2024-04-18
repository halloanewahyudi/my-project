<script setup>
import { ref } from 'vue';
import Card from '../components/element/Card.vue';


import { useFormStore } from '../stores/form-store';
import Form from '../components/Form.vue';
const formStore = useFormStore()
const cardContent = ref( [
    {
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        body:' Pariatur beatae vero tenetur laudantium hic maxime, ipsa, accusantium quibusdam, accusamus esse dolorem eaque enim non omnis cum labore dolor cumque animi!'
    },
    {
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        body:' Pariatur beatae vero tenetur laudantium hic maxime, ipsa, accusantium quibusdam, accusamus esse dolorem eaque enim non omnis cum labore dolor cumque animi!'
    },
    {
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        body:' Pariatur beatae vero tenetur laudantium hic maxime, ipsa, accusantium quibusdam, accusamus esse dolorem eaque enim non omnis cum labore dolor cumque animi!'
    }
])
</script>
<template>
  
<div class=" p-6 w-full bg-neutral-50">
    <div class="grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-115px)] justify-center items-center container">
        <div class="flex flex-col gap-5">
            <div>
                <p class="text-xl font-medium text-brand-2">
                Sebuah prototype website 
            </p>
            <h1 class="text-3xl lg:text-6xl font-bold text-brand-1">
                Lembaga Sertifikasi
            </h1>
            </div>
            <p>
                Disini hanya menampilkan sebuah sampling fungsi pada penekanan konten inti seperti  pembuatan <span class="font-bold text-brand-1 p-2 bg-brand-6  -rotate-1 inline-block "> <router-link to="/steping" class="hover:border-b border-b-brand-1 duration-300">skema steping form </router-link> , <router-link to="/table" class="hover:border-b border-b-brand-1 duration-300">  data table </router-link>, member area, </span> berdasarkan referensi website <a href="https://www.sertifikasi.lsppenerbitan.id" class="hover:border-b border-b-brand-1 duration-300 font-bold text-brand-1" target="_blank"> lsppenerbitan.id</a>  dan selebihnya konten bersifat umum
            </p>
            <p>
                Dan kemungkinan bisa jadi tidak sama persis dengan web referensi, maka bisa jadi nantinya akan ada penyesuaan kebutuhan misal validasi, konsep ,desain  dan apapun yang di perlukan yang di diskusikan secara komprehensif 
            </p>
        </div>

        <div class="flex flex-col justify-center items-center p-6 gap-5">
        
           <form class="rounded-lg p-6 lg:p-10 bg-white border shadow-xl w-full max-w-[340px] shrink-0 flex flex-col gap-4">
            <h2 class="text-xl lg:text-2xl font-bold text-brand-1 text-center"> Login</h2>
            <div class="form-group">
                <label for="username"> Username / email</label>
                <input type="text" class="form-control">
            </div>
            <div class="form-group">
                <label for="username"> Password</label>
                <input type="password" class="form-control">
            </div>
            <button class="submit"> Login </button>
           </form>
        </div>
    </div>
</div>
 
</template>