const validate = (values) => {
  const formErrors = {};

  if (!values.email) {
    formErrors.email = 'Obligatoire';
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
  ) {
    formErrors.email = 'Adresse email invalide';
  }

  if (!values.password) {
    formErrors.password = 'Obligatoire';
  } else if (values.password.length < 6) {
    formErrors.password = 'Doit avoir 6 caractères ou plus';
  }

  return formErrors;
};

export default validate;
