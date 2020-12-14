const validate = (values) => {
  const formErrors = {};

  if (
    !/(([0-8][0-9])|(9[0-5])|(2[ab]))[0-9]{3}/i.test(values.zip_code)
  ) {
    formErrors.zip_code = 'Merci de rentrer un code postal français valide';
  }

  return formErrors;
};

export default validate;
