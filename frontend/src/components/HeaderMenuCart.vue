<template>
  <div class="cart-menu" @mouseover="enableMenu = true" @mouseleave="enableMenu = false">
    <a :href="loggedIn ? '/cart' : '/login'" @click="redirectLogin">
      <i class="header-link fa-solid fa-cart-shopping"></i>
      <span class="cart-number" v-if="loggedIn">{{ quantityInCart }}</span>
    </a>
    <div class="dropdown-menu" v-if="loggedIn && enableMenu">
      <div class="cart-menu-content">
        <h2>Chi tiết giỏ hàng</h2>
        <ul class="cart-menu-products">
          <li v-if="quantityInCart === 0">
            <h3 style="color: rgb(211, 59, 51); margin-left: 10px;">Giỏ hàng của bạn đang trống</h3>
          </li>
          <li v-for="product in products" :key="product.id">
            <div class="row">
              <div class="cart-menu-thumb-ctn">
                <a :href="'/product/' + product.id">
                  <img :src="product.thumbnail" alt="">
                </a>
              </div>
              <div class="cart-menu-name-ctn">
                <a :href="'/product/' + product.id">
                  <span>{{ product.name }}</span>
                </a>
              </div>
              <div class="cart-menu-price-ctn">
                <span>{{ formatPrice(product.price) }}</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="cart-menu-bottom row">
        <a class="view-cart-btn" href="/cart">Xem giỏ hàng</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useAuthenticationStore } from '../store/AuthenticationStore';
import { useCartStore } from '../store/CartStore';
import CartService from '../services/CartService';

const AuthenticationStore = useAuthenticationStore();
const CartStore = useCartStore();
const enableMenu = ref(false);

const loggedIn = computed(() => AuthenticationStore.userLoggedIn);
const products = computed(() => CartStore.getProducts);
const quantityInCart = computed(() => CartStore.getQuantityInCart);

const redirectLogin = () => loggedIn ? false : true;
const formatPrice = (price: number) => {
  return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(price)
};

CartService.getProductsInCartMenu(AuthenticationStore.getAccessToken)
  .then((response) => {
    const results = response.data.results;
    const products = results.map((product: any) => {
      return {
        id: product.product_id,
        name: product.name,
        price: product.price,
        thumbnail: product.thumbnail,
        quantityInCart: product.quantity,
        quantityInStock: product.max_quantity,
        sizeId: product.size_id,
        size: product.text
      }
    });
    CartStore.initializeCart(products);
  })
  .catch((error) => {
    console.log(error);
  });
</script>

<style scoped>
.cart-menu {
  margin-right: 30px;
  padding: 40px 0;
}

.cart-menu a {
  position: relative;
}

.cart-number {
  position: absolute;
  bottom: 10px;
}

.dropdown-menu {
  right: 0;
}

.cart-menu-content h2 {
  margin: 0 0 20px 20px;
}

.cart-menu-products {
  max-height: 400px;
  margin: 0 20px 20px 20px;
  overflow-y: auto;
}

.cart-menu-products .row div:not(:last-child) {
  margin-right: 10px;
}

.cart-menu-thumb-ctn img {
  width: 70px;
  height: 70px;
}

.cart-menu-name-ctn {
  max-width: 200px;
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.cart-menu-name-ctn span:hover {
  color: #d33b33;
}

.cart-menu-price-ctn {
  color: #d33b33;
  margin-left: auto;
}

.cart-menu-bottom {
  justify-content: space-between;
  margin-bottom: 10px;
}

.view-cart-btn {
  background-color: black;
  color: white;
  margin-left: auto;
  margin-right: 20px;
  padding: 10px;
}

.view-cart-btn:hover {
  background-color: #d33b33;
}
</style>
