import OpenWeatherMap from "openweathermap-ts";
import { API_KEY } from "../data/weatherKey";

const openWeather = new OpenWeatherMap({
  apiKey: API_KEY,
});

openWeather.setUnits("metric");

export default openWeather;
