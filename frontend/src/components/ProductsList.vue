<template>
  <div class="products-list-ctn">
    <div class="list-title">
      <h1>{{ title }}</h1>
    </div>
    <div class="list">
      <ProductTag v-for="productTag in productsList" :productTag="productTag" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ProductTag from './ProductTag.vue';
import ProductService from '../services/ProductService';
import type ProductTagItf from '@/models/ProductTag';

export default defineComponent({
  components: {
    ProductTag
  },
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      productsList: [] as ProductTagItf[]
    }
  },
  created() {
    ProductService.getNewProducts({ quantity: 20 })
      .then((response) => {
        this.productsList = response.data.results.map((e: any) => {
          return {
            id: e.product_id,
            name: e.name,
            price: e.price,
            thumbnail: e.thumbnail
          }
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
})
</script>

<style scoped>
.products-list-ctn {
  margin: 50px 200px 50px 200px;
}
.list-title {
  text-align: center;
  margin-bottom: 30px;
}

.list-title h1 {
  font-weight: bold;
}

.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>