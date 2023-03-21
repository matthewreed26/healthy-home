import { Product } from '@/common/domain/product/Product';
import { ProductStatus } from '@/common/domain/product/ProductStatus';
import { ProductsInMemory } from '@/common/secondary/products/ProductsInMemory';
import { describe, it, expect } from 'vitest';

describe('ProductsInMemory', () => {
  it('should list Products', async () => {
    const productsInMemory = new ProductsInMemory();
    const productsList = await productsInMemory.list();
    expect(productsList).toEqual<Product[]>([
      {
        name: 'ACT',
        type: 'Mouthwash',
        status: ProductStatus.Full,
        statusTimestamp: new Date('02-20-2023').toISOString(),
        stores: ['CVS', 'Amazon'],
      },
    ]);
  });
});
