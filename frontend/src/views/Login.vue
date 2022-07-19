<template>
  <form @submit.prevent="onSubmit">
    <input type="email" required v-model="email" @change="validateEmail">
    <input type="password" required v-model="password" @change="validatePassword">
    <input type="submit" value="submit">
  </form>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useAuthenticationStore } from '../store/AuthenticationStore';
import AuthenticationService from '../services/AuthenticationService';
import router from '../router/routes';

const AuthenticationStore = useAuthenticationStore();

const email = ref('');
const password = ref('');
const emailError = ref('');
const passwordError = ref('');

const validateEmail = () => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
    emailError.value = '';
  } else {
    emailError.value = 'Please enter a valid email address';
  }
};
const validatePassword = () => {
  if (password.value === undefined || password.value === null || password.value === '') {
    return passwordError.value = 'Please enter password';
  }
  if (password.value.length < 8) {
    return passwordError.value = 'Please type at least 8 characters';
  }
  return passwordError.value = '';
};
const onSubmit = async () => {
  try {
    const response = await AuthenticationService.login(email.value, password.value);
    if(!response.data.success) return;
    AuthenticationStore.setUserData(response.data);
    router.push('/');
  } catch (error) {
    throw error;
  }
};
  
watch([emailError, passwordError], ([emailError, passwordError]) => {
  console.log(emailError, passwordError);
});
</script>
