/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import { useField } from 'formik';
import { FormGroup, Form } from 'react-bootstrap';

const MyTextInput = (props) => {
  const [field, meta] = useField(props);

  const {
    label,
    type,
    name,
    placeholder,
    alert,
  } = props;

  return (
    <FormGroup>
      {label && <Form.Label htmlFor={name}>{label}</Form.Label>}
      <Form.Control className="text-input" {...field} type={type} name={name} placeholder={placeholder} />
      {
        meta.touched && meta.error
          ? (<div className="text-danger">{meta.error}</div>)
          : null
      }
      {
        alert && alert[name]
        && (<div className="text-danger">{alert[name].join(', ')}</div>)
      }
    </FormGroup>
  );
};

const MySelect = (props) => {
  const {
    label,
    name,
    alert,
  } = props;

  const [field, meta] = useField(props);
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <select {...field} {...props} />
      {
        meta.touched && meta.error
          ? (<div className="error">{meta.error}</div>)
          : null
      }
      {
        alert && alert[name]
        && (<div className="text-danger">{alert[name].join(', ')}</div>)
      }
    </div>
  );
};

export { MyTextInput, MySelect };
