import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:8080',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

export const authHeaders = () => {
  let user = JSON.parse(localStorage.getItem('user') || '{}');
  return {
    'x-access-token': user.accessToken
  }
}

export default apiClient;
