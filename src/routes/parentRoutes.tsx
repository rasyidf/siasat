import { Route } from '@tanstack/react-location';
import { Help } from '../components/modules/app/Help';
import { Home } from '../components/modules/app/Home';
import { MyStudent } from '../components/modules/app/MyStudent';
import { Notifications } from '../components/modules/app/Notifications';
import { Payments } from '../components/modules/app/Payments';

export const parentRoutes: Route[] = [
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/my-student",
    element: <MyStudent />
  },
  {
    path: "/payments",
    element: <Payments />
  },
  {
    path: "/notifications",
    element: <Notifications />
  },
  {
    path: "/help",
    element: <Help />
  }
];
