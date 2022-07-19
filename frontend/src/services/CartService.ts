import apiClient from "./index";

export default {
  getProductsInCartMenu(accessToken: string) {
    return apiClient.post('/cart/all', {}, {
      headers: {
        'x-access-token': accessToken
      }
    });
  }
}
