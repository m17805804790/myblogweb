import axios from "axios";
import setAuthorizationToken from '../utils/setAuthorizationToken';
import {SET_CURRENT_USER} from '../constants';
import jwtDecode from 'jwt-decode'
export const setCurrentUser = (user) => {
  return {
    type: SET_CURRENT_USER,
    user
  }
};
export const userSigninRequest = (userData) => {
  return dispatch => {
    return axios.post('/api/signin', userData).then(res=>{
      const token =res.data.token;
      localStorage.setItem('jwtToken', token);
      setAuthorizationToken(token);
      dispatch(setCurrentUser(jwtDecode(token)))
    }
    );
  }
};