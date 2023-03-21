import { ProductStatus } from '@/common/domain/product/ProductStatus';
import { Currency } from '@/common/domain/purchase/Currency';
import { Purchase } from '@/common/domain/purchase/purchase';
import { Purchases } from '@/common/domain/purchase/Purchases';

export class PurchasesInMemory implements Purchases {
  async list(): Promise<Purchase[]> {
    return [
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
    ];
  }
}
