import { Essential } from '@/common/domain/essential/Essential';
import EssentialsInMemory from '@/common/secondary/essentials/EssentialsInMemory';
import { describe, it, expect } from 'vitest';

describe('EssentialsInMemory', () => {
  it('should list Essentials', async () => {
    const essentials = new EssentialsInMemory();
    const essentialsList = await essentials.list();
    expect(essentialsList).toEqual<Essential[]>([
      {
        code: 'conditioner',
        type: 'Conditioner',
      },
      {
        code: 'mouthwash',
        type: 'Mouthwash',
      },
    ]);
  });
});
