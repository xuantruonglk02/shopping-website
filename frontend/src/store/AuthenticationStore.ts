import { defineStore } from 'pinia';

const user = JSON.parse(localStorage.getItem('user') || '{}');
const initialState = user
  ? { status: { loggedIn: true }, user }
  : { status: {}, user: null };

export const useAuthenticationStore = defineStore('AuthenticationStore', {
  
});
