import React from 'react'
import TopSeller from './TopSeller'
import Recommended from './Recommended'
import ShopBanner from './ShopBanner'

const Shop = () => {
  return (
    <>
        <ShopBanner/>
        <TopSeller/>

        <Recommended/>
    </>
  )
}

export default Shop