import React from 'react'

import ShopCategoriesList from '../../components/ShopCategoriesList'
import ShopsList from '../../components/ShopsList'

import Jumborton from "./jumborton";


const Home = () => (
  <div>
    <Jumborton />
    <ShopCategoriesList />
    <ShopsList />
  </div>
)

export default Home;
