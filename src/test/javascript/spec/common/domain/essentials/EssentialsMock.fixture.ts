import { Mock, vi } from 'vitest';

import { Essentials } from '@/common/domain/essential/Essentials';

interface EssentialsMock extends Essentials {
  list: Mock;
}

export const mockEssentials = (): EssentialsMock => ({
  list: vi.fn(),
});
