import axios from "axios";

export const setAuthorizationToken = (token) => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
}
export const setWarframeToken = (token) => {
  if (token) {
    axios.defaults.headers.common['access_token'] = `${token}`;
  } else {
    delete axios.defaults.headers.common['access_token'];
  }
}

export default setAuthorizationToken;