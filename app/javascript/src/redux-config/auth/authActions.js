import {
  AUTH_REQUEST, AUTH_SUCCESS, AUTH_FAILED, DEAUTH_REQUEST, ERASE_ERRORS,
} from './authTypes';

import { auth, deauth } from '../../api/api-manager';
import { authCookieHandler } from '../../tools';

const { setAuthCookie, removeAuthCookie } = authCookieHandler;

const authRequest = () => ({
  type: AUTH_REQUEST,
});

const authSuccess = (currentUserId) => ({
  type: AUTH_SUCCESS,
  currentUserId,
});

const authFailed = (errors) => ({
  type: AUTH_FAILED,
  errors,
});

const deauthRequest = () => ({
  type: DEAUTH_REQUEST,
});

const eraseErrors = () => ({
  type: ERASE_ERRORS,
});

const handleAuth = (endpoint, identifiers) => (dispatch) => {
  dispatch(authRequest());
  auth(endpoint, {
    identifiers,
    onError: (error) => {
      dispatch(authFailed({ error }));
    },
    onErrors: (errors) => {
      dispatch(authFailed({ errors: errors[0].detail }));
    },
    onSuccess: (result) => {
      setAuthCookie('currentUserId', result.id);
      dispatch(authSuccess(result.id));
    },
  })
    .catch((error) => dispatch(authFailed(error)));
};

const handleDeauth = () => (dispatch) => {
  deauth();
  dispatch(deauthRequest());
  removeAuthCookie();
};

export {
  handleAuth, authSuccess, handleDeauth, eraseErrors,
};
