<template>
  <div class="cart-menu" @mouseover="enableMenu = true" @mouseleave="enableMenu = false">
    <a :href="AuthenticationStore.userLoggedIn ? '/cart' : '/login'" @click="redirectLogin">
      <i class="header-link fa-solid fa-cart-shopping"></i>
    </a>
    <div class="dropdown-menu" v-if="AuthenticationStore.userLoggedIn && enableMenu"></div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useAuthenticationStore } from '../store/AuthenticationStore';

const AuthenticationStore = useAuthenticationStore();
const enableMenu = ref(false);

const redirectLogin = () => AuthenticationStore.userLoggedIn ? false : true;
</script>

<style scoped>
.cart-menu {
  margin-right: 30px;
}

.dropdown-menu {
  right: 0;
}
</style>
