import { describe, it, expect } from 'vitest';

import EssentialsView from '@/common/primary/essentials/index';
import { render, waitFor } from '@testing-library/react';
import { mockEssentials } from '../../domain/essentials/EssentialsMock.fixture';

const mockedEssentials = mockEssentials();
mockedEssentials.list.mockResolvedValue([{ code: 'paper-towels', type: 'Paper Towels' }]);

//hoisted so cannot be abstracted
vi.mock('react', async () => ({
  ...((await vi.importActual('react')) as typeof import('react')),
  useContext: () => ({ essentials: () => mockedEssentials }),
}));

describe('EssentialsView', () => {
  it('should render', () => {
    render(<EssentialsView />);
  });

  it('should initially be loading', () => {
    const essentialsView = render(<EssentialsView />);
    const loading = essentialsView.getByTestId('loading');
    expect(loading.textContent).toBe('Loading...');
  });

  it('should load the essentials list', async () => {
    const essentialsView = render(<EssentialsView />);
    await waitFor(() => essentialsView.getByTestId('essentials-list'));
    const essentialPaperTowels = essentialsView.getByTestId('essential-paper-towels');
    expect(essentialPaperTowels.textContent).toBe('Paper Towels');
  });
});
