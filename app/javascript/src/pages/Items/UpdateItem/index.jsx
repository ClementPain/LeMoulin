import React, { useState, useEffect } from 'react';
import {
  Container, Row, Card, Col,
} from 'react-bootstrap';
import { useParams, Redirect } from 'react-router-dom';
import { find, update } from '../../../api/api-manager';
import { DeleteItemButton } from '../../../components/ItemCard/ItemButtons';

import ItemForm from '../../../components/ItemForm';

const UpdateItem = () => {
  const { item_id } = useParams();
  const [item, setItem] = useState(null);
  const [redirect, setRedirect] = useState(null);

  useEffect(() => {
    find(`items/${item_id}`, {
      authRequired: false,
      onError: (error) => console.log(error),
      onErrors: (errors) => console.log(errors),
      onSuccess: (result) => setItem(result),
    });
  }, []);

  const handleSubmit = (data, uploadItemImage, setRedirect, shop_id, setAlert, itemImage) => {
    update(`items/${item_id}`, {
      data,
      onSuccess: () => {
        if (itemImage) uploadItemImage(item_id, item.shop_id, setRedirect);
        if (!itemImage) setRedirect(`/shop/${shop_id}/item/${item_id}`);
      },
      onError: (error) => setAlert(error),
      onErrors: (errors) => setAlert(errors),
    });
  };

  const initialValues = (item) => {
    const initial_values = {
      name: item.name,
      description: item.description,
      price: item.price,
      stock: item.stock,
      is_available_for_sale: item.is_available_for_sale || false,
      image_url: '',
    };

    return initial_values;
  };

  if (!item) return <p>Chargement</p>;
  if (redirect) return <Redirect to={redirect} />;

  return (
    <Container fluid className="mt-5">
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Card>
            <Card.Header className="bg-primary">
              <h5 className="text-white text-center">
                Modifier le produit
                {' '}
                {item?.name}
              </h5>
            </Card.Header>
            <Card.Body className="px-4">
              <ItemForm
                handleSubmit={handleSubmit}
                initialValues={initialValues(item)}
                createItem={false}
              />
              <Row className="justify-content-end">
                <DeleteItemButton item={item} redirection={() => setRedirect(`/shop/${item.shop_id}/list_items`)} />
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default UpdateItem;
