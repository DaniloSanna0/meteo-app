<template>
    <input v-model="city" @keyup.enter="search" placeholder="Inserisci città" />
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const city = ref('');
  
  function search() {
    emit('search-city', city.value);
    city.value = '';
  }
  
  const emit = defineEmits(['search-city']);
  </script>
  