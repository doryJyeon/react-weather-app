import React from "react";
import { useParams } from "react-router-dom";
import CurrentTime from "./CurrentTime";
import { Bottom, ThisDayWrapper, Top } from "./style";
import useWeather from "../../utils/useWeather";

const ThisDay: React.FC = () => {
  const { id } = useParams();

  const { data, isLoading } = useWeather(id ? `${id}` : "seoul");

  const temperature = Math.round(data?.main.temp || 0);
  const cityName = data?.name;

  // weather icons
  const weatherIcon = data?.weather[0].main;
  const weatherId = data?.weather[0].id;
  let imageSrc = "./images/weatherIcons/";

  switch(weatherIcon) {
    case "Clear": imageSrc += "clear-sky";
      break;
    case "Clouds": ((weatherId || 0) >= 803? imageSrc += "broken-clouds" : imageSrc += "few-clouds")
      break;
    case "Atmosphere": imageSrc += "mist";
      break;
    case "Mist": imageSrc += "mist";
      break;
    case "Rain": ((weatherId || 0) > 505? imageSrc += "shower-rain" : imageSrc += "rain");
      break;
    case "Snow": imageSrc += "snow";
      break;
    case "Thunderstorm": imageSrc += "thunderstorm";
      break;
    default: imageSrc += "few-clouds";
  }
  imageSrc += ".svg";

  return (
    <ThisDayWrapper>
      {isLoading ? (
        "Loading..."
      ) : (
        <>
          <Top>
            <div>
              <h2>{temperature}°</h2>
              <h3>Now</h3>
            </div>
            <img src={imageSrc} alt="" />
          </Top>
          <Bottom>
            <CurrentTime />
            <div>
              {cityName} - {data?.sys.country}
            </div>
          </Bottom>
        </>
      )}
    </ThisDayWrapper>
  );
};

export default ThisDay;
