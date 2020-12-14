/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import { useField } from 'formik';
import { FormGroup, Form } from 'react-bootstrap';

const MyTextInput = (props) => {
  const [field, meta] = useField(props);

  const {
    id, name, label, alert,
  } = props;

  return (
    <FormGroup>
      {label && <Form.Label htmlFor={id || name}>{label}</Form.Label>}
      <Form.Control className="text-input" {...field} {...props} />
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

export { MyTextInput };
