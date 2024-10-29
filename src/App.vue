<template>
  <div>
    <Search @search-city="fetchWeatherForCity" />

    <WeatherDisplay 
      v-if="weatherData" 
      :city="cityName" 
      :temperature="weatherData.temperature" 
      :humidity="weatherData.humidity"
      :windSpeed="weatherData.wind_speed"
      @add-favorite="saveFavorite"
    />

    <FavoritesList :favorites="favorites" @remove-favorite="removeFavorite" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Search from './components/Search.vue';
import WeatherDisplay from './components/WeatherDisplay.vue';
import FavoritesList from './components/FavoritesList.vue';
import { getWeatherData } from './services/weatherService';

const cityName = ref('');
const weatherData = ref(null);
const favorites = ref(JSON.parse(localStorage.getItem('favorites') || '[]'));

async function fetchWeatherForCity(city) {
  cityName.value = city;
  let latitude, longitude;
  
  if (city.toLowerCase() === "roma") {
    latitude = 41.9028;
    longitude = 12.4964;
  } else if (city.toLowerCase() === "milano") {
    latitude = 45.4642;
    longitude = 9.1900;
  } else if (city.toLowerCase() === "napoli") {
    latitude = 40.8518;
    longitude = 14.2681;
  } else {
    alert("Città non trovata. Prova con Roma, Milano o Napoli.");
    return;
  }

  weatherData.value = await getWeatherData(latitude, longitude);
}

function saveFavorite() {
  if (!favorites.value.includes(cityName.value)) {
    favorites.value.push(cityName.value);
    localStorage.setItem('favorites', JSON.stringify(favorites.value));
  }
}

function removeFavorite(city) {
  favorites.value = favorites.value.filter(fav => fav !== city);
  localStorage.setItem('favorites', JSON.stringify(favorites.value));
}

onMounted(() => {
  favorites.value = JSON.parse(localStorage.getItem('favorites') || '[]');
});
</script>
