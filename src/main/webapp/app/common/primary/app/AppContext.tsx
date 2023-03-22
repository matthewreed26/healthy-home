import { createContext } from 'react';

import EssentialsInMemory from '@/common/secondary/essentials/EssentialsInMemory';

type Provided = () => unknown;
export type Provide = Record<string, Provided>;

export const AppProvide = {
  essentials: () => new EssentialsInMemory(),
};

const AppContext = createContext<Provide>(AppProvide);

export default AppContext;
