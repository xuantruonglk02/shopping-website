<template>
  <div class="product-ctn">
    <div class="product-thumb-ctn">
      <router-link :to="{ name: 'Product', params: { id: productTag?.id } }">
        <img :src="productTag?.thumbnail" :alt="productTag?.name">
      </router-link>
    </div>
    <div class="product-text-ctn">
      <div class="product-name-ctn">
        <router-link :to="{ name: 'Product', params: { id: productTag?.id } }">
          <p>{{ productTag?.name }}</p>
        </router-link>
      </div>
      <div class="product-price-ctn">
        <span>{{ formatPrice(productTag?.price || 0) }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type ProductTag from '../models/ProductTag';

const props = defineProps({
  productTag: Object as () => ProductTag
});

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(price);
}
</script>

<style scoped>
.product-ctn {
  width: min-content;
  margin: 15px 20px 15px 20px;
}

.product-thumb-ctn img {
  width: 260px;
  transition: all 0.3s ease;
}

.product-thumb-ctn img:hover {
  transform: translateY(-20px);
}

.product-text-ctn {
  background-color: rgb(236, 236, 236);;
  text-align: center;
  margin-top: -4px;
  padding: 10px;
}

.product-name-ctn {
  font-size: 18px;
}

.product-price-ctn {
  color: red;
  font-size: 17px;
  font-weight: bold;
  margin-top: 5px;
}
</style>
