import { Outlet, Navigate } from "react-router-dom";

export default function AuthRequired() {
  const authenticate = true;

  if (!authenticate) {
    return <Navigate to="login" />;
  }
  return <Outlet />;
}
