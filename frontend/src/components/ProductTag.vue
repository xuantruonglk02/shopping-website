<template>
  <div class="product-ctn">
    <div class="product-thumb-ctn">
      <a :href="'/product/' + productTag?.id">
        <img :src="productTag?.thumbnail" :alt="productTag?.name">
      </a>
    </div>
    <div class="product-text-ctn">
      <div class="product-name-ctn">
        <a :href="'/product/' + productTag?.id"><p>{{ productTag?.name }}</p></a>
      </div>
      <div class="product-price-ctn">
        <span>{{ productTag?.price }}&nbsp;₫</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type ProductTag from '../models/ProductTag';

export default defineComponent({
  props: {
    productTag: {
      type: Object as () => ProductTag
    }
  }
})
</script>

<style scoped>
.product-ctn {
  width: min-content;
  margin: 15px 30px 15px 30px;
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
