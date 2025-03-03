export interface Product {
  id: number;
  name: string;
  brand: string;
  image: string;
  originalPrice: number;
  salePrice?: number;
  rating: number;
  reviewCount: number;
  stockStatus: 'In Stock' | 'Low Stock' | 'Out of Stock';
  onSale: boolean;
  discountPercentage?: number;
  saleEndsIn?: string;
  bestSeller: boolean;
  newArrival: boolean;
}