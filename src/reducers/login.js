import { SET_CURRENT_USER,SET_CURRENT_PERMISSION } from '../constants';
import isEmpty from 'lodash/isEmpty';

const initialState = {
  isAuthenticated: false,
  permission: {},
  username: {}
}

const login = (state = initialState, action = {}) => {
  switch(action.type) {
    case SET_CURRENT_USER:
      return {
        isAuthenticated: !isEmpty(action.username),
        username: action.username
      }
    case SET_CURRENT_PERMISSION:
      return {
        ...state,
        permission:action.permission
      }
    default: return state;
  }
}
export default login;