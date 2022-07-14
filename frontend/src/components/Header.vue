<template>
  <header class="row">
    <div class="header-logo">
      <router-link :to="{ name: 'Home' }">
        <img src="../assets/logo.png" alt="">
      </router-link>
    </div>
    <div class="header-nav">
      <ul class="row">
        <li class="header-nav-item">
          <router-link :to="{ name: 'Home' }" class="header-link">Home</router-link>
        </li>
        <li class="header-nav-item">
          <router-link :to="{ name: 'About' }" class="header-link">About</router-link>
        </li>
        <HeaderCategories />
      </ul>
    </div>
    <HeaderSearch />
    <div class="header-icons row">
      <CartMenu />
      <UserMenu />
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeaderCategories from './HeaderCategories.vue';
import HeaderSearch from './HeaderSearch.vue';
import CartMenu from './CartMenu.vue';
import UserMenu from './UserMenu.vue';

export default defineComponent({
  components: {
    HeaderCategories,
    HeaderSearch,
    CartMenu,
    UserMenu
  }
})
</script>

<style scoped>
header {
  background-color: white;
  user-select: none;
}

.header-logo {
  margin: 10px 70px;
}

.header-logo img {
  height: 80px;
}

:deep(.header-nav-item) {
  margin: 0 20px;
  padding: 40px 0;
}

:deep(.header-search) {
  width: 30%;
  margin-left: auto;
}

.header-icons {
  margin-left: 50px;
}

:deep(.header-link) {
  font-size: 20px;
  font-weight: 600;
}

:deep(.header-link):hover {
  color: #d33b33;
}

:deep(.dropdown-menu) {
  width: max-content;
  background-color: white;
  z-index: 999999;
  position: absolute;
  border: 1px solid rgb(224, 224, 224);
  margin: 30px 0 0 0;
  animation-duration: 500ms;
  -webkit-animation-name: fadeInDown;
  animation-name: fadeInDown;
}
</style>
