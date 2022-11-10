import React, { useContext } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Authentication/Authentication";

const PrivateRouter = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  // const navigate = useNavigate();

  if (loading) {
    return (
      <div
        class="spinner-grow inline-block w-12 h-12 bg-current rounded-full opacity-0"
        role="status"
      >
        <span class="visually-hidden">Loading...</span>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
  return children;
};

export default PrivateRouter;
