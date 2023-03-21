import { createBrowserRouter } from 'react-router-dom';
import Homepage from '@/common/primary/homepage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
  },
]);

export default router;
