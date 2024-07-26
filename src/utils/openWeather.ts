import OpenWeatherMap from "openweathermap-ts";

const apiKey = process.env.REACT_APP_API_KEY!;

if (!apiKey) {
  throw new Error('API key is missing');
}

const openWeather = new OpenWeatherMap({
  apiKey
});

openWeather.setUnits("metric");

export default openWeather;
