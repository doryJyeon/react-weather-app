import React from "react";
import { useParams } from "react-router-dom";
import useWeather from "../../utils/useWeather";
import { ThisDayInfoWrapper, ImgWrapper } from "./styles";

// array  of Categories names
const nameInfo = ["온도", "기압", "습도", "바람"];

// array of Categories images
const imgInfo = [
  "./images/temperature.svg",
  "./images/pressure.svg",
  "./images/humidity.svg",
  "./images/wind.svg",
];

const ThisDayInfo: React.FC = () => {
  const { id } = useParams();
  const { data } = useWeather(id ? `${id}` : "seoul");

  // array of Categories results
  const temp = `${Math.round(data?.main.temp || 0)}°C feels like ${Math.round(
    data?.main.feels_like || 0
  )}°C`;
  const pressureMetric = Math.round((data?.main.pressure || 0) / 1.333);
  const pressure = `${pressureMetric} mmHg  - ${
    pressureMetric < 748 ? "low" : pressureMetric > 770 ? "high" : "normal"
  }`;
  const humidity = `${data?.main.humidity} %`;
  const wind = `${Math.round((data?.wind.speed || 0) * 10)} mph`;
  const dataInfo = [temp, pressure, humidity, wind];

  return (
    <ThisDayInfoWrapper>
      <div>
        {imgInfo.map((img) => (
          <ImgWrapper>
            <img src={img} alt="" />
          </ImgWrapper>
        ))}
      </div>
      <div>
        {nameInfo.map((inf) => (
          <h2>{inf}</h2>
        ))}
      </div>

      <div>
        {dataInfo.map((info) => (
          <p>{info}</p>
        ))}
      </div>
    </ThisDayInfoWrapper>
  );
};

export default ThisDayInfo;
