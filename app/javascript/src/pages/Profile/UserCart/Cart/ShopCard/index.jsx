import React from 'react';
import { Row, Col } from 'react-bootstrap';

import ItemCard from './ItemCard'

const ShopCard = ({shop, items}) => (
  <Row className='border'>
    <h3>
      Vos articles auprès de { shop.name } ({ shop.zip_code } - { shop.city })          
    </h3>

    { Object.keys(items).map( (item_id) => (
      <Row key={item_id} className='w-100'>
        <ItemCard item={items[item_id]} />
      </Row>
    ))}
  </Row>
)

export default ShopCard;