import apiClient from './index';

export default {
  login(username: string, password: string) {
    return apiClient.post('/auth/login', {
      username: username,
      password: password
    });
  }
}
