import { authCookieHandler } from '../tools';

const { setAuthCookie, getAuthCookie } = authCookieHandler;

const root = '/api/v1';

const urls = {
  signup: '/signup',
  login: '/login',
}

const auth = (type, identifiers) => 
  fetch(`${root}${urls[type]}`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user: identifiers }),
  })
    .then((response) => {
      const token = response.headers.get('Authorization');
      if (token)
        setAuthCookie('token', token.split('Bearer ').pop());
      return response.json()
  });

const deauth = () =>
  fetch(`${root}/logout`, {
    method: 'delete',
    headers: {
      Authorization: `Bearer ${getAuthCookie().token}`,
      'Content-Type': 'application/json',
    },
  })

const API = {
  auth,
  deauth,
};

export default API;
