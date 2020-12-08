import {
  AUTH_REQUEST, AUTH_SUCCESS, AUTH_FAILED, DEAUTH_REQUEST,
} from './authTypes';

import { auth, deauth } from '../../api/api-manager';
import { authCookieHandler } from '../../tools';

const { setAuthCookie, removeAuthCookie } = authCookieHandler;

const authRequest = () => ({
  type: AUTH_REQUEST,
});

const authSuccess = (id) => ({
  type: AUTH_SUCCESS,
  id,
});

const authFailed = (errors) => ({
  type: AUTH_FAILED,
  errors,
});

const deauthRequest = () => ({
  type: DEAUTH_REQUEST,
});

const handleAuth = (endpoint, identifiers) => (dispatch) => {
  dispatch(authRequest());
  auth(endpoint, { identifiers })
    .then((result) => {
      if (result.errors) {
        dispatch(authFailed(
          Object.entries(result.errors[0].detail).map(([key, value]) => [key, value.join(', ')].join(' : ')).join(', ')
        ));
      } else if (result.error) {
        dispatch(authFailed(
          result.error
        ));
      } else {
        setAuthCookie('currentUserId', result.id);
        dispatch(authSuccess(result.id));
      }
    })
    .catch((error) => dispatch(authFailed(error)));
};

const handleDeauth = () => (dispatch) => {
  deauth();
  dispatch(deauthRequest());
  removeAuthCookie();
};

export { handleAuth, authSuccess, handleDeauth };
