import { defineStore } from 'pinia';

const user = JSON.parse(localStorage.getItem('user') || '{}');
const initialState = (JSON.stringify(user) === JSON.stringify({})
  ? { status: {}, user: {} }
  : { status: { loggedIn: true }, user });

export const useAuthenticationStore = defineStore('AuthenticationStore', {
  state() {
    return {
      status: initialState.status,
      user: initialState.user
    }
  },
  getters: {
    userLoggedIn: (state) => state.status.loggedIn,
    getAccessToken: (state) => state.user?.accessToken
  },
  actions: {
    setUserData(data: { accessToken: String }) {
      this.status = { loggedIn: true };
      this.user = { accessToken: data.accessToken }
      localStorage.setItem('user', JSON.stringify(this.user));
    },
    deleteUserData() {
      this.status = {};
      this.user = {};
      localStorage.removeItem('user');
    }
  }
});
