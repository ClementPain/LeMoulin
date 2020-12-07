import {
  AUTH_REQUEST, AUTH_SUCCESS, AUTH_FAILED, DEAUTH,
} from './authTypes';

import apiManager from '../../api/apiManager';
import { authCookieHandler } from '../../tools';

const { setAuthCookie, removeAuthCookie } = authCookieHandler;

const authRequested = () => ({
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

const deauth = () => ({
  type: DEAUTH,
});

const handleAuth = (type, identifiers) => (dispatch) => {
  dispatch(authRequested());
  apiManager.auth(type, identifiers)
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
  apiManager.deauth();
  dispatch(deauth());
  removeAuthCookie();
};

export { handleAuth, authSuccess, handleDeauth };
