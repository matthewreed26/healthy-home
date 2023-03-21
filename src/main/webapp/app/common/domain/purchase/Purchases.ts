import { Purchase } from './purchase';

export interface Purchases {
  list(): Promise<Purchase[]>;
}
