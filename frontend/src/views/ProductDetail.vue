<template>
  <h1>product</h1>
  <h2>{{ id }}</h2>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ProductService from '../services/ProductService';

interface Size {
  id: number;
  size: string;
  quantityOfProducts: number;
}

interface PreviewImage {
  url: string;
}

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  sold: number;
  rating: number;
  quantityOfRating: number;
  sizes: Size[];
  thumbnail: string;
  previewImages: PreviewImage[];
}

export default defineComponent({
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      product: {} as Product
    }
  },
  created() {
    ProductService.getProductById(this.id)
      .then((response) => {
        let pr = response.data.product;
        this.product = {
          id: pr.product_id,
          name: pr.name,
          description: pr.description,
          price: pr.price,
          sold: pr.sold,
          rating: pr.rating,
          quantityOfRating: pr.quantity_of_rating,
          sizes: JSON.parse(pr.sizes).map((e: any) => {
            return {
              id: e.sizeId,
              size: e.size,
              quantityOfProducts: e.quantity
            }
          }),
          thumbnail: pr.thumbnail,
          previewImages: (pr.urls === null ? [] : JSON.parse(pr.urls))
        };
        console.log(this.product);
      })
      .catch((error) => {
        console.log(error);
      });
  }
})
</script>
