<template>
    <div v-if="weather">
      <h3>Meteo per {{ weather.city_name }}</h3>
      <p>Temperatura: {{ weather.temperature }}°C</p>
      <p>Umidità: {{ weather.humidity }}%</p>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  const props = defineProps({
    weather: Object
  });
  </script>
  