import { Product } from '../product/Product';
import { Currency } from './Currency';

export interface Purchase {
  quantity: number;
  products: Product[];
  amount: number;
  currency: Currency;
  store: string;
  timestamp: string;
  assignee: string;
}
