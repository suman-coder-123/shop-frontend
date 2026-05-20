import { Navigate } from "react-router-dom";

import { useSelector } from "react-redux";

function ProtectedRoute({ children, admin }) {

  const { userInfo } = useSelector(
    (state) => state.auth
  );



  // NOT LOGGED IN
  if (!userInfo) {
    return <Navigate to="/login" />;
  }



  // ADMIN CHECK
  if (admin && userInfo.user.role !== "admin") {
    return <Navigate to="/" />;
  }



  return children;
}

export default ProtectedRoute;