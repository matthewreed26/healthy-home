import { Purchase } from './Purchase';

export interface Purchases {
  list(): Promise<Purchase[]>;
}
