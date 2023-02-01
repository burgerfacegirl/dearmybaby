import { createBrowserRouter } from 'react-router-dom';
import App from '@/App';
import Home from '@/pages/home';
import Plan, { PlanForm, FindCity } from '@/pages/plan';
import Record from '@/pages/record';
import Album from '@/pages/album';
import User from '@/pages/user';

const router = createBrowserRouter([
  {
    element: <App></App>,
    path: '/',
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: 'plan',
        element: <Plan></Plan>,
        children: [
          {
            index: true,
            element: <PlanForm></PlanForm>,
          },
          {
            path: 'find-city',
            element: <FindCity></FindCity>,
          },
        ],
      },
      {
        path: 'record',
        element: <Record></Record>,
      },
      {
        path: 'album',
        element: <Album></Album>,
      },
      {
        path: 'user',
        element: <User></User>,
      },
    ],
  },
]);

export default router;
