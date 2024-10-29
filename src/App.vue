<template>
  <div>
    <Search @search-city="fetchWeather" />
    <WeatherDisplay v-if="weatherData" :weather="weatherData" />
    <FavoritesList :favorites="favorites" @remove-favorite="removeFavorite" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Search from './components/Search.vue';
import WeatherDisplay from './components/WeatherDisplay.vue';
import FavoritesList from './components/FavoritesList.vue';
import { getWeatherData } from './services/weatherService';

const weatherData = ref(null);
const favorites = ref([]);

async function fetchWeather(city) {
  weatherData.value = await getWeatherData(city);
}

function saveFavorite(city) {
  if (!favorites.value.includes(city)) {
    favorites.value.push(city);
    localStorage.setItem('favorites', JSON.stringify(favorites.value));
  }
}

onMounted(() => {
  favorites.value = JSON.parse(localStorage.getItem('favorites') || '[]');
});

function removeFavorite(city) {
  favorites.value = favorites.value.filter(fav => fav !== city);
  localStorage.setItem('favorites', JSON.stringify(favorites.value));
}
</script>
