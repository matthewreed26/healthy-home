import { Essential } from '@/common/domain/essential/Essential';
import { Essentials } from '@/common/domain/essential/Essentials';

export default class EssentialsInMemory implements Essentials {
  async list(): Promise<Essential[]> {
    return [
      { code: 'conditioner', type: 'Conditioner' },
      { code: 'mouthwash', type: 'Mouthwash' },
    ];
  }
}
