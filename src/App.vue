<template>
  <div>
    <select v-model="selectedCity" @change="fetchWeatherForCity">
      <option disabled value="">Seleziona una città</option>
      <option v-for="city in cityList" :key="city.name" :value="city">
        {{ city.name }}
      </option>
    </select>

    <WeatherDisplay 
      v-if="weatherData" 
      :city="selectedCity.name" 
      :temperature="weatherData.temperature" 
      :humidity="weatherData.humidity"
      :windSpeed="weatherData.wind_speed"
    />

    <FavoritesList :favorites="favorites" @remove-favorite="removeFavorite" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import WeatherDisplay from './components/WeatherDisplay.vue';
import FavoritesList from './components/FavoritesList.vue';
import { getWeatherData } from './services/weatherService';

const cityList = ref([
  { name: 'Roma', latitude: 41.9028, longitude: 12.4964 },
  { name: 'Milano', latitude: 45.4642, longitude: 9.1900 },
  { name: 'Napoli', latitude: 40.8518, longitude: 14.2681 },
  // Aggiungi altre città come preferisci
]);

const selectedCity = ref(null);
const weatherData = ref(null);
const favorites = ref(JSON.parse(localStorage.getItem('favorites') || '[]'));

async function fetchWeatherForCity() {
  if (selectedCity.value) {
    const { latitude, longitude } = selectedCity.value;
    weatherData.value = await getWeatherData(latitude, longitude);
  }
}

function removeFavorite(city) {
  favorites.value = favorites.value.filter(fav => fav !== city);
  localStorage.setItem('favorites', JSON.stringify(favorites.value));
}
</script>
