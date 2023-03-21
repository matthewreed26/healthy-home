import { ProductStatus } from './ProductStatus';

export interface Product {
  name: string;
  type: string;
  status: ProductStatus;
  statusTimestamp: string;
  favorite?: boolean;
  impression?: string[];
  perspectives?: string[];
  links?: string[];
  stores: string[];
}
