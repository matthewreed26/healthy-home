import { Essential } from './Essential';

export interface Essentials {
  list(): Promise<Essential[]>;
}
