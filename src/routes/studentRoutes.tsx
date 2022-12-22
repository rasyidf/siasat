import { Route } from '@tanstack/react-location';
import { Help } from '../components/modules/app/Help';
import { Home } from '../components/modules/app/Home';
import { MyRoom } from '../components/modules/app/MyRoom';
import { Notifications } from '../components/modules/app/Notifications';
import { Payments } from '../components/modules/app/Payments';
import { Schedule } from '../components/modules/app/Schedule';

export const studentRoutes: Route[] = [
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/my-room",
    element: <MyRoom />
  },
  {
    path: "/payments",
    element: <Payments />
  },
  {
    path: "/schedule",
    element: <Schedule />
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
