import React from 'react'

import ShopCategoriesList from '../../components/ShopCategoriesList'
import ShopsList from '../../components/ShopsList'

import Jumborton from "./jumborton";

import { Container } from 'react-bootstrap'

const Home = () => (
  <Container fluid>
    <Jumborton />
    <ShopCategoriesList />
    <ShopsList />
  </Container>
)

export default Home;
