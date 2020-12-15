const validation_shop_form = (values) => {
  const formErrors = {};

  if (!values.name) {
    formErrors.name = "Votre boutique a besoin d'un nom !";
  } else if (values.name.length < 3) {
    formErrors.name = 'Le nom de votre boutique fait moins de 3 caractères';
  } else if (values.name.length > 80) {
    formErrors.name = 'Le nom de votre boutique fait plus de 80 caractères';
  }

  if (!values.description) {
    formErrors.description = "Votre boutique a besoin d'une description !";
  } else if (values.description.length < 5) {
    formErrors.description = 'La description de votre boutique fait moins de 5 caractères';
  } else if (values.description.length > 800) {
    formErrors.description = 'La description de votre boutique fait plus de 800 caractères';
  }

  if (!values.siret) {
    formErrors.siret = "Votre boutique n'a pas de siret !";
  }

  if (!values.address) {
    formErrors.address = "Votre boutique a besoin d'une adresse !";
  } else if (values.address.length < 5) {
    formErrors.address = "L'adresse de votre boutique fait moins de 5 caractères";
  } else if (values.address.length > 100) {
    formErrors.address = "L'adresse de votre boutique fait plus de 100 caractères";
  }

  if (!values.city) {
    formErrors.city = "Indiquez une ville pour votre boutique";
  } else if (values.city.length < 3) {
    formErrors.city = 'Le nom de la ville fait moins de 3 caractères';
  } else if (values.city.length > 80) {
    formErrors.city = 'Le nom de la ville fait plus de 80 caractères';
  }

  if (!values.zip_code) {
    formErrors.zip_code = "Vous avez besoin d'un code postale";
  } else if (!/(([0-8][0-9])|(9[0-5])|(2[ab]))[0-9]{3}/i.test(values.zip_code)) {
    formErrors.zip_code = "Le code postale n'est pas valide";
  }

  if (values.shop_category_ids.length === 0) {
    formErrors.shop_category_ids = 'Votre boutique doit appartenir à une catégorie !'
  } else if (values.shop_category_ids.length > 3) {
    formErrors.shop_category_ids = 'Votre boutique ne peut pas avoir plus de trois catégories !'
  }

  return formErrors;
};

export default validation_shop_form;
