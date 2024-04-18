<script setup>
import { computed, ref, watch, onMounted } from 'vue';
import { useTukStore } from '../stores/tuk-store.js'
const tukStore = useTukStore()

const items = ref([]);
const currentPage = ref(1);
const itemsPerPage = 10;
const maxVisiblePages = 5;
const dataLoaded = ref(false);

onMounted(() => {
    items.value = tukStore.tuk;
    dataLoaded.value = true;
});

const paginatedData = computed(() => {
    if (!dataLoaded.value) return [];
    const start = (currentPage.value - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const filteredItems = items.value.filter(item => item.nama.toLowerCase().includes(tukStore.searchQuery.toLowerCase()));
    return filteredItems.slice(start, end);
});

const totalPages = computed(() => {
    if (!dataLoaded.value) return 0;
    const filteredItems = items.value.filter(item => item.nama.toLowerCase().includes(tukStore.searchQuery.toLowerCase()));
    return Math.ceil(filteredItems.length / itemsPerPage);
});

const visiblePages = computed(() => {
    if (!dataLoaded.value) return [];
    const start = Math.max(1, currentPage.value - Math.floor(maxVisiblePages / 2));
    const end = Math.min(totalPages.value, start + maxVisiblePages - 1);
    const pagesArray = [];
    for (let i = start; i <= end; i++) {
        pagesArray.push(i);
    }
    return pagesArray;
});

const prevPage = () => {
    if (currentPage.value > 1) {
        currentPage.value--;
    }
};

const nextPage = () => {
    if (currentPage.value < totalPages.value) {
        currentPage.value++;
    }
};

const goToPage = (page) => {
    currentPage.value = page;
};

watch(tukStore.searchQuery, () => {
    currentPage.value = 1;
});

</script>
<template>

        <div class="flex justify-end mb-6">
            <input type="search" v-model="tukStore.searchQuery" class="form-control max-w-72" placeholder="Cari Tempat">
        </div>


    <div class="relative overflow-x-auto">

        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        Nama
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Ketua
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Alamat
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Telepon
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Email
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr class="bg-white border-b" v-for="(item, index) in paginatedData" :key="index">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {{ item.nama }}
                    </th>
                    <td class="px-6 py-4">
                        {{ item.ketua }}
                    </td>
                    <td class="px-6 py-4">
                        {{ item.alamat }}
                    </td>
                    <td class="px-6 py-4">
                        {{ item.telepon }}
                    </td>
                    <td class="px-6 py-4">
                        {{ item.email }}
                    </td>
                </tr>

            </tbody>
        </table>
    </div>

    <div>
        
        <div class="max-w-screem-md mx-auto text-center pt-10 pb-20">
            <ul class="pagination inline-flex max-w-max mx-auto">
                <li @click="goToPage(1)" :class="{ disabled: currentPage === 1 || !dataLoaded }">First</li>
                <li @click="prevPage" :class="{ disabled: currentPage === 1 || !dataLoaded }">Previous</li>
                <li class="number" @click="goToPage(page)" v-for="page in visiblePages" :key="page"
                    :class="{ active: currentPage === page || !dataLoaded }">{{ page }}</li>
                <li @click="nextPage" :class="{ disabled: currentPage === totalPages || !dataLoaded }">Next</li>
                <li @click="goToPage(totalPages)" :class="{ disabled: currentPage === totalPages || !dataLoaded }">Last
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
.pagination li {
    @apply cursor-pointer flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white;
}

.pagination li.number {
    @apply hidden lg:flex;
}

.pagination li:first-child {
    @apply flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white;
}

.pagination li:last-child {
    @apply flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white;
}

.pagination li.disabled {
    pointer-events: none;
    opacity: 0.5;
}

.pagination li.active {
    @apply font-bold text-brand-2;
}
</style>