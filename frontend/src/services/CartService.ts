import apiClient, { authHeaders } from "./index";

export default {
  getProductsInCartMenu() {
    return apiClient.post('/cart/all', {}, {
      headers: authHeaders()
    });
  },
  addToCart(product: { productId: string, sizeId: number, quantity: number }) {
    return apiClient.post('/cart/add', {
      productId: product.productId,
      sizeId: product.sizeId,
      quantity: product.quantity
    }, {
      headers: authHeaders()
    });
  }
}
