import axios from "axios";


const setAuthorizationToken = (token) => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
}
export const userSigninRequest = (userData) => {
  return dispatch => {
    return axios.post('/api/signin', userData).then(res=>{
      const token =res.data.token;
      localStorage.setItem('jwtToken', token);
      setAuthorizationToken(token);
    }
    );
  }
};