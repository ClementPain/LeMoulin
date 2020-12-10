import {
  AUTH_REQUEST, AUTH_SUCCESS, AUTH_FAILED, DEAUTH_REQUEST, ERASE_ERRORS,
} from './authTypes';

const initialState = {
  ongoing: false,
  isAuthenticated: false,
  currentUserId: null,
  errors: '',
};

const authReducer = (state = initialState, { type, currentUserId, errors }) => {
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
        currentUserId,
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
        currentUserId: null,
      };
    case ERASE_ERRORS:
      return {
        ...state,
        errors: '',
      };
    default: return state;
  }
};

export default authReducer;
