import axios from "axios";
import setAuthorizationToken from '../utils/setAuthorizationToken';
import {SET_CURRENT_USER} from '../constants';
import jwtDecode from 'jwt-decode';



export const setCurrentUser = (user) => {
  return {
    type: SET_CURRENT_USER,
    user
  }
};


export const logout = () => {
  return dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthorizationToken(false);
    dispatch(setCurrentUser({}));
  }
}
export const userSigninRequest = (userData) => {
  return dispatch => {
     return axios.post('/api/signin', userData)
  }
};