<script setup>
import { computed, onMounted, ref } from "vue";
import { useRouter , useRoute} from "vue-router";
import IconMenu from '../icons/IconMenu.vue'; 
import Logo from "../icons/Logo.vue";


const router = useRouter()
const route = useRoute()

const getNav = computed(() => {
  const navigasi = router.getRoutes();
  
  // Daftar path yang ingin disaring
  const pathsToHide = ['/steping/step-one', '/steping/step-two','/steping/step-three','/steping/thanks'];

  // Gunakan filter untuk menyaring link yang tidak ingin ditampilkan
  const filteredNav = navigasi.filter(route => !pathsToHide.includes(route.path));

    return filteredNav;
 // return navigasi

});
const refMenu = ref(null)
const bukaMenu = ()=> {
     refMenu.value.classList.toggle('hidden')
}
const navLink = () => {
    refMenu.value.classList.add('hidden')
}
</script>
<template>
    <div class="fixed top-0 left-0 z-50 w-full bg-white border-b min-h-16 flex flex-col justify-center items-center ">
        <div class="container">
            <div class="flex justify-between items-center h-max">
                <div class="logo">
                    <router-link to="/">
                        <img src="../../assets/logo.png" alt="" srcset="" class="hover:-rotate-180 ease-in-out duration-1000">
                    </router-link>
                </div>
                <button @click="bukaMenu" class="lg:hidden"><IconMenu /></button>
                <div ref="refMenu" class="menu hidden transition-all duration-300  absolute left-0 top-16 bg-white w-full p-6 lg:block lg:static lg:p-0 lg:w-auto">
                    <ul class="block lg:flex gap-2 items-center">
                       <li v-for="item in getNav" :key="item" @click="navLink">
                        <router-link :to="item.path" class="nav-link">
                            {{ item.name }}
                        </router-link>
                       </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.router-link-active {
    @apply text-brand-4 font-semibold lg:border-b-2 border-brand-2 bg-brand-1 lg:bg-transparent lg:text-brand-1;
}

.menu.hidden{
    @apply opacity-0 lg:opacity-100 ;
}
.menu{
    @apply  opacity-100;
}
.menu li a {
    @apply px-2 py-2 block hover:bg-brand-1 lg:hover:bg-transparent hover:text-brand-4 lg:py-5 lg:hover:border-b-2 lg:hover:text-brand-2 active:text-brand-2 border-brand-3 duration-300;
}
</style>