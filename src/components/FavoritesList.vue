<template>
    <div>
      <h3>Città Preferite</h3>
      <ul>
        <li v-for="city in favorites" :key="city">
          {{ city }}
          <button @click="removeFavorite(city)">Rimuovi</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { defineProps, defineEmits } from 'vue';
  
  const props = defineProps({
    favorites: Array
  });
  
  const emit = defineEmits(['remove-favorite']);
  
  function removeFavorite(city) {
    emit('remove-favorite', city);
  }
  </script>
  