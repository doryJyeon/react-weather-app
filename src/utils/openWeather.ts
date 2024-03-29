import OpenWeatherMap from "openweathermap-ts";

const openWeather = new OpenWeatherMap({
  apiKey: "38ed115b93a87e864e8e9d52981c3842",
});

openWeather.setUnits("metric");

export default openWeather;
