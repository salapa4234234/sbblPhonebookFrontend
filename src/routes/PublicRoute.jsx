import { Outlet, Navigate } from "react-router-dom";
import storage from "../utils/storage";

const PublicRoute = () => {
  const token = storage.getToken();
  return !token ? <Outlet /> : <Navigate to="/contacts" />;
};

export default PublicRoute;
