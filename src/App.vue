<script setup>
import Navbar from './components/element/Navbar.vue';


</script>
<template>
  <header>
<Navbar />
  </header>
  <div>
    <router-view></router-view>
  </div>
</template>
<style >
:root{
    --dp-border-radius:0.5rem !important;
    --dp-cell-border-radius:0.5rem !important;
    --dp-input-padding: 0.625rem !important;
    --dp-action-buttons-padding: 0.625rem !important;
}

</style>