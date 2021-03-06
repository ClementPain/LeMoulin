import { create } from '../../../api/api-manager';

const handleSubmit = (data, uploadItemImage, setRedirect, shop_id, setAlert, itemImage) => {
  create('items', {
    data,
    onSuccess: (response) => {
      if (itemImage) uploadItemImage(response.id, response.shop_id, setRedirect);
      if (!itemImage) setRedirect(`/shop/${shop_id}/item/${response.id}`);
    },
    onError: (error) => setAlert(error),
    onErrors: (errors) => setAlert(errors),
  });
};

const initialValues = {
  name: '',
  description: '',
  price: 0.00,
  stock: 0,
  is_available_for_sale: true,
  image_url: '',
};

export { handleSubmit, initialValues };
