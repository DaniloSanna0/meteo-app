<template>
  <div v-if="city && temperature !== null">
    <h3>Meteo per {{ city }}</h3>
    <p>Temperatura: {{ temperature }}°C</p>
    <p>Umidità: {{ humidity }}%</p>
    <p>Velocità del Vento: {{ windSpeed }} km/h</p>
    <button @click="addToFavorites">Aggiungi ai Preferiti</button>
  </div>
</template>

<script setup>
const props = defineProps({
  city: String,
  temperature: Number,
  humidity: Number,
  windSpeed: Number
});

const emit = defineEmits(['add-favorite']);

function addToFavorites() {
  emit('add-favorite', props.city);
}
</script>
