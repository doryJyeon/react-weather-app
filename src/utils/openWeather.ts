import OpenWeatherMap from "openweathermap-ts";

export const API_KEY = "38ed115b93a87e864e8e9d52981c3842";

const openWeather = new OpenWeatherMap({
  apiKey: API_KEY,
});

openWeather.setUnits("metric");

export default openWeather;
