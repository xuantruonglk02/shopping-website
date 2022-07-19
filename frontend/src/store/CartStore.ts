import { defineStore } from "pinia";
import type ProductTag from '../models/ProductTag';

export const useCartStore = defineStore('CartStore', {
  state() {
    return {
      products: [] as ProductTag[]
    }
  },
  getters: {
    getProducts: (state) => state.products,
    getQuantityInCart: (state) => state.products.length
  },
  actions: {
    initializeCart(productList: ProductTag[]) {
      this.products = JSON.parse(JSON.stringify(productList));
    },
    addToCart(product: ProductTag) {
      this.products.push(product);
    },
    removeFromCart(productId: string) {
      const index = this.products.findIndex(product => product.id === productId);
      this.products.splice(index, index);
    }
  }
});
