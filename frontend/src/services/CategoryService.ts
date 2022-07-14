import apiClient from './index';

export default {
  getCategories() {
    return apiClient.post('/product/category/all');
  }
}
