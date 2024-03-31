import { useParams } from 'react-router-dom';
import useWeather from '../../utils/useWeather';
import Header from '../../components/Header'
import FineAir from './../../components/FineAir/index';
import ThisDay from '../../components/ThisDay'
import ThisDayInfo from '../../components/ThisDayInfo'
import AllDays from '../../components/AllDays'
import TempClothes from '../../components/TempClothes';

import { HomeWrapper, ThisDayBlock } from './styles'

const Home = () => {
  const { id } = useParams();
  const { data } = useWeather(id ? `${id}` : "seoul");
  
  return (
    <HomeWrapper>
      <Header />
      <FineAir />
      <ThisDayBlock>
        <ThisDay />
        <ThisDayInfo />
      </ThisDayBlock>
      {data && <TempClothes tempMin={data.main.temp_min} tempMax={data.main.temp_max}/>}
      <AllDays />
    </HomeWrapper>
  )
}

export default Home