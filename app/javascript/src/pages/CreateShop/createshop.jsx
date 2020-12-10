import React from 'react';


import {
  Container, Row, Col, Card, FormGroup, FormLabel, Button, 
} from 'react-bootstrap';

import CreateShopFormComponent from '../../components/CreateShopForm'





const CreateShopComponent = () => (

<Container>
  <Card>
    <h1>Create a shop</h1>
    <p>
      Please fill all the fields
    </p>

  <CreateShopFormComponent/>

  </Card>

</Container>



);

export default CreateShopComponent;






