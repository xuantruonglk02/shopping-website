<template>
  <form @submit.prevent="onSubmit">
    <input type="email" required v-model="email" @change="validateEmail">
    <input type="password" required v-model="password" @change="validatePassword">
    <input type="submit" value="submit">
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AuthenticationService from '../services/AuthenticationService';

export default defineComponent({
  data() {
    return {
      email: '',
      password: '',
      emailError: '',
      passwordError: ''
    }
  },
  watch: {
    emailError() {
      console.log(this.emailError);
    },
    passwordError() {
      console.log(this.passwordError);
    }
  },
  methods: {
    validateEmail() {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)) {
        this.emailError = '';
      } else {
        this.emailError = 'Please enter a valid email address';
      }
    },
    validatePassword() {
      if (this.password === undefined || this.password === null || this.password === '') {
        return this.passwordError = 'Please enter password';
      }

      if (this.password.length < 8) {
        return this.passwordError = 'Please type at least 8 characters';
      }

      return this.passwordError = '';
    },
    onSubmit() {
      console.log(this.email, this.password);
      AuthenticationService.login(this.email, this.password)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
});
</script>
