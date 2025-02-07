import React from 'react'
import Banner from './Banner'
import TopSeller from './TopSeller'
import Recommended from './Recommended'
import News from './News'
import Services from './Services'
import UpcomingEvents from './Events'

const Home = () => {
  return (
    <>
        <Banner/>
        <TopSeller/>
        <Recommended/>
        <Services/>
        <UpcomingEvents/>
        <News/>
    </>
  )
}

export default Home