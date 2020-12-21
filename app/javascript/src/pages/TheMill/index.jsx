/* eslint-disable no-param-reassign */
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import Cookie from 'js-cookie';

import Routes from '../../routes';
import NavBar from '../../components/Navbar';
import Footer from '../../components/Footer';

import CartGlobalQuantityContext from './context';
import { authSuccess } from '../../redux-config';
import { authCookieHandler } from '../../tools';

const { getAuthCookie } = authCookieHandler;

const TheMill = () => {
  const dispatch = useDispatch();
  const [cartGlobalQuantity, setCartGlobalQuantity] = useState(0);

  const authUserIfAuthCookieExist = () => {
    const authCookie = getAuthCookie();
    if (authCookie) dispatch(authSuccess(authCookie.currentUserId));
  };

  const computeCartGlobalQuantity = () => {
    const flatCartCookie = (cookie) => {
      const toArrayOfArrays = (arrayOfObjects) => {
        arrayOfObjects.forEach((el) => {
          if (typeof el[1] === 'object') {
            el[1] = Object.entries(el[1]);
            toArrayOfArrays(el[1]);
          }
        });

        return arrayOfObjects;
      };

      return toArrayOfArrays(Object.entries(cookie));
    };

    const somme = (ary) => ary.reduce((acc, el) => (typeof el[1] === 'number' ? acc + el[1] : acc + somme(el[1])), 0);

    const cartCookie = Cookie.get('cart') ? JSON.parse(Cookie.get('cart')) : null;

    if (cartCookie) {
      setCartGlobalQuantity(somme(flatCartCookie(cartCookie)));
    } else {
      setCartGlobalQuantity(0);
    }
  };

  useEffect(
    () => {
      authUserIfAuthCookieExist();
      computeCartGlobalQuantity();
    },
    [],
  );

  return (
    <CartGlobalQuantityContext.Provider value={{
      cartGlobalQuantity,
      computeCartGlobalQuantity,
    }}
    >
      <NavBar />
      <Routes />
      <Footer />
    </CartGlobalQuantityContext.Provider>
  );
};

export default TheMill;
