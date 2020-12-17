const validationItemPriceAndStock = (values) => {
  const formErrors = {};

  if (!values.price) {
    formErrors.price = "Votre produit n'a pas de prix !";
  } else if (values.price < 0) {
    formErrors.price = 'Le prix est négatif !';
  } else if (values.price > 9999999.99) {
    formErrors.price = 'Le prix est trop élevé !';
  } else if (!/^\d{0,8}(\.\d{1,4})?$/.test(values.price)) {
    formErrors.price = 'Le prix a plus de deux décimales !';
  }

  if (!values.stock) {
    formErrors.stock = "Le stock de votre produit n'est pas renseigné !";
  } else if (values.stock < 0) {
    formErrors.stock = 'Le stock est négatif !';
  } else if (values.stock > 9999999) {
    formErrors.price = 'Le stock est trop élevé !';
  } else if (!/^\d{0,8}$/.test(values.stock)) {
    formErrors.stock = "Votre produit n'est pas une fraction !";
  }

  return formErrors;
};

export default validationItemPriceAndStock;