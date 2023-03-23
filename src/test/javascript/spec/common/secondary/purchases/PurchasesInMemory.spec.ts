import { ProductStatus } from '@/common/domain/product/ProductStatus';
import { Currency } from '@/common/domain/purchase/Currency';
import { Purchase } from '@/common/domain/purchase/Purchase';
import { PurchasesInMemory } from '@/common/secondary/purchases/PurchasesInMemory';
import { describe, it, expect } from 'vitest';

describe('PurchasesInMemory', () => {
  it('should list Purchases', async () => {
    const purchasesInMemory = new PurchasesInMemory();
    const purchasesList = await purchasesInMemory.list();
    expect(purchasesList).toEqual<Purchase[]>([
      {
        quantity: 1,
        products: [
          {
            name: 'ACT',
            type: 'Mouthwash',
            status: ProductStatus.Full,
            statusTimestamp: new Date('02-20-2023').toISOString(),
            stores: ['CVS', 'Amazon'],
          },
        ],
        amount: 8.5,
        currency: Currency.USD,
        store: 'CVS',
        timestamp: new Date('02-21-2023').toISOString(),
        assignee: 'Matt',
      },
    ]);
  });
});
