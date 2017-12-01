import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS } from '../actions/types';

const INITIAL_STATE = { email: '', password: '', user: '' };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'login_user':
      return { ...state, loading: true, error: '' };
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case LOGIN_USER_SUCCESS:
      return { ...state, loading: false, user: action.payload, error: '' };
    case 'login_user_fail':
      return { ...state, loading: false, error: 'Authentication failed', password: '' };
    default:
      return state;
  }
};
