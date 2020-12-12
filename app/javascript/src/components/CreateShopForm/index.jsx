import React, {useState, useEffect} from 'react';
import {
  Container, Row, Col, Card, FormGroup, FormLabel, Button, 
} from 'react-bootstrap';
import {Formik} from 'formik';
import Form from 'react-bootstrap/Form';
import {create} from '../../api/api-manager';



const CreateShopFormComponent = () => {

const [newshop, setNewshop] = useState({});
const handleSubmit = () => setAlert(null);
const [alert, setAlert] = useState(null);


const handleNewShopCreation = (params) => {
  console.log( 'Fetch Handle: ', params)
  create('shops', {data: params})
}
const errors = {};

useEffect(
  () => {
    setAlert(errors);
  },
  [],
);

  return (
    
    <Formik
    initialValues={ { 
      name: '',
      description: '',
      address: '',
      city: '',
      zip_code:'',
      is_active: false,
    } }
    validate={(values) => {

      if (!values.name) {
        errors.name = 'Required';
      } else 
       {
        errors.name = 'Invalid name';
      }

      if (!values.description) {
        errors.description = 'Required';
      } 
      
      if (!values.address) {
        errors.address = 'Required';
      }
      
      if (!values.zip_code) {
        errors.zip_code = 'Required';
      }  

      return errors;
    }}
    onSubmit={(values, { setSubmitting }) => {
      setSubmitting(false);
      handleSubmit(values);
    }}
  >
      {({
        handleBlur,
        errors,
        touched,
        isSubmitting,
      }) => (
      <Form noValidate onSubmit={handleSubmit}>
      <Form.Row>
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>Name</Form.Label>
          <Form.Control 
            type="name" 
            placeholder="Enter name"  
            onBlur={handleBlur}
            value ={newshop.name}
            onChange={(event) => setNewshop({ ...newshop, name: event.target.value })}
          />
           {console.log(errors.name) && alert?.errors && alert.errors.name }
        </Form.Group>

      </Form.Row>

      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description</Form.Label>
        <Form.Control 
          as="textarea" 
          rows={3} 
          onBlur={handleBlur}
          value ={newshop.description}
          onChange={(event) => setNewshop({ ...newshop, description: event.target.value })}
        />
          {errors.description && touched.description && errors.description}
        </Form.Group>

        <Form.Group controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control 
          placeholder="1234 Main St" 
          onBlur={handleBlur}
          value ={newshop.address}
          onChange={(event) => setNewshop({ ...newshop, address: event.target.value })}
        />
        {errors.address && touched.address && errors.address}
      </Form.Group>

      <Form.Row>
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control 
            value ={newshop.city}
            onBlur={handleBlur}
            onChange={(event) => setNewshop({ ...newshop, city: event.target.value })}
          />
        {errors.city && touched.city && errors.city}
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control 
            value ={newshop.zip_code}
            onBlur={handleBlur}
            onChange={(event) => setNewshop({ ...newshop, zip_code: event.target.value })}
          />
        {errors.zip_code && touched.zip_code && errors.zip_code}
        </Form.Group>
      </Form.Row>

      <Form.Group id="formGridCheckbox">
        <Form.Check 
          type="checkbox" 
          label="Active" 
          value ={newshop.is_active}
          onChange={(event) => setNewshop({ ...newshop, is_active: !newshop.is_active })}
        />
      </Form.Group>

      <Button variant="primary"
          type="submit" 
          disabled={isSubmitting} 
          onClick = { (e) => 
            handleNewShopCreation(newshop)
          } 
      >
          Submit
      </Button>
      </Form>
      )}
    </Formik>
    )
};

export default CreateShopFormComponent;
