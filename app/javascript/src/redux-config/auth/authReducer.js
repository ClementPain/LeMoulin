import {
  AUTH_REQUEST, AUTH_SUCCESS, AUTH_FAILED, DEAUTH_REQUEST, ERASE_ERRORS
} from './authTypes';

const initialState = {
  ongoing: false,
  isAuthenticated: false,
  id: null,
  errors: '',
};

const authReducer = (state = initialState, { type, id, errors }) => {
  switch (type) {
    case AUTH_REQUEST:
      return {
        ...state,
        ongoing: true,
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        ongoing: false,
        isAuthenticated: true,
        id,
        errors: '',
      };
    case AUTH_FAILED:
      return {
        ...state,
        ongoing: false,
        errors,
      };
    case DEAUTH_REQUEST: 
      return {
        ...state,
        isAuthenticated: false,
        id: null,
      };
    case ERASE_ERRORS:
      return {
        ...state,
        errors: '',
      }
    default: return state;
  }
};

export default authReducer;