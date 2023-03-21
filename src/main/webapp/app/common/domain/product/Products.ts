import { Product } from './Product';

export interface Products {
  list(): Promise<Product[]>;
}
