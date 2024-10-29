import axios from 'axios';

export const getWeatherData = async (latitude, longitude) => {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m&timezone=auto`;
  
  const response = await axios.get(url);
  const data = response.data.hourly || {};
  
  return {
    temperature: data.temperature_2m ? data.temperature_2m[0] : null,
    humidity: data.relative_humidity_2m ? data.relative_humidity_2m[0] : null, 
    wind_speed: data.wind_speed_10m ? data.wind_speed_10m[0] : null
  };
};
