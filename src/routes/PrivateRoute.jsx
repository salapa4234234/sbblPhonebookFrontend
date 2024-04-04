import { Outlet, Navigate } from "react-router-dom";

import storage from "../utils/storage";
const PrivateRoutes = () => {
  const token = storage.getToken();
  return token ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
