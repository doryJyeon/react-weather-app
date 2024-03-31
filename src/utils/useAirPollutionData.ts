import { API_KEY } from './openWeather';
import { useParams } from 'react-router-dom';
import { useState, useEffect, FC } from 'react';
import useWeather from './useWeather';


// air icon trans
const getAirCondition = (aqi: number) => {
  // 1~5단계, 4단계 이후 mask로 통일함
  const conditionArr = ["best", "good", "bad", "mask"];
  return (aqi > 3 ? conditionArr[3] : conditionArr[aqi - 1]);
}

interface Props {
  components: [string, number],
  fineAir: string,
  temp: number
}

const useAirPollutionData = () => {
  const { id } = useParams();
  const { data, isLoading } = useWeather(id ? `${id}` : "seoul");
  const [airData, setAirData] = useState<Props | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({});

  useEffect(() => {
    if(data && !isLoading) {
      const url = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${data.coord.lat}&lon=${data.coord.lon}&appid=${API_KEY}`;
      const temp = data.main.temp;

      const fetchData = async () => {
        setLoading(true);
        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const getData = await response.json();
          const fineAir = getAirCondition(getData.list[0].main.aqi);
          setAirData({components: {...getData.list[0].components}, fineAir, temp});
        } catch (error: any) {
          console.log(error)
          setError(error);
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }
  }, [data, isLoading]);

  return { airData, loading, error };
};

export default useAirPollutionData;