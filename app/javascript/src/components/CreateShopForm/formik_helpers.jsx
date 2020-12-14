import React, {useState, useEffect} from 'react';
import { useField, ErrorMessage } from 'formik';
import { Form, FormGroup, FormLabel, FormControl } from 'react-bootstrap';
import {
  Col, Button, Row,
} from 'react-bootstrap';

import { find } from '../../api/api-manager';


const MyTextField = ({ placeholder, type, ...props }) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : '';

  return (
    <FormGroup className="m-3">
      <Form.Control type={type} placeholder={placeholder} {...field} />
      <ErrorMessage {...field} className="alert alert-danger" />
    </FormGroup>
  );
};

const MyCategoriesField = ({ type, ...props }) => {
const [field, meta] = useField(props);
const errorText = meta.error && meta.touched ? meta.error : '';
const [shopCategories, setShopCategories] = useState({
  shop_category_ids: ''
});

const [categories, setCategories] = useState();


useEffect(
  () => find('shop_categories', {
    onSuccess: (shopCategories) => setCategories(shopCategories),
  }),
  [],
);



return (
      <FormGroup as={Row}>
        <Col md={5}>
          <FormLabel>Sélectionner des catégories</FormLabel>
          <FormControl
            as={type}
            onChange={(event) => {
              const { options } = event.target;
              const shop_category_ids = [...options].reduce(
                (acc, { selected, value }) => (selected ? [...acc, value] : acc), [],
              ).join(',');
              console.log(shopCategories);
              setShopCategories({ ...field, shop_category_ids });
            }}
            multiple
            >
              {
                categories && (
                  categories.map(({ id, title }) => <option key={id} value={id}>{title}</option>)
                )
              }

          </FormControl>
        </Col>
      </FormGroup>
  );
};

export {
 MyTextField, MyCategoriesField
};