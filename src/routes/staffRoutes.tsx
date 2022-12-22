import { Route } from '@tanstack/react-location';
import { Help } from '../components/modules/app/Help';
import { Home } from '../components/modules/app/Home';
import { Events as Events } from '../components/modules/app/Communication';
import { Notifications } from '../components/modules/app/Notifications';
import { Payments } from '../components/modules/app/Payments';
import { RoomAssignment } from '../components/modules/app/RoomAssignment';
import { Schedule } from '../components/modules/app/Schedule';

export const staffRoutes: Route[] = [
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/room-assignment",
    element: <RoomAssignment />
  },
  {
    path: "/payments",
    element: <Payments />
  },
  {
    path: "/events",
    element: <Events />
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
