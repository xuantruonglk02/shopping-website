import apiClient from './index';

export default {
  getNewProducts(args: object) {
    return apiClient.post('/product/new', args);
  },
  getProductById(id: string) {
    return apiClient.get(`/product/${id}`);
  }
}
