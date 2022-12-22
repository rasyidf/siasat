import { Login } from '../components/modules/auth/Login';
import { ForgotPassword } from '../components/modules/auth/ForgotPassword';
import { Register } from '../components/modules/auth/Register';
import { ResetPassword } from '../components/modules/auth/ResetPassword';
import { Navigate } from '@tanstack/react-location';

export const AuthRoutes = [
  {
    path: "login",
    element: <Login />
  },
  {
    path: "register",
    element: <Register />
  },
  {
    path: "forgot-password",
    element: <ForgotPassword />
  },
  {
    path: "reset-password",
    element: <ResetPassword />
  },
  {
    element: <Navigate to="/auth/login" />,
  }
];
