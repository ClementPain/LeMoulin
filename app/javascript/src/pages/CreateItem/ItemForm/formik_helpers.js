import React from 'react'
import { useField, ErrorMessage } from 'formik';
import { Form, FormGroup, FormLabel } from 'react-bootstrap';

const MyTextField = ({placeholder, type, ...props}) => {
  const [field, meta] = useField(props);
  const errorText = meta.error & meta.touched ? meta.error : '';
  
  return (
    <FormGroup className="m-3">
      <Form.Control type={type} placeholder={placeholder} {...field} />
      <ErrorMessage {...field} className="alert alert-danger" />
    </FormGroup>
  )
}

const MyNumberField = ({type, min, max, label, ...props}) => {
  const [field, meta] = useField(props);
  const errorText = meta.error & meta.touched ? meta.error : '';
  
  return (
    <FormGroup className="m-3">
      <Form.Control
        label={label}
        type={type}
        min={min}
        max={max}
        {...field}
      />
      <ErrorMessage {...field} className="alert alert-danger" />
    </FormGroup>
  )
}

const MyCheckboxField = ({type, label, checked, ...props}) => {
  const [field, meta] = useField(props);
  const errorText = meta.error & meta.touched ? meta.error : '';
  
  return (
    <FormGroup className="m-3">
      <Form.Check
        label={label}
        type={type}
        checked={checked}
        {...field}
      />
      <ErrorMessage {...field} className="alert alert-danger" />
    </FormGroup>
  )
}

const validation = (values) => {
  const formErrors = {};

  if (!values.name) {
    formErrors.name = "Votre produit a besoin d'un nom !";
  } else if (values.name.length < 3) {
    formErrors.name = "Le nom de votre produit fait moins de 3 caractères";
  } else if (values.name.length > 80) {
    formErrors.name = "Le nom de votre produit fait plus de 80 caractères";
  }


  if (!values.description) {
    formErrors.description = "Votre produit a besoin d'une description !";
  } else if (values.description.length < 5) {
    formErrors.description = "Le nom de votre produit fait moins de 5 caractères";
  } else if (values.description.length > 500) {
    formErrors.description = "Le nom de votre produit fait plus de 500 caractères";
  }

  if (!values.price) {
    console.log(values.price)
    formErrors.price = "Votre produit n'a pas de prix !"
  } else if (values.price < 0) {
    formErrors.price = "Le prix est négatif !"
  } else if (!/^\d{0,8}(\.\d{1,4})?$/.test(values.price)) {
    formErrors.price = "Le prix a plus de deux décimales !"
  } else if (values.price > 9999999.99) {
    formErrors.price = "Le prix est trop élevé !"
  }

  if (!values.stock) {
    formErrors.stock = "Le stock de votre produit n'est pas renseigné !"
  } else if (values.stock < 0) {
    formErrors.stock = "Le stock est négatif !"
  } else if (!/^\d{0,8}$/.test(values.stock)) {
    formErrors.stock = "Votre produit n'est pas une fraction !"
  }

  return formErrors;
}

export { validation, MyTextField, MyNumberField, MyCheckboxField }