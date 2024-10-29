<template>
  <div>
    <h3>Città Preferite</h3>
    <ul>
      <li v-for="city in favorites" :key="city">
        {{ city }}
        <button @click="$emit('remove-favorite', city)">Rimuovi</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
const props = defineProps({
  favorites: Array
});
</script>
