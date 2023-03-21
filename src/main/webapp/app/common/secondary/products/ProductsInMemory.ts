import { Product } from '@/common/domain/product/Product';
import { Products } from '@/common/domain/product/Products';
import { ProductStatus } from '@/common/domain/product/ProductStatus';

export class ProductsInMemory implements Products {
  async list(): Promise<Product[]> {
    return [
      {
        name: 'ACT',
        type: 'Mouthwash',
        status: ProductStatus.Full,
        statusTimestamp: new Date('02-20-2023').toISOString(),
        stores: ['CVS', 'Amazon'],
      },
    ];
  }
}
