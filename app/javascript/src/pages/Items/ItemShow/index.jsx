import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  Col, Row, Container, Button
} from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
import { find } from '../../../api/api-manager';

import ItemInformations from './Informations';
import ItemImage from './Image';
import { UpdateItemButton } from '../../../components/ItemCard/ItemButtons';

const Item = () => {
  const { currentUserId } = useSelector((state) => state);
  const { item_id } = useParams();
  const [item, setItem] = useState({});
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    find(`items/${item_id}`, {
      authRequired: false,
      onError: (error) => console.log(error),
      onErrors: (errors) => console.log(errors),
      onSuccess: (result) => setItem(result),
    });
  }, []);

  const showAlert = () => {
    setAlert(true)
    window.setTimeout(()=>{
      setAlert(false)
    }, 2000)
  }

  return (
    <Container fluid>
      <Alert variant='success' show={alert} >
        Le produit { item.name } a été ajouté à votre panier
      </Alert>
      <Row className="m-5 p-2">
        <Col sm={5}>
          <ItemImage item={item} style={{ hight: 100 }} />
        </Col>
        <Col sm={6} className="p-5" style={{ backgroundColor: 'white' }}>
          <ItemInformations item={item} alert={showAlert} />
        </Col>
      </Row>
      { currentUserId === item?.shop?.shopkeeper_id && (
        <Row className="p-5">
          <UpdateItemButton item={item} />
        </Row>
      )}
    </Container>
  );
};

export default Item;
