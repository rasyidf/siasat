import { Navigate, Route } from '@tanstack/react-location';
import { AuthLayout } from '../components/layouts/AuthLayout';
import { MainLayout } from '../components/layouts/MainLayout';
import { AuthRoutes } from './AuthRoutes';
import { parentRoutes } from './parentRoutes';
import { staffRoutes } from './staffRoutes';
import { studentRoutes } from './studentRoutes';

export const routes: Route[] = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: "staff",
        children: staffRoutes,
      },
      {
        path: "parent",
        children: parentRoutes,
      },
      {
        path: "student",
        children: studentRoutes,
      },
      {
        element: <Navigate to="/student" />,
      }
    ],
  },
  {
    path: 'auth',
    element: <AuthLayout />,
    children: AuthRoutes
  },
  {
    element: <Navigate to="auth/login" />,
  }
];

export default routes;