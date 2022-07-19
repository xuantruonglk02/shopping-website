<template>
  <div class="user-menu" @mouseover="enableMenu = true" @mouseleave="enableMenu = false">
    <a :href="loggedIn ? '#' : '/login'" @click="redirectLogin">
      <i class="header-link fa-solid fa-circle-user"></i>
    </a>
    <div class="dropdown-menu" v-if="loggedIn && enableMenu">
      <div class="account-menu-row">
        <a href="/user/account"><div>Thông tin tài khoản</div></a>
      </div>
      <div class="account-menu-row">
        <a href="/user/orders"><div>Đơn hàng đã đặt</div></a>
      </div>
      <div class="account-menu-row">
        <a href="#" @click.prevent="logout"><div>Đăng xuất</div></a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useAuthenticationStore } from '../store/AuthenticationStore';
import router from '../router/routes';

const AuthenticationStore = useAuthenticationStore();
const enableMenu = ref(false);

const loggedIn = computed(() => AuthenticationStore.userLoggedIn);

const redirectLogin = () => loggedIn ? false : true;
const logout = () => {
  AuthenticationStore.deleteUserData();
  router.push('/');
}
</script>

<style scoped>
.user-menu {
  margin-right: 50px;
  padding: 40px 0;
}

.dropdown-menu {
  right: 0;
}

.account-menu-row:not(:first-of-type) {
  border-top: 1px solid rgb(224, 224, 224);
}

.account-menu-row div {
  font-size: 20px;
  padding: 10px 20px 10px 20px;
}

.account-menu-row div:hover {
  background-color: #f5f5f5;
  color: #d33b33;
}
</style>
