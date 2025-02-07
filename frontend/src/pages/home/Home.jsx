import React from 'react'
import Banner from './Banner'
import TopSeller from './TopSeller'
import News from './News'
import Services from './Services'
import UpcomingEvents from './Events'

const Home = () => {
  return (
    <>
        <Banner/>
        <TopSeller/>
        <Services/>
        <UpcomingEvents/>
        <News/>
    </>
  )
}

export default Home