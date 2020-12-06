import Cookies from 'js-cookie';

const setAuthCookie = (key, value) => {
  const authCookie = {
    ...(getAuthCookie() || {}),
    [key]: value,
  };

  Cookies.set('authCookie', JSON.stringify(authCookie));
};

const getAuthCookie = () => {
  const authCookie = Cookies.get('authCookie');
  if (authCookie) { return JSON.parse(authCookie); }
  return null;
};

const removeAuthCookie = () => Cookies.remove('authCookie');

const authCookieHandler = {
  setAuthCookie,
  getAuthCookie,
  removeAuthCookie,
};

export default authCookieHandler;
