import type Size from './Size';

export default interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  sold: number;
  rating: number;
  quantityOfRating: number;
  sizes: Size[];
  thumbnail: string;
  previewImages: string[];
}
