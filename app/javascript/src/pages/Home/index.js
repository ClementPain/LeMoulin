import React from 'react'
import ShopCategoriesList from '../../components/ShopCategoriesList'
import ShopsList from '../../components/ShopsList'

import { Container } from 'react-bootstrap'

const Home = () => (
  <Container fluid>
    <ShopCategoriesList />
    <ShopsList />
  </Container>
)

export default Home;
