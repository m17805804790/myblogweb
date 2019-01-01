import axios from "axios";
import setAuthorizationToken from '../utils/setAuthorizationToken';
import {SET_CURRENT_USER,SET_CURRENT_PERMISSION} from '../constants';




export const setCurrentUser = (username) => {
  return {
    type: SET_CURRENT_USER,
    username
  }
};
export const setCurrentPermission = (permission) => {
  return {
    type: SET_CURRENT_PERMISSION,
    permission
  }
};

export const logout = () => {
  return dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthorizationToken(false);
    dispatch(setCurrentUser({}));
  }
}
export const login = (userData) => {
  return dispatch => {
     return axios.post('/api/login', userData)
  }
};
