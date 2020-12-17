const validate = (values) => {
  const formErrors = {};

  if (!values.email) {
    formErrors.email = 'Obligatoire';
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
  ) {
    formErrors.email = 'Adresse email invalide';
  }

  if (!values.current_password) {
    formErrors.current_password = 'Obligatoire';
  } else if (values.current_password.length < 6) {
    formErrors.current_password = 'Doit avoir 6 caractères ou plus';
  }

  if (values.password && values.password.length < 6) {
    formErrors.password = 'Doit avoir 6 caractères ou plus';
  }

  if (values.password && !values.password_confirmation) {
    formErrors.password_confirmation = 'Obligatoire';
  } else if (values.password_confirmation && values.password_confirmation.length < 6) {
    formErrors.password_confirmation = 'Doit avoir 6 caractères ou plus';
  }

  if (values.password_confirmation && (values.password !== values.password_confirmation)) {
    formErrors.password_confirmation = 'Ne correspond pas au champ mot de passe';
  }

  return formErrors;
};

export default validate;
