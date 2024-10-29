import axios from 'axios';

export const getWeatherData = async (city) => {
  const response = await axios.get(`https://api.open-meteo.com/v1/forecast?city=${city}&hourly=temperature_2m`);
  return response.data;
};
