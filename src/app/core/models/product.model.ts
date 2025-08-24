export interface Product {
  id: string;
  name: string;
  price: number;          // public price (user ko‘radi)
  imageUrl: string;
  category: 'cake' | 'dessert' | 'cookie' | 'other';
  shortDesc: string;
  available?: boolean;
}
