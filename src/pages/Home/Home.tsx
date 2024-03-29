import React from 'react'
import Header from '../../components/Header'
import ThisDay from '../../components/ThisDay'
import ThisDayInfo from '../../components/ThisDayInfo'
import AllDays from '../../components/AllDays'

import { HomeWrapper, ThisDayBlock } from './styles'

const Home = () => {
  return (
    <HomeWrapper>
      <Header />
      <ThisDayBlock>
        <ThisDay />
        <ThisDayInfo />
      </ThisDayBlock>
      <AllDays />
    </HomeWrapper>
  )
}

export default Home