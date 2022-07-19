import { defineStore } from "pinia";
import type ProductCart from '../models/ProductCart';

export const useCartStore = defineStore('CartStore', {
  state() {
    return {
      products: [] as ProductCart[]
    }
  },
  getters: {
    getProducts: (state) => state.products,
    getQuantityInCart: (state) => state.products.length
  },
  actions: {
    initializeCart(productList: ProductCart[]) {
      this.products = JSON.parse(JSON.stringify(productList));
    },
    addToCart(product: ProductCart) {
      this.products.push(product);
    },
    removeFromCart(productId: string) {
      const index = this.products.findIndex(product => product.id === productId);
      this.products.splice(index, index);
    },
    updateProductInCart(newProduct: ProductCart) {
      const index = this.products.findIndex(product => product.id === newProduct.id);
      this.products[index] = { ...newProduct };
    }
  }
});
