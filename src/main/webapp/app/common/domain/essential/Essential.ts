import { Product } from '../product/Product';
import { Purchases } from '../purchase/Purchases';

export interface Essential {
  code: string;
  type: string;
  assignee?: string;
  products?: Product[];
  purchases?: Purchases[];
}
