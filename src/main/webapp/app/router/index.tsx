import { createBrowserRouter } from 'react-router-dom';
import Homepage from '@/common/primary/homepage';
import EssentialsView from '@/common/primary/essentials';
import CanvasCube from '@/common/primary/three-cube';
import CanvasPoints from '@/common/primary/three-points';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
  },
  {
    path: '/essentials',
    element: <EssentialsView />,
  },
  {
    path: '/three-cube',
    element: <CanvasCube />,
  },
  {
    path: '/three-points',
    element: <CanvasPoints />,
  },
]);

export default Router;
